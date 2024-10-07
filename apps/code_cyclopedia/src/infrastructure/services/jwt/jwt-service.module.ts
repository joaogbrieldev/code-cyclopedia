import { ITokenizationService } from '@code_cyclopedia/domain/contracts/infra-services/tokenization.service';
import { Global, Module, Provider } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtServiceAdapter } from './jwt-service.adapter';

export const JwtServiceProvider: Provider = {
  provide: ITokenizationService,
  useClass: JwtServiceAdapter,
};

@Global()
@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('SECRET'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [JwtServiceProvider],
  exports: [JwtServiceProvider],
})
export class JwtServiceModule {}

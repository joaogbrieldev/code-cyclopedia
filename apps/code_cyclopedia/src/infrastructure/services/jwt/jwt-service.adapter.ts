import {
  ITokenizationOptions,
  ITokenizationService,
} from '@code_cyclopedia/domain/contracts/infra-services/tokenization.service';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtServiceAdapter implements ITokenizationService {
  private readonly SECRET: string;
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.SECRET = this.configService.get<string>('APP_SECRET');
  }

  async generateTemporaryToken(
    payload: Record<string, any>,
    options: ITokenizationOptions,
  ): Promise<{ token: string }> {
    const token = await this.jwtService.signAsync(payload, {
      secret: this.SECRET,
      expiresIn: options?.expiresInSeconds ?? '15m',
    });
    return { token };
  }

  async generateTokens(
    payload: Record<string, any>,
    options?: ITokenizationOptions,
  ): Promise<{ refreshToken: string; token: string }> {
    const token = await this.jwtService.signAsync(payload, {
      secret: this.SECRET,
      expiresIn: options?.expiresInSeconds ?? '12h',
    });
    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: this.SECRET,
      expiresIn: '7d',
    });
    return { refreshToken, token };
  }

  async isValidToken(token: string): Promise<boolean> {
    const result = await this.jwtService.verifyAsync(token, {
      secret: this.SECRET,
    });
    return !!result;
  }

  async decodeToken<DecodedData>(token: string): Promise<DecodedData> {
    return (await this.jwtService.verifyAsync(token, {
      secret: this.SECRET,
    })) as DecodedData;
  }
}

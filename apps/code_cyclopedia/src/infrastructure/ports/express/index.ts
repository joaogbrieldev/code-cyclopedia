import { IHttpResponse } from '@code_cyclopedia/domain/contracts/presentation/http';
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class Http implements IHttpResponse<statusCode> {
  private readonly _axios: HttpService;
  async get(path: string): Promise<IHttpResponse> {
    return this._axios.get(path);
  }
}

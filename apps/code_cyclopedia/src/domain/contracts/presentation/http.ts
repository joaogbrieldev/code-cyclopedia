import { HttpStatus } from '@nestjs/common';

export type HttpResponsePayload<T> = object | T[] | null;

export const ok = <T = any>(
  data: HttpResponsePayload<T>,
  msg?: string,
): IHttpResponse<T> => {
  return {
    statusCode: HttpStatus.OK,
    data,
    message: msg,
  };
};

export interface IHttpResponse<T = any> {
  statusCode: HttpStatus;
  message?: string;
  data?: HttpResponsePayload<T>;
  error?: Error;
}

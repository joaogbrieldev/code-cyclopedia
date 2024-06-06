import { IHttpResponse } from './http';

export abstract class IController<InputDto, OutputDto> {
  abstract handle(input: InputDto): Promise<IHttpResponse<OutputDto | Error>>;
}

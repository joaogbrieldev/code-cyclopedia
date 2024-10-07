export interface ITokenizationOptions {
  expiresInSeconds: number;
}

export abstract class ITokenizationService {
  abstract generateTemporaryToken(
    payload: Record<string, any>,
    options?: ITokenizationOptions,
  ): Promise<{ token: string }>;
  abstract generateTokens(
    payload: Record<string, any>,
    options?: ITokenizationOptions,
  ): Promise<{ token: string; refreshToken: string }>;

  abstract isValidToken(token: string): Promise<boolean>;
  abstract decodeToken<DecodedData>(token: string): Promise<DecodedData>;
}

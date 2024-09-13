export type ICreateDocumentationInput = {
  body: string;
  userId: string;
};

export abstract class ICreateDocumentationUseCase {
  abstract execute(input: ICreateDocumentationInput): Promise<void>;
}

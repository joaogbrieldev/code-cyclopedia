export type ICreateDocumentationInput = {
  body: string;
};

export abstract class ICreateDocumentationUseCase {
  abstract execute(input: ICreateDocumentationInput): Promise<void>;
}

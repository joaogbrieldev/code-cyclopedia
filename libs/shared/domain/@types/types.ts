export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type Full<T> = {
  [P in keyof T]-?: T[P];
};

export type LegalDocumentType = 'CPF' | 'RG' | 'CNPJ' | 'CNH';
export enum LegalDocumentEnum {
  CPF = 'CPF',
  RG = 'RG',
  CNPJ = 'CNPJ',
  CNH = 'CNH',
}

export type FileExtension = 'pdf' | 'txt' | 'csv' | 'xlsx' | 'doc' | 'docx';
export type ImageExtension = 'png' | 'jpg' | 'jpeg';

export type MimeType =
  | 'APPLICATION_JSON'
  | 'APPLICATION_PNG'
  | 'APPLICATION_PPT'
  | 'APPLICATION_RAR'
  | 'APPLICATION_TAR'
  | 'TEXT_PLAIN'
  | 'GIF'
  | 'IMAGE_JPEG'
  | 'IMAGE_PNG'
  | 'VIDEO_MP4'
  | 'AUDIO_MP3';

export enum MimeTypeEnum {
  APPLICATION_JSON = 'APPLICATION_JSON',
  APPLICATION_PNG = 'APPLICATION_PNG',
  APPLICATION_PPT = 'APPLICATION_PPT',
  APPLICATION_TAR = 'APPLICATION_TAR',
  APPLICATION_RAR = 'APPLICATION_RAR',
  TEXT_PLAIN = 'TEXT_PLAIN',
  GIF = 'GIF',
  IMAGE_JPEG = 'IMAGE_JPEG',
  IMAGE_PNG = 'IMAGE_PNG',
  VIDEO_MP4 = 'VIDEO_MP4',
  AUDIO_MP3 = 'AUDIO_MP3',
}

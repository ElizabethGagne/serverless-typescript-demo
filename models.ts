export interface IResponsePayload {
  statusCode: number;
  headers: any;
  body: string;
}

export interface IQueryParameters {
  foo: string;
}

export interface IEventPayload {
  method: string;
  query: IQueryParameters;
}

export interface ICallback {
  (error: any, result: IResponsePayload): void;
}
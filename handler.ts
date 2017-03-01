import { ICallback, IEventPayload } from './models';

export function hello(event: IEventPayload, context, callback: ICallback) {
  callback(undefined, {
    statusCode: 200,
    headers: {},
    body: `Go Serverless v1.0!`
  });
}
import { ICallback, IEventPayload } from './models';
import { Kinesis } from 'aws-sdk';
import { Context, Callback } from 'aws-lambda';
import * as uuid from 'uuid';

export function hello(event: IEventPayload, context, callback: ICallback) {
  callback(undefined, {
    statusCode: 200,
    headers: {},
    body: `Go Serverless v1.0!`
  });
}

export function dataReceiver(event: any, context: Context, callback: Callback) {
  console.log('Context : ' + JSON.stringify(context));

  // load AWS Kinesis
  const kinesis: Kinesis = new Kinesis();

  const data = event.data;
  const partitionKey = uuid.v1();

  const params = {
    Data: data,
    PartitionKey: partitionKey,
    StreamName: process.env.KINESIS_STREAM
  };

  console.log(`Sending to Kinesis current_time (ms): ${Date.now()}`);

  kinesis.putRecord(params).promise().then((data) => {
    callback(undefined, { message: 'Data successfully written to Kinesis stream "data-receiver"' });
  }).catch((err) => {
    callback(err, undefined);
  });

}


export function logger(event: any, context: Context, callback: Callback) {

  // print out the event information on the console (so that we can see it in the CloudWatch logs)
  console.log(`Kinesis current_time (ms): ${Date.now()}`);
  console.log(`The following data was written to the Kinesis stream "data-receiver":\n${JSON.stringify(event.Records[0].kinesis, null, 2)}`);

  callback(undefined, { event });
}
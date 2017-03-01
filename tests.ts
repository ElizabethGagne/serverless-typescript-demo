import { hello } from './handler';
import * as chai from 'chai';
const expect = chai.expect;

describe('hello function', () => {
  it('processes the query string', done => {
    const requestEvent = {
      method: 'GET',
      query: {
          foo: 'bar'
      }
    };

    hello(requestEvent, {}, (err, result) => {
      expect(err).to.be.undefined;
      /**expect(result.event).to.equal(requestEvent);*/
      /**expect(result.message).to.equal('Method: GET, Param: bar');*/
      expect(result.statusCode).to.equal(200);
      expect(result.body).to.equal('Go Serverless v1.0!');
      done();
    });
  });
});
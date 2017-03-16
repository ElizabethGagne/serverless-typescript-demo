import { hello } from './handler';
import * as chai from 'chai';
const expect = chai.expect;
import * as assert from 'power-assert';
import * as sinon from 'sinon';

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

  it('processes the query string, test with sinon', done => {
    const requestEvent = {
      method: 'GET',
      query: {
        foo: 'bar'
      }
    };

    const callback = sinon.spy();
    hello(requestEvent, {}, callback);

    assert.ok(callback.calledOnce);
    assert.equal(callback.getCall(0).args[0], null);
    assert.equal(callback.getCall(0).args[1].statusCode, 200);
    assert.equal(callback.getCall(0).args[1].body, 'Go Serverless v1.0!');

    callback.reset();
    done()
  });
});
const supertest = require('supertest');

const server = require('./server.js');

describe('server', () => {
  describe('GET /', () => {
    // asynchronous test need to either return the promise
    it('responds with 200 OK', () => {
      return supertest(server)
        .get('/friends')
        .expect(200);
    });

    // or use the squad async/await
    it('responds with 200 OK', async () => {
      await supertest(server)
        .get('/friends')
        .expect('Content-Type', /json/i);
    });

    // using done
    it('responds with correct status', done => {
      supertest(server)
        .get('/friends')
        .expect(200, done);
    });
    });
  });


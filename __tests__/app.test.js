const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { get } = require('../lib/app');
const { zodiacs } = require('../data/zodiacs');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('should return a list of zodiacs', () => {
    const res = await request(app).get('/zodiacs');
    expect(res.body).toEqual(zodiacs);
  });
  afterAll(() => {
    pool.end();
  });
});

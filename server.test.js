const request = require('supertest');
const app = require('./server');

describe('API Endpoints', () => {
  test('GET /api/hello should return a message', async () => {
    const response = await request(app).get('/api/hello');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body).toHaveProperty('timestamp');
    expect(response.body.message).toBe('Hello from the API!');
  });

  test('GET /health should return healthy status', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('healthy');
  });

  test('GET / should return the index page', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/html/);
  });
});

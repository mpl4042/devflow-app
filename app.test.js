const request = require('supertest');
const app = require('./app');

describe('Testando a Rota Básica', () => {
  it('Deve responder com status 200 na rota raiz', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Automação DevFlow Solutions');
  });
});

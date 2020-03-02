const request = require('supertest');
const server = require('../api/server');
const db = require('../data/dbConfig');

describe('business auth router', function () {
    it('tests are running', function () {
        expect(true).toBe(true);
    })

    describe('business register endpoint', function () {
        beforeEach(() => {
            return db('businesses').truncate();
        })

        it('returns 201 on successful register', function () {
            return request(server)
                .post('/api/auth/business/register')
                .send({
                    username: 'TestBusiness',
                    password: 'password',
                    businessName: 'TestBusiness',
                    businessAddress: '123 N. Street',
                    businessPhone: 1234567890
                })
                .then(res => {
                    expect(res.status).toBe(201);
                })
        })
    })
})
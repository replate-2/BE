const request = require('supertest');
const server = require('../api/server');

describe('volunteer router', function () {
    it('runs tests', function () {
        expect(true).toBe(true);
    })

    describe('GET /api/users/volunteer', function () {
        it('returns 400 if user not logged in', function () {
            return request(server)
                .get('/api/users/volunteer')
                .then(res => {
                    expect(res.status).toBe(400);
                })
        })

        it('returns message if user not logged in', function () {
            return request(server)
                .get('/api/users/volunteer')
                .then(res => {
                    expect(res.body).toEqual({message: res.body.message})
                })
        })
    })
})
const request = require('supertest');
const server = require('../api/server');

describe('pickups router', function () {
    it('able to run tests', function () {
        expect(true).toBe(true);
    })

    describe('GET /api/pickups', function () {
        it('returns 400 if no user logged in', function () {
            return request(server)
                .get('/api/pickups')
                .then(res => {
                    expect(res.status).toBe(400);
                })
        })

        it('returns message of Please provide credentials if not logged in', function () {
            return request(server)
                .get('/api/pickups')
                .then(res => {
                    expect(res.text).toContain('Please provide credentials')
                })
        })
    })
})
const request = require('supertest');
const server = require('../api/server');

describe('pickups router', function () {
    it('able to run tests', function () {
        expect(true).toBe(true);
    })

    describe('GET /api/pickups without auth', function () {
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

    describe('GET /api/pickups with auth', function () {
        beforeAll(() => {
            return request(server)
                .post('/api/auth/volunteer/register')
                .send({
                    username: 'TestVolunteer',
                    password: 'password',
                    name: 'Test',
                    phoneNumber: 5555555555
                })
                .then(res => {
                    return request(server)
                        .post('/api/auth/volunteer/login')
                        .send({
                            username: 'TestVolunteer',
                            password: 'password'
                        })
                        .then(res => {
                            token = res.body.token;
                        })
                })
        })

        it('returns 200 on success', function () {
            return request(server)
                .get('/api/pickups')
                .set('authorization', token)
                .then(res => {
                    expect(res.status).toBe(200)
                })
        })

        // it('returns an array of pickups')
    })
})
const request = require('supertest');
const server = require('../api/server');
const db = require('../data/dbConfig');

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

    // beforeEach(() => {
    //     return request(server)
    //     .post('/api/auth/volunteer/register')
    //     .set({
    //         username: 'ThisVolunteer',
    //         password: 'password',
    //         name: 'This Volunteer',
    //         phoneNumber: '5551234567'
    //     })
    //     .then(res => {
    //         return request(server)
    //             .post('/api/auth/volunteer/login')
    //             .send({
    //                 username: 'ThisVolunteer',
    //                 password: 'password'
    //             })
    //             .then(res => {
    //                 token = res.body.token;
    //             })
    //     })
    // })

    // afterEach(() => {
    //     return db('volunteers').truncate();
    // })

    // it('returns 200 on success', function () {
    //     return request(server)
    //         .get('/api/users/volunteer')
    //         .set('authorization', token)
    //         .then(res => {
    //             expect(res.status).toBe(200)
    //         })
    // })

    // it('returns an array of all registered volunteers', function () {
    //     return request(server)
    //         .get('/api/users/volunteer')
    //         .set('authorization', token)
    //         .then(res => {
    //             expect(Array.isArray(res.body)).toBe(true)
    //         })
    // })
})
const request = require('supertest');
const server = require('../api/server');
const db = require('../data/dbConfig');

describe('business router', function () {
    it('runs tests', function () {
        expect(true).toBe(true);
    })

    describe('GET /api/users/business no auth', function () {
        it('returns 400 if not authorized', function () {
            return request(server)
                .get('/api/users/business')
                .then(res => {
                    expect(res.status).toBe(400);
                })
        })

        it('returns message if not logged in', function () {
            return request(server)
                .get('/api/users/business')
                .then(res => {
                    expect(res.body).toEqual({message: res.body.message})
                })
        })
    })

    // describe('GET /api/users/business with auth', function () {
    //     beforeEach(() => {
    //         return request(server)
    //         .post('/api/auth/business/register')
    //         .set({
    //             username: 'TestBus',
    //             password: 'password',
    //             businessName: 'TestBusiness',
    //             businessAddress: '123 N. Street',
    //             businessPhone: '1234567890'
    //         })
    //         .then(res => {
    //             return request(server)
    //                 .post('/api/auth/business/login')
    //                 .send({
    //                     username: 'TestBus',
    //                     password: 'password'
    //                 })
    //                 .then(res => {
    //                     token = res.body.token;
    //                 })
    //         })
    //     })

    //     afterAll(() => {
    //         return db('businesses').truncate();
    //     })

    //     it('returns 200 on success', function () {
    //             return request(server)
    //                 .get('/api/users/business')
    //                 .set('Authorization', token)
    //                 .then(res => {
    //                     expect(res.status).toBe(200);
    //                 })
    //     })

    //     it('returns an array of all registered businesses', function () {
    //         return request(server)
    //             .get('/api/users/business')
    //             .set('authorization', token)
    //             .then(res => {
    //                 expect(Array.isArray(res.body)).toBe(true)
    //             })
    //     })
    // })
})
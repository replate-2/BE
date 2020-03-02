const request = require('supertest');
const server = require('../api/server');

describe('business router', function () {
    it('runs tests', function () {
        expect(true).toBe(true);
    })

    describe('GET /api/users/business', function () {
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

        // beforeEach(() => {
        //     return request(server)
        //     .post('/api/auth/business/login')
        //         .set({
        //             username: 'TestBus',
        //             password: 'password'
        //         })
        //         .then(res => {
        //             token = res.body.token;
        //         })
        // })

        // it('returns list of registered businesses', function () {
        //     return request(server)
        //     .post('/api/auth/business/login')
        //         .set({
        //             username: 'TestBus',
        //             password: 'password'
        //         })
        //         .then(res => {
        //             token = res.body.token;
        //             return request(server)
        //                 .get('/api/users/business')
        //                 .set("authorization", token)
        //                 .then(res => {
        //                     expect(res.status).toBe(200);
        //                 })
        //         })
            
        // })
    })
})
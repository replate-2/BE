const request = require('supertest');
const server = require('../api/server');

describe('food router', function () {
    it('able to run tests', function () {
        expect(true).toBe(true);
    })

    describe('GET /api/food without auth', function () {
        it('returns 400 if no user logged in', function () {
            return request(server)
                .get('/api/food')
                .then(res => {
                    expect(res.status).toBe(400);
                })
        })

        it('returns message of Please provide credentials if not logged in', function () {
            return request(server)
                .get('/api/food')
                .then(res => {
                    expect(res.text).toContain('Please provide credentials')
                })
        })
    })

    describe('GET /api/food with auth', function () {
        beforeAll(() => {
            return request(server)
                .post('/api/auth/business/register')
                .send({
                    username: 'TestBusiness',
                    password: 'password',
                    businessName: 'TestBusiness',
                    businessAddress: '123 N. Street',
                    businessPhone: '1234567890'
                })
                .then(res => {
                    return request(server)
                        .post('/api/auth/business/login')
                        .send({
                            username: 'TestBusiness',
                            password: 'password'
                        })
                        .then(res => {
                            token = res.body.token;
                        })
                })
        })

        it('returns 200 on success', function () {
            return request(server)
                .get('/api/food')
                .set('authorization', token)
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })

        it('returns an array of foods', function () {
            return request(server)
                .get('/api/food')
                .set('authorization', token)
                .then(res => {
                    expect(Array.isArray(res.body)).toBe(true);
                })
        })
    })

    // describe('POST to /api/food', function () {
    //     beforeAll(() => {
    //         return request(server)
    //             .post('/api/auth/business/register')
    //             .send({
    //                 username: 'TestB',
    //                 password: 'password',
    //                 businessName: 'TestBusiness',
    //                 businessAddress: '123 N. Street',
    //                 businessPhone: '1234567890'
    //             })
    //             .then(res => {
    //                 return request(server)
    //                     .post('/api/auth/business/login')
    //                     .send({
    //                         username: 'TestB',
    //                         password: 'password'
    //                     })
    //                     .then(res => {
    //                         token = res.body.token;
    //                     })
    //             })
    //     })

    //     it('returns 201 on successful add', function () {
    //         return request(server)
    //             .post('/api/food')
    //             // .set('authorization', token)
    //             .set({
    //                 foodType: 'chicken',
    //                 lbsOfFood: 4,
    //                 preferredPickupTime: '2020-03-09 19:00:00',
    //                 businessId: 1
    //             })
    //             .then(res => {
    //                 expect(res.status).toBe(201)
    //             })
    //     })
    // })
    
})
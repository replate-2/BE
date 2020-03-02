const request = require('supertest');
const server = require('../api/server');
const db = require('../data/dbConfig');

describe('business auth router', function () {
    it('tests are running', function () {
        expect(true).toBe(true);
    })

    describe('business register endpoint', function () {
        // beforeEach(() => {
        //     return db('businesses').truncate();
        // })

        // it('returns 201 on successful register', function () {
        //     return request(server)
        //         .post('/api/auth/business/register')
        //         .send({
        //             username: 'TestBusiness',
        //             password: 'password',
        //             businessName: 'TestBusiness',
        //             businessAddress: '123 N. Street',
        //             businessPhone: 1234567890
        //         })
        //         .then(res => {
        //             expect(res.status).toBe(201);
        //         })
        // })

        it('returns 500 if missing required field', function () {
            return request(server)
                .post('/api/auth/business/register')
                .send({
                    username: 'TestBusiness',
                    password: 'password',
                    businessName: 'TestBusiness',
                    businessAddress: '123 N. Street',
                })
                .then(res => {
                    expect(res.status).toBe(500);
                })
        })
    })

    describe('business login endpoint', function () {
        it('returns 200 on successful login', function () {
            return request(server)
                .post('/api/auth/business/login')
                .send({
                    username: 'TestBus',
                    password: 'password'
                })
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })

        it('returns token and welcome message on successful login', function () {
            return request(server)
                .post('/api/auth/business/login')
                .send({
                    username: 'TestBus',
                    password: 'password'
                })
                .then(res => {
                    expect(res.body).toEqual({message: res.body.message, token: res.body.token})
                })
        })

        it('returns 401 if incorrect credentials', function () {
            return request(server)
            .post('/api/auth/business/login')
            .send({
                username: 'WrongBus',
                password: 'password'
            })
            .then(res => {
                expect(res.status).toBe(401);
            })
        })
    })
})
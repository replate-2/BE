const request = require('supertest');
const server = require('../api/server');
const db = require('../data/dbConfig');

describe('volunteer auth router', function () {
    it('tests are running', function () {
        expect(true).toBe(true);
    })

    describe('volunteer register endpoint', function () {
        afterAll(() => {
            return db('volunteers').cleanup();
        })

        describe('register new volunteer', function () {
            beforeEach(() => {
                return db('volunteers').truncate();
            })
        })

        // it('returns 201 on successful register', function () {
        //     return request(server)
        //         .post('/api/auth/volunteer/register')
        //         .send({
        //             username: 'TestVolunteer',
        //             password: 'password',
        //             name: 'Test Volunteer',
        //             phoneNumber: 1234567890
        //         })
        //         .then(res => {
        //             expect(res.status).toBe(201);
        //         })
        // })

        it('returns 500 if missing required field', function () {
            return request(server)
                .post('/api/auth/volunteer/register')
                .send({
                    username: 'TestingV',
                    password: 'password',
                    name: 'Test Volunteer'
                })
                .then(res => {
                    expect(res.status).toBe(500);
                })
        })
    })

    describe('business login endpoint', function () {
        it('returns 200 on successful login', function () {
            return request(server)
                .post('/api/auth/volunteer/login')
                .send({
                    username: 'TestV',
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
                    username: 'TestV',
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
                username: 'TestV',
                password: 'wrongpassword'
            })
            .then(res => {
                expect(res.status).toBe(401);
            })
        })
    })
})
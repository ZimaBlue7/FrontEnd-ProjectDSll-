const {router} = require('../src/routes/tasks')
const  request  = require ('supertest');

const Router = router;

describe('GET /task', () => {

    test('status code = 200', async() => { 
        const respond = await request(router).get('/seleccionar').send()
     })
})
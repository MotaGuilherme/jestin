const fetchData = require('node-fetch')

const app = require('../server')
const request = require('supertest')


// describe('id', () =>{
// it('tem que ser inteiro', () => {
//     const id = 1

//     expect(id).toBe(1)

// })
// })

// describe('char', () =>{
//     it('tem que ser char', () =>{
//         const char = ["array"]

//         expect(char).toContain("array")
//     })
//     it('nao tem C em aviao', ()=>{
//         expect('aviao').not.toMatch(/C/)
//     })
   
// })
// describe('concessionaria', ()=>{
//     const carros = ["corsa", "gol", "palio", "caminhao rosa"]
//     it('carros', ()=>{
//         expect(carros).toContain('corsa')
//         expect(new Set(carros)).toContain('gol')

//     })
// })

// test('o dado é manteiga de amendoim', done => {
//   function callback(data) {
//     try {
//       expect(data).toBe('manteiga de amendoim');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }

//   fetchData (callback);
// });

describe('test', () =>{
  it('cadastro de test', async () =>{ 
   const res = await request(app)
   .get('/')
 
    expect(res.body).toHaveProperty('message')
  })
})
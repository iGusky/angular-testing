import { greet } from './greet';
describe ( 'greet', ()=>{
  it ('should incluse the name in the message', () =>{
    expect(greet('gusky')).toContain('gusky');
  })
})

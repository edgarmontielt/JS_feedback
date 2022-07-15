'use strict'
import { greet } from '../js/greet'
import '../sass/index.scss'
import hello from './controllers/hello';

const name = 'Edgar'
console.log(`Hello ${name}`);
greet()

console.log(document.body);

document.body.addEventListener('click', () => {
    hello()
})
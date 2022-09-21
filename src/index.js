// webpack cho pheps ca 2 kieu import 
const moment = require('moment');
import { sum } from './sum';
import { sayHello} from './hello';

console.log('hello world')
// console.log(moment().format('LLLL'));
console.log(sum(2, 4));

sayHello();

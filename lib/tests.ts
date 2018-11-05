import { append, prepend } from './append-prepend';


let arr = [];
append([1], arr);

console.log(arr);

append([2,3,4], arr);

console.log(arr);

prepend([0],arr);

console.log(arr);

prepend([-2,-1],arr);

console.log(arr);

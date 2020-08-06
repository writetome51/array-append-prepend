import { append, prepend } from './index.js';


let arr = [];
append([1], arr);
console.log(arr);
// [1]


append([2, 3, 4], arr);
console.log(arr);
// [1,2,3,4]


prepend([0], arr);
console.log(arr);
// [0,1,2,3,4]


prepend([-2, -1], arr);
console.log(arr);
// [-2,-1,0,1,2,3,4]


prepend([[1, 2]], arr);
console.log(arr);
// [[1,2],-2,-1,0,1,2,3,4]


append([[1, 2]], arr);
console.log(arr);
// [[1,2],-2,-1,0,1,2,3,4,[1,2]]

import { append, prepend } from 'index.js';


let arr = [];
append(1, arr);
console.log(arr);
// [1]


append(2, arr);
console.log(arr);
// [1,2]


prepend(0, arr);
console.log(arr);
// [ 0, 1, 2 ]


prepend([-2, -1], arr);
console.log(arr);
// [ [ -2, -1 ], 0, 1, 2 ]



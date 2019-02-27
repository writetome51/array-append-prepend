"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var arr = [];
index_1.append([1], arr);
console.log(arr);
// [1]
index_1.append([2, 3, 4], arr);
console.log(arr);
// [1,2,3,4]
index_1.prepend([0], arr);
console.log(arr);
// [0,1,2,3,4]
index_1.prepend([-2, -1], arr);
console.log(arr);
// [-2,-1,0,1,2,3,4]
index_1.prepend([[1, 2]], arr);
console.log(arr);
// [[1,2],-2,-1,0,1,2,3,4]
index_1.append([[1, 2]], arr);
console.log(arr);
// [[1,2],-2,-1,0,1,2,3,4,[1,2]]

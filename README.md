To include in your project:

import {prepend, append} from '@writetome51/array-append-prepend';

These array-handling functions place items at the beginning (prepend), and end (append).   
They both return void.

let arr = [1, 2, 3];  

prepend([10, 20], arr); // arr is now [10, 20, 1, 2, 3]  
append([30, 40], arr); // arr is now [10, 20, 1, 2, 3, 30, 40]

More examples:

let arr = ['the?'];  
prepend(['what'], arr);  // arr is now ['what', 'the?']

let arr = ['so'];  
append(['what?'], arr);  // arr is now ['so', 'what?']

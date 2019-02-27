# prepend(values, array): void
Attaches `values` to beginning of `array`.  Alternative to `Array.unshift()`

# append(values, array): void
Attaches `values` to end of `array`.  Alternative to `Array.push()`

 
## Usage Examples
```
let arr = [1, 2, 3];  
prepend([10, 20], arr); // arr is now [10, 20, 1, 2, 3] 

let arr = [1, 2, 3];
append([30, 40], arr); // arr is now [1, 2, 3, 30, 40]
```

## Installation
`npm i  @writetome51/array-append-prepend`

## Loading
```
// If using TypeScript:  
import {prepend, append} from '@writetome51/array-append-prepend';

// If using ES5 JavaScript:  
var prepend = require('@writetome51/array-append-prepend').prepend;  
var append = require('@writetome51/array-append-prepend').append;
```
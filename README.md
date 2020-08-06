# prepend(values: any[], array): void

Attaches `values` to beginning of `array`.  Alternative to `Array.unshift(...values)`

# append(values: any[], array): void

Attaches `values` to end of `array`.  Alternative to `Array.push(...values)`

 
## Examples
```js
let arr = [1, 2, 3];  
prepend([10, 20], arr); 
// arr === [10, 20, 1, 2, 3] 

let arr = [1, 2, 3];
append([30, 40], arr); 
// arr === [1, 2, 3, 30, 40]
```

## Installation
`npm i  @writetome51/array-append-prepend`

## Loading
```js
import {prepend, append} from '@writetome51/array-append-prepend';
```

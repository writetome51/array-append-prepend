# prepend(value, array): void

Adds `value` to beginning of `array`.  Alternative to `array.unshift(value)`

# append(value, array): void

Adds `value` to end of `array`.  Alternative to `array.push(value)`

 
## Examples
```js
let arr = [1, 2, 3];  
prepend(10, arr); 
// arr === [10, 1, 2, 3] 

arr = [1, 2, 3];
append(30, arr); 
// arr === [1, 2, 3, 30]
```

## Installation
`npm i  @writetome51/array-append-prepend`

## Loading
```js
import {prepend, append} from '@writetome51/array-append-prepend';
```

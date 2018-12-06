
# prepend(values, arrayToModify): void
Attaches values to beginning of arrayToModify.  Alternative to Array.unshift()

# append(values, arrayToModify): void
Attaches values to end of arrayToModify.  Alternative to Array.push()

To include in your project:
```
// If using ES5 JavaScript:  
var appendPrepend = require('@writetome51/array-append-prepend');  
var prepend = appendPrepend.prepend;
var append = appendPrepend.append;

// If using TypeScript:  
import {prepend, append} from '@writetome51/array-append-prepend';
```
 
## Usage Examples
```
let arr = [1, 2, 3];  
prepend([10, 20], arr); // arr is now [10, 20, 1, 2, 3]  
append([30, 40], arr); // arr is now [10, 20, 1, 2, 3, 30, 40]

let arr = ['the?'];  
prepend(['what'], arr);  // arr is now ['what', 'the?']

let arr = ['so'];  
append(['what?'], arr);  // arr is now ['so', 'what?']
```
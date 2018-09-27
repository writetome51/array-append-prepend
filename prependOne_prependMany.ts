import {errorIfNotArray} from 'basic-data-handling/errorIfNotArray';
import { errorIfValuesAreNotArrays }
from '@writetome51/array-and-index-validation/errorIf/errorIfValuesAreNotArrays';

// All these functions modify the passed array and don't return anything.


export function prependOne(item, array): void {
	errorIfNotArray(array);
	array.unshift(item);
}


export function prependMany(items: any[], array): void {
	errorIfValuesAreNotArrays([items, array]);
	array.unshift(...items);
}

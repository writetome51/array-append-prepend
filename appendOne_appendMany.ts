import {errorIfNotArray} from 'basic-data-handling/errorIfNotArray';
import { errorIfValuesAreNotArrays }
from '@writetome51/array-and-index-validation/errorIf/errorIfValuesAreNotArrays';

// All these functions modify the passed array and don't return anything.


export function appendOne(item, array): void {
	errorIfNotArray(array);
	array.push(item);
}


export function appendMany(items: any[], array): void {
	errorIfValuesAreNotArrays([items, array]);
	array.push(...items);
}

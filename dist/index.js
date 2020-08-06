import {errorIfNotArray} from 'error-if-not-array';


export function append(items, array) {
	errorIfNotArray(items);
	array.push(...items);
}


export function prepend(items, array) {
	errorIfNotArray(items);
	array.unshift(...items);
}

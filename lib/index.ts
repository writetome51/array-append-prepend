import { errorIfNotArray }  from 'error-if-not-array';


export function append(items: any[], array): void {
	errorIfNotArray(items);
	array.push(...items);
}


export function prepend(items: any[], array): void {
	errorIfNotArray(items);
	array.unshift(...items);
}

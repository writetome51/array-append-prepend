import { errorIfValuesAreNotArrays }  from 'error-if-values-are-not-arrays';


export function append(items: any[], array): void {
	errorIfValuesAreNotArrays([items, array]);
	array.push(...items);
}


export function prepend(items: any[], array): void {
	errorIfValuesAreNotArrays([items, array]);
	array.unshift(...items);
}

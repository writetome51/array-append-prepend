import { errorIfValuesAreNotArrays }
from '@writetome51/array-and-index-validation/errorIf/errorIfValuesAreNotArrays';


export function append(items: any[], array): void {
	errorIfValuesAreNotArrays([items, array]);
	array.push(...items);
}


export function prepend(items: any[], array): void {
	errorIfValuesAreNotArrays([items, array]);
	array.unshift(...items);
}

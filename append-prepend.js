"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_values_are_not_arrays_1 = require("error-if-values-are-not-arrays");
function append(items, array) {
    error_if_values_are_not_arrays_1.errorIfValuesAreNotArrays([items, array]);
    array.push.apply(array, items);
}
exports.append = append;
function prepend(items, array) {
    error_if_values_are_not_arrays_1.errorIfValuesAreNotArrays([items, array]);
    array.unshift.apply(array, items);
}
exports.prepend = prepend;

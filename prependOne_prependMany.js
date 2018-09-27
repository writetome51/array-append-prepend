"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
var errorIfValuesAreNotArrays_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfValuesAreNotArrays");
// All these functions modify the passed array and don't return anything.
function prependOne(item, array) {
    errorIfNotArray_1.errorIfNotArray(array);
    array.unshift(item);
}
exports.prependOne = prependOne;
function prependMany(items, array) {
    errorIfValuesAreNotArrays_1.errorIfValuesAreNotArrays([items, array]);
    array.unshift.apply(array, items);
}
exports.prependMany = prependMany;

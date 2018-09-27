"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
var errorIfValuesAreNotArrays_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfValuesAreNotArrays");
// All these functions modify the passed array and don't return anything.
function appendOne(item, array) {
    errorIfNotArray_1.errorIfNotArray(array);
    array.push(item);
}
exports.appendOne = appendOne;
function appendMany(items, array) {
    errorIfValuesAreNotArrays_1.errorIfValuesAreNotArrays([items, array]);
    array.push.apply(array, items);
}
exports.appendMany = appendMany;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfValuesAreNotArrays_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfValuesAreNotArrays");
function append(items, array) {
    errorIfValuesAreNotArrays_1.errorIfValuesAreNotArrays([items, array]);
    array.push.apply(array, items);
}
exports.append = append;
function prepend(items, array) {
    errorIfValuesAreNotArrays_1.errorIfValuesAreNotArrays([items, array]);
    array.unshift.apply(array, items);
}
exports.prepend = prepend;

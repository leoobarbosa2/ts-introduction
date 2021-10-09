"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var todo = {
    title: 'Assistir B99',
    description: 'Em inglês!',
    completed: false
};
console.log(todo);
// console.log(todo)
// todo.completed = true;
function updateTodo(todo, fieldToUpdate) {
    return __assign(__assign({}, todo), fieldToUpdate);
}
var todo2 = updateTodo(todo, { completed: true });
console.log(todo2);
var todo3 = {
    title: 'Assistir Modern Family',
    completed: false
};
var todo4 = {
    title: 'Assistir Modern Family',
    completed: false
};

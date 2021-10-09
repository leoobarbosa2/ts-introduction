"use strict";
// bolean (true/false)
var isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
// number (int, float. hex, binary)
var total;
total = 21.4;
// array (type[] || Array<type>)
var items;
items = [1, 2, 3];
var result; //generic
result = [3, 2, 1];
// tuple
var title;
title = [5, 'title'];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#FFF";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (anything)
var something;
something = [1];
// void 
function logger() {
    console.log('foo');
}
// never 
function error() {
    throw new Error("error");
}
// Object
var cart;
cart = {
    name: "foo"
};
// Type Inference
var messages = 'message, second message';
window.addEventListener("click", function (ev) {
    console.log(ev.target);
});

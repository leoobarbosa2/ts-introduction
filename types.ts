// bolean (true/false)
let isOpen: boolean;
isOpen = true;

// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`

// number (int, float. hex, binary)
let total: number;
total = 21.4;

// array (type[] || Array<type>)
let items: number[]
items = [1, 2, 3]

let result: Array<number> //generic
result = [3, 2, 1]

// tuple
let title: [number, string]
title = [5, 'title']

// enum
enum Colors {
    white = '#FFF',
    black = '#000'
}

// any (anything)
let something: any;
something = [1];

// void 
function logger () {
    console.log('foo');
}

// null | undefined
type Foo = string | undefined;

// never 
function error(): never {
    throw new Error("error")
}

// Object
let cart: object;
cart = {
    name: "foo"
}

// Type Inference
let messages = 'message, second message';

window.addEventListener("click", (ev) => {
    console.log(ev.target);
})


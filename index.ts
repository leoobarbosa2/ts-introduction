var input1 = document.getElementById('input-1') as HTMLInputElement;
var input2 = document.getElementById('input-2') as HTMLInputElement;
var button = document.getElementById('button')!;

function sum(a: number, b: number) {
    return a + b;
}

button.addEventListener('click', function () {
    console.log(sum(Number(input1.value), Number(input2.value)));
});
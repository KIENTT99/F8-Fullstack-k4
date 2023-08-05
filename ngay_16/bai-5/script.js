console.log(`Bài 5`);

var a = 5;
var b = 7;
var c = 3;
var max;

if (a > b) {
    max = a;
    a = b;
    b = max;
}
if (a > c) {
    max = a;
    a = c;
    c = max;
}
if (b > c) {
    max = b;
    b = c;
    c = max;
}

console.log(`Kết quả: a = ${a}, b = ${b}, c = ${c}`);

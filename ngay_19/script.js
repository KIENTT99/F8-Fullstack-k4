//Bài 1
console.log(`Bài 1`);
var arr = [2, 4, 5, 8, 1, 10];

var min = arr[0];
var max = arr[0];
var indexMin = 0;
var indexMax = 0;

for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
        indexMin = i;
    }
    if (max < arr[i]) {
        max = arr[i];
        indexMax = i;
    }
}
console.log(`Max: ${max} - vị trí: ${indexMax}`);
console.log(`Min: ${min} - vị trí: ${indexMin}`);
//END

//Bài 2
//END

//Bài 3
console.log(`Bài 3`);

var arr = [1, 4, 6, 1, 8, 4, 9, 7, 7];
var newArr = [];
for (var index in arr) {
    if (newArr.includes(arr[index]))
        continue;
    newArr[newArr.length] = arr[index];
}
console.log(`Mảng mới; ${newArr}`);
//END

//Bài 4

console.log(`Bài 4`);

var number = [2, 4, 6, 1, 3, 9, 5];
var num = 10;
var newArr = [];
function sortArr(array, num) {
    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

            }
        }
    }
    //1234569
    if (array[array.length - 1] <= num) {
        newArr = array;
        newArr.push(num)
    } else {
        for (var i = 0; i < array.length; i++) {

            if (num > array[i] && num <= array[i + 1]) {
                newArr.push(array[i]);
                newArr.push(num);
            } else {
                newArr.push(array[i])
            }

        }
    }

}
sortArr(number, num);
console.log(newArr);

//END
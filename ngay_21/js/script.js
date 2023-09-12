//STRAT Bài 1
console.log(`Bài 1`);
var isNumber = function (...Arr) {
    return Arr.every((num) => {
        return !isNaN(num) && num !== Infinity;
    });
};

function sum(...args) {
    var total = 0;
    if (isNumber(...args)) {
        args.forEach((num) => (total += Number(num)));
        return total;
    } else {
        return "Không hợp lệ";
    }
}

console.log(sum(2, 5, "10", 9, "8", true, [6]));
//END Bài 1

//START Bài 3
console.log(`Bài 3`);
var arr = [
    {
        id: 1,
        name: "Chuyên mục 1",
        parent: 0,
    },
    {
        id: 3,
        name: "Chuyên mục 3",
        parent: 0,
    },
    {
        id: 2,
        name: "Chuyên mục 2",
        parent: 0,
    },

    {
        id: 4,
        name: "Chuyên mục 2.1",
        parent: 2,
    },

    {
        id: 5,
        name: "Chuyên mục 2.2",
        parent: 2,
    },
    {
        id: 6,
        name: "Chuyên mục 2.3",
        parent: 2,
    },
    {
        id: 7,
        name: "Chuyên mục 3.1",
        parent: 3,
    },
    {
        id: 8,
        name: "Chuyên mục 3.2",
        parent: 3,
    },
    {
        id: 9,
        name: "Chuyên mục 3.3",
        parent: 3,
    },
    {
        id: 10,
        name: "Chuyên mục 2.2.1",
        parent: 5,
    },
    {
        id: 11,
        name: "Chuyên mục 2.2.2",
        parent: 5,
    },
];
var newArr = [];

Nested = function (arr) {

    arr.forEach(function (item) {
        item.children = [];
        if (item.parent === 0) {
            newArr.push(item)
        }

        else {
            var newArray = arr.find(function (items) {
                return items.id === item.parent

            });
            if (newArray) {

                newArray.children.push(item)
            }
        }

    })

    return newArr
}

console.log(Nested(arr));

//END Bài 3

//START Bài 4
console.log(`Bài 4`);
Array.prototype.reduce2 = function (callback, result) {
    var i = 0;
    if (arguments.length) {
        result = this[0];
    }

    for (i = 1; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
};

var array = [10, 20, 30, 40, 50];
var result = array.reduce2((prev, current) => {
    return prev + current;
}, 0);
console.log(result);
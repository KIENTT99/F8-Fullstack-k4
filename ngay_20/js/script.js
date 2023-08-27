//STRAR Bài 1
console.log(`Bài 1`);
var users = {
    user: {
        name: "Họ và tên",
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email"
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại"
    }
}

function getError(field) {
    if (users[field]) {
        return Object.values(users[field])[0];
    } else {
        return "Lỗi này không tồn tại";
    }
}
console.log(getError("password"));
//END Bài 1

//STRAT Bài 2
console.log(`Bài 2`);
var Customer = function (name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
};
const customers = [
    new Customer("Nguyễn Văn A", "11", "Ha Noi"),
    new Customer("Nguyễn Văn B", "2", "Hai Phong"),
    new Customer("Nguyễn Văn C", "12", "TP.HCM"),
];
console.log(customers);
function createCustomers(customers) {
    var newArr = customers.sort?.(function (a, b) {
        return a.age - b.age;
    });
    newArr = newArr?.map(function (customer) {
        shortName = `${customer.name.split(" ")[0]} ${customer.name
            .split(" ")
            .slice(-1)}`;
        customer.shortName = shortName;
        return customer;
    });
    console.log(newArr);
}
const results = createCustomers(customers);
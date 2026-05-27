Câu A1
    1.function tinhThueBaoHiem(luong) {
    let thuong = 0;
    if (luong > 11000000) {
        thuong = luong * 0.1;
    }
    let thuc_nhan = luong - thuong;
    return { thuong, thuc_nhan };
    }
    2.const tinhThueBaoHiemExpr = function(luong) {
    let thuong = 0;
    if (luong > 11000000) {
        thuong = luong * 0.1;
    }
    let thuc_nhan = luong - thuong;
    return { thuong, thuc_nhan };
    };
    3.const tinhThueBaoHiemArrow = (luong) => {
    let thuong = 0;
    if (luong > 11000000) {
        thuong = luong * 0.1;
    }
    let thuc_nhan = luong - thuong;
    return { thuong, thuc_nhan };
    };
Function Declaration được hoisting toàn bộ,Function Expression và Arrow Function chỉ hoisting phần khai báo biến
VD:
// Function Declaration
console.log(declare(12000000)); //chạy được
function declare(luong) { return luong > 11000000 ? luong*0.1 : 0; }

// Function Expression
console.log(expr(12000000)); //ReferenceError
const expr = function(luong) { return luong > 11000000 ? luong*0.1 : 0; };

// Arrow Function
console.log(arrow(12000000)); //ReferenceError
const arrow = (luong) => luong > 11000000 ? luong*0.1 : 0;
Câu A2
console.log(c.increment());  // 1
console.log(c.increment());  // 2
console.log(c.increment());  // 3
console.log(c.decrement());  // 2
console.log(c.getCount());   // 2
var: 3
var: 3
var: 3
let: 0
let: 1
let: 2
var có phạm vi function scope, không tạo biến mới cho từng vòng lặp. Sau khi vòng lặp kết thúc, i = 3. Khi callback trong setTimeout chạy, tất cả đều tham chiếu cùng một biến i → in ra 3 ba lần
let có phạm vi block scope, mỗi vòng lặp tạo một binding mới cho j. Vì vậy mỗi callback giữ giá trị riêng biệt → in ra 0, 1, 2
Câu A3
1.const evenNums = nums.filter(n => n % 2 === 0);
2.const tripleNums = nums.map(n => n * 3);  
3.const sum = nums.reduce((acc, n) => acc + n, 0);  
4.const firstGreater7 = nums.find(n => n > 7);  
5.const hasGreater10 = nums.some(n => n > 10);  
6.const allPositive = nums.every(n => n > 0);  
7.const parityArr = nums.map(n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`)
8.const reversed = [...nums].reverse();  
Câu A4
console.log(name, price, ram, color);  // iPhone 16 25990000 8 Titan
console.log(specs);                     // ReferenceError: specs is not defined
console.log(updated.price);            // 23990000
console.log(updated.sale);             // true
console.log(product.price);            // 25990000
console.log(product.specs.ram);        // 16
copy.specs.ram làm giá trị trong product.specs.ram thay đổi → in ra 16
Câu C1
function processOrders(orders) {
  return orders
    .filter(o => o.status === "completed" && o.total > 100000)
    .map(({ id, customer, total }) => {
      const discount = total * 0.1;
      return { id, customer, total, discount, finalTotal: total - discount };
    })
    .sort((a, b) => b.finalTotal - a.finalTotal);
}
Câu C2
const miniArray = {
    map(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i, arr));
        }
        return result;
    },
    filter(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    },
    reduce(arr, fn, initialValue) {
        let acc = initialValue;
        let startIndex = 0;

        // Nếu không truyền initialValue thì lấy phần tử đầu tiên làm acc
        if (acc === undefined) {
            acc = arr[0];
            startIndex = 1;
        }

        for (let i = startIndex; i < arr.length; i++) {
            acc = fn(acc, arr[i], i, arr);
        }
        return acc;
    }
};

// Test phải pass:
console.log(miniArray.map([1,2,3], x => x * 2));        // → [2,4,6]
console.log(miniArray.filter([1,2,3,4], x => x > 2));    // → [3,4]
console.log(miniArray.reduce([1,2,3,4], (a,b) => a+b, 0)); // → 10
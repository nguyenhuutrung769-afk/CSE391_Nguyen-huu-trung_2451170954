Câu A1
console.log(x);
var x = 5;
    Kết quả: undefined
    Giải thích: var được hoisting (khai báo đưa lên đầu), nhưng giá trị gán chưa thực hiện. Vì vậy x tồn tại nhưng chưa có giá trị → undefined
console.log(y);
let y = 10;
    Kết quả: ReferenceError: Cannot access 'y' before initialization
    Giải thích: let cũng được hoisting, nhưng nằm trong Temporal Dead Zone (TDZ) cho đến khi dòng gán chạy. Truy cập trước khi gán → lỗi
const z = 15;
z = 20;
console.log(z);
    Kết quả: TypeError: Assignment to constant variable.
    Giải thích: const không cho phép gán lại giá trị. Dòng z = 20 gây lỗi ngay
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
    Kết quả: [1, 2, 3, 4]
    Giải thích: const chỉ ngăn gán lại biến arr, nhưng nội dung bên trong (mảng) vẫn có thể thay đổi
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
    Kết quả:
    Trong block: 2
    Ngoài block: 1
    Giải thích: let có phạm vi block. Biến a bên trong {} là biến khác, không ảnh hưởng đến biến a bên ngoài.
Câu A2
onsole.log(typeof null);              // object
console.log(typeof undefined);         // undefined
console.log(typeof NaN);              // number
console.log("5" + 3);                 // 53
console.log("5" - 3);                 // 2
console.log("5" * "3");              // 15
console.log(true + true);            // 2
console.log([] + []);                // ""
console.log([] + {});                // [object Object]
console.log({} + []);                // "[object Object]" (khi là biểu thức; chú ý ngữ cảnh có thể gây khác biệt nếu {} bị hiểu là block)
"5" + 3 ép số thành chuỗi → nối thành "53"
"5" - 3 ép chuỗi thành số → thực hiện phép toán số học → kết quả 2
Câu A3
console.log(5 == "5");                // true
console.log(5 === "5");               // false
console.log(null == undefined);       // true
console.log(null === undefined);      // false
console.log(NaN == NaN);             // false
console.log(0 == false);             // true
console.log(0 === false);            // false
console.log("" == false);            // true
Từ giờ trở đi, nên dùng === thay vì ==
Lý do: === tránh việc ép kiểu ngầm định gây ra kết quả bất ngờ (ví dụ "" == false → true, nhưng thực tế bạn không muốn coi chuỗi rỗng bằng với boolean false)
=== giúp code rõ ràng, dễ đọc, ít bug hơn
Nếu thực sự muốn so sánh sau khi ép kiểu, bạn nên ép kiểu tường minh trước (ví dụ Number("5") === 5), thay vì dựa vào ==
Câu A4
Các giá trị faulsy trong JavaScript: false 0 và -0 0n (BigInt zero) "" (empty string) null undefined NaN
if ("0") console.log("A");           // In (chuỗi "0" là truthy)
if ("") console.log("B");            // Không in (chuỗi rỗng là falsy)
if ([]) console.log("C");            // In (mảng rỗng vẫn truthy)
if ({}) console.log("D");            // In (object rỗng vẫn truthy)
if (null) console.log("E");          // Không in (null là falsy)
if (0) console.log("F");             // Không in (0 là falsy)
if (-1) console.log("G");            // In (-1 là số ≠ 0 → truthy)
if (" ") console.log("H");           // In (chuỗi có space không rỗng → truthy)
Câu A5
1.var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
2.var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
3.var html = `
<div class="card">
  <h2>${title}</h2>
  <p>${description}</p>
  <span>Giá: ${price}đ</span>
</div>
`;
Câu C1
if (giaSauGiam = 0) { ... }
    Lỗi: = là phép gán, không phải so sánh. Dòng này gán giaSauGiam = 0 rồi trả về 0 (falsy)
    Sửa:
    if (giaSauGiam === 0) {
        console.log("Sản phẩm miễn phí!");
    }
js
const gia = tinhGiaGiamGia("100000", 20)
    Lỗi: "100000" là chuỗi, phép nhân sẽ ép kiểu nhưng không rõ ràng. Nên kiểm tra input
    Sửa:
    const gia = tinhGiaGiamGia(100000, 20)
    Hoặc trong hàm: ép kiểu số bằng Number(giaBan).
Không kiểm tra kiểu dữ liệu đầu vào
    Hàm tinhGiaGiamGia không xác nhận giaBan là số.
    Sửa: thêm validate:
    if (typeof giaBan !== "number") {
        return "Giá bán phải là số";
    }
return "Phần trăm giảm không hợp lệ"
    Sửa: thêm ; để code rõ ràng:
    return "Phần trăm giảm không hợp lệ";
var giamGia = giaBan * phanTramGiam / 100
let giaSauGiam = giaBan - giamGia
    Dùng var và let lẫn lộn. Nên thống nhất dùng let hoặc const.
    Sửa:
    let giamGia = giaBan * phanTramGiam / 100;
    let giaSauGiam = giaBan - giamGia;
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i)
    }, 1000)
}
    Lỗi “ẩn”: var có phạm vi function, nên sau vòng lặp giá trị i = 5. Khi callback chạy, in ra "Item 5" 5 lần.
    Sửa: dùng let để tạo block scope:
    for (let i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log("Item " + i);
        }, 1000);
    }
Phần D link video:https://www.youtube.com/watch?v=Q37S3GM7bJc
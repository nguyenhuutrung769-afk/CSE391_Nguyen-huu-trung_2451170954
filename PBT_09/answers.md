Câu A1
div#app
 ├── header
 │    ├── h1 ("Todo App")
 │    └── nav
 │         ├── a.active ("All")
 │         ├── a ("Active")
 │         └── a ("Completed")
 └── main
      ├── form#todoForm
      │    ├── input#todoInput (type="text")
      │    └── button (type="submit") ("Add")
      └── ul#todoList
           ├── li.todo-item ("Learn HTML")
           └── li.todo-item.completed ("Learn CSS")
Chọn thẻ <h1> 
document.querySelector("h1");
Chọn input trong form 
document.querySelector("#todoForm input");
// hoặc: document.querySelector("#todoInput");
Chọn tất cả .todo-item 
document.querySelectorAll(".todo-item");
Chọn link đang active 
document.querySelector("nav a.active");
Chọn <li> đầu tiên trong #todoList 
document.querySelector("#todoList li:first-child");
Chọn tất cả <a> bên trong <nav> 
document.querySelectorAll("nav a");
Câu A2
innerHTML: gán hoặc lấy nội dung HTML bên trong một phần tử. Nó sẽ parse chuỗi thành HTML thật sự.
Dùng khi muốn chèn markup hợp lệ (ví dụ <b>, <p>).
textContent: chỉ lấy hoặc gán chuỗi văn bản thô, không parse HTML.
Dùng khi muốn hiển thị dữ liệu người dùng nhập mà không cho phép HTML.
-Tại sao innerHTML có thể gây XSS?
Vì nó thực thi HTML/JS mà người dùng nhập vào. Hacker có thể chèn thẻ <script> hoặc thuộc tính sự kiện (onerror, onclick) để chạy code độc hại.
VD: <input id="search" value="<img src=x onerror='alert(\"Hacked!\")'>">
<div id="result"></div>

<script>
const userInput = document.querySelector("#search").value;
document.querySelector("#result").innerHTML = userInput;  // ← Nguy hiểm!
</script>
cách sửa:
const userInput = document.querySelector("#search").value;
document.querySelector("#result").textContent = userInput; 
Câu A3
console.log("OUTER");   ->OUTER
console.log("INNER");   ->INNER
console.log("BUTTON"); ->BUTTON
có e.stopPropagation() trong handler của button ->BUTTON
Câu C1
// App: Counter with history
const countDisplay = document.querySelector(".count");
const historyList = document.getElementById("history");

let count = 0;

document.querySelector("#incrementBtn").addEventListener("click", function() {
    count++;
    countDisplay.textContent = count; // ❌ dùng textContent để tránh XSS

    // Lưu history
    const li = document.createElement("li");
    li.textContent = "Count changed to " + count;
    li.addEventListener("click", function() {
        deleteHistory(this);
    });
    historyList.appendChild(li); // dùng appendChild cho rõ ràng
});

document.querySelector("#decrementBtn").addEventListener("click", function() { // "onclick" không phải event type->"click"
    count--;
    countDisplay.textContent = count; // ❌ dùng textContent để tránh XSS
});

document.querySelector("#resetBtn").addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count; // gán lại biến DOM thành số → mất tham chiếu->countDisplay.textContent = count;
    historyList.innerHTML = ""; // innerHTML nhận string, không phải null->""
});

function deleteHistory(element) {
    element.parentNode.removeChild(element);
}

// Clear all history
document.querySelector("#clearHistory").addEventListener("click", () => {
    const items = historyList.querySelectorAll("li");
    items.forEach(item => {
        item.remove(); // Sai: thiếu dấu (), không gọi hàm->remove()
    });
});

// Save to localStorage
window.addEventListener("beforeunload", () => {
    localStorage.setItem("count", count);
    localStorage.setItem("history", historyList.innerHTML);
});

// Load from localStorage
window.addEventListener("load", () => {
    count = parseInt(localStorage.getItem("count")) || 0; // getItem trả về string, cần số->count = parseInt(localStorage.getItem("count")) || 0;
    countDisplay.textContent = count;
    historyList.innerHTML = localStorage.getItem("history") || ""; // chỉ load count, bỏ qua history->historyList.innerHTML = localStorage.getItem("history") || "";
});
Câu C2
1.
    Vì sao bind event lên 1000 elements riêng lẻ là BAD PRACTICE
        Tốn bộ nhớ: Mỗi element có một listener riêng → tạo ra 1000 function references trong RAM
        Tốn CPU: Trình duyệt phải quản lý 1000 listener, mỗi lần click phải duyệt qua nhiều handler
        Khó bảo trì: Nếu muốn thay đổi logic, phải sửa ở nhiều nơi hoặc remove từng listener
    -> giải quyết bằng cách: chỉ bind 1 listener lên phần tử cha (ví dụ document.body hoặc #list). Khi event bubble lên, ta kiểm tra event.target để biết element nào được click.
    → Ưu điểm: ít listener hơn, tiết kiệm tài nguyên, dễ bảo trì
2.
DocumentFragment là một container ảo trong bộ nhớ, không gắn trực tiếp vào DOM.Khi append vào fragment, không gây reflow/repaint.Chỉ khi append fragment vào document.body, toàn bộ 1000 nodes mới được thêm vào DOM một lần duy nhất → chỉ 1 lần reflow.
->Kết quả: hiệu năng cao hơn rất nhiều, đặc biệt khi render số lượng lớn elements.
Phần D link video:https://www.youtube.com/watch?v=cOrnn3HWlsA
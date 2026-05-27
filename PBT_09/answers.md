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

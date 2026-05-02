Câu A1(Tài liệu tham khảo chương 8)
1.inline CSS
    <h1 style="color: #2563eb; font-size: 32px;">Xin chào</h1>
    Ưu điểm:dễ viết,không cần file CSS riêng
    Nhược điểm:Khó bảo trì,khó tái sử dụng,làm HTML nặng nếu style lớn
    Nên dùng khi cần chỉnh nhanh một phần tử đơn lẻ, hoặc test tạm thời
2.Internal CSS trong thẻ <style>
    <head>
        <style>
            h1 { color: #2563eb; font-size: 32px; }
        </style>
    </head>
    Ưu điểm:Dễ quản lý,không cần file ngoài
    Nhược điểm:File HTML bị dài,khó tách biệt với nội dung trình bày
    Nên dùng khi làm việc với trang web nhỏ,demo hoặc chỉ có 1 file HTML duy nhất
3.External CSS file riêng:
    HTML
    <head>
        <link rel="stylesheet" href="styles.css">
    </head>
    CSS
    h1 { color: #2563eb; font-size: 32px; }
    Ưu điểm:Tách biệt nội dung và trình bày nên dễ dàng bảo trì và tái sử dụng,cache trình duyệt
    Nhược điểm:Cần request HTTP để tải file CSS,nếu CSS bị lỗi hoặc không tải được sẽ mất style
    Nên dùng khi làm việc với Website nhiều trang,dự án lớn,cần quản lý style chuyên nghiệp
->CSS dịch từ trên xuống nên cách sử dụng sau cùng sẽ override các cách trước
Câu A2
1. h1                           → Chọn: ShopTLU
2. .price                       → Chọn: 25.990.000đ và 45.990.000đ
3. #app header                  → Chọn: ShopTLU và <nav>
4. nav a:first-child             → Chọn: <a href="/" class="active">Home</a>
5. .product.featured h2         → Chọn: MacBook Pro
6. article > p                  → Chọn: 25.990.000đ,Mô tả sản phẩm...,45.990.000đ,Mô tả sản phẩm...
7. a[href="/"]                  → Chọn: home
8. .top-bar.dark h1              → Chọn: ShopTLU
Câu A3(Tham khảo Bài 11)
Trường hợp 1
→ Chiều rộng hiển thị = 450px
→ Không gian chiếm trên trang = 470px
Trường hợp 2
→ Chiều rộng hiển thị = 400px
→ Kích thước content thực tế = 350px
→ Không gian chiếm trên trang = 420px
Trường hợp 3
→ Khoảng cách giữa box-a và box-b = 40px
→ Giải thích tại sao KHÔNG PHẢI 65px: Margin dọc giữa 2 block element GỘPLẠI = lấy cái LỚN HƠN 
Nâng cao:Khoảng cách thực tế 30px
Câu A4
1.
    Rule A p->(0,0,1)
    Rule B .price->(0,1,0)
    Rule C #main-price->(1,0,0)
    Rule D p.price->(0,1,1)
2.red vì Rule C mạnh hơn còn lại
3.orange
4.black vì !important ghi đè tất cả rule khác
Câu B1
Các selectors đã sử dụng:
Element selector: body,head,footer,table
ID selector:#profile-pic
Class selector: .active
Descendant selector: nav a,thead tr
Pseudo-class selector: :hover,nth-child(even)
Câu B2
Hộp 1 (content-box): chiều rộng thực tế = 350px
Hộp 2 (border-box): chiều rộng thực tế = 300px
Giải thích sự khác biệt: 
    content-box :width chỉ áp dụng cho phần nội dung.Khi thêm padding và border kích thước của hộp sẽ lớn hơn giá trị khai báo
    border-box: width bao gồm cả nội dung,padding,border->kích thước hộp luôn bằng đúng giá trị khai báo và nội dung sẽ tự co để nhường chỗ cho padding và border
Câu B3
1.
    p {} → (0,0,1)
    body p {} → (0,0,2)
    .text {} → (0,1,0)
    .highlight {} → (0,1,0)
    .text.highlight {} → (0,2,0)
    p[id="demo"] {} → (0,1,1)
    #demo {} → (1,0,0)
    #demo.text {} → (1,1,0)
    p#demo.highlight {} → (1,1,1)
    #demo { color: black !important; } → (1,0,0 + !important)
2.Hiển thị màu hồng vì rule 9 có specificity cao hơn các rule khác(1,1,1)
4.Không vì rule 9 có specificity cao hơn các rule khác(1,1,1)
Câu C1
1.
Chiều rộng thực tế của sidebar 342px
Chiều rộng thực tế của content 722px
2.do không sử dụng border-box nên mặc định sẽ sử dụng content-box,sẽ chỉ tính width của phần nội dung chứ không tính padding và border
3.
cách 1 thêm * {box-sizing: border-box;}
cách 2 giảm width của sidebar xuống 260px
            content xuống 618px;
Câu C2
1."Sản phẩm A" (h2) có font-size = 20px
    body { font-size: 16px; } → mặc định 16px.

    .container { font-size: 14px; } → tất cả con trong container thừa hưởng 14px.

    .card .title { font-size: 20px; } → áp dụng trực tiếp cho h2.title → 20px. 
color = Green
    body { color: #333; } → mặc định #333.

    .card { color: blue; } → h2 thừa hưởng màu xanh.

    #featured .title { color: red; } → áp dụng trực tiếp, specificity cao hơn → màu đỏ.

    .highlight { color: green !important; } → có !important → override tất cả → xanh lá (green).
2"Mô tả sản phẩm" (p trong card featured) có color = Blue
    body { color: #333; } → mặc định #333.

    .card { color: blue; } → p thừa hưởng màu xanh.

    .card p { color: inherit; } → p lấy màu từ cha .card → blue.
3"Sản phẩm B" (h2) có font-size = 20px 
    .container { font-size: 14px; } → thừa hưởng 14px.

    .card .title { font-size: 20px; } → áp dụng trực tiếp → 20px.
Color = blue
    body { color: #333; } → mặc định #333.

    .card { color: blue; } → h2 thừa hưởng màu xanh.

    .card .title {} không định nghĩa color, chỉ font-size.

    Không có rule khác override → blue.
4"Mô tả sản phẩm B" (p.highlight) có color = Green
    .card { color: blue; } → p thừa hưởng màu xanh.

    .card p { color: inherit; } → p lấy màu từ cha .card → blue.

    .highlight { color: green !important; } → áp dụng trực tiếp với !important → override → green.
Phần D link video:https://www.youtube.com/watch?v=nQgGb39WO9o&t=7s
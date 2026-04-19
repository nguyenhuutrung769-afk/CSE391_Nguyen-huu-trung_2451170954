Bài A1 nguồn tham chiếu(chương 01 (01_introduction_html_universe.md))
1.gõ https://shopee.vn vào trình duyệt và nhấn Enter
    bước 1.Request của Trung xuất phát từ laptop → đi qua router WiFi nhà trọ
    bước 2.→ Qua nhà mạng VNPT → hệ thống cáp quang
    bước 3.→ Đến data center của shopee ở Singapore
    bước 4.→ Server xử lý: "Trung muốn truy cập trang chủ Shopee"
    bước 5.→ Response chạy ngược lại: cáp quang → VNPT → router → laptop
    bước 6.→ Chrome nhận file HTML, CSS, JS → render ra giao diện → trung thấy trang chủ Shopee hiển thị
2.Trong DevTools của Chrome, tab Network cho thấy thông tin
    -screenshot/Status Code của request đầu tiên và Tổng thời gian load trang.PNG
    -screenshot/Một request trả về file CSS.PNG
Bài A2 nguồn tham khao(Chương 4)
Trang web bị đánh giá thấp vì không dùng thẻ semantic->google không hiểu cấu trúc trang và nội dung chính->Google đánh giá SEO thấp
1.<div class="header">-><header>
2.<div class="menu">-><nav>
3.<div class="main">-><main>
4.<div class="footer">-><footer>
Bài A3 nguồn tham khao(Chương 4)
Hộp 1 
Text A  Text B
Hộp 2
Text C  Text D
Hộp 3
<div> là khối chiếm cả dòng
<span> và <strong>  chỉ chiếm nội dung nên nằm trn cùng 1 dòng
Bài A4 nguồn tham khao(Chương 5)
<thead> là phần tiêu đề cột
<tbody> là phần dữ liệu chính 
<tfoot> là phân tổng kết
 KHÔNG NÊN dùng table để tạo layout trang web vì:
 1.<table> được thiết kế cho dữ liệu dạng bảng, không phải bố cục trang
 2.Hiệu năng kém(render toàn bộ bảng mới hiển thị)
 3.<table> thiếu linh hoạt(co giãn theo màn hình)
 Bài B3
Lỗi 1: Dòng 1 — <!DOCTYPE> sai cú pháp — Sửa thành <!DOCTYPE html>

Lỗi 2: Dòng 2 — Thiếu thuộc tính lang — Sửa thành <html lang="vi">

Lỗi 3: Dòng 4 — Thẻ <title> không đóng — Thêm </title>

Lỗi 4: Dòng 5 — charset viết sai "utf8" — Sửa thành "UTF-8"

Lỗi 5: Dòng 9 — Thẻ <h1> không đóng đúng — Sửa </h1>

Lỗi 6: Dòng 13 — Thẻ <a> không đóng — Sửa </a>

Lỗi 7: Dòng 13 — href="home" không đúng chuẩn anchor — 
Sửa thành href="#home"

Lỗi 8: Dòng 17 - Dùng <h3> không hợp lý (thiếu h1/h2 trước) — Sửa thành <h2>

Lỗi 9: Dòng 19 — Thiếu dấu ngoặc kép trong src — Sửa src="iphone.jpg"

Lỗi 10: Dòng 19 — Ảnh thiếu thuộc tính alt — Thêm alt="iPhone 16 Pro"

Lỗi 11: Dòng 21 — Thẻ <b> đóng sai thứ tự — Sửa thành <strong>...</strong>

Lỗi 12: Dòng 24 - Dùng <h3> không hợp lý (thiếu h1/h2 trước) — Sửa thành <h2>

Lỗi 13: Dòng 25 — Table thiếu <thead> và <tbody> — Bổ sung semantic đầy đủ

Lỗi 14: Dòng 34 — Dùng 2 thẻ <main> (sai semantic) — Đổi cái thứ 2 thành <aside>

Lỗi 15: Dòng 40 — Thẻ <p> trong footer không đóng — Thêm </p>

Lỗi 16: Dòng 43 — Thiếu đóng </html> — Bổ sung </html>
Bài B4
1.semantic HTML5
Thẻ 1: <header>
    Vị trí: Phần đầu trang (chứa logo, thanh tìm kiếm)
    Screenshot: screenshots/header.png
Thẻ 2: <footer>
    Vị trí: Cuối trang (thông tin công ty)
    Screenshot: screenshots/footer.png
Thẻ 3: <section>
    Vị trí: khu vực gợi ý tìm kiếm trên trang
    Screenshot: screenshots/section.png
2.table
Không tìm thấy do web thế giới di động sử dụng <div> thay vì <table>
3.form(ô tìm kiêm)
-Action và method
    action: https://www.thegioididong.com/tai-nghe?key=tai+nghe&sc=new
    method: GET
-Input types
    type="text" (ô tìm kiếm)
    type="submit" (nút tìm)
Câu C1
<header> <!-- header: phần đầu trang -->
    <nav> <!-- nav: điều hướng chính -->
        <a href="#">...</a>
        <a href="#">...</a>
        <a href="#">...</a>
    </nav>
</header>

<nav aria-label="breadcrumb"> <!-- nav: breadcrumb là điều hướng -->
    <ol> <!-- ol: có thứ tự -->
        <li><a href="#">...</a></li>
        <li><a href="#">...</a></li>
        <li>...</li>
    </ol>
</nav>

<main> <!-- main: nội dung chính -->

    <section> <!-- section: nhóm nội dung sản phẩm -->

        <article> <!-- article: 1 sản phẩm độc lập -->

            <section> <!-- section: khu vực ảnh -->
                <figure> <!-- figure: ảnh chính -->
                    <img src="#" alt="..."> <!-- img: hiển thị ảnh -->
                    <figcaption>...</figcaption> <!-- mô tả ảnh -->
                </figure>

                <figure> <!-- ảnh phụ -->
                    <img src="#" alt="...">
                </figure>

                <figure>
                    <img src="#" alt="...">
                </figure>

                <figure>
                    <img src="#" alt="...">
                </figure>

                <figure>
                    <img src="#" alt="...">
                </figure>
            </section>

            <section> <!-- section: thông tin sản phẩm -->
                <h1>...</h1> <!-- h1: tên sản phẩm -->
                <p><strong>...</strong></p> <!-- strong: nhấn mạnh giá -->
                <p>...</p> <!-- mô tả -->
            </section>

            <section> <!-- section: bảng thông số -->
                <table> <!-- table: dữ liệu dạng bảng -->
                    <thead> <!-- tiêu đề -->
                        <tr>
                            <th>...</th>
                            <th>...</th>
                        </tr>
                    </thead>
                    <tbody> <!-- dữ liệu -->
                        <tr>
                            <td>...</td>
                            <td>...</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section> <!-- section: đánh giá -->
                <article> <!-- article: 1 bình luận -->
                    <p>...</p>
                </article>

                <article>
                    <p>...</p>
                </article>
            </section>

        </article>

    </section>

    <aside> <!-- aside: nội dung phụ -->
        <article> <!-- sản phẩm tương tự -->
            <p>...</p>
        </article>

        <article>
            <p>...</p>
        </article>
    </aside>

</main>

<footer> <!-- footer: cuối trang -->
    <p>...</p>
</footer>
Câu C2
Đúng thật là <div> có thể chạy được cho mọi thứ,nhưng nó kém kỹ thuật hơn secmantic HTML.Đối với secmantic,nó có các thẻ như <header>, <main>, <article>, <nav>,.. đây là các công cụ tìm kiếm đọc cấu trúc trang giúp Google dễ xác định đâu là nội dung quan trọng,đâu là điều hướng.Nếu chỉ dùng <div>,phải sử dụng thêm class máy sẽ không hiểu rõ bằng secmantic.Các công cụ hỗ trợ như screen reader dựa vào semantic để đọc trang cho người khiếm thị.Ví dụ, khi gặp <nav>, họ biết đó là khu vực điều hướng; với <main>,họ có thể truy cập nội dung chính.Nếu chỉ dùng <div>, người dùng phải nghe toàn bộ trang theo thứ tự, gây khó chịu và kém hiệu quả.Ví du như là dùng dùng <div class="product">, nếu dùng <article> cho mỗi sản phẩm, bạn đang nói rõ “đây là một nội dung độc lập”. Điều này giúp cả SEO lẫn accessibility, và thậm chí code cũng dễ hiểu hơn khi bảo trì.Nhưng <div> vẫn có vai trò riêng.nó phù hợp với trình bày thông tin hoặc tạo kiểu,ví dụ chia cột bằng Flexbox/Grid, hoặc bọc một nhóm phần tử không có ý nghĩa ngữ nghĩa rõ ràng.Nên semantic HTML là cách viết code chuẩn,giúp trang web tốt hơn về lâu dài
Câu A1
< 768px  12 cột; box chồng dọc trên 1 cột, mỗi box chiếm 12 cột
768px - 991px 12 cột; 2 cột, 2 box trên một hàng, mỗi box chiếm 6 cột
≥ 992px 12 cột; 4 cột, tất cả 4 box trên cùng một hàng,mỗi box chiếm 3 cột
-col-md-6: nghĩa là khi màn hình ≥768px , phần tử sẽ chiếm 6/12 cột
Không cần viết col-sm-12 vì mặc định nếu không khai báo, các cột sẽ chiếm toàn bộ 12 cột ở kích thước nhỏ hơn Do đó, col-12 đã đảm bảo rằng ở màn hình nhỏ (<768px), mỗi box chiếm toàn bộ chiều ngang
Câu A2
1.
class d-none d-md-block
d-none: ẩn phần tử ở mọi kích thước màn hình
d-md-block: từ breakpoint md (≥768px) trở lên, phần tử hiển thị dạng block
->phần tử ẩn trên màn hình nhỏ (<768px), và hiện ra từ màn hình trung bình trở lên (≥768px)
2.
mt-3 → margin-top = 1rem (theo scale của Bootstrap).
px-4 → padding-left & padding-right = 1.5rem.
mb-auto → margin-bottom tự động chiếm khoảng trống còn lại.
ms-2 → margin-left (start) = 0.5rem.
py-5 → padding-top & padding-bottom = 3rem
3.
.container: có chiều rộng cố định theo từng breakpoint
.container-fluid: luôn chiếm 100% chiều rộng màn hình ở mọi kích thước
.container-md: giống .container-fluid ở màn hình nhỏ (<768px), nhưng từ breakpoint md trở lên thì có chiều rộng cố định như .container
Câu C1
Công cụ cần có
    Node.js + npm (hoặc yarn)
    Trình biên dịch SASS (ví dụ: sass hoặc dart-sass)
    Source code Bootstrap (không chỉ file CSS đã build, mà là file SCSS)
Cài đặt Bootstrap
    Tạo một file SCSS riêng, ví dụ custom.scss
    Trước khi import Bootstrap, override biến $primary:
    scss
    // custom.scss
    $primary: #E63946;
    @import "node_modules/bootstrap/scss/bootstrap";
Sau đó biên dịch SCSS thành CSS:
    sass custom.scss custom.css
    Dùng custom.css thay cho bootstrap.css mặc định.
Tại sao KHÔNG nên override trực tiếp .btn-primary { background: red; }
    Chỉ ảnh hưởng đến button: override .btn-primary chỉ đổi màu nền của nút, nhưng không đổi border, hover, focus, active, disabled… → giao diện không đồng bộ.
    Không tái sử dụng: các component khác (badge, alert, link, progress bar…) vẫn giữ màu xanh mặc định.
    Khó bảo trì: phải viết nhiều CSS thủ công cho từng component.
    Mất tính hệ thống: Bootstrap được thiết kế dựa trên hệ thống biến SASS. Override biến $primary sẽ đảm bảo toàn bộ hệ thống màu sắc đồng bộ, dễ nâng cấp và bảo trì.
Câu C2
Số dòng CSS
    CSS thuần:~60–80 dòng cho navbar + card	
    Bootstrap:~0 dòng (chỉ dùng class có sẵn)
Thời gian phát triển
	CSS thuần:Lâu hơn, phải viết và test responsive	
    Bootstrap:Nhanh, chỉ cần ghép class
Khả năng tùy biến
	CSS thuần:Rất linh hoạt, kiểm soát chi tiết	
    Bootstrap:Tùy biến qua SASS variables, nhưng khó thay đổi sâu nếu không build lại
NÊN dùng Bootstrap:Khi cần làm nhanh, đồng bộ, nhiều component sẵn có, dự án lớn nhiều người	
KHÔNG NÊN dùng Bootstrap:Khi dự án nhỏ, cần tối ưu hiệu năng, hoặc muốn thiết kế độc đáo không phụ thuộc framework	
Phần D link video:https://www.youtube.com/watch?v=r1OTCiDzcwg


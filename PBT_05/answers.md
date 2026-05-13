Câu A1
1.1<meta name="viewport" content="width=device-width, initial-scale=1.0">
    width=device-width: đặt viewport bằng chiều rộng thiết bị
    initial-scale=1.0:  tỉ lệ zoom khởi tạo = 1 (1 CSS px = 1 device px logical)
1.2Thiếu dòng này: iPhone giả định trang rộng 980px (như desktop) → thu nhỏ lại → chữ bé xíu → UX tệ.
1.3
mobile-first:CSS mặc định áp dụng cho mobile, sau đó dùng min-width để mở rộng cho màn hình lớn hơn.
/* Mặc định: mobile */
body {
  font-size: 14px;
  background: lightyellow;
}

/* Khi màn hình >= 768px (tablet/desktop) */
@media (min-width: 768px) {
  body {
    font-size: 18px;
    background: lightblue;
  }
}
Destop-first:CSS mặc định áp dụng cho desktop, sau đó dùng max-width để thu hẹp cho màn hình nhỏ hơn
/* Mặc định: desktop */
body {
  font-size: 18px;
  background: lightblue;
}

/* Khi màn hình <= 768px (tablet/mobile) */
@media (max-width: 768px) {
  body {
    font-size: 14px;
    background: lightyellow;
  }
}
Mobile-First được khuyên dùng vì Mobile tải ít CSS hơn (mobile chỉ tải mobile styles, không download desktop styles)->trang nhẹ nhanh hơn,Buộc bạn ưu tiên nội dung quan trọng trước (content thinking)->giúp thiết kế tập trung vào trải nghiêm cốt lõi,Google và performance tools đánh giá cao website tối ưu cho mobile
Câu A2
Mobile:	< 576px	,Thiết bị đại diện: iPhone SE, các điện thoại nhỏ
Mobile L:	≥ 576px	,Thiết bị đại diện: iPhone Plus, điện thoại ngang
Tablet:	≥ 768px	,Thiết bị đại diện: iPad dọc, tablet
Desktop:	≥ 992px	,Thiết bị đại diện: Laptop nhỏ
Desktop L:	≥ 1200px ,Thiết bị đại diện: Desktop, laptop lớn
Desktop XL:	≥ 1400px ,Thiết bị đại diện: Màn hình 4K, ultrawide
Câu A3
Chiều rộng màn hình	.container width
375px (iPhone SE)	100%
600px	540px
800px	720px
1000px	960px
1400px	1140px
Câu A4
-Variables ($primary-color)
  khai báo giá trị (màu, font, kích thước…) để tái sử dụng nhiều nơi
  VD:$primary-color: #3498db;
  button {
    background-color: $primary-color;
  }
-Nesting (viết CSS lồng nhau)
  Cho phép viết CSS theo cấu trúc phân cấp giống HTML, giúp code gọn và dễ đọc
  VD:
  nav {
    background: #333;

    ul {
      list-style: none;

      li {
        display: inline-block;

        a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }
-Mixins (@mixin, @include)
  Tạo nhóm thuộc tính có thể tái sử dụng nhiều lần, có thể truyền tham số
  VD:
  @mixin flex-center($direction: row) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: $direction;
  }

  .container {
    @include flex-center(column);
  }
-@extend / Inheritanc
  Cho phép một selector kế thừa thuộc tính của selector khác, tránh lặp lại code.
  VD:
  .message {
    padding: 10px;
    border-radius: 5px;
  }

  .success {
    @extend .message;
    background: #2ecc71;
  }

  .error {
    @extend .message;
    background: #e74c3c;
  }
-trình duyệt không đọc được file .scss vì :
  Trình duyệt chỉ hiểu CSS thuần, không hiểu cú pháp SCSS (biến, mixin, nesting…).
  SCSS là ngôn ngữ tiền xử lý (preprocessor), cần biên dịch sang CSS trước khi chạy.
-cách chuyển scss->css
  1.Cài đặt Sass (qua npm hoặc CLI):npm install -g sass
  2.Biên dịch file:sass style.scss style.css
  3.Link file CSS đã biên dịch vào HTML:<link rel="stylesheet" href="style.css">
Câu B3 lệnh compile: sass scss/style.scss style.css
Câu C1
-Navigation thay đổi
  Mobile (375px): thu gọn thành hamburger menu ☰, các mục chính ẩn trong dropdown
  Tablet (768px): hiện menu ngang cơ bản, nhưng vẫn có một số mục gộp trong dropdown
  Desktop (1440px): menu ngang đầy đủ, có thêm thanh sub-nav (chuyên mục)
-Lưới content thay đổi
  Mobile (375px):  hiển thị 1 cột dọc
  Tablet (768px): hiển thị 1 cột
  Desktop (1440px): hiển thị 3–4 cột tùy khu vực (tin chính, tin phụ, sidebar)
-Elements bị ẩn trên mobile: thanh quảng cáo, sidebar phụ, một số block tin phụ
-Font size thay đổi
  Mobile (375px): 14px
  Tablet (768px): 16px
  Desktop (1440px): 18px
Câu C2
Mobile (<768px)
Header: logo + nút gọi điện (click-to-call).
Hero image: full width.
Grid món ăn: 1 cột (6 ảnh xếp dọc).
Form đặt bàn: nằm dưới grid, full width.
Bản đồ Google Maps: dưới form, full width.
Footer: cuối trang.
Ẩn: sidebar, quảng cáo, các phần phụ.
Tablet (768–1023px)
Header: logo + số điện thoại ngang.
Hero image: full width.
Grid món ăn: 2 cột (3 hàng).
Form đặt bàn: nằm dưới grid, full width.
Bản đồ: dưới form, full width.
Footer: cuối trang.
Desktop (≥1024px)
Header: logo bên trái, số điện thoại bên phải.
Hero image: full width.
Layout chính: chia 2 cột:
Trái: Grid món ăn (3 cột, 2 hàng).
Phải: Form đặt bàn + bản đồ.
Footer: full width.
Có thể thêm sidebar nhỏ (khuyến mãi, banner).
D:link video https://www.youtube.com/watch?v=2ALYo0SoGSY
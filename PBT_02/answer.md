Câu A1
type="email" → Ô nhập text, tự động kiểm tra định dạng email (phải có ký tự @ và tên miền) → Use case: dùng cho Form đăng ký tài khoản hoặc nhận newsletter
type="password" → Ô nhập text, ký tự hiển thị dưới dạng dấu chấm hoặc sao → Use case: dùng cho đăng nhập hoặc thiết lập tài khoản khách hàng
type="number" → Ô nhập số, có nút tăng/giảm → Use case: Chọn số lượng sản phẩm trong giỏ hàng
type="tel" → Ô nhập text, trên mobile hiển thị bàn phím số → Use case: Nhập số điện thoại để liên hệ giao hàng
type="url" → Ô nhập text,kiểm tra định dạng URL hợp lệ (http:// hoặc https://) → Use case: Cho phép khách nhập link website công ty khi đăng ký tài khoản doanh nghiệp
type="date" → Bộ chọn ngày (calendar picker) → Use case: Chọn ngày giao hàng mong muốn hoặc nhập ngày sinh
type="time" → Bộ chọn giờ/phút → Use case: Chọn khung giờ giao hàng
type="range" → Thanh trượt (slider),giá trị nằm trong khoảng min/max → Use case: Lọc sản phẩm theo khoảng giá
type="color" → Bộ chọn màu (color picker) theo giá trị màu hợp lệ → Use case: Cho phép khách chọn màu sản phẩm
Câu A2
Trường hợp 1:User để trống->trình duyệt chẵn submit hiển thị thông báo "Please fill out this field"
    do thuộc tính required bắt buộc phải có dữ liệu, nhưng value="" nghĩa là rỗng. Form không hợp lệ
Trường hợp 2:User gõ "abc" → Trình duyệt sẽ chặn Submit hiển thị thông báo "please include an '@' in the email address"
    do type="email" yêu cầu định dạng email hợp lệ (phải có @ và domain). Chuỗi "abc" không khớp định dạng nên bị báo lỗi
Trường hợp 3:User gõ 15 → Trình duyệt sẽ chặn Submit hiên thị thông báo"Value must be less than or equal to 10"
    do type="number" hợp lệ về mặt kiểu dữ liệu, nhưng giá trị nằm ngoài khoảng min=1 và max=10. Vi phạm ràng buộc nên không hợp lệ
Trường hợp 4:User gõ "abc123" → Trình duyệt sẽ chặn Submit hiển thị thông báo "please match the requested format"
    do Thuộc tính pattern="[0-9]{10}" yêu cầu chuỗi phải gồm 10 chữ số liên tiếp. "abc123" chứa ký tự chữ và chỉ có 3 chữ số, không khớp pattern
trường hợp 5:User gõ "123" → Trình duyệt sẽ chặn Submit hiển thị thông báo"please lengthen this text to 8 characters or more"
    do minlength="8" yêu cầu ít nhất 8 ký tự. Chuỗi "123" chỉ có 3 ký tự, không đạt yêu cầu
Câu A3
    1.Screen reader dựa vào mối liên kết giữa <label> và input để đọc tên trường cho người dùng khi họ focus vào ô nhập
    2.Dùng <fieldset> và <legend> khi có nhóm các input liên quan để tạo ngữ cảnh rõ ràng
    ví dụ:Nhóm thông tin thanh toán
    3.Dùng aria-label khi không thể hiển thị <label> trực quan nhưng vẫn cần mô tả cho screen reader.Không nên dùng aria-label khi đã có <label>
    vì sẽ thừa và gây xung đột.
Câu A4
1.Ý nghĩa:Trình duyệt sẽ trì hoãn việc tải ảnh cho đến khi ảnh sắp xuất hiện trong vùng nhìn thấy (viewport).Giúp cải thiện thời gian tải trang và tiết kiệm băng thông.
Không nên dùng với ảnh trang trí đầu trang(hero,logo,ảnh đầu trang,... ),ảnh quan trọng của SEO
2.nên cung cấp nhiều <source> trong thẻ <video> vì các trình duyệt khác nhau hỗ trợ định dạng video khác nhau. Nếu chỉ có một định dạng, video có thể không phát được.
    3 format phổ biến:
        1.mp4
        2.WebM
        3.Ogg
3.Thuộc tính alt trên <img> dùng để cung cấp mô tả thay thế cho ảnh khi ảnh không hiển thị,Screen reader đọc nội dung,giúp SEO hiểu nội dung ảnh.
    alt tốt cho 3 trường hợp:
        1.Ảnh sản phẩm iphone 16 <img src="iphone16.jpg" alt="iPhone 16 Pro Max 256GB màu Titan">
        2.Ảnh trang trí(decorative)<img src="decor.jpg" alt="">
        3.Ảnh biểu đồ doanh thu Q1/2026 <img src="chart-q1-2026.png" alt="Biểu đồ doanh thu quý 1 năm 2026 tăng 15% so với cùng kỳ">
Câu A5
    So sánh <figure> và <img>
    <img>
        Chỉ dùng để hiển thị ảnh
        Có thể kèm alt để mô tả cho screen reader và SEO
        Không có ngữ nghĩa bổ sung,chỉ là phần tử hình ảnh đơn lẻ
    <figure>
        Dùng để nhóm ảnh với chú thích liên quan
        Giúp người dùng (cả sighted và screen reader) hiểu rõ ngữ cảnh của ảnh
        Ngữ nghĩa HTML rõ ràng: ảnh + mô tả đi kèm
        Hữu ích cho nội dung cần giải thích hoặc có giá trị thông tin (sản phẩm, dữ liệu, biểu đồ)
Cách 1 dùng khi ảnh chỉ mang tính minh họa đơn giản, không cần chú thích hiển thị,thông tin đã có trong văn bản xung quanh hoặc alt là đủ
Cách 2 dùng khi ảnh cần chú thích rõ ràng, bổ sung thông tin cho người dùng,ảnh là nội dung chính (sản phẩm, dữ liệu, biểu đồ).
Câu C1
Lỗi 1: Dòng 1 —thiếu action và method, làm form không rõ đích và phương thức gửi. Sửa: <form action="/submit" method="post">
Lỗi 2: Dòng 2 — Input "Tên" không có và không có id/name/required (vi phạm accessibility và không gửi dữ liệu). Sửa: <label for="name">Tên:</label>
<input type="text" id="name" name="name" required>


Lỗi 3: Dòng 4 — type="email" thiếu id/name và required, cũng thiếu autocomplete. Sửa: <label for="email">Email:</label>
<input type="email" id="email" name="email" required>


Lỗi 4: Dòng 6 — Mật khẩu đầu thiếu id/name/validation (minlength/pattern) và autocomplete nên là new-password. Sửa: <label for="password">Mật khẩu:</label> 
<input type="password" id="password" name="password" minlength="8" required>


Lỗi 5: Dòng 7 — Trường "Nhập lại mật khẩu" thiếu id/name/required (HTML không tự kiểm tra khớp password), cần đặt id/name và thông báo; việc so khớp cần JS phía client/server. Sửa: <label for="confirm-password">Nhập lại mật khẩu:</label>
<input type="password" id="confirm-password" name="confirm-password" minlength="8" required>


Lỗi 6: Dòng 9 — Phone dùng type="text" với value tiền điền (có thể lộ dữ liệu) và thiếu name/pattern. Sửa: <label for="phone">Số điện thoại:</label>
<input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required>


Lỗi 7: Dòng 11 — thiếu , name và các thiếu value; thiếu tùy chọn mặc định/disabled để bắt người dùng chọn. Sửa: <label for="city">Thành phố:</label>
<select id="city" name="city" required>
  <option value="">--Chọn thành phố--</option>
  <option value="hanoi">Hà Nội</option>
  <option value="hcm">TP.HCM</option>
</select>


Lỗi 8: Dòng 16-18 — "Tôi đồng ý điều khoản" không chứa hoặc không tham chiếu for, nên checkbox thiếu; cũng cần required. Sửa: <label>
  <input type="checkbox" name="terms" required>
  Tôi đồng ý điều khoản
</label>
Câu C2
1.regex patterns: CMND/CCCD (12 chữ số): pattern="^\d{12}$" Số tài khoản (10–15 chữ số): pattern="^\d{10,15}$" 
2.HTML5 validation không đủ an toàn cho tài khoản ngân hàng:
    HTML5 validation chỉ chạy trên trình duyệt phía client. Người dùng có thể tắt JavaScript, chỉnh sửa DOM, hoặc gửi request trực tiếp qua công cụ như Postman
3.3 loại validation mà HTML5 KHÔNG THỂ làm được:
    1.Kiểm tra dữ liệu trùng lặp hoặc tồn tại(kiểm tra email/số tài khoản đã tồn tại)
    2.Logic phức tạp giữa nhiều trường(không có cơ chế so sánh giá trị giữa các input)
    3.Kiểm tra theo quy tắc nghiệp vụ động(không thể xử lý logic nghiệp vụ tuỳ biến)
4.2 rủi ro bảo mật nếu chỉ validate trên Frontend
    1.Injection dữ liệu độc hại :Người dùng có thể bỏ qua validation và gửi dữ liệu chứa SQL injection, XSS, hoặc payload nguy hiểm,Backend nếu không kiểm tra sẽ bị tấn công
    2.Giả mạo request:Hacker có thể gửi trực tiếp request HTTP với dữ liệu sai định dạng hoặc vượt giới hạn (ví dụ số tài khoản 50 chữ số),Nếu Backend không validate, hệ thống có thể lưu dữ liệu rác hoặc bị khai thác
Phần D link video https://www.youtube.com/watch?v=TQHOU51FfB0&t=18s

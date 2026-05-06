Câu A1
Position-Vẫn chiếm chỗ trong flow?=Tham chiếu vị trí=Cuộn theo trang?-Use case
static-✅-Mặc định-✅-Mặc định — không cần viết
relative-✅- vị trí GỐC-✅-Làm anchor cho absolute con, dịch nhẹ
absolute-❌-Bám vào cha RELATIVE gần nhất-❌-Badge, dropdown, tooltip, overlay
fixed-❌-Bám vào VIEWPORT-❌-Chat button, cookie banner, header cố định
sticky-✅→❌-Bình thường → dính khi scroll-phần top-Sticky header, sticky table header, sidebar
Câu A2
Trường hợp 1
[item1][item2][item3][item4]
Trường hợp 2
[item1][item2]
[item3][item4]
[item5][item6]
Trường hợp 3
[item1]     [item2]     [item3]
Trường hợp 4
200px       1fr         200px
[item1]     [item2]     [item3]
Trường hợp 5
[item1][item2][item3]
[item4][item5][item6]
[item7]
Câu C1
1.Navigation bar ngang (logo + menu + buttons):Dùng flexbox vì mạnh về sắp xếp 1 chiều,Navgation bar chỉ cần căn logo trái, menu giữa, nút phải.
2.Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước):Dùng grid vì Grid phù hợp cho bố cục nhiều chiều,tự động chia thành 3 cột đều nhau
3.Layout blog: main content + sidebar:Kết hợp cả 2 vì Grid để chia bố cục tổng thể,Flexbox bên trong main căn chỉnh bài viết,hình ảnh,nút
4.Footer với 4 cột thông tin (Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ):Dùng grid vì Footer có nhiều cột cố định,Grid giúp chia đều
5.Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy):Dùng flexbox vì ta có thể xếp các phần tử bên trong theo chiều dọc,đặt nút xướng dưới đáy card.
Câu C2
Lỗi 1: Cards không đều chiều cao — nút "Mua" bị nhảy lên/xuống
nguyên nhân:.card chỉ có width và margin, không có cơ chế căn chỉnh nội dung theo chiều dọc,Nút "Mua" không được đẩy xuống đáy, nên khi nội dung text dài/ngắn khác nhau, nút sẽ nhảy lên/xuống.
Lỗi 2: Muốn items nằm giữa cả ngang lẫn dọc trong container 100vh, nhưng item vẫn dính góc trái trên
nguyên nhân:.hero đã display:flex; nhưng chưa có justify-content và align-items,Mặc định flex items sẽ nằm ở góc trái trên.
Lỗi 3: Sidebar bị co lại khi content quá dài
nguyên nhân:.layout { display:flex; } → các phần tử con co giãn theo nội dung,.sidebar { width:250px; } nhưng không chặn co giãn, nên khi nội dung dài, sidebar có thể bị ép nhỏ.
video :https://www.youtube.com/watch?v=KyGkep6aYZU
API đã dùng
- [wttr.in](https://wttr.in/Hanoi?format=j1) — lấy dữ liệu thời tiết hiện tại
- [Open-Meteo](https://api.open-meteo.com/v1/forecast?latitude=21.03&longitude=105.85&current_weather=true) — dự phòng

Cách chạy
1. Clone repo hoặc copy folder `weather_app/`
2. Mở file `index.html` trong trình duyệt (không cần server)
3. Nhập tên thành phố → bấm nút **Tìm**
4. App sẽ hiển thị:
   - Loading state (spinner + "Đang tải...")
   - Success state (nhiệt độ, độ ẩm, mô tả, icon)
   - Error state (thông báo lỗi nếu API fail)
5. Lịch sử tìm kiếm được lưu vào LocalStorage (tối đa 5 thành phố gần nhất)

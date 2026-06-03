APIs đã dùng
- [JSONPlaceholder Users](https://jsonplaceholder.typicode.com/users)
- [Open-Meteo Weather](https://api.open-meteo.com/v1/forecast)
- [REST Countries](https://restcountries.com/v3.1/all)

Cách chạy
1. Mở `index.html` trong trình duyệt
2. App sẽ gọi song song 3 APIs bằng `Promise.allSettled`
3. Mỗi widget hiển thị trạng thái riêng (loading/success/error)
4. Nút **Refresh All** để gọi lại APIs
5. Hiển thị thời gian fetch: `Data loaded in X ms`

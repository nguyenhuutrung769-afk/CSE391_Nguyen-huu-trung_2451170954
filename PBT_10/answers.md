Câu A1
1 - Start (synchronous)
4 - End (synchronous)
3 - Promise (microtask)
6 - Promise 2 (microtask tiếp theo)
2 - Timeout 0ms (macrotask, sau khi microtask queue rỗng)
7 - Nested timeout (được lên lịch trong microtask, chạy ở vòng macrotask kế tiếp)
5 - Timeout 100ms (sau ~100ms, macrotask)
Call Stack: chạy code đồng bộ trước (Start, End).
Microtask Queue: chứa Promise callbacks. Sau khi stack rỗng, toàn bộ microtasks được xử lý trước khi quay sang macrotask.
Macrotask Queue: chứa setTimeout, setInterval, I/O… Mỗi vòng lặp event loop sẽ chạy hết microtasks rồi mới lấy 1 macrotask.
Câu A2
await fetch("https://api.example.com/data")
    fetch trả về một Promise chứa đối tượng Response.Nếu không await, ta sẽ nhận Promise chưa resolve.Cần await để chờ request hoàn tất và lấy Response thực tế
response.ok
    Là boolean, true nếu status code nằm trong khoảng 200–299.false khi status code ngoài khoảng này.
    Ví dụ status codes khiến ok = false:
    404 Not Found
    500 Internal Server Error
    403 Forbidden
await response.json()
    response.json() cũng trả về Promise vì việc parse JSON là bất đồng bộ.Cần await để lấy dữ liệu đã parse thành object JS.Nếu JSON không hợp lệ → Promise reject.
try...catch
    Bắt các lỗi trong khối try.Các lỗi có thể xảy ra:
    Network error (mất kết nối, DNS fail) → fetch reject.
    HTTP error (404, 500…) → ta chủ động throw khi !response.ok.
    JSON parse error (server trả về dữ liệu không phải JSON) → response.json() reject.
Câu A3
            pending
                l
                l
            ____l____
            l       l
            l       l
            l       l
        Fulfilled   Rejected
Callback Hell xảy ra khi ta lồng nhiều callback bất đồng bộ vào nhau, dẫn đến code khó đọc, khó bảo trì.
ví dụ
getUser(1, user => {
  getPosts(user.id, posts => {
    getComments(posts[0].id, comments => {
      getLikes(comments[0].id, likes => {
        console.log("Likes:", likes);
      });
    });
  });
});
4 cấp callback hell → Refactor thành async/await.
async function showLikes() {
  try {
    const user = await getUser(1);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    const likes = await getLikes(comments[0].id);
    console.log("Likes:", likes);
  } catch (err) {
    console.error("Error:", err);
  }
}

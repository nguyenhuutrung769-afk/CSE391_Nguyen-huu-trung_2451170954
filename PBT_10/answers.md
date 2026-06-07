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
Câu C1
Network errors (mất mạng giữa chừng) → Xử lý:
  Hiện thông báo “Không có kết nối mạng, vui lòng thử lại”.Cho phép người dùng retry thủ công hoặc tự động sau vài giây.
  Ví dụ:
  try {
    const res = await fetch("https://api.example.com/products");
  } catch (err) {
    ui.showError("Network error. Please check your connection.");
  }

API errors (server trả 500, 404, 429 Too Many Requests) → Xử lý từng loại:
  500 Internal Server Error → Hiện thông báo “Server đang gặp sự cố, thử lại sau”.
  404 Not Found → Hiện “Dữ liệu không tồn tại”.
  429 Too Many Requests → Hiện “Bạn đã gửi quá nhiều request, vui lòng chờ”.
  Ví dụ:
  const res = await fetch("https://api.example.com/products");
  if (!res.ok) {
    switch(res.status) {
      case 404: throw new Error("Not Found");
      case 500: throw new Error("Server Error");
      case 429: throw new Error("Too Many Requests");
      default: throw new Error(`HTTP ${res.status}`);
    }
  }
Timeout (API chậm > 10 giây) → Viết code fetchWithTimeout(url, ms)
  function fetchWithTimeout(url, ms) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), ms);
    return fetch(url, { signal: controller.signal })
      .finally(() => clearTimeout(timeout));
  }

  try {
    const res = await fetchWithTimeout("https://api.example.com/products", 10000);
  } catch (err) {
    if (err.name === "AbortError") {
      ui.showError("Request timed out after 10s");
    }
  }

Retry logic (thử lại 3 lần nếu lỗi network) → Viết code fetchWithRetry(url, maxRetries)
  async function fetchWithRetry(url, maxRetries=3) {
    for (let i=0; i<maxRetries; i++) {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      } catch (err) {
        if (i === maxRetries-1) throw err;
        console.warn(`Retrying... (${i+1})`);
      }
    }
  }

  try {
    const data = await fetchWithRetry("https://api.example.com/products", 3);
  } catch (err) {
    ui.showError("Failed after 3 retries: " + err.message);
  }
Câu C2
Promise.all():
  Khi nào resolve:Khi tất cả promises thành công
  Khi nào reject:Khi một promise reject
  Use case:Dùng khi cần tất cả dữ liệu (ví dụ load giỏ hàng + user + coupon)
Promise.allSettled():
  Khi nào resolve:Khi tất cả promises hoàn tất (fulfilled hoặc rejected)
  Khi nào reject:Không bao giờ reject toàn bộ, chỉ trả kết quả từng promise
  Use case:Dùng khi muốn hiển thị widget riêng, 1 API lỗi không ảnh hưởng API khác
Promise.race():
  Khi nào resolve:Resolve/reject theo promise đầu tiên hoàn tất
  Khi nào reject:Theo promise đầu tiên (fulfilled hoặc rejected)
  Use case:Dùng cho timeout race: lấy kết quả nhanh nhất hoặc dừng khi timeout
Promise.any():
  Khi nào resolve:Resolve khi có ít nhất 1 promise fulfilled
  Khi nào reject:Reject khi tất cả promises reject
  Use case:Dùng khi có nhiều nguồn dữ liệu, chỉ cần 1 nguồn thành công
Ví dụ:
Promise.all([
  fetch("/api/cart").then(r=>r.json()),
  fetch("/api/user").then(r=>r.json()),
  fetch("/api/coupon").then(r=>r.json())
]).then(([cart,user,coupon])=>{
  renderCheckout(cart,user,coupon);
}).catch(err=>ui.showError("Failed to load checkout: "+err.message));

Promise.allSettled([
  fetch("/api/users").then(r=>r.json()),
  fetch("/api/weather").then(r=>r.json()),
  fetch("/api/countries").then(r=>r.json())
]).then(results=>{
  results.forEach((res,i)=>{
    if(res.status==="fulfilled") renderWidget(i,res.value);
    else renderWidgetError(i,res.reason);
  });
});

Promise.race([
  fetch("/api/products").then(r=>r.json()),
  new Promise((_,reject)=>setTimeout(()=>reject(new Error("Timeout")),5000))
]).then(data=>renderProducts(data))
  .catch(err=>ui.showError(err.message));

Promise.any([
  fetch("/api/products-source1").then(r=>r.json()),
  fetch("/api/products-source2").then(r=>r.json()),
  fetch("/api/products-source3").then(r=>r.json())
]).then(data=>renderProducts(data))
  .catch(err=>ui.showError("All sources failed"));
Phần D link video:https://www.youtube.com/watch?v=YPULlTxQkgo
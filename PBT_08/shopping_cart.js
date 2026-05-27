function createCart() {
    // Private data
    let items = [];
    
    return {
        // Thêm sản phẩm (nếu đã có → tăng quantity)
        addItem(product, quantity = 1) {
            const existing = items.find(it => it.product.id === product.id);
            if (existing) {
                existing.quantity += quantity;
            } else {
                items.push({ product, quantity });
            }
        },
        // Xóa sản phẩm theo id
        removeItem(productId) {
            items = items.filter(it => it.product.id !== productId);
        },
        
        // Cập nhật số lượng
        updateQuantity(productId, newQuantity) {
            const item = items.find(it => it.product.id === productId);
            if (item) {
                item.quantity = newQuantity;
            }
        },
        
        // Tính tổng tiền
        getTotal() {
            let total = items.reduce((sum, it) => sum + it.product.price * it.quantity, 0);
            let discountAmount = total * discount / 100 + discountFlat;
            return total - discountAmount;
        },
        
        // Áp dụng mã giảm giá
        applyDiscount(code) {
            discount = 0;
            discountFlat = 0;
            if (code === "SALE10") discount = 10;
            else if (code === "SALE20") discount = 20;
            else if (code === "FREESHIP") discountFlat = 30000;
        },
        // Codes: "SALE10" → -10%, "SALE20" → -20%, "FREESHIP" → -30000
        
        // In giỏ hàng dạng bảng
        printCart() {
            console.log("┌──────────────────────────────────────────────┐");
            console.log("│ # │ Sản phẩm      │ SL │ Đơn giá     │ Tổng        │");
            items.forEach((it, idx) => {
                const { product, quantity } = it;
                const lineTotal = product.price * quantity;
                console.log(
                    `│ ${idx+1} │ ${product.name.padEnd(12)} │ ${String(quantity).padStart(2)} │ ${product.price.toLocaleString("vi-VN")}  │ ${lineTotal.toLocaleString("vi-VN")}  │`
                );
            });
            console.log("├──────────────────────────────────────────────┤");
            const total = items.reduce((sum, it) => sum + it.product.price * it.quantity, 0);
            const discountAmount = total * discount / 100 + discountFlat;
            const finalTotal = total - discountAmount;
            console.log(`│ Tổng cộng: ${total.toLocaleString("vi-VN")}đ │`);
            console.log(`│ Giảm giá:  ${discountAmount.toLocaleString("vi-VN")}đ │`);
            console.log(`│ THANH TOÁN: ${finalTotal.toLocaleString("vi-VN")}đ │`);
            console.log("└──────────────────────────────────────────────┘");
        },
        // Lấy tổng số sản phẩm (tổng quantity)
        getItemCount() {
            return items.reduce((sum, it) => sum + it.quantity, 0);
        },
        
        // Xóa toàn bộ giỏ
        clearCart() {
            items = [];
            discount = 0;
            discountFlat = 0;
        }
    };
}

// === TEST ===
const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1); // Tăng lên 2

cart.printCart();

cart.applyDiscount("SALE10");
cart.printCart();

console.log("Số SP:", cart.getItemCount()); // → 4
cart.removeItem(3);
console.log("Sau xóa:", cart.getItemCount()); // → 2
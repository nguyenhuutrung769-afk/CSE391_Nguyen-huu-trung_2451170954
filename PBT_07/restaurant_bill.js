function tinhHoaDon(items, tipPercent = 0) {
    let tong = 0;

    console.log("╔══════════════════════════════════════╗");
    console.log("║        HÓA ĐƠN NHÀ HÀNG              ║");
    console.log("╠══════════════════════════════════════╣");

    items.forEach((item, idx) => {
        let lineTotal = item.price * item.qty;
        tong += lineTotal;
        console.log(
            `║ ${idx+1}. ${item.name.padEnd(10)} x${item.qty}    @${item.price}k  = ${lineTotal}k  ║`
        );
    });

    console.log("╠══════════════════════════════════════╣");

    let discountPercent = 0;
    if (tong > 1000) discountPercent = 15;
    else if (tong > 500) discountPercent = 10;

    let today = new Date();
    if (today.getDay() === 3) {
        discountPercent += 5;
    }

    let giamGia = tong * discountPercent / 100;
    let sauGiam = tong - giamGia;

    let vat = sauGiam * 0.08;

    let tip = sauGiam * tipPercent / 100;

    let thanhToan = sauGiam + vat + tip;

    console.log(`║ Tổng cộng:              ${tong*1000}đ    ║`);
    console.log(`║ Giảm giá (${discountPercent}%):     ${giamGia*1000}đ    ║`);
    console.log(`║ VAT (8%):                ${vat*1000}đ    ║`);
    console.log(`║ Tip (${tipPercent}%):             ${tip*1000}đ    ║`);
    console.log("╠══════════════════════════════════════╣");
    console.log(`║ THANH TOÁN:              ${thanhToan*1000}đ   ║`);
    console.log("╚══════════════════════════════════════╝");
}

const items = [
    { name: "Phở bò", price: 65, qty: 2 },
    { name: "Trà đá", price: 5, qty: 3 },
    { name: "Bún chả", price: 55, qty: 1 },
];

tinhHoaDon(items, 5);

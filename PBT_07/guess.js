(function() {
    const secret = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    const maxAttempts = 7;
    const guessedNumbers = [];

    while (attempts < maxAttempts) {
        let input = prompt(`Lần ${attempts+1}/${maxAttempts}: Nhập số từ 1-100`);
        if (input === null) {
            alert("Bạn đã thoát game.");
            return;
        }

        let guess = Number(input);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Lỗi: Chỉ chấp nhận số từ 1-100!");
            continue;
        }

        if (guessedNumbers.includes(guess)) {
            alert("Bạn đã đoán số này rồi!");
            continue;
        }
        guessedNumbers.push(guess);

        attempts++;

        if (guess === secret) {
            alert(`Đúng rồi! Bạn đoán đúng sau ${attempts} lần!`);
            return;
        } else if (guess < secret) {
            alert("Cao hơn!");
        } else {
            alert("Thấp hơn!");
        }
    }

    alert(`Bạn đã thua! Đáp án là ${secret}`);
})();

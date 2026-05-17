const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

// Hàm tính điểm TB
function calcAverage(stu) {
    return stu.math * 0.4 + stu.physics * 0.3 + stu.cs * 0.3;
}

// Hàm xếp loại
function classify(avg) {
    if (avg >= 8.0) return "Giỏi";
    else if (avg >= 6.5) return "Khá";
    else if (avg >= 5.0) return "Trung bình";
    else return "Yếu";
}

// In bảng kết quả
console.log("| STT | Tên    | TB   | Xếp loại    |");
console.log("|-----|--------|------|-------------|");

let counts = { "Giỏi": 0, "Khá": 0, "Trung bình": 0, "Yếu": 0 };
let maxStu = null, minStu = null;
let sumMath = 0, sumPhysics = 0, sumCS = 0;

for (let i = 0; i < students.length; i++) {
    let s = students[i];
    let avg = calcAverage(s);
    let cls = classify(avg);

    console.log(`| ${i+1}   | ${s.name.padEnd(6)} | ${avg.toFixed(1)}  | ${cls.padEnd(11)} |`);

    counts[cls]++;

    if (maxStu === null || avg > maxStu.avg) maxStu = { name: s.name, avg };
    if (minStu === null || avg < minStu.avg) minStu = { name: s.name, avg };

    sumMath += s.math;
    sumPhysics += s.physics;
    sumCS += s.cs;
}

console.log("\nSố SV mỗi xếp loại:");
for (let k in counts) {
    console.log(`${k}: ${counts[k]}`);
}

console.log(`\nSV điểm cao nhất: ${maxStu.name} (${maxStu.avg.toFixed(1)})`);
console.log(`SV điểm thấp nhất: ${minStu.name} (${minStu.avg.toFixed(1)})`);

console.log(`\nĐiểm TB toàn lớp:`);
console.log(`Math: ${(sumMath / students.length).toFixed(1)}`);
console.log(`Physics: ${(sumPhysics / students.length).toFixed(1)}`);
console.log(`CS: ${(sumCS / students.length).toFixed(1)}`);

let sumM = 0, countM = 0, sumF = 0, countF = 0;
for (let s of students) {
    let avg = calcAverage(s);
    if (s.gender === "M") { sumM += avg; countM++; }
    else { sumF += avg; countF++; }
}
console.log(`\nĐiểm TB Nam: ${(sumM / countM).toFixed(1)}`);
console.log(`Điểm TB Nữ: ${(sumF / countF).toFixed(1)}`);

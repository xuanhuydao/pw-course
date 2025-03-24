function CalculateBMI(height, weight) {
    const bmi = weight / (height * height);

    if (bmi < 18.5) return "Thừa cân";
    else if (bmi < 25) return "Bình thường";
    else if (bmi < 30) return "Thừa cân";
    else return "Béo phì";
}

const height = 1.7;
const weight = 60;
let tinhTrang = CalculateBMI(height, weight);
console.log(tinhTrang);
let user = {
    name: "Huy",
    address: "Nam Định",
    age: 25,
    isMale: true,
    school: {
        name: "HUMG",
        major: "IT"
    }
}

console.log("Tên:", user.name);
console.log("Địa chỉ:", user["address"]);

user.name = "huyy";
console.log("Tên:", user.name);
console.log("Khoa:", user.school.major);
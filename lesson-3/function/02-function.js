let users = [
    { name: "Xuan Huy", email: "daoxuanhuy2004@gmail.com" },
    { name: "Huy Huy", email: "xuanhuy@gmail.com" }
]

function UpdateEmail(name, newEmail) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name == name) {
            users[i].email = newEmail;
            console.log(`Email của ${users[i].name} đã được thay đổi thành ${users[i].email}`);            
        }
    }
}
const name = "Xuan Huy";
const newEmail = "huyhuy@gmail.com";

UpdateEmail(name, newEmail)
console.log(users);
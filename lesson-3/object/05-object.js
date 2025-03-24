function changeReference(obj) {
    obj = { name: "Completely New Object" };
    obj.name = "Completely New Object";
}

let anotherPerson = { name: "Original" };
changeReference(anotherPerson);
console.log(anotherPerson.name); // "Original" (không thay đổi)

"use strict";
let st1 = new Student("Robin", "Overal");
st1.firstname = "Robin";
st1.lastname = "Overal";
st1.salary = 10;
st1.gender = Gender.Unspecified;
st1.raise();
st1.punish(50);
console.log(st1.salary);
console.log(st1.toString());
let studentList = [];
studentList.push(st1);
var st2 = new Student("David", "Westerink");
st2.photoname = "tiger.jpg";
st2.salary = 3000;
st2.punish(75);
st2.age = 38;
studentList.push(st2);
var st3 = new Student("Robbin", "Wassing");
st3.photoname = "sheep.jpg";
st3.salary = 2700;
st3.raise;
st3.age = 35;
studentList.push(st3);
console.table(studentList);
function init() {
    let title = document.getElementById("title");
    title.innerHTML = "Er zijn " + studentList.length + " studenten";
    let table = document.getElementById("studentsTable");
    for (let s of studentList) {
        table.append(s.toTableRow());
    }
}

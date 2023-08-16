"use strict";
class Student {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.studentid = 0;
        this.age = null;
        this.gender = Gender.Unspecified;
        this.salary = 0;
        this.photoname = "lion.jpg";
        Student.counter++;
        this.studentid = Student.counter;
    }
    raise() {
        this.salary *= 1.1;
    }
    punish(amount) {
        this.salary -= amount;
    }
    toString() {
        return `${this.firstname} ${this.lastname} - ${Gender[this.gender]}`;
    }
    toTableRow() {
        let row = document.createElement("tr");
        row.className = "student";
        let cell1 = document.createElement("td");
        cell1.innerHTML = this.studentid.toString();
        row.append(cell1);
        let cell2 = document.createElement("td");
        cell2.innerHTML = this.firstname;
        row.append(cell2);
        let cell3 = document.createElement("td");
        cell3.innerHTML = this.lastname;
        row.append(cell3);
        let cell4 = document.createElement("td");
        let plaatje = document.createElement("img");
        plaatje.src = "https://xanderwemmers.nl/" + this.photoname;
        plaatje.height = 100;
        cell4.append(plaatje);
        row.append(cell4);
        return row;
    }
}
Student.counter = 0;
Student.minimumAge = 18;
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["Unspecified"] = 2] = "Unspecified";
})(Gender || (Gender = {}));

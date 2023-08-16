class Student
{
    // Er is een gedeelde waarde voor het totaal aantal
    static counter: number = 0;
    static minimumAge = 18;

    studentid: number = 0;
    
    age: number | null = null;
    gender: Gender = Gender.Unspecified;
    salary: number = 0;


    // Je maakt hier opties
    photoname: "lion.jpg" | "wolf.jpg" | "elephant.jpg" | "tiger.jpg" | "sheep.jpg" = "lion.jpg";

    constructor(public firstname: string, public lastname: string)
    {
        Student.counter++;
        this.studentid = Student.counter;
    }

    raise()
    {
        this.salary *= 1.1;
    }

    punish(amount: number)
    {
        this.salary -= amount;
    }

    toString() : string
    {
        return `${this.firstname} ${this.lastname} - ${Gender[this.gender]}`;
    }

    toTableRow() : HTMLTableRowElement
    {
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

enum Gender { Male, Female, Unspecified}

// const enum Cards { Hearts, Spades, Clubs, Diamonds}
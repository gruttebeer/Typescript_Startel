let firstname: string = "Robin";

let lastname: string;

// dit mag dus niet. Want je maakte het een string, geen number.
// lastname = 50;

lastname = "Overal";

let age = 29;
age = 30;

// console.log(firstname);
// console.log(lastname);
// console.log(age);

showData(firstname, lastname, age);

function showData(fn: string, ln: string, age: number)
{
    console.log(`${fn} ${ln} is ${age} jaar oud`);
}
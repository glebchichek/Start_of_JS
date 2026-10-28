//1
let birthYear = +prompt("Enter your birth year:");
const currentYear = 2026;
const age = currentYear - birthYear;
alert("You are " + age + " years old.");

//2
let a = +prompt("Enter first number: ");
let b = +prompt("Enter second number: ");

let sum1 = `${a} + ${b} = ${a + b}`;
let diff = `${a} - ${b} = ${a - b}`;
let prod = `${a} * ${b} = ${a * b}`;
let quot = `${a} / ${b} = ${a / b}`;

alert(sum1 + "\n" + diff + "\n" + prod + "\n" + quot);

//3
let hours = +prompt("Enter hours(0-23): ");
let minutes = +prompt("Enter minutes(0-59): ");
let seconds = +prompt("Enter seconds(0-59): ");

const isHoursValid = !isNaN(hours) && hours >= 0 && hours <= 23;
const isMinutesValid = !isNaN(minutes) && minutes >= 0 && minutes <= 59;
const isSecondsValid = !isNaN(seconds) && seconds >= 0 && seconds <= 59;

if (isHoursValid && isMinutesValid && isSecondsValid) {
    alert(`Time is correct: ${hours}:${minutes}:${seconds}`);
}
else
    alert("Time is incorrect");

//4
let month = +prompt("Enter month number(1-12): ");
const isMonthValid = !isNaN(month) && month >= 1 && month <= 12;
if (!isMonthValid) {
    alert("Invalid input");
}
else {
    switch (month) {
        case 1:
            alert("January");
            break;
        case 2:
            alert("February");
            break;
        case 3:
            alert("March");
            break;
        case 4:
            alert("April");
            break;
        case 5:
            alert("May");
            break;
        case 6:
            alert("June");
            break;
        case 7:
            alert("July");
            break;
        case 8:
            alert("August");
            break;
        case 9:
            alert("September");
            break;
        case 10:
            alert("October");
            break;
        case 11:
            alert("November");
            break;
        case 12:
            alert("December");
            break;
    }

}

//5
let start = +prompt("Enter start of the range: ");
let end = +prompt("Enter end of the range: ");

const isRangeValid = !isNaN(start) && !isNaN(end);
if (isRangeValid) {
    if (start > end) {
        let tmp = start;
        start = end;
        end = tmp;
    }
    let sum2 = 0;
    for (let i = start; i <= end; i++) {
        sum2 += i;
    }
    alert(`Summary of all numbers in range from ${start} to ${end}: ${sum2}`);
}
else
    alert("Invalid input");


let salary = Number(prompt("lutfen maasinizi giriniz"));
let minimumWage = 5500;
let increasedsalry = salary >= minimumWage ? salary * 1.1 : salary * 1.5;
console.log("salary:", salary, "increasedsalry:", Math.trunc(increasedsalry));

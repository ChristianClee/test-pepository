'use strict'
// let user = {
//     name: 'john',
//     age: 30,
// }
// user.sayHi = () => {
//     alert('hi');
// }
// console.log(user);


// let user = {
//     name: "Джон",
//     age: 30,
//     sayHi() {
//         alert(user.name);
//     }
// };
// user.sayHi();
// let admin = user;
// user = null;
// admin.name = "Mark";
// admin.sayHi();

// let user = { name: "Джон" };
// let admin = { name: "Админ" };
// user.f = sayHi;
// admin.f = sayHi;
// user.f();
// admin.f();
// function sayHi() {
//     alert(this.name);
// }



// let calc = {
//     read() {
//         this.a = + prompt("a = ", "");
//         this.b = + prompt("b = ", "");
//     },
//     sum() {
//         alert(`sum = ${this.a + this.b}`)
//     },
//     mult() {
//         alert(`mult = ${this.a * this.b}`)
//     }
// }

// calc.read();
// calc.sum();
// calc.mult();

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function () { // показывает текущую ступеньку
//         alert(this.step);
//         return this;
//     }
// };
// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep(); // 1
// ladder.up().up().down().showStep().down().showStep()


// let calc = {
//     showSum() {
//         this.inputNumbers('Summa');
//         let result = this.getSum();
//         alert(`summa of ${this.firstDigit} and ${this.secondDigit} equal ${result}`);
//         return this;
//     },
//     showMultiply() {
//         this.inputNumbers('Multiply');
//         let result = this.getMultiply();
//         alert(`multiply of ${this.firstDigit} and ${this.secondDigit} equal ${result}`);
//         return this;
//     },
//     getSum() {
//         return (this.firstDigit + this.secondDigit)
//     },
//     getMultiply() {
//         return (this.firstDigit * this.secondDigit)
//     },
//     inputNumbers: function (text) {
//         this.firstDigit = + prompt(`${text}\ninput first digit`, '0');
//         this.secondDigit = + prompt(`${text}\ninput second digit`, '0');
//     },
// }
// calc.showSum().showSum().showMultiply();


// function User(name) {
//     this.name = name;
//     this.sayHi = function () {
//         alert("Меня зовут: " + this.name);
//     };
// }

// let vasya = new User("Вася");
// vasya.sayHi(); // Меня зовут: Вас

// function Calc()  {
//     this.showSum = function () {
//         this.inputNumbers('Summa');
//         let result = this.getSum();
//         alert(`summa of ${this.firstDigit} and ${this.secondDigit} equal ${result}`);
//         return this;
//     };
//     this.showMultiply = function () {
//         this.inputNumbers('Multiply');
//         let result = this.getMultiply();
//         alert(`multiply of ${this.firstDigit} and ${this.secondDigit} equal ${result}`);
//         return this;
//     };
//     this.getSum = function () {
//         return (this.firstDigit + this.secondDigit)
//     };
//     this.getMultiply = function () {
//         return (this.firstDigit * this.secondDigit)
//     };
//     this.inputNumbers = function (text) {
//         this.firstDigit = + prompt(`${text}\ninput first digit`, '0');
//         this.secondDigit = + prompt(`${text}\ninput second digit`, '0');
//     };
// }


// let ilya = new Calc();
// ilya.showSumde().showMultiply()





// let person = {
//     name: 'Jack',
//     age: 20,
//     [Symbol.for('password')] : 'Jack'
// }
// // console.log(person[Symbol.for("password")]);
// console.log(Object.getOwnPropertySymbols(person));





// function readNumber() {
//     let cycle,
//         userInp;

//     while (!isFinite(userInp)) {
//         userInp = prompt('please input "digit" or "empty string" or "click CANSEL"', '');
//         if (userInp === '') return null
//         else if (isFinite(userInp)) return (+ userInp)
//         else if (userInp === null) return null

//     }
// }
// alert(readNumber());

// function readNumber() {
//     let cycle;
//     do {
//         cycle = prompt('please input "digit" or "empty string" or "click CANSEL"', '');
//     } while (!isFinite(cycle));
//     if (cycle === null || cycle === "") return null
//     else return cycle

// }

let usersData = [];
function sumInput() {
    let sumUser = 0,
        userValue;
    
    do {
        getUserValue();
        if (checkOut(userValue)) break;
        makeDigit(userValue)
        countSumUser(userValue);
        usersData.push(userValue);

        
    } while (true)
   
    function getUserValue() {
        userValue = prompt('enter value', '');
    };
    function makeDigit(value) {
        userValue = + value

    };
    function checkOut(value) {
        return (value === null || value === "" || isNaN(+ value)) ? true : false;
    };
    function countSumUser(value) {
            sumUser += value
    };
    alert(sumUser);
    alert(usersData);
}

sumInput()



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

 

// function User(name) {
//     this.value = name;
//     this.isAdmin = false;
// }

// let man = new User("Ilya");
// console.log(man);
// console.log(User);


let calc = {
    showSum() {
        this.showAct("Summa");
        this.inputNumbers();
        let result = this.getSum();
        alert(`summa of ${this.firstDigit} and ${this.secondDigit} equal ${result}`);
    },
    showMultiply() {
        this.showAct("Multiply");
        this.inputNumbers();
        let result = this.getMultiply();
        alert(`multiply of ${this.firstDigit} and ${this.secondDigit} equal ${result}`);
    },
    getSum() {
        return (this.firstDigit + this.secondDigit)
    },
    getMultiply() {
        return (this.firstDigit * this.secondDigit)
    },
    inputNumbers: function () {
        this.firstDigit = + prompt('input first digit', '0');
        this.secondDigit = + prompt('input second digit', '0');
    },
    showAct: function (text) {
        alert(text)
    }
}


calc.showSum();
calc.showMultiply();
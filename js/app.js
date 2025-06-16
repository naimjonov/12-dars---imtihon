// 1 - masala

// function xarxillik(a) {
// let yuzliklar = Math.floor(a / 100);
// let onliklar = Math.floor((a % 100) / 10);
// let birliklar = a % 10;

//     if (yuzliklar !== onliklar && onliklar !== birliklar && yuzliklar !== birliklar) {
//         return "barcha raqamlar xarxil"
//     } else {
//         return "ichida birxilliklar bor"
//     }

// }
// console.log(xarxillik(234))


// 2 - masala

// function gachaqoshish (a, b){

//     let yigindi = 0

//     for (let i = a; i < b; i++) {
//         yigindi += i;

//     }
//     return yigindi
// }
// console.log(gachaqoshish(5, 10))


// 3 - masala

// function sortABC(a, b, c) {
//     let sonlar = [a, b, c]
//     sonlar.sort((x, y) => x - y)

//     console.log("kichik:", sonlar[0])
//     console.log("ortacha:", sonlar[1])
//     console.log("katta:", sonlar[2])

//     return sonlar
// }
// console.log(sortABC(9, 3, 10))


// 4 - masala

// function sortABC(a, b, c) {
//     let sonlar = [a, b, c]
//     sonlar.sort((x, y) => x - y)

//     console.log("kichik:", sonlar[0])
//     console.log("ortacha:", sonlar[1])
//     console.log("katta:", sonlar[2])

//     return sonlar
// }
// console.log(sortABC(9, 3, 10))

// 5 - masala

// function isPalindrom(n) {
//     let a = n.toString()
//     let reversed = a.split('').reverse().join('')
//     return a == reversed
// }

// console.log(isPalindrom(123321))
// console.log(isPalindrom(1678762))


// 6 - masala

// function getdividersnumberandSum(n) {
//     let sanoq = 0
//     let yigindi = 0
//     for (let i = 1; i <= n; i++) {
//         if (n % i === 0) {
//             sanoq++;
//             yigindi += i
//         }
//     }
//     return [sanoq, yigindi]
// }
// console.log(getdividersnumberandSum(12))


// 7 - masala

// const rightAnswers = { 1: "B", 2: "A", 3: "C", 4: "D", 5: "B", 6: "C", 7: "A", 8: "D", 9: "A", 10: "B" };
// const myAnswers = { 1: "C", 2: "A", 3: "D", 4: "D", 5: "B", 6: "C", 7: "B", 8: "C", 9: "A", 10: "B" };

// function checkAnswers(a, b) {
//     let togri = 0
//     let notogri = 0
//     for (let key in a) {
//         if (a[key] === b[key]) {
//             togri++
//         } else {
//             notogri++
//         }
//     }
//     return {togri, notogri}
// }

// console.log(checkAnswers(rightAnswers, myAnswers))


// 8 -masala

// const arr = ["Abdulaziz", "Safarmurod", "O'rol", "Jahongir"]

// function uzunlik(array) {
//     let result = {}
//     for (let str of array) {
//         result[str] = str.length
//     }
//     return result
// }

// console.log(uzunlik(arr))

// 9 - masala


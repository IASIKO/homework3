// 1. შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და 
// დააბრუნებს მხოლოდ დადებითი რიცხვების ჯამს:
// 2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;

// numSum = numSum + n 

// function positive (...numbers) {
//     let numSum = 0;
//     for (let n of numbers) {
//         if (n > 0) {
//            numSum += n        
//         }
//     }
//     return numSum;
// }

// let result = positive (2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
// console.log(result);



// 2. ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
// 10, 50, 6, 7, 8, 11, 6, 3, 9


// function numSum (...numbers) {
//     let x = 0;
//     for (let y of numbers) {
//         x += y;
//     }
//     return x;
// }

// let result = numSum(10, 50, 6, 7, 8, 11, 6, 3, 9);
// console.log(result);


// 3. let user = {
//   firstname: 'giorgi',
//   lastname: 'saakadze',
//   age: 32,
//   isloggedin: true
// }
// .  ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით 
// (მაგ: 'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

// let user = {
//       firstname: 'giorgi',
//       lastname: 'saakadze',
//       age: 32,
//       isloggedin: true
//     }

//     function item (userName, userLastname, status) {
//         if (status == true) {
//             return userName + ' ' + userLastname;
//         } 
//         else {
//             return 'false';
//         }
//     }

// let result = item(user.firstname, user.lastname, user.isloggedin)
// console.log(result);

// 4. შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და 
// ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:





// 5. მოცემულია მასივი let array = [1,2,4,10,34,5,7,87]
// გამოიტანეთ ყველა ის რიცხვი რომელიც მეტია 0 ზე და ნაკლებია 10ზე;


// let array = [1,2,4,10,34,5,7,87]

// for (const x of array) {
//     if (x > 0 && x < 10) {
//         console.log(x);
//     }
// }


// 6. მოცემულია მასივი
// Let numbers =[1,2,3,4,5,6,7,8,9,10]
// ციკლის საშუალებით შეამოწმეთ, თუ მასივში არის რიცხვი 5 - გააჩერეთ მასივი

// let numbers =[1,2,3,4,5,6,7,8,9,10];

// for (const x of numbers) {
//     if (x == 5) {
//         console.log(x);
//         break;
//     }
// } 
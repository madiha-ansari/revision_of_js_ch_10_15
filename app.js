// airthmatic operator
//  Assignment operator 
// comparasion operator
//  logical operator

// var a = "hello";
// console.log(typeof (a));

// var a = "hi";
// console.log(typeof (a));

// var b = 21;
// console.log(typeof(b));

// var c =  "hi";
// console.log(c == "hi");

// let x;  
// console.log(x);

// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// console.log(typeof(person));

// var student = {
//     name : "madiha",
//     age :20,
//     isPass : true,
// }
// student["age"] = student["age"]+2
// console.log(student);

// airthmetic operator

// logical operator 
// var a = 6 ;
// var b = 2;
// var condi1 = (a<b);
// var condi2 = (a === 6);
// console.log(condi1 || condi2);

// var userName = ("Madiha");
// var lastName = ("M.Shafiq");
// console.log(userName == "diha" || lastName == "M.Shafiq");

// var userName = ("Madiha");
// var lastName = ("M.Shafiq");
// console.log(userName != lastName);

// var firstName = ("Madiha");
// var lastName = ("M.Shafiq");
// if(firstName == lastName){
//     console.log("hellow");
// }
// else{
//     console.log("wrong");
// }

// var userName = prompt("Enter your city");
// if(userName === "Karachi"){
//     console.log("Congradulations 👋");
// }else if(userName === "America"){
//     console.log("PLZ visit next year");
// }
// else{
//     console.log("Try Again");
// }


// let age = 20;
// let isMember = true;

// if (age >= 18) {
//     if (isMember) {
//         console.log("You are eligible for the discount.");
//     } else {
//         console.log("You need to be a member to get the discount.");
//     }
// } else {
//     console.log("You must be at least 18 years old.");
// }

// // nested if
// var userSkills = prompt("what languages you know")
// var userResidence = prompt("where do you live")
// var userQualification = prompt("what's your degree")
// var requiredSkills = "javascript"
// var requiredResidence = "karachi"
// var requiredQualification = "BSCS"
// if (userSkills == requiredSkills) {
//     if (requiredResidence == userResidence) {
//         if (requiredQualification == userQualification) {
//             alert("you are hired")
//         }
//         else{
//             alert("BSCS krlo phr ana")
//         }
//     }
//     else {
//         alert("karachi ajao")
//     }
// }
// else {
//     alert("javascript sekh kr ao")
// }

// var x = 2;
// var y = 2;
// var a = 3;
// var b = 3;
// if(x === y){
//     if(a ===  b){
//         alert("yes ,it same")
//     }
// }

var userSkills = prompt("what languages you know")
var userResidence = prompt("where do you live")
var userQualification = prompt("what's your degree")
var requiredSkills = "javascript"
var requiredResidence = "karachi"
var requiredQualification = "BSCS"

if (userSkills == requiredSkills) {
    if (requiredResidence == userResidence) {
        if (requiredQualification == userQualification) {
            alert("you are hired")
        }
        else{
            alert("BSCS krlo phr ana")
        }
    }
    else {
        alert("karachi ajao")
    }
}
else {
    alert("javascript sekh kr ao")
}


let age = 20;
let hasPermission = true;
if (age >= 18) {
    console.log("Aap adult hain.");
    if (hasPermission) {
        console.log("Aapko entry mil gayi hai.");
    } else {
        console.log("Aapko entry nahi mil sakti.");
    }
}
else {
    console.log("Aap adult nahi hain.");
}

var ages = 21;
var isPermissions = true;
if(ages >= 18){
    console.log("ap adult han ");
if(isPermissions){
    console.log("ap ko entry mil gae ha ");
}else{
    console.log("ap ko entry nh mil sakti ");
}
}
else{
    console.log("ap adalt nh ha");
}











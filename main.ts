import inquirer from "inquirer";

console.log("****QUIZZ APP****");
console.log("You have 10 question to answer.");
let score = 0;
let input = await inquirer.prompt([
    {
        message: "\nEnter your name:\n",
        type: "input",
        name: "name",
    },
    {
        message: "\nQ1) HTML stands for:",
        type: "list",
        name: "q1",
        choices: ["Hyper text making language", "Hard text markup language", "Hyper text markup language"],
    },
    {
        message: "\nQ2) How to commment single line in typescript:",
        type: "list",
        name: "q2",
        choices: ["\\", "//", "||"],
    },
    {
        message: "\nQ3) What is the output of following code: \nboolean on=True\nboolean off=false\nconsole.log(on && off)",
        type: "list",
        name: "q3",
        choices: ["False", "True", "Error"],
    },
    {
        message: "\nQ4) Which of the following is not an object oriented programming language:",
        type: "list",
        name: "q4",
        choices: ["Java", "Python", "C"]
    },
    {
        message: "\nQ5) Which data type is used to represent a sequence of characters:",
        type: "list",
        name: "q5",
        choices: ["number", "String", "boolean"],
    },
    {
        message: "\nQ6) Which of the following is not a valid variable name:",
        type: "list",
        name: "q6",
        choices: ["7var", "_var", "my_var"],
    },
    {
        message:"\nQ7) Which of the following is not a fundamental data structure: ",
        type:"list",
        name:"q7",
        choices:["Array","Loop","Hash"],
    },
    {
        message:"\nQ8) What does the acronym 'URL' stand for",
        type:"list",
        name:"q8",
        choices:["Uniform Resource Locator","Unified Resource Language","Unique Resource Locator"],
    },
    {
        message:"\nQ9) what is the output of following code: \ncountries=['England','USA','Pakistan']\nconsole.log(countries[2])",
        type:"list",
        name:"q9",
        choices:["USA","Pakistan","England"],
    },
    {
        message:"\nQ10) What is the purpose of the 'if' statement in programming: ",
        type:"list",
        name:"q10",
        choices:["To repeat a block of code","To define a function","To perform a conditional execution of code"],
        },
]);
if (input.q1 == "Hyper text markup language") {
    score++;
} else {
    console.log("Incorrect answer of question 1.");
}

if (input.q2 == "//") {
    score++;
} else {
    console.log("Incorrect answer of question 2.");
}

if (input.q3 == "False") {
    score++;
} else {
   console.log("Incorrect answer of question 3.");
    }

if (input.q4 == "C") {
    score++;
} else {
    console.log("Incorrect answer of question 4.");
}

if (input.q5 == "String") {
    score++;
} else {
    console.log("Incorrect answer of question 5.");
}

if (input.q6 == "7var") {
    score++;
} else {
    console.log("Incorrect answer of question 6.");
}

if (input.q7 == "Loop") {
    score++;
} else {
    console.log("Incorrect answer of question 7.");
}

if (input.q8 =="Uniform Resource Locator"){
    score++;
} else {
    console.log("Incorrect answer of question 8.");
}

if (input.q9 == "Pakistan") {
    score++;
} else {
    console.log("Incorrect answer of question 9.");
}

if (input.q10 =="To perform a conditional execution of code") {
    score++;
} else {
    console.log("Incorrect answer of question 10");
}


console.log(`\n${input.name} your final score of quizz, out of 10 questions is ${score}`);


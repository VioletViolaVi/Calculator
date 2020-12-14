// waits until DOM has been fully loaded
$("document").ready(function () {

    // displays num btn values on screen when clicked
    function displayBtnNums() {
        $(".number").click(function () {
            let numBtns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            for (let index = 0; index < numBtns.length; index++) {
                if (numBtns[index] === $(this).data("number")) {
                    $("#answer").append(numBtns[index]);
                };
            };
        });
    };
    displayBtnNums();

    // displays operators on screen when clicked
    function displayOperators() {
        $(".operator").click(function () {
            let operatorBtns = ["/", "*", "-", "+"];
            for (let index = 0; index < operatorBtns.length; index++) {
                if (operatorBtns[index] === $(this).data("operator")) {
                    $("#answer").append(operatorBtns[index]);
                };
            };
        });
    };
    displayOperators();   




    
    let decimal = document.getElementById("decimal");
    let bracket = document.getElementsByClassName("bracket");
    
    let ac = document.getElementById("ac");
    let ce = document.getElementById("ce");
    
    let answer = document.getElementById("answer");
    
    let numBtns = document.getElementsByClassName("number");
    let operatorBtns = document.getElementsByClassName("operator");












































});
// document.addEventListener("DOMContentLoaded", function () {
//     // collects calculation history from html
//     function getHistory() {
//         return document.querySelector("#history").innerText;
//     };

//     // shows calculation history in screen
//     function displayHistory(history) {
//         document.querySelector("#history").innerText = history;
//     };

//     // collects calculation answer from html
//     function getAnswer() {
//         return document.querySelector("#answer").innerText;
//     };

//     // shows answer in screen
//     function displayAnswer(answer) {
//         if (answer === "") {
//             document.querySelector("#answer").innerText = 0;
//         } else {
//             document.querySelector("#answer").innerText = addCommasToAnswer(answer);
//         }
//     };

//     // adds commas to number
//     function addCommasToAnswer(answer) {
//         let number = Number(answer);
//         let formattedAnswer = number.toLocaleString("en");
//         return formattedAnswer;
//     };

//     // removes commas from formatted number
//     function removeCommasFromNumbers(answer) {
//         return Number(answer.replace(/,/g, ""));
//     };

//     let operators = document.querySelectorAll(".operator");
//     for (let operatorIndex = 0; operatorIndex < operators.length; operatorIndex++) {
//         operators[operatorIndex].addEventListener("click", function () {
//         });
//     };

//     let numbers = document.querySelectorAll(".number");
//     for (let numberIndex = 0; numberIndex < numbers.length; numberIndex++) {
//         numbers[numberIndex].addEventListener("click", function () {
//             let answer = removeCommasFromNumbers(getAnswer);
//             if (answer != NaN) { // if answer is a number
//                 answer = answer + numbers[numberIndex];
//                 displayAnswer(answer);
//             };
//         });
//     };
// });
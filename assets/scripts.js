// waits until DOM has been fully loaded
$("document").ready(function () {

    // displays numbers when clicked
    function displayBtnNum() {
        $(".number").click(function () {
            let calculatorNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."];
            for (let index = 0; index < calculatorNumbers.length; index++) {
                if (calculatorNumbers[index] === $(this).data("number")) {
                    $("#answer").append(calculatorNumbers[index]);
                };
            };
        });
    };
    displayBtnNum();















































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
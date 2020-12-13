document.addEventListener("DOMContentLoaded", function () {

    // collects calculation history from html
    function getHistory() {
        return document.querySelector("#history").innerText;
    };

    // shows calculation history in screen
    function displayHistory(history) {
        document.querySelector("#history").innerText = history;
    };

    // collects calculation answer from html
    function getAnswer() {
        return document.querySelector("#answer").innerText;
    };

    // shows answer in screen
    function displayAnswer(answer) {
        if (answer === "") {
            document.querySelector("#answer").innerText = 0;
        } else {
            document.querySelector("#answer").innerText = addCommasToAnswer(answer);
        }
    };

    // adds commas to number
    function addCommasToAnswer(answer) {
        let number = Number(answer);
        let formattedAnswer = number.toLocaleString("en");
        return formattedAnswer;
    };

    // removes commas from formatted number
    function removeCommasFromNumbers(answer) {
        return Number(answer.replace(/,/g,""));
    };

    

































});
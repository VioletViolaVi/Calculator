document.addEventListener("DOMContentLoaded", function () {

    // collects calculation history from html
    function getHistory() {
        return document.querySelector("#history").innerText;
    };

    // shows calculation history in screen
    function displayHistory(history) {
        document.querySelector("#history").innerText = history;
    };

    // shows answer in screen
    function displayAnswer(answer) {
        document.querySelector("#answer").innerText = addCommasToAnswer(answer);
    };

    // adds commas to number in screen
    function addCommasToAnswer(answer) {
        let n = Number(answer);
        let formattedAnswer = n.toLocaleString("en");
        return formattedAnswer;
    };
    displayAnswer(22222222);


































});
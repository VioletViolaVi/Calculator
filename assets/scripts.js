// waits until DOM has fully loaded
$("document").ready(function () {

    // displays num btn values on screen when clicked
    function displayBtnNums() {
        $(".number").click(function () {
            let numBtns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            for (let index = 0; index < numBtns.length; index++) {
                if (numBtns[index] === $(this).data("number")) {
                    $("#history").append(numBtns[index]);
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
                    $("#history").append(operatorBtns[index]);
                    $("#answer").append(operatorBtns[index]);
                };
            };
        });
    };
    displayOperators();

    // responsible for decimal point
    function decimalPoint() {
        $("#decimal").click(function () {
            if (!$("#answer").text().includes(".")) {
                $("#history").append(".");
                $("#answer").append(".");
            };
        });
    };
    decimalPoint();

    // responsible for 1st bracket
    function firstBracket() {
        $("#bracket1").click(function () {
            $("#history").append("(");
            $("#answer").append("(");
        });
    };
    firstBracket();

    // responsible for 2nd bracket
    function secondBracket() {
        $("#bracket2").click(function () {
            $("#history").append(")");
            $("#answer").append(")");
        });
    };
    secondBracket();

    // adds matching 2nd bracket(s) if only 1st bracket(s) is/are present
    function autoAddClosingBrackets() {
        $("#equals").click(function () {
            let screenContent = $("#answer").text();
            let firstBrackets = screenContent.match(/\(/g);
            if ($("#answer").text().includes("(") && !$("#answer").text().includes(")")) {
                firstBrackets.forEach(function () {
                    $("#history").append(")");
                    $("#answer").append(")");
                });
            };
        });
    };
    autoAddClosingBrackets();

    // clear latest data entry
    function clearBackSpace() {
        $("#ce").click(function () {
            currentEntry = $("#answer").text();
            editedEntry = currentEntry.slice(0, currentEntry.length - 1);
            $("#history").text(editedEntry);
            $("#answer").text(editedEntry);
        });
    };
    clearBackSpace();

    // clears calculator screen
    function clearWholeScreen() {
        $("#ac").click(function () {
            $("#history").text("");
            $("#answer").text("");
        });
    };
    clearWholeScreen();

    // conducts the mathematics
    function performsArithmetic() {
        $("#equals").click(function () {
            let calculatedAnswer = eval($("#answer").text());
            $("#answer").text(calculatedAnswer);
        });
    };
    performsArithmetic();
});

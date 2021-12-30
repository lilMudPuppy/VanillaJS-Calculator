var historyDisplay = document.getElementById('display-history');
var display = document.getElementById('current');

var otherBtn = document.getElementsByClassName('other');
var numberBtn = document.getElementsByClassName('number');
var operatorBtn = document.getElementsByClassName('operator');

//globals

var numOne = '';
var numTwo = '';
var result = 0;


var lastOp = '';
var isOp = false;


var opCount = 0;

var tmp = '';






// other operators
for(let i = 0; i < otherBtn.length; i++) {
    if (otherBtn[i].innerHTML == 'AC') {
        otherBtn[i].onclick = function() {
            historyDisplay.innerHTML = '';
            display.innerHTML = '0';
            numOne = '';
            numTwo = '';
            result = '';
            op = false;
            opCount = 0;

            tmp = '';
        };
    }
}

//numbers logic
for(let i = 0; i < numberBtn.length; i++ ) {
    numberBtn[i].onclick = function() {
        var num = numberBtn[i].innerHTML;

        numOne += num;
        display.innerHTML = numOne;

        isOp = false;
    }
}

//operators logic 
for(let i = 0; i < operatorBtn.length; i++) {
    operatorBtn[i].onclick = function() {
        var operator = operatorBtn[i].innerHTML;

        switch (operator) {
            case '+':
                if (lastOp == '=') {
                    numTwo = display.innerHTML;
                    numOne = '';

                    lastOp = operator;
                }else if (lastOp == '+'){
                    numTwo = calculate(numOne, numTwo, lastOp);
                    display.innerHTML = numTwo + '';
                }else {
                    lastOp = operator;
                    numTwo = numOne;
                    numOne = '';
                }
                isOp = true;
                break;

            case '-':

                break;
            

            case '=':
                result = calculate(numOne, numTwo, lastOp);
                display.innerHTML = result + '';
                break;
        }
    }
}


function calculate(sNum1, sNum2, operator) {
    var num1 = parseInt(sNum1);
    var num2 = parseInt(sNum2);
    var result = 0;

    switch (operator) {
        case '/':
            result = num2 / num1;
            return result;
        case 'x':
            result = num2 * num1;
            return result;
        case '-':
            result = num2 - num1;
            return result;
        case '+':
            result = num2 + num1;
            return result;
    }
}
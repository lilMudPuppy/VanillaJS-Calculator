var historyDisplay = document.getElementById('display-history');
var display = document.getElementById('current');

var otherBtn = document.getElementsByClassName('other');
var numberBtn = document.getElementsByClassName('number');
var operatorBtn = document.getElementsByClassName('operator');

//globals

var numOne = 0;
var numTwo = 0;
var lastOp = '';

var tmp = '';





// other operators
for(let i = 0; i < otherBtn.length; i++) {
    if (otherBtn[i].innerHTML == 'AC') {
        otherBtn[i].onclick = function() {
            historyDisplay.innerHTML = '';
            display.innerHTML = '';
        };
    }
}

//numbers logic
for(let i = 0; i < numberBtn.length; i++ ) {
    numberBtn[i].onclick = function() {

        tmp += numberBtn[i].innerHTML;
        numOne = parseInt(tmp);

        display.innerHTML = tmp;
    }
}

//operators logic 
for(let i = 0; i < operatorBtn.length; i++) {
    operatorBtn[i].onclick = function() {
        var operator = operatorBtn[i].innerHTML;

        switch(operator) {
            case '/':
            
                numTwo = numTwo / numOne;
                historyDisplay = numTwo + '';
                lastOp = operator;


                break;
            case 'x':
                // code block
                break;
            case '-':
                // code block
                break;
            case '+':

                break;
            case '=':

                break;
            default:
                // code block
        } 
    }
}
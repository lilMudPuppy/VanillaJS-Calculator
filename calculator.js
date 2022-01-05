class Calculator {
    constructor(historyDisplay, currentDisplay) {
        this.historyDisplay = historyDisplay;
        this.currentDisplay = currentDisplay;
        this.clear();
    }

    clear() {
        this.historyOperand = '';
        this.currentOperand = '';
        this.operation = undefined;
    }

    //delete function is currently unused
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === ',' && this.currentOperand.includes(',')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.historyOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.historyOperand = this.currentOperand;
        this.currentOperand = '';

    }

    compute() {
        let computation;
        const prev = parseFloat(this.historyOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case 'x':
                computation = prev * current;
                break;
            case '/':
                computation = prev / current;
                break;
            default:
                break;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.historyOperand = '';
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        }else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0 });
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        }else {
            return integerDisplay;
        }
        
    }

    updateDisplay() {
        this.currentDisplay.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.historyDisplay.innerText = 
            `${this.getDisplayNumber(this.historyOperand)} ${this.operation}`;
        }else {
            this.historyDisplay.innerText = '';
        }
        // line bellow not nided any more but just in case
        // this.historyDisplay.innerText = this.historyOperand;
    }
}




const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-all-clear]');
const plusMinusButton = document.querySelector('[data-plus-minus]');
const procentageButton = document.querySelector('[data-procentage]')
const historyDisplay = document.querySelector('[data-history-display]');
const currentDisplay = document.querySelector('[data-current-display]');


const calculator = new Calculator(historyDisplay, currentDisplay);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

// this event listener is unused at the moment because there is not delete button on calculator
// deleteButton.addEventListener('click', button => {
//     calculator.delete();
//     calculator.updateDisplay();
// })
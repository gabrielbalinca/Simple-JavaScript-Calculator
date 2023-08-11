const number = document.querySelectorAll('[data-number]');
const operator = document.querySelectorAll('[data-operator]');
const equal = document.querySelector('[data-equal]');
const allClear = document.querySelector('[data-all-clear]');
const display = document.querySelector('[data-display]');

class Calculator{
    clear(){
        this.calcValue = null;
        this.operator = null;
        this.secondOperand = null;
        display.value = '';
    }

    appendOperator(operator){
        this.operator = operator;
    }

    appendNumber(num){
        if(this.operator == null){
            if(this.calcValue != null){
                this.calcValue += num;
            } else {
                if(num != '0') {
                    this.calcValue = num;
                }
            }
        } else {
            if(this.secondOperand != null){
                this.secondOperand += num;
            } else {
                if(num != '0') {
                    this.secondOperand = num;
                }
                
            }
        }
    }

    calculate(){
        if(this.calcValue != null && this.secondOperand != null){
            this.calcValue = parseFloat(this.calcValue);
            this.secondOperand = parseFloat(this.secondOperand);
            switch(this.operator){
                case '+':
                    this.calcValue = this.calcValue + this.secondOperand;
                    break;
                case '-':
                    this.calcValue = this.calcValue - this.secondOperand;
                    break;
                case '×':
                    this.calcValue = this.calcValue * this.secondOperand;
                    break;
                case '÷':
                    this.calcValue = this.calcValue / this.secondOperand;
                    break;
                default:
                    return;
            }
            this.operator = null;
            this.secondOperand = null;
        }
        

    }
    
    updateDisplay() {
        if(this.calcValue != null) display.value = `${this.calcValue}`;
        if(this.operator != null) display.value += `${this.operator}`;
        if(this.secondOperand != null) display.value += `${this.secondOperand}`;
    }
}

const calculator = new Calculator();

number.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operator.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendOperator(button.innerText);
        calculator.updateDisplay();
    })
});

allClear.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
});

equal.addEventListener('click', button => {
    calculator.calculate();
    calculator.updateDisplay();
});


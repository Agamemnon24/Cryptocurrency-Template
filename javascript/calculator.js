
const calculate = () => {
    const operator = document.getElementById('operator').value;
    const userInput = document.getElementById('user-input').value;
    let currentResult = parseInt(userInput);

    let multiplier = 1;

    const OPERATORS = {
        ONE_WEEK: '1 week',
        TWO_WEEKS: '2 weeks',
        THREE_WEEKS: '3 weeks',
        ONE_MONTH: '1 month',
    };

    if(operator === OPERATORS.ONE_WEEK) {
        if(currentResult <= 1000) {
            multiplier = 2;
        } else if (currentResult > 1000 && currentResult < 5000) {
            multiplier = 2.3;
        } else {
            multiplier = 2.5;
        }
    }

    if(operator === OPERATORS.TWO_WEEKS) {
        if(currentResult <= 1000) {
            multiplier = 2.5;
        } else if (currentResult > 1000 && currentResult < 5000) {
            multiplier = 3.2;
        } else {
            multiplier = 3.3;
        }
    }

    if(operator === OPERATORS.THREE_WEEKS) {
        if(currentResult <= 1000) {
            multiplier = 3.9;
        } else if (currentResult > 1000 && currentResult < 5000) {
            multiplier = 3.9;
        } else {
            multiplier = 4.2;
        }
    }

    if(operator === OPERATORS.ONE_MONTH) {
        if(currentResult <= 1000) {
            multiplier = 4.4;
        } else if (currentResult > 1000 && currentResult < 5000) {
            multiplier = 4.8;
        } else {
            multiplier = 5.2;
        }
    }


    // ...

    currentResult = `~${Math.round((currentResult * multiplier) / 1.3)}$`;

    document.getElementById('time').innerHTML = operator;
    document.getElementById("result").innerHTML = currentResult;
};

const onClick = () => {
    const result = document.getElementById('result');
    const picture = '<img src="images/loading-gif.gif" alt="">';
    result.innerHTML = picture;

    setTimeout(() => {
        calculate();
    }, 2 * 1000);
};

document.getElementById('btn').addEventListener('click', onClick);
satisfiedUsers = document.getElementById('satisfied-users');
moneyTransacted = document.getElementById('money-transacted');
successRate = document.getElementById('success-rate');

let satisfiedUsersInterval;
let satisfiedUsersCounter = 0;

let moneyTransactedInterval;
let moneyTransactedCounter = 0;

let successRateInterval;
let successRateCounter = 0;

function satisfiedUsersTimer () {
   satisfiedUsersInterval = setInterval(function() {
        satisfiedUsersCounter += 1;
        satisfiedUsers.innerText = satisfiedUsersCounter + 'K +';
        if (satisfiedUsersCounter >= 55) {
            clearInterval(satisfiedUsersInterval);
        }
    }, 50)
}

satisfiedUsersTimer();


function moneyTransactedTimer () {
    moneyTransactedInterval = setInterval(function() {
        moneyTransactedCounter += 1;
        moneyTransacted.innerText = '$' + moneyTransactedCounter + 'M +';
        if (moneyTransactedCounter >= 188) {
            clearInterval(moneyTransactedInterval);
        }
    } , 20)
}

moneyTransactedTimer();


function successRateTimer () {
    successRateInterval = setInterval(function() {
        successRateCounter += 1;
        successRate.innerText = '+' + successRateCounter + '%';
        if (successRateCounter >= 93) {
            clearInterval(successRateInterval);
        }
    }, 40)
}

successRateTimer();


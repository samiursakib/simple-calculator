const expression = document.getElementById('expression');
const button = document.getElementsByTagName('button')[0];
const result = document.getElementById('result');

const calcExpression = () => {
    result.innerHTML = `Result : ${eval(expression.value)}`;
};

button.addEventListener('click', calcExpression);
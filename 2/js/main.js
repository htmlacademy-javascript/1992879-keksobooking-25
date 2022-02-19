const getRandomNumber = (num1, num2) =>  Math.floor(num1 + Math.random() * (num2 + 1 - num1));
const getRandomFractional = (num1, num2, fraction) => +Math.abs(Math.random()*(num1 - num2) + num2).toFixed(fraction);

getRandomNumber();
getRandomFractional();

const message = `You have received this message because you have been chosen to open an important vault. Here is the secret combination:`;

let firstDigit =10;
firstDigit =firstDigit*5;

let secondDigit =400;
secondDigit =secondDigit/10;

let thirdDigit =30;
thirdDigit =thirdDigit +10;
thirdDigit =thirdDigit -1;

let fullCombination= `${firstDigit}, ${secondDigit}, ${thirdDigit}`;

alert (message);
alert (fullCombination);
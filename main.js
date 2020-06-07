var EIC = require("eic");

var myArgs = process.argv.slice(2)[0];

if (myArgs === undefined) {
    console.log('Please insert string as a parameter.');
} else if (myArgs.length >= 16) {
    if (myArgs.length > 16) {
        console.log('String is too long, trimming to 16 characters.');
    }
    console.log('Is ' + myArgs.substring(0, 16).toUpperCase() + ' valid EIC code? Answer: ' + EIC.verifyEIC(myArgs.substring(0, 16).toUpperCase()));
} else if (myArgs.length == 15) {

    var lastCharacter = EIC.generateEICCheckDigit(myArgs.toUpperCase());
    console.log('Last character of the EIC code is: ' + lastCharacter + '. Full EIC code is: ' + myArgs.concat(lastCharacter).toUpperCase());
} else if (myArgs.length < 15) {
    var myArgs2 = process.argv.slice(3)[0];
    if (myArgs2 === undefined) {
        console.log("No indent character defined. Using 'X' as indent parameter.");
        generateEic(myArgs.toUpperCase(), "X");
    } else if (myArgs2.length > 1) {
        console.log("Please use single indent character.");
    } else {
        generateEic(myArgs.toUpperCase(), myArgs2.toUpperCase());
    }
}

function generateEic(inputString, indentCharacter) {
    var newEIC = inputString;
    while (newEIC.length < 15) {
        newEIC = newEIC.concat(indentCharacter);
    }
    var lastCharacter = EIC.generateEICCheckDigit(newEIC);
    console.log('Last character of the EIC code is: ' + lastCharacter + '. Full EIC code is: ' + newEIC.concat(lastCharacter));
}

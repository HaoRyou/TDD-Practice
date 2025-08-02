function capitalize (input){
    return input.charAt(0).toUpperCase() + input.slice(1);
}

function reverseString(input){
    let reverse ="";
    for(let i=input.length-1; i>=0;i--){
        reverse += input.charAt(i);
    }
    return reverse;
}

class Calculators{
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
    static divide(a, b) {
        if (b === 0) throw new Error("Cannot divide by zero");
        return Number((a / b).toFixed(2)); // returns a number with 2 decimal places
    }
}

function caesarCipher(input, shift){
    let output = '';
    for(let i=0;i<input.length;i++){
        const char = input[i];
        const code = input.charCodeAt(i);
          // Handle lowercase letters (a–z)
        if (code >= 97 && code <= 122) {
            let shifted = ((code - 97 + shift) % 26 + 26) % 26;
            output += String.fromCharCode(97 + shifted);
        }
        // Handle uppercase letters (A–Z)
        else if (code >= 65 && code <= 90) {
            let shifted = ((code - 65 + shift) % 26 + 26) % 26;
            output += String.fromCharCode(65 + shifted);
        }
        // Leave non-letters unchanged
        else {
            output += char;
        }
    }
    return output;
}

function analyzeArray(array){
    const sum = array.reduce((a,b) => a+b,0);
    return {
        average: sum/array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
}

module.exports = {
    analyzeArray,
    caesarCipher,
    Calculators,
    capitalize,
    reverseString
}
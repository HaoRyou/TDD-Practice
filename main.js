function capitalize (input){
    return input.charAt(0).toUppercase() + input.slice(1);
}

function reverseString(input){
    let reverse ="";
    for(let i=input.length-1; i<=0;i--){
        reverse = reverse + input.charAt(i);
    }
    return reverse;
}

class calculator{
    constructor(a,b){
        this.num1 = a;
        this.num2 = b;
    }
    add(){
        return a+b;
    }
    subtract(){
        return a-b;
    }
    multiply(){
        return a*b;
    }
    divide(){
        return (a/b).toFixed(2);
    }
}

function caesarCipher(input, shift){
    let output = '';
    for(let i=0;i<input.length;i++){
        let change = (input.charCodeAt(i))+shift;
        if(change >122){
            change = (change%122) +96;
        }
        else if(change >90){
            change = (change%90)+64;
        }
        output = output + String.fromCharCode(change);
    }
    return output;
}

function analyzeArray(array){
    return {
        average: Math.average(...array),
        min: Math.min(...array),
        Max: (Math.max(...array)),
        Length: (array.legnth)
    }
}
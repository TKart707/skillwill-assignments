/* Assignment-1 */

function comparison(a, b) {
    if (a === b){
        return "Equal";
    } else {
        return "Not equal";
    }
}

/* Assignment-2 */

function fahrenheitToCelsius(fahrenheit) {
    if (typeof fahrenheit !== 'number') {
        return false;
    } else {
        return Number(((fahrenheit - 32) * 5/9).toFixed(3));
    }
}


/* Assignment-3 */

function calculate(a, b, operation) {
    if(typeof a !== "number" || typeof b !== "number") {
        return false;
    }

    let result;
    switch(operation) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            return false
    }

    return result;
}
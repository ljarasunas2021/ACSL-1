let n = 102438;
let p = 3;
let newN = "";
let pChar = parseInt(n.toString().charAt(n.toString().length - p));

for (let i = 0; i < n.toString().length; i++) {
    if (i > n.toString().length - p) {
        console.log("I < P:  " + n.toString().charAt(i) + " " + pChar);
        //Debug.log
        newN += Math.abs(parseInt(n.toString().charAt(i)) - pChar);
    } else if (i == n.toString().length - p) {
        console.log("I == P:  " + n.toString().charAt(i) + " " + pChar);
        newN += FindPrimes(n);
    } else if (i < n.toString().length - p) {
        console.log("I > P:  " + n.toString().charAt(i) + " " + pChar);
        newN += parseInt(n.toString().charAt(i)) + pChar;
    }
}

console.log(newN);

function FindPrimes(value) {
    let primes = 0;
    let factors = FindFactors(value);
    (factors).forEach(factor => {
        if (FindFactors(factor).length == 0) primes++;
    });
    return primes;
}

function FindFactors(value) {
    let factors = [];
    for (let i = 2; i < value; i++) {
        if (value % i == 0) {
            factors.push(i);
        }
    }
    return factors;
}



function add(a, b){
    c = a+b;
    return c;
}

const result = add(234, 456);

console.log(result);

const avg = function(m1, m2, m3){
    let avg = (m1+m2+m3)/3;
    return avg;
}

const myAvg = avg(34, 56, 78);

console.log(myAvg);

const factorial = (n) => {

    let f = 1;
    for(let i=1; i<=n; i++){
        f = f*i;
    };

    return f;

}

const myFactorial = factorial(5);

console.log(myFactorial);
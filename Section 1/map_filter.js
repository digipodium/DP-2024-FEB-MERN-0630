const nums = [6, 2, 9, 5, 1, 2, 3];

for( let i=0; i<nums.length; i++ ){
    console.log(nums[i] ** 2 );
}

console.log('-------------');

for(let n of nums){
    console.log(n ** 2);
}

console.log('-------------');

nums.forEach( (a, z) => { console.log( a ** 2, z ) } );

let newArr = [];

for(let i of nums){
    newArr.push(i ** 2);
}

console.log(newArr);

const sqrtArr = nums.map( (n) => { return n**2 } );
console.log(sqrtArr);

const fruits = ['apple', 'grapes', 'lichi', 'papaya', 'kiwi', 'strawberry' ];
// ['APPLE', 'GRAPES', 'LICHI', 'PAPAYA' ]
console.log( 'nice'.toUpperCase() );

const upperFruits = fruits.map( (item) => { return item.toUpperCase() } );
console.log(upperFruits);

const prices = ['$56.674', '$1289.9', '$100.00', '$45.384'];
// [ 56, 1289, 100, 45 ]
console.log(parseInt('$56.674'.slice(1)));

const numPrices = prices.map( (p) => { return parseInt(p.slice(1)) } );
console.log(numPrices);

const prices2 = [1200, 5000, 3400, 9000, 300, 4999, 12000];

const budgetPrices = prices2.filter((p) => { return p<5000; })
console.log(budgetPrices);

console.log('lichi'.length);
const fruitsWith5 = fruits.filter( (f) => { return f.length <= 5 } );
console.log(fruitsWith5);


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

const phoneList = [
    { brand : 'Samsung', model : 'Galaxy M31', price : 14999, color : [ 'Blue', 'Black', 'Red' ] },
    { brand : 'Mi', model : 'A3', price : 19999, color : [ 'Gray', 'Black' ] },
    { brand : 'Apple', model : 'Iphone 15', price : 85000, color : [ 'White', 'Blue', 'Black' ] },
    { brand : 'OnePlus', model : '11T', price : 45000, color : [ 'Green', 'Red' ] },
    { brand : 'Samsung', model : 'J7', price : 25000, color : [ 'gold', 'Red' ] }
];

const budgetPhones = phoneList.filter( (phone) => { return phone.price < 20000 } );
console.log(budgetPhones);  

// ['Samsung', 'Mi', 'Apple', 'OnePlus']

const brands = phoneList.map( (phone) => { return phone.brand } );
console.log(brands);

// filter phones with black color

console.log(['a', 'b', 'c'].includes('c'));

const blackPhones = phoneList.filter( (phone) => { return phone.color.includes('Black') } );
console.log(blackPhones);

const samsungPhones = phoneList.filter( (phone) => { return phone.brand === 'Samsung' } );
console.log(samsungPhones);
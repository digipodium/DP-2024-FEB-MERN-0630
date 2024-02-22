const user = { name: 'Raju', email: 'raju@mail.com', password: 'abc2754' };

console.log(user.name);
console.log(user.email);
console.log(user['password']);

user.email = 'raju@hotmail.com';
console.log(user);

user.address = 'Lucknow';
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone = {
    brand : 'Samsung',
    model : 'Galaxy M31',
    price : 14999,
    color : [ 'Blue', 'Black', 'Red' ]
};

console.log(smartphone.price);
console.log( smartphone.color[1] );
smartphone.color[2] = 'Orange';

smartphone.color.push('Green');

console.log(smartphone);

const phoneList = [
    { brand : 'Samsung', model : 'Galaxy M31', price : 14999, color : [ 'Blue', 'Black', 'Red' ] },
    { brand : 'Mi', model : 'A3', price : 19999, color : [ 'Gray', 'Black' ] },
    { brand : 'Apple', model : 'Iphone 15', price : 85000, color : [ 'White', 'Blue', 'Black' ] },
    { brand : 'OnePlus', model : '11T', price : 45000, color : [ 'Green', 'Red' ] }
];

console.log( phoneList.length );

console.log( phoneList[0].price );

console.log( phoneList[0].color[1] );
// find price of 2nd phone
console.log( phoneList[1].price );

// replace 2nd color of last phone with 'Yellow'
phoneList[phoneList.length-1].color[1] = 'Yellow';

console.log(phoneList);
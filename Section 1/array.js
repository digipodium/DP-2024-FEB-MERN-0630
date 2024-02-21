const arr = [345, 'nice', false, null]

console.log(arr);
console.log( typeof arr );

console.log(Array.isArray(arr));

const movies = [ 'Dunki', 'One piece', '12th fail', 'Batman', 'Deadpool' ];

console.log( movies.length );
console.log( 'Shaktimaan'.length );

// adding new element
movies.push('doremon'); //adds element at the end
movies.unshift('pokemon'); //adds element at the start

console.log(movies);

// removing element
movies.pop(); //removes element from the end
movies.shift(); //removes element from the start

console.log(movies);

// indexing
console.log( movies[2] );
console.log( movies[40] );
console.log( movies.at(-2) );
console.log( movies.indexOf('Dunki') );

// slicing
console.log( movies.slice(2, 4) );
console.log( movies.slice(2) );
console.log( movies.slice(-2, 30) );
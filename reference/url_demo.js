const url = require('url');

const myURL = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL 
console.log(myURL.href);    //returns the url
//or
console.log(myURL.toString());   //returns the url 

// Host/Domain 
console.log(myURL.host); 
// Host name 
console.log(myURL.hostname); 
// Path name 
console.log(myURL.pathname); 
// Serialized Query 
console.log(myURL.search);
// Create an object from search 
console.log(myURL.searchParams);
// Add params 
myURL.searchParams.append('abc', '123' ); 
console.log(myURL);
// You can capture search params and loop through them 
myURL.searchParams.forEach((value, name) => console.log(`${name}, ${value}`));


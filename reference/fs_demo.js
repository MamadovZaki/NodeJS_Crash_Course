const fs = require('fs');
const path = require('path');


// **** Create a folder ******
//fs.mkdir(path_to_directory, {options}, callback_function) 
//fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//   if(err) throw err; 
//   console.log('folder created..'); 
//});


//**** Create, write, append and read file ********
// fs.writeFile(path_to_directory, 'stuff you wanna write', callback_function)
// if the file already exists with text on it, writeFile overwrites whatever is in the file
// appendFile -- add more text to a file that already exists 
//fs.writeFile(path.join(__dirname, '/test', 'index.txt'), 'wassup dude', 'utf8' , err => {
//   if(err) throw err; 
//   console.log('File written to..');
//   // since this is a callback function, you can add more stuff here
//   fs.appendFile(path.join(__dirname, '/test/index.txt'), '\nYoooo !!', 'utf8', 
//      err => {
//         if(err)throw err;
// 	 console.log('Added text ..');
//      } 
//   )
//});


 

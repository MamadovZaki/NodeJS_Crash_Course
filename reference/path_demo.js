const path = require('path');

// Base File Name 	
//console.log(__filename); // returns the entire path and file name at the end 

// ********* Files and extensions ************
const base = path.basename(__filename);  // returns base name 
console.log(base);    // returns path_demo.js
const file = path.basename(__filename, '.js'); 
console.log(file);    // returns path_demo
const ext = path.extname(__filename);
console.log(ext);     // returns the extension: .js 


// ******** Directories ************** 
const dir = path.dirname(__filename);    //returns the file directory 
console.log(dir);

// ******* Creating a path object ********** 
const path_obj = path.parse(__filename);  //returns an object describing the path 
console.log(path_obj);
// since path_obj is an object, you can access any property: 
console.log('root: ', path_obj.root);
console.log('dir: ', path_obj.dir);
console.log('base: ', path_obj.base);
console.log('extension: ', path_obj.ext);
console.log('filename: ', path_obj.name);


//************ Concatenating Directories *************** 
// always consider using path.join(__dirname, ...) instead of explicitly concatenating the path
const newDir = path.join(__dirname, 'html', 'index.html'); 
console.log(newDir);      // returns path/to/html/index.html

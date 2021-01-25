const os = require('os');

//Platform 

console.log(os.platform());  // returns the os name 
console.log(os.arch());     // returns CPU archeticture 
console.log(os.cpus());    // returns CPU core info 
console.log(os.freemem());   //returns free momory
console.log(os.totalmem());  // returns total memory 
console.log(os.homedir());   // returns home directory 
console.log(os.uptime());   // returns the number of seconds the system has been up 



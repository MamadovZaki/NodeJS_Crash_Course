// you got access to __dirname and __filename variables 
//console.log(__dirname, __filename);

//const Person = require('./person')

//const persona = new Person('Zaki', 24 )

//persona.greeting()


const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener:', data));

logger.log('Hello World'); 

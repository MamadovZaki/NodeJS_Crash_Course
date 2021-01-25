const EventEmitter = require('events');

//Create Class 
class MyEmitter extends EventEmitter {
   
}

//Init class 
const myEmitter = new MyEmitter(); 

//Event Listener 
myEmitter.on('event', () => console.log('Event Fired! '))

//Init event 
myEmitter.emit('event');

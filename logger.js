// practical example with events 

const EventEmitter = require('events');
const uuid = require('uuid');

//console.log(uuid.v4());   //generates unique ids 

class Logger extends EventEmitter {
   log(msg){
   //call event 
   this.emit('message', {id: uuid.v4(), msg}); 
   }
}

module.exports = Logger ; 

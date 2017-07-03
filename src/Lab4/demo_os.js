/**
 * Created by abrhaley on 7/1/17.
 */

// get information about the computer's operating system;

    // os ---> operation system

const os = require('os');

console.log("plateform: "+ os.platform());
console.log("total memory: "+ os.totalmem());
console.log("cpu info: "+ os.cpus());     //array
console.log("cpu info array length: "+ os.cpus().length);
console.log("total free memory: "+ os.freemem());
console.log("operating system release info: "+ os.release());
console.log("name of os (the operating system): "+ os.type());
//console.log("info about the current user: "+ os.useInfo());
console.log("hostname of the os: "+ os.hostname());


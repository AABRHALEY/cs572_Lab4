/**
 * Created by abrhaley on 7/1/17.
 */

const os = require('os');

const checksystem = function(){
    console.log('Checking your system....');

    if(2 > os.totalmem() / (1024 * 1024 * 1024))
        console.log('This app needs at least 2 GB of RAM');

    else if(2 > os.cpus().length)
        console.log('Processor is not supported');

    else
        console.log('System is checked sucessfully');

}
checksystem();
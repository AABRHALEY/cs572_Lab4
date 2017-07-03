/**
 * Created by abrhaley on 7/1/17.
 */

const os = require('os');

const Rx = require('@reactivex/rxjs');

const subject = Rx.Observable.create( function(observer){
      observer.next('Checking your system....');

      if(2 > os.totalmem() / (1024 * 1024 * 1024))
          observer.error('This app needs at least 2 GB of RAM');

      else if(2 > os.cpus().length)
          observer.error('Processor is not supported');

      observer.complete();
});

var checkSystem  = subject.subscribe(
    function(data) { console.log(data);},
    function(err) { console.error(err);},
    function(){ console.log('System is checked sucessfully');}
);

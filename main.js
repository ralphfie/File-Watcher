const chokidar = require('chokidar');
const {sendMail} = require('C:/Users/User/Desktop/TM RnD/Training Nodejs/noty-api/Nodemail/Example 1/notification');

// One-liner for current directory
const watch = chokidar.watch('C:/Users/User/Desktop/TM RnD/Training Nodejs/noty-api/Filewatcher/Test 1');
const log = console.log.bind(console);

// Add event listeners.
watch
  .on('add', path =>{
    sendMail('CAMELIA Update','<font size = "5"> File '+ (path.bold()) + ' has been <b>ADDED<b>,</font>');
  })
  .on('change', path =>{
    sendMail('CAMELIA Update','<font size = "5"> File '+ (path.bold()) + ' has been <b>CHANGE<b>,</font>');
  })
  .on('unlink', path => {
    sendMail('CAMELIA Update','<font size = "5"> File '+ (path.bold()) + ' has been <b>REMOVED<b>,</font>');
  })
  .on('addDir', path => {
    sendMail('CAMELIA Update','<font size = "5"> Directory '+ (path.bold()) + ' has been <b>ADDED<b>,</font>');
  })
  .on('unlinkDir', path => {
    sendMail('CAMELIA Update','<font size = "5"> Directory '+ (path.bold()) + ' has been <b>REMOVED<b>,</font>');
  })
  .on('error', error => {
    sendMail('CAMELIA Update','Watcher error  '+ (error.bold()));
  })
  .on('ready', () => log('Initial scan complete. Ready for changes'))

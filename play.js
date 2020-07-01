const connect = require('./client');

console.log('Connecting ...');
connect();


const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}

const handleUserInput = (data) => {
  const stdin = process.stdin;
  if (data === '\u0003') {
    process.exit();
  }
}
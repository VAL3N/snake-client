const connect = require('./client');

console.log('Connecting ...');
connect();

/**
 * Establishes connection with the game server
 */
// const connect = function() {
//   const conn = net.createConnection({ 
//     host: 'localhost',
//     port: 50541
//   });
//   // interpret incoming data as text
//   conn.setEncoding('utf8');
//   conn.on('data', (data) => {
//     console.log('Message from client: ', data)
//   });
//   return conn;
// }
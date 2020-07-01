const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.148',
    port: 50541,
  });
  // interpret incoming data as text
  conn.on('connect', () => {
    console.log('Successfully connected to game server!')
    conn.write("Name: FFG");
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server!')
      conn.write("Move: up");
      conn.write("Move: left");
      conn.write("Move: down");
      conn.write("Move: right");
  });

  // process.stdin.on('data', (typedData) => {
  //   conn.write("Move: up");
  //   conn.write("Move: down");
  //   conn.write("Move: left");
  //   conn.write("Move: right");
  // });

  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Message from client: ', data)
  });
  return conn;
}

module.exports = {connect};
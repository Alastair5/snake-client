const net = require("net");

// Establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });


  conn.setEncoding("utf8");

  conn.on('connect', () => {
    conn.write('Name: AJG');
  });

  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write('Move: up');
  //   }, 200);
  // });

  // interpret incoming data as text

  return conn;
};
// console.log("Connecting ...");

module.exports = {connect};
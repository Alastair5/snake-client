const net = require("net");
const {IP, PORT} = require("./constants");

// Establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });


  conn.setEncoding("utf8");

  conn.on('connect', () => {
    conn.write('Name: AJG');
  });

  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write('Move: up');
  //   }, 1000);
  // });

  // interpret incoming data as text

  return conn;
};
// console.log("Connecting ...");

module.exports = {connect};
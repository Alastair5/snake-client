const net = require("net");

// Establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.on('data', (data) => {
    console.log("The Server says: ", data);
  });

  conn.on('connect', () => {
    conn.write('Name: AJG');
  });

  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write('Move: up');
  //   }, 100);
  // });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
console.log("Connecting ...");
connect();

module.expots = {connect};
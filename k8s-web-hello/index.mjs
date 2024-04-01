// if you want to use the import statement insted of require statement , you need to use the .mjs extension

import express from "express"; // express module is a third party module and it is used to create the web server in nodejs
import os from "os"; // os module is a core module in nodejs and it is used to get the information about the operating system on which the nodejs is running

const app = express(); // create the express app
const PORT = 3000; // port number on which the server will run

app.get("/", (req, res) => {
  try {
    const eth0 = os.networkInterfaces().eth0;
    const ipAddress = eth0 ? eth0[0].address : "N/A";

    const helloMessage = `Hello World from Node.js Server running on ${os.hostname()} with IP ${ipAddress}`;
    console.log(helloMessage);
    res.send(helloMessage);
  } catch (error) {
    console.error("Error occurred while retrieving network interface:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const messages = require("./messages.json");
const bodyParser = require("body-parser");
const { request } = require("http");
const app = express();




app.use(cors());
app.use(express.json());



const welcomeMessage = {
  id: 0,
  from: "Bart",
  text: "Welcome to CYF chat system!",
};

//This array is our "data store".
//We will start with one message in the array.
//Note: messages will be lost when Glitch restarts our server.
const messages = [welcomeMessage];

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.listen(3000, () => {
   console.log("Listening on port 3000")
  });

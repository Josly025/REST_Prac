const express = require("express");
const app = express();

const PORT = 3001;

//GET route
//call app and then http method //get is getting data
app.get("/", (req, res) => {
  res.send(`a get request / route on ${PORT}`);
  //get Data
  res.json(data);
});

//POST route
// POST is posting data
app.post("/newItem", (req, red) => {
  res.send(`a post request with /newItem route on port ${PORT}`);
});

//PUT route
// PUT method is for updating content
app.put("/item", (req, res) => {
  res.send(`a put request with /item route on ${PORT}`);
});

//DELETE route
//DELETE method is for deleting data
app.delete("/deleteItem", (req, res) => {
  res.send(`a delete request with /deleteItem route on ${PORT}`);
});
//
app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));

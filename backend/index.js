const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = 3006;

//Required middlewares
app.use(express.json());
app.use(morgan("dev"));

//App routes

app.listen(PORT, ()=> {
  console.log(`Server is running on port: ${PORT}`)
})

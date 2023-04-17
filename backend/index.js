const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
require("./config/db");
const userRoutes = require("./routes/userRoutes");
const mealRoutes = require("./routes/mealRoutes");
const PORT = 3006;

//Required middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors())

//App routes
app.use("/api/users", userRoutes);
app.use("/api/meals", mealRoutes);

app.listen(PORT, ()=> {
  console.log(`Server is running on port: ${PORT}`)
})

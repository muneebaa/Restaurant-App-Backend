require("dotenv").config();

const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/test", require("./routes/testRoutes")); // added a leading slash to the route

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome to my app</h1>");
});

const port = 8080 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server Running at port ${port}`.rainbow);
});

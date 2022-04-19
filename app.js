require("dotenv").config();
const cors = require("cors");
var express = require("express");
const connectdb = require("./utils/connection.js");
var path = require("path");
const adminRoutes = require("./routes/admin");

var app = express();
app.use(cors());
connectdb();


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use("/admin", adminRoutes);

app.use("/", express.static(path.join(__dirname, "dist", "cdsmrai-hospital")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "cdsmrai-hospital", "index.html"));
});

const port = process.env.PORT;

let server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

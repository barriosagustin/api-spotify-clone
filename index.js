require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
// const { dbConnect } = require("./config/mongo");

const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/api/1.0", require("./app/routes"));

const URL_PUBLIC = process.env.URL_PUBLIC || `http://localhost:${PORT}`;

app.listen(PORT, () => {
  console.log(`Tu API está disponible en ${URL_PUBLIC}/api/1.0`);
});

app.get("/test", (req, res) => {
  res.send("backend works");
});

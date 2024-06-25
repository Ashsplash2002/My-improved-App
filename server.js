const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/disorders", require("./routes/api/Disorders"));
app.use("/api/users", require("./routes/api/Users"));
app.use("/api/auth", require("./routes/api/Auth"));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

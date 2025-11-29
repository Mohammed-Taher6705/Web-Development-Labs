const express = require("express");
const mongoose = require("mongoose");
const courseRouter = require("./routes/courseRouter");

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://salemmay87_db_user:kRNVRvbbAAIi6RHM@lab9.kop9jpu.mongodb.net/")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

app.use("/courses", courseRouter);

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const itemRouter = require("./routes/itemRouter");
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use("/items", itemRouter);

app.listen(PORT, console.log(`server running at port : ${PORT}`));

const express = require("express");
const app = express();
const dotenv = require("dotenv");

const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const dataDB = require("./db/db");
const appRouter = require("./routes/userRouter");
dotenv.config();
// middlware
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors(corsOptions));

// baza mongoose
dataDB();

// router
app.use("/", appRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`${port}-portda ishladi`);
});

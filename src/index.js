const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// require("./controller/accessController")(app);

const controller = require("./controller/accessController");
app.use("/sessions", controller);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.pbsys.mongodb.net/cluster0?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);
app.listen(process.env.PORT || 4000, () =>
  console.log(`server listening at port ${process.env.PORT}`)
);

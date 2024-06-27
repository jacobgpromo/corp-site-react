const express = require("express");
const path = require("path");
const app = express();
var bodyParser = require("body-parser");
const multer = require("multer");
const uuidv4 = require("uuid/v4");
const knox = require("knox");
const awsS3Url = "https://s3.amazonaws.com/overtures-resumes/";
const fs = require("fs");
var enforce = require("express-sslify");
const nocache = require("nocache");

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(nocache());
app.set("etag", false);

//Upload Storage function
let newFilename = "";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, newFilename);
  },
});
const upload = multer({
  storage,
});

process.on("warning", (warning) => {
  console.log(warning.stack);
});

//react routing
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

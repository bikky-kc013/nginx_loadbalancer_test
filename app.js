const express = require("express");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");

(function bootstrap() {
  const app = express();
  app.use(morgan("dev"));
  app.get("/loaderio-42f8b7a3426f55aa011f3c0abba40745.txt", (req, res) => {
    res.send("loaderio-42f8b7a3426f55aa011f3c0abba40745");
  });
  app.get("/", (req, res) => {
    try {
      const file = fs.readFileSync(path.join(__dirname, "./app.json"), "utf8");
      res.json(JSON.parse(file));
    } catch (error) {
      res.status(500).send("Error reading or parsing the file.");
    }
  });
  const port = 4000;
  app.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on port ${port}`);
  });
})();

const path = require("path");
const express = require("express");

const app = express();

//const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running in on port ${PORT}`);
});

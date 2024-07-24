const express = require("express");
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.get("/todos", (req, res) => {
//   res.send("page todos");
// });

// app.get("/menu", (req, res) => {
//   res.send("Page menu");
// });

// app.get("/profile", (req, res) => {
//   res.send("page profile");
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes");
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

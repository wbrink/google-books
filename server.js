const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})

const mongoose_db = mongoose.connection;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(require("./routes/api-routes"));

// Send every other request to the React app (necessary for react router dom)
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


mongoose_db.once("open", function() {
  app.listen(PORT, () => {console.log("Server Listening on Port", PORT)});
})


mongoose_db.on("error", function() {
  console.error("database failed to open");
})
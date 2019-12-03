const express = require("express");
let app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const ejs = require("ejs");
const pgp = require("pg-promise")();
const dbConfig = {
  host: "localhost",
  port: 5432,
  database: "cuthere",
  user: "postgres",
  password: "wx111699"
};
let db = pgp(dbConfig);
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/")); // This line is necessary for us to use relative paths and access our resources directory

app.use(express.static("public")); // This line is necessary for us to use relative paths and access our resources directory
//Obtain event details
app.get("/search", function(req, res) {
  console.log(req.query.order);
  let q = "";
  if (req.query.order == "name" || req.query.order == null) {
    q = "select * from eventDetails order by eventname";
  } else {
    q = "select * from eventDetails order by dateofevent,timestart";
  }
  db.task("get-everything", task => {
    return task.batch([task.any(q)]);
  })
    .then(function(events) {
      console.log(events[0]);
      // console.log(events[0]);
      res.render("search", {
        event: events[0],
        error: ""
      });
    })
    .catch(function(err) {
      // display error message in case an error
      res.render("search", {
        error: "Events are missing"
      });
    });
});

app.listen(3000);
console.log("Server complete");

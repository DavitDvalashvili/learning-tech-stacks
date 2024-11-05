import pool from "./database.js";
import express from "express";

const app = express();

app.get("/sql", (req, res) => {
  const Query = `
  DELETE FROM branch WHERE branch_id = 2
  `;

  pool.query(Query, (err, result) => {
    if (err) {
      console.error("Error", err);
      res.status(500).send("Error ");
    } else {
      console.table(result);
      res.send("success");
    }
  });
});

// Start the server
app.listen(7200, () => {
  console.log(`Server is listening on port ${7200}`);
});

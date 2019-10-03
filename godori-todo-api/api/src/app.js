const express = require("express");
const { Pool } = require("pg");
const app = express();
const PORT = 80;

const pool = new Pool({
  user: "sampleuser",
  host: "db",
  database: "sampledb",
  password: "samplesecret",
  port: 5432
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

pool.on("connect", () => {
  console.log("=====Connected to the db=====");
});

const createTables = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
  TODO(
    id SERIAL PRIMARY KEY,
    title VARCHAR(200),
    done VARCHAR(10) DEFAULT 'N'
  );`;

  pool
    .query(queryText)
    .then(res => {
      console.log("TABLE CREATED");
    })
    .catch(err => {
      console.log(`>> Error while Table Creation`, err);
    });
};

const getNow = () => {
  pool.query("SELECT NOW()", (err, res) => {
    console.log(err, res);
  });
};

app.get("/", (req, res) => {
  const selectQuery = `SELECT * FROM TODO ORDER BY ID ASC;`;
  pool
    .query(selectQuery)
    .then(result => {
      console.log("=======TABLE SELECT=======");
      console.log(result.rows);
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.log(err);
      pool.end();
    });
});

app.post("/", (req, res) => {
  const { title, done } = req.body;
  const insertQuery = `INSERT INTO TODO (title, done) values($1, $2)`;
  pool
    .query(insertQuery, [title, done])
    .then(result => {
      console.log("=======INSERT DATA======");
      if (result.rowCount !== 0) {
        return res.status(200).send("INSERT SUCCESS");
      }
      return res.status(200).send("INSERT FAILURE");
    })
    .catch(err => {
      res.status(500).json(">> Error while inserting data", err);
    });
});

app.put("/", (req, res) => {
  // only toggle complete
  const { id, done } = req.body;
  const updateQuery = `UPDATE TODO SET done = $2 WHERE id = $1 `;

  pool
    .query(updateQuery, [id, done])
    .then(result => {
      console.log("=======UPDATE DATA======");
      if (result.rowCount === 0) {
        return res.status(200).send("NO DATA TO UPDATE");
      }
      return res.status(200).send("UPDATE SUCCESS");
    })
    .catch(err => {
      res.status(500).json(">> Error while updating data", err);
    });
});

app.delete("/", (req, res) => {
  const { id } = req.body;
  const deleteQuery = `DELETE FROM TODO WHERE id = $1`;
  pool
    .query(deleteQuery, [id])
    .then(result => {
      console.log("=======DELETE DATA======");
      if (result.rowCount === 0) {
        return res.status(200).send("NO DATA TO DELETE");
      }
      return res.status(200).send("DELETE SUCCESS");
    })
    .catch(err => {
      res.status(500).send(">> Error while deleting data", err);
    });
});

app.listen(PORT, () => {
  createTables();
  console.log(`GODORI API SERVER IS RUNNING....`);
});

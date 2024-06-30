const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const config = require("./config");
const { Client } = require("pg");
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyparser.json());

var conString = config.urlConnection;
var client = new Client(conString);

client.connect(function (err) {
  if (err) {
    return console.error("Couldn't connect to database", err);
  }
  client.query("SELECT NOW()", function (err, result) {
    if (err) {
      return console.error("Erro ao executar a query.", err);
    }
    console.log(result.rows[0]);
  });
});

app.get("/", (req, res) => {
  console.log("Response ok.");
  res.send("Ok – Server online.");
});

app.get("/restaurants", (req, res) => {
  try {
    client.query("SELECT * FROM Restaurants", function (err, result) {
      if (err) {
        return console.error("Erro ao executar a qry de SELECT", err);
      }
      res.send(result.rows);
      console.log("Chamou get restaurants");
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/restaurants/:id", (req, res) => {
  try {
    console.log("Get requisition /:id " + req.params.id);
    client.query(
      "SELECT * FROM Restaurants WHERE id = $1",
      [req.params.id],
      function (err, result) {
        if (err) {
          return console.error("Erro ao executar a qry de SELECT id", err);
        }
        if (result.rowCount == 0) {
          res.send("Usuario com o codigo " + req.params.id + " não existe no banco de dados");
        } else res.send(result.rows);
      }
    );
  } catch (error) {
    console.log(error);
  }
});

app.delete("/restaurants/:id", (req, res) => {
  try {
    console.log("DELETE requisition with id: " + req.params.id);
    const id = req.params.id;
    client.query(
      "DELETE FROM Restaurants WHERE id = $1",
      [id],
      function (error, result) {
        if (error) {
          return console.error("Error executing DELETE query", error);
        } else {
          if (result.rowCount == 0) {
            res.status(400).json({ info: "Register not found." });
          } else {
            res.status(200).json({ info: "Register deleted. Code id: ${id}" });
          }
        }
        console.log(result);
      }
    );
  } catch (error) {
    console.log(error);
  }
});

app.post("/restaurants", (req, res) => {
  try {
    console.log("Post requisition", req.body);
    const { name, categories, address, description } = req.body;
    client.query(
      "INSERT INTO Restaurants (name, categories, address, description) VALUES ($1, $2, $3, $4) RETURNING * ",
      [name, categories, address, description],
      function (err, result) {
        if (err) {
          return console.error("INSERT query error", err);
        }
        const { id } = result.rows[0];
        res.setHeader("id", '${id}');
        res.status(201).json(result.rows[0]);
        console.log(result);
      }
    );
  } catch (error) {
    console.error(error);
  }
});

app.put("/restaurants/:id", (req, res) => {
  try {
    console.log("Put requisition", req.body);
    const id = req.params.id;
    const { name, categories, address, description } = req.body;
    client.query(
      "UPDATE Restaurants SET name=$1, categories=$2, address=$3, description=$4 WHERE id =$5 ",
      [name, categories, address, description, id],
      function (err, result) {
        if (err) {
          return console.error("UPDATE query error", err);
        } else {
          res.setHeader("id", id);
          res.status(202).json({ identifier: id });
          console.log(result);
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
});

app.listen(config.port, () =>
  console.log("Servidor funcionando na porta " + config.port)
);

module.exports = app;
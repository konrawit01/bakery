const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const secretKey = 'secret';

app.use(cors())
app.use(bodyParser.json())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))


const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'reactpospj'
});



db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('MySQL Connected...');
  }
});

app.get("/", (req, res) => {
  res.send("Hello! Node.js");
});



app.post("/usermember/login", (req, res) => {
  const { a_username, a_password } = req.body;
  const query = 'SELECT * FROM tbl_allusers WHERE a_username = ?';
  db.query(query, [a_username], (err, allusers) => {
    if (err) {
      res.json({ status: 'error', message: 'internal server error' });
      return;
    }
    if (allusers.length === 0) {
      res.json({ status: 'error', message: 'no user found' });
      return;
    }
    if (allusers[0].a_password == a_password) {
      const tokenpayload = {
        a_id: allusers[0].a_id,
        a_username: allusers[0].a_username,
        a_level: allusers[0].a_level
      };
      const token = jwt.sign(tokenpayload, secretKey, { expiresIn: '7d' });
      res.json({ status: 'ok', message: 'login success', token , a_level: allusers[0].a_level});
    } else {
      res.json({ status: 'error', message: 'login failed' });
    }
  });
});

app.post("/employee/login", (req, res) => {
  const { a_username, a_password } = req.body;
  const query = 'SELECT * FROM tbl_allusers WHERE a_username = ?';
  db.query(query, [a_username], (err, allusers) => {
    if (err) {
      res.json({ status: 'error', message: 'internal server error' });
      return;
    }
    if (allusers.length === 0) {
      res.json({ status: 'error', message: 'no user found' });
      return;
    }
    if (allusers[0].a_password == a_password) {
      const tokenpayload = {
        a_id: allusers[0].a_id,
        a_username: allusers[0].a_username,
        a_level: allusers[0].a_level
      };
      const token = jwt.sign(tokenpayload, secretKey, { expiresIn: '7d' });
      res.json({ status: 'ok', message: 'login success', token , a_level: allusers[0].a_level});
    } else {
      res.json({ status: 'error', message: 'login failed' });
    }
  });
});

app.post("/admin/login", (req, res) => {
  const { a_username, a_password } = req.body;
  const query = 'SELECT * FROM tbl_allusers WHERE a_username = ?';
  db.query(query, [a_username], (err, allusers) => {
    if (err) {
      res.json({ status: 'error', message: 'internal server error' });
      return;
    }
    if (allusers.length === 0) {
      res.json({ status: 'error', message: 'no user found' });
      return;
    }
    if (allusers[0].a_password == a_password) {
      const tokenpayload = {
        a_id: allusers[0].a_id,
        a_username: allusers[0].a_username,
        a_level: allusers[0].a_level
      };
      const token = jwt.sign(tokenpayload, secretKey, { expiresIn: '7d' });
      res.json({ status: 'ok', message: 'login success', token , a_level: allusers[0].a_level});
    } else {
      res.json({ status: 'error', message: 'login failed' });
    }
  });
});


app.post("/usermember/signup", (req, res) => {
  const { a_username, a_password } = req.body
  db.execute('INSERT INTO tbl_allusers (a_username, a_password) VALUES (?, ?)',
    [a_username, a_password],
    function (err, results, fields) {
      if (err) { res.json({ status: 'error', message: err }); return }
      res.json({ status: 'ok' });
    }
  );
});


app.post("/usermember/authentication", (req, res) => {

  try {
    const token = req.headers.authorization.split(' ')[1]
    // console.log('token', token)
    const decoded = jwt.verify(token, secretKey);
    // console.log('decoded', decoded)
    res.json({ status: 'ok', decoded });
  } catch (err) {
    res.json({ status: 'error', message: err.message })
  }

});

app.post("/employee/authentication", (req, res) => {

  try {
    const token = req.headers.authorization.split(' ')[1]
    // console.log('token', token)
    const decoded = jwt.verify(token, secretKey);
    // console.log('decoded', decoded)
    res.json({ status: 'ok', decoded });
  } catch (err) {
    res.json({ status: 'error', message: err.message })
  }

});

app.post("/admin/authentication", (req, res) => {

  try {
    const token = req.headers.authorization.split(' ')[1]
    // console.log('token', token)
    const decoded = jwt.verify(token, secretKey);
    // console.log('decoded', decoded)
    res.json({ status: 'ok', decoded });
  } catch (err) {
    res.json({ status: 'error', message: err.message })
  }

});



app.listen(5000, () => {
  console.log("Starting node.js at port 5000 ");
});

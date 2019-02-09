const express = require('express');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('data.json');
const db = low(adapter);

const app = express();

app.use(express.json());

app.get('/users', function (req, res) {
  const users = db.get("users");

  res.send(users)
});
app.post('/users', function (req, res) {
    const user = req.body;
    if (user.name && user.name.length) {
        users.push(user);
        res.end();
    } else {
        res.status(400);
        res.send("allo");
    }


});

app.listen(1488, function () {
    console.log('Example app listening on port 1488!');
});

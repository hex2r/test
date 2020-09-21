const express = require('express');
const data = require('./data.json')
const port = 3002;
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res, next) => {
  res.json(data);
});

app.listen(port, () => console.log(`Listening: http://localhost:${port}`));

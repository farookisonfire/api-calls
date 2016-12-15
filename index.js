const express = require('express');

const PORT = 1337;
const app = express();
const data = ['nagata', 'kamuzora'];

app.get('/api/data', (req,res) => {
  res.send(data)
});

app.listen(PORT, () => {
  console.log('listening on ' + PORT)
});

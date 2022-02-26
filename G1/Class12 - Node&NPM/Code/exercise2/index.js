const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// app.use(cors);

app.get('/hello', cors(), (req, res) => {
  res.json('Hello SEDC Academy');
  res.end();
});

app.listen(port, () => {
  console.log(`App listing on port ${port}`);
});

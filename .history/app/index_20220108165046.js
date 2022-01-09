const express = require("express")
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const { ppid } = require("process");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: '50mb' }));


app.listen(port, () => {
  console.log('Server start on port:' + port);
})

app.get('/', (req, res) => {
  res.send("Main Page");
  console.log('Params and URL:', req);
})
app.get('/Products', (req, res) => {
  res.send("Productsn Page");
  console.log('Params and URL:', req);
})
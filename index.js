const express = require('express');
const port = 8000;
const db = require('./config/mongoose');
const app = express();
// to decipher the req body
app.use(express.urlencoded());
// routes
app.use('/', require('./routes/index'));

app.listen(port, err => {
    if(err) {console.log('Error in running the server'); return}
    console.log('Server is up and running on port: ', port);
})
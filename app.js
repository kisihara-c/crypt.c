const express = require('express');
const app = express();
const port = process.env.PORT||3000;

app.disable('x-powered-by');

app.use(express.static('public'));

app.listen(port,() =>{
console.log('crypt.c is running at ${port}')
})

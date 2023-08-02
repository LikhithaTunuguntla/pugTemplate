const express = require('express');
const app = express();

const pug = require('pug');

const source = 'img(src="foo.png")'
const port=3000;

app.set('view engine' , 'pug');

app.get('/',(req,res)=>{
    res.send(pug.renderFile('template.pug'));
})

app.listen(port,()=>{
   console.log(`App listening to the port: ${port}`);
})



const express = require('express');
const Router = require('./controller');

const app = express();

//setting template engine
app.set('view engine', 'ejs');

//midlleware

 //static folders
 app.use(express.static('./public'));
 app.use(express.static('./imageServer'));

//routing config
app.get('/',Router.imgServerController.showImageLists);

app.listen(3000);
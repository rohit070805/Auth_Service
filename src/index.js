const express = require('express');
const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');


const app = express();


const prepareAndStartserver=()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
app.listen(PORT,()=>{
    console.log("server started on port",5000);
});
}
prepareAndStartserver();
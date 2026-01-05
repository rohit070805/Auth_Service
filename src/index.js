const express = require('express');
const {PORT} = require('./config/serverConfig');

const app = express();

const prepareAndStartserver=()=>{
app.listen(PORT,()=>{
    console.log("server started on port",5000);
});
}
prepareAndStartserver();
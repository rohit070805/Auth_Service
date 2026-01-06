const express = require('express');
const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');
const UserRepository = require('./repository/user-repository');

const app = express();


const prepareAndStartserver=async()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
    const userRepo = new UserRepository();
    const user = await userRepo.getByID(5);
    console.log(user);
app.listen(PORT,()=>{
    console.log("server started on port",5000);
});
}
prepareAndStartserver();
const express = require('express');
const {PORT} = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const bodyParser = require('body-parser');
const UserRepository = require('./repository/user-repository');
const UserService = require('./services/user-service');
const app = express();


const prepareAndStartserver=async()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
        // JWT work
        // const userRepo = new UserRepository();
        // const user = await userRepo.getByID(5);
        
        // const userService= new UserService();
        // const newToken  = userService.createToken({email:user.email,id:user.id});
        // console.log("token is here ",newToken);
        // const verifiedUser = userService.verifyToken(newToken);
        // console.log("verified user ",verifiedUser);

app.listen(PORT,()=>{
    console.log("server started on port",5000);
});
}
prepareAndStartserver();
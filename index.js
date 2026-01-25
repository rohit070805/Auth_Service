const express = require('express');
const {PORT} = require('./src/config/serverConfig');
const apiRoutes = require('./src/routes/index');
const bodyParser = require('body-parser');
const UserRepository = require('./src/repository/user-repository');
const UserService = require('./src/services/user-service');
const app = express();
const db = require('./src/models/index');
const {User,Role} = require('./src/models/index');
const {DB_SYNC} = require('./src/config/serverConfig');

const prepareAndStartserver=async()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/authservice/api',apiRoutes);


// User roles Asoosciation
    // const u1 = await User.findByPk(10);
    // const r1 = await Role.findByPk(2);
    // u1.addRole(r1);
    // const response = await u1.getRoles();
    // const response = await u1.hasRole(r1);
    // console.log(response); 

// Database SYNC
    // if(process.env.DB_SYNC){
    //     db.sequelize.sync({alter:true});
    // }

// JWT work
    // const userRepo = new UserRepository();
    // const user = await userRepo.getByID(5);
    
    // const userService= new UserService();
    // const newToken  = userService.createToken({email:user.email,id:user.id});
    // console.log("token is here ",newToken);
    // const verifiedUser = userService.verifyToken(newToken);
    // console.log("verified user ",verifiedUser);

    app.listen(PORT,()=>{
        console.log("server started on port",PORT);
    });
}
prepareAndStartserver();
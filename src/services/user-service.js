const { Model } = require('sequelize');
const jwt = require('jsonwebtoken');
const {JWTKEY} = require('../config/serverConfig');
const bcrypt = require('bcrypt');
const UserRepository = require('../repository/user-repository');
const AppErrors = require('../utils/error-handlers');

class UserService{
    constructor(){
        this.userRepository= new UserRepository();
    }
    async create(data){
            try {
                const user = await this.userRepository.create(data);
                return user;
            } catch (error) {
                if(error.name == 'SequelizeValidationError'){
                    throw error;
                }
                console.log("Something wrong in service layer");
                throw error;
            }
    }

    async signIn(userEmail,plainPassword){
        try {
            const user = await this.userRepository.getByEmail(userEmail);
            const matchPassword = this.checkPassword(plainPassword,user.password);
            if(!matchPassword){
                console.log("Password Does'nt Matched");
                throw {error:'Wrong password'};
            }
           const newJwt = this.createToken({email:user.email,id:user.id});
           return newJwt;
        } catch (error) {
             console.log("Something wrong in service layer");
                throw {error};
            }
    }
     async isAuthenticated(token){
        try {
            const response = this.verifyToken(token);
            if(!response){
                throw {error:"Token is not authenticated"};
            }
            const user =await this.userRepository.getByID(response.id);
            if(!user){
                throw {error:"User with this token does not exist"};
            }
            console.log(response.id);
            return response.id;
        } catch (error) {
             console.log("Something wrong in service layer");
                throw {error};
            }
    }
    
    createToken(user){
            try {
                const result = jwt.sign(user,JWTKEY,{expiresIn:'1d'});
                return result;
            } catch (error) {
                console.log("Sowmething went wrong in token createion");
                throw {error};
            }
    }
    verifyToken(token){
            try {
                const response = jwt.verify(token,JWTKEY);
                return response;
            } catch (error) {
                console.log("Sowmething went wrong in token validation",error);
                throw {error};
            }
    }
    checkPassword(userInputPlainPassword,enrcyptedPassword){
        try {
                return  bcrypt.compareSync(userInputPlainPassword,enrcyptedPassword);
        } catch (error) {
            console.log("Sowmething went wrong in [password Comparison",error);
                throw {error};
        }
    }
   async isAdmin(userId){
        try {
             const response = await this.userRepository.isAdmin(userId);
             return response;
        } catch (error) {
            console.log("Something Wrong in Service layer");
            throw error;
            // 
        }
    }
}
module.exports = UserService;
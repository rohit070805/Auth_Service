const AuthValidate = (req,res,next)=>{
    if(!req.body.email || !req.body.password){
        res.status(400).json({
            data:{},
            message:'Eamil or password is Empty',
            success:false,
            err:{error:"Not all credentials provided"}
        });
    }
    next();
}
module.exports={
    AuthValidate:AuthValidate
};
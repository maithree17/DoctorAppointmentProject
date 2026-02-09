import jwt from 'jsonwebtoken'

const Authadmin= (req,res,next)=>{
    try{
        const {atoken}=req.headers;
        if(!atoken){
           return  res.json({success:false,message:"Not authorized login"})
        }
        const decoded=jwt.verify(atoken,process.env.JWT_SECRET)
        if(decoded!==(process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD)){
            return res.json({success:false,message:"Not authorized login"})
        }
        next()
    }catch(error){
        console.log(error)
       return  res.json({success:false,message:error.message})
    }
}

export default Authadmin;
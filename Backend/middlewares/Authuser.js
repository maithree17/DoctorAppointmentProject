import jwt from 'jsonwebtoken'

const Authuser= (req,res,next)=>{
    try{
        const {token}=req.headers;
        if(!token){
           return  res.json({success:false,message:"Not authorized login"})
        }
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.userId=decoded.id
        next()
    }catch(error){
        console.log(error)
       return  res.json({success:false,message:error.message})
    }
}

export default Authuser;
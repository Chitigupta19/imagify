import jwt from "jsonwebtoken"


const userAuth = async (req, res, next) =>{
      const {token} = req.headers;

      if(!token){
           return res.json({success:false, messege:'Not Authorized Logiin Again'})
      }
      try {
            const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);
            if(tokenDecoded.id){
                  req.userId=tokenDecoded.id;
            }else{
                  return res.json({success:false, messege:'Not Authorized Logiin Again'})
            }
            next();
      } catch (error) {
            res.json({success:false, messege:error.messege});
      }
};
export default userAuth;
import { errorHandler } from "../Utils/error.js";
import User from "../models/user.model.js";

export const test = (req, res)=>{
   res.json({msg:"ok"});
}


export const signout = (req, res, next) =>{
   try{
      res.clearCookie('access_token').status(200).json('User has been signed out ');
   }
   catch(error){
      next(error);
   }
};

export const getUsers = async(req, res, next)=>{
   if(!req.user.isAdmin){
      return next(errorHandler(403, 'You are not allowed to see all users'))
   }
   try{
      const startIndex = parseInt(req.query.startIndex)||0;
      const limit = parseInt(req.query.limit)|| 10;
      const sortDirection = req.query.sort ==='asc'? 1 : -1;

      const users = await User.find().sort({createdAt: sortDirection}).skip(startIndex).limit(limit);

      const userswithoutpassword
= users.map((user)=>{
   const {password, ...rest} = user._doc;
   return rest;

}) 

const totalUsers = await User.countDocuments();

const now = new Date();

const oneMonthAgo = new Date(
   now.getFullYear(),
   now.getMonth() -1,
   now.getDate()
);

const lastMonthUsers = await User.countDocuments({
   createdAt: {$gte : oneMonthAgo},
}
)

res.status(200).json({
   users:userswithoutpassword,
   totalUsers,
   lastMonthUsers,
})


}catch(error){

   }

}

export const deleteUser = async(req, res, next)=>{
    if(!req.user.isAdmin && req.user.id !== req.params.userId){
      return next(errorHandler(403, 'You are not allowed to delete this user'))
   }
    try{
         await User.findByIdAndDelete(req.params.userId);
         res.status(200).json('The user has been deleted');
    }catch(error){
         next(error)
    }
}
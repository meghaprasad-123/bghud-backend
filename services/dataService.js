const jwt=require('jsonwebtoken')

const db=require('./db')

const register=(username,mail,number,password)=>{
    return db.User.findOne({mail})
    .then(user=>{
        if(user){
            return{
                status:false,
                statusCode:400,
                message:'User already exist'
            }
        }
        else{
            const newUser=new db.User({
                mail:mail,
                username:username,
                number:number,
                password:password
            })
            newUser.save()

            return{
                status:true,
                statusCode:200,
                message:'Register successfully'
            }
        }
    })
}



const login=(mail,password)=>{
    return db.User.findOne({mail,password})  //data
    .then(user=>{
     if(user){
       currentUser=user.username
       currentMail=mail
       const token =jwt.sign({currentMail:mail},'superkey5037')
       return {
         status:true,
         statusCode:200,
         message:'Login successful',
         token:token,
         currentUser:currentUser,
         currentMail:mail
       }
     }
     else{
       return {
         status:'false',
         statusCode:400,
         message:'Invalid userdetails'
       }
     }
    })
 
 }
 

const registration=(username,mail,qualification,number,place,course,mode)=>{
    return db.User.findOne({number,place})
    .then(student=>{
        if(student){
            return{
                status:false,
                statusCode:400,
                message:"You already registered for a course"
            }
        }
        else{
            const newStdnt= new db.User({
                mail:mail,
                username:username,
                qualification:qualification,
                number:number,
                place:place,
                course:course,
                mode:mode
            })
            newStdnt.save()
            return{
                status:true,
                statusCode:400,
                message:"You have completed registration process successfully"
            }
        }
    })
}










// const getprofile=()=>{
//     return db.Profile.find()
//     .then((result)=>{
//         if(result){
//             return{
//                 status:true,
//                 statusCode:200,
//                 profiles:result
//             }
//         }
//         else{
//             return{
//                 status:false,
//                 statusCode:404,
//                 message:"Your profile is empty"
//             }
//         }
//     })
// }



module.exports={
    register,
    login,
    registration
}
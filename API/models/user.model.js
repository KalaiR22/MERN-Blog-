import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required: true,
            unique: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        password:{
            type: String,
            unique: true,
        },
        profilePicture:{
            type: String,
            default: "https://beforeigosolutions.com/wp-content/uploads/2021/12/dummy-profile-pic-300x300-1.png",

        }
    }, {timestamps:true}
);

const User = mongoose.model('User', userSchema)

export default User;

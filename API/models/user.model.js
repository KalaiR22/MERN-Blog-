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
            default: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710460800&semt=ais",

        }
    }, {timestamps:true}
);

const User = mongoose.model('User', userSchema)

export default User;

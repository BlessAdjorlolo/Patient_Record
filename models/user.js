import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: [true, "First name is required"],
    },

    lastName:{
        type:String,
        required: [true, "Last name is required"],
    },

    email:{
        type: String,
        required: [true, "Email is required"],
        lowercase: true,
        unique: true,
    },

    password:{
        type: String,
        required: true,
        minLength: [6, "Password should have at least 6 charaters"],
    }
    
},
{
    timestamps: true,
}
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
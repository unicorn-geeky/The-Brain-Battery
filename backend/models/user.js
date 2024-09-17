import mongoose from "mongoose";
import bcrypt from "bcrypt";

/* Create Schema to define structure of the document */
const userSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    fullName: { type: String, required: true, trim: true },
    emailId: { type: String, unique: true, trim: true, lowercase: true, match : /^\S+@\S+\.\S+$/ },   
    password: { type: String }
})

/* Convert Pwd into hashed format */
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    }

})

const User = mongoose.model('User', userSchema);
export default User;
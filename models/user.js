const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Creating the user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Pre-save middleware to hash password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        return next(err);
    }
});
// cpmpare to 

userSchema.methods.comparepass = async function(userpass)
{
     return  await bcrypt.compare(userpass, this.password);
};

module.exports = mongoose.model('user', userSchema);

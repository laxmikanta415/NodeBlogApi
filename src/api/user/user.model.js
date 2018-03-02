import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Name is required"]
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function(data) {
        if (data.length <= 8) {
          return false;
        }
      },
      message: "{VALUE} is invalid"
    }
  },
  age: {
    type: Number,
    min: [18, "Age should not be less then 18"],
    max: [28, " Age should not be more the 28"]
  }
});
UserSchema.pre("save", function(next) {
  var hashPassword = bcrypt.hashSync(this.password, salt);
  this.password = hashPassword;
  next();
});

UserSchema.methods = {
  authenticate: function(plainPassword) {
    return bcrypt.compareSync(plainPassword, this.password);
  }
};

const salt = bcrypt.genSaltSync(10);

const UserModel = mongoose.model("user", UserSchema);

export default UserModel;

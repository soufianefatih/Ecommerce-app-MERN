const { Schema, model } = require("mongoose");
const {
  handleMongooseError,
  signToken,
  comparePassword,
  hashPassword,
} = require("../helpers");

const userSchema = new Schema(
  {
    userName: {
      type: String,
      default: "User",
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },

    zipCode: {
        type: String,
        default: ""
      },

    address: {
        type: String,
        default: ""
      },

      city: {
        type: String,
        default: ""
      },

    password: {
      type: String,
      required: [true, "Password is required"],
    },
    role: {
      type: String
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.methods.comparePassword = comparePassword;

userSchema.methods.signToken = signToken;

userSchema.pre("save", hashPassword);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;

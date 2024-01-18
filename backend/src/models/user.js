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
        required: [true, "zipCode is required"],
      },

    address: {
        type: String,
        required: [true, "adress is required"],
      },

      city: {
        type: String,
        required: [true, "city is required"],
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

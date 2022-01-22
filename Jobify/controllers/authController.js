import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const register = async (req, res) => {
  const { name, email, password } = req.body; // Error handling before it hits the controller

  if (!name || !email || !password) {
    throw new BadRequestError("please provide all values");
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("Email already in use");
  }
  const user = await User.create({ name, email, password });
  // JWT Step two use the token +
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    // Object will exclude the hashed password from the request
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
  });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePasswords(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid pass");
  }
  const token = user.createJWT();

  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token, location: user.location });
  res.send("Login Successful");
};
const updateUser = async (req, res) => {
  res.send("Update user");
};

export { register, login, updateUser };

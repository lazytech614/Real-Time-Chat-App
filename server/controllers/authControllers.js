import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signupUser = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword)
      return res.status(400).json({ error: "Passwords do not match" });

    const user = await User.findOne({ userName });
    if (user) return res.status(400).json({ error: "Username already exists" });

    // Password hashing here
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Generate random profile pic here
    const profilePic = `https://avatar.iran.liara.run/public/${
      gender === "Male" ? "boy" : gender === "Female" ? "girl" : ""
    }?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic,
    });

    if (newUser) {
      await newUser.save();
      generateTokenAndSetCookie(newUser._id, res);
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic,
        success: 1,
      });
    } else {
      res.status(400).json({ error: "Invalid data", success: 0 });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;
    // console.log(req.body);

    const user = await User.findOne({
      userName: { $regex: new RegExp(`^${userName}$`, "i") },
    });

    if (!user) {
      return res.status(400).json({ message: "User not found", success: 0 });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res
        .status(401)
        .json({ message: "Incorrect password", success: 0 });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      profilePic: user.profilePic,
      success: 1,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error", success: 0 });
  }
};

export const logoutUser = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

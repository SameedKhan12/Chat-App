import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";
import dotenv from "dotenv";
dotenv.config();

export const sginupUser = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if (!userName) {
      return res.status(400).json({ error: "username is required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "password doesn't match" });
    }

    const user = await User.findOne({userName});

    if(user){
      return res.status(400).json({error:'username already exists'})
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
    })
    if(newUser){
      // JWT Token here
      await generateTokenAndSetCookie(newUser._id,res)
      await newUser.save();
      await res.status(201).json({
        _id:newUser._id,
        fullName:newUser.fullName,
        userName:newUser.userName,
        profilePic:newUser.profilePic
      })

    } 
    
  } catch (error) {
    console.log('Error in signup controll',error.message)
    res.status(500).json({error:'Internal Server error'});
  }
};
export const loginUser = async (req, res) => {
  try {
    
    const {userName,password} = req.body;
    const user = await User.findOne({userName});
    
    const isPaswordCorrect = await bcrypt.compare(password,user?.password || "");
    
    if(!user || !isPaswordCorrect){
      return res.status(400).json({error: "Invalid username or password"});
    }

      // JWT Token here
      generateTokenAndSetCookie(user._id, res);
      res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        userName: user.userName,
        profilePic: user.profilePic,
      });
  } catch (error) {
    console.log('Error in Login controll',error.message)
    res.status(500).json({error:'Internal Server error'});
  }
};
export const logoutUser = (req, res) => {
  try {
    res.cookie("jwt", "", {maxAge:  0});
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.log('Error in Logout controll',error.message)
    res.status(500).json({error:'Internal Server error'});
  }
};

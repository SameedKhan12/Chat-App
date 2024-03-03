import User from "../models/user.model.js";



export const getUsersForSidebar = async (req, res) => {
  try {
    const currentUserId = req.user._id;
    const filteredUserId = await User.find({ _id: { $ne: currentUserId } }).select("-password");
    res.status(200).json(filteredUserId);
  } catch (error) {
    console.log("Error in getMessage controll: ", error.message);
    res.status(500).json({ error: "Internal Server error" });
  }
};

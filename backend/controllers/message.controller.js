import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
  //  console.log(receiverId)
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if(!conversation){
      await Conversation.create({
        participants: [senderId,receiverId]
      })
    }

    const newMessage = new Message({
      senderId:senderId,
      recipientId:receiverId,
      message:message,
    })

    if(newMessage){
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(),newMessage.save()])
    console.log(newMessage)
    res.status(201).json({ message: "Message sent successfully",newMessage });
  } catch (error) {
    console.log("Error in sendMessage controll", error.message);
    res.status(500).json({ error: "Internal Server error" });
  }
};

export const getMessage = async (req,res)=>{
  try {
    const {id: userToChatId} = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants:{$all:[senderId,userToChatId]}
    }).populate("messages");

    if(!conversation){
      return res.status(201).json([])
    }

    const messages = conversation.messages

    return res.status(201).json(messages)
  } catch (error) {
    console.log("Error in getMessage controll", error.message);
    res.status(500).json({ error: "Internal Server error" });
  }
}

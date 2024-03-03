import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      recipientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      message: {
        type: String,
        required: true,
        minlength:  1,
        maxlength:  500
      },
},{timestamps:true});

const Message = mongoose.model('Message', messageSchema);
export default Message;

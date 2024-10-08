import Conversation from "../models/conversationModel.js";
import Message from "../models/messageModel.js";
import { getReceiverSocketId } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: recieverId } = req.params;
    const senderId = req.user._id;

    // Find conversation with both participants
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    });

    // If conversation doesn't exist, create one
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, recieverId],
      });
    }

    // Create a new message
    const newMessage = new Message({
      senderId,
      recieverId,
      message,
    });

    // Save the message and push it to conversation only after the message is created
    if (newMessage) {
      await newMessage.save(); // Save message first
      conversation.message.push(newMessage._id); // Then push the saved message's id into conversation
    }

    // Save the updated conversation
    await conversation.save();

    // SOCKET IO functionality
    const receiverSocketId = getReceiverSocketId(recieverId);

    if (receiverSocketId) {
      // sending event to specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    // Return the new message as a response
    res.status(201).json(newMessage);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    // Find conversation between sender and receiver
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("message"); // Populate messages in conversation

    if (!conversation) {
      return res.status(404).json({ message: "Conversation not found" });
    }

    res.status(200).json(conversation.message);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

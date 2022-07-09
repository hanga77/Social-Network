import mongoose from "mongoose";

//creation of schema message
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: 0
    },
    createdAt:{
        type: Date,
        default: new Date()
    }

});


const PostMessage = mongoose.model('PostMessage',postSchema);
export default PostMessage;
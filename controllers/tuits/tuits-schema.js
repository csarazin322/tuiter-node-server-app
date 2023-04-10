import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    topic: String,
    userName: String,
    time: String,
    title: String,
    image: String,
    disliked: Boolean,
    replies: Number,
    retuits: Number,
    dislikes: Number,
    handle: String,
}, { collection: 'tuits' });

export default schema;
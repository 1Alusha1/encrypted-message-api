import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    key: String,
    message: String
}, { versionKey: false })

export default mongoose.model('Message', messageSchema)

import pkg from 'mongoose';
const { model, Schema } = pkg;


const NewsLetter = new Schema({
    email: {
        type: String,
        required: true
    }
}, { timestamps: true})


export default model("newsletter", NewsLetter)
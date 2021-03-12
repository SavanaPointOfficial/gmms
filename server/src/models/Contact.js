
import pkg from 'mongoose';
const { model, Schema } = pkg;




const Contact = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    phone: {
        type: Number,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },

    subject: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    }
}, { timestamps: true})



export default model('contact-gmms', Contact)
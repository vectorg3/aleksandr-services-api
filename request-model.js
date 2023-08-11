import mongoose from "mongoose";

const RequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    haveWhatsApp: {
        type: Boolean,
        required: true,
    }
})

export default mongoose.model('Request', RequestSchema);
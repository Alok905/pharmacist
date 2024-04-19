import mongoose from "mongoose"

const medicineSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        // required: true 
    },
    price: {
        type: Number,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    packSize: {
        type: Number,
        required: true
    },
    composition: [{
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }]
})

const Medicine = mongoose.model("Medicine", medicineSchema)

export default Medicine
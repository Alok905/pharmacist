import mongoose from "mongoose"
import { ORDER_STATUS } from "../constants/constants"

const orderSchema = mongoose.Schema({
    status: {
        type: String,
        enum: [ORDER_STATUS.new, ORDER_STATUS.accepted, ORDER_STATUS.pending, ORDER_STATUS.delivered],
        default: ORDER_STATUS.new
    },
    medicines: [{
        medicineId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Medicine",
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    discount: {
        type: Number,

    }
}, {
    timestamps: true
})
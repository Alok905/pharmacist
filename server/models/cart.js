import mongoose from "mongoose"

const cartSchema = mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    },
    pharmacistId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pharmacist"
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

})

const Cart = mongoose.model("Cart", cartSchema)

export default Cart
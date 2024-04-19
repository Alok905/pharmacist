import mongoose from 'mongoose'
import { validateEmail } from '../utils/emailValidation'

const pharmacistSchema = mongoose.Schema({
    registeredName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: validateEmail,
            message: "Please enter a valid email."
        },
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        unique: true,
        max: 9999999999,
        min: 1000000000,
    },
    discounts: [{
        medicineId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Medicine',
            required: true
        },
        discountPercentage: {
            type: Number,
            required: true,
            min: 0,
            max: 100
        }
    }]
})

const Pharmacist = mongoose.model("Pharmacist", pharmacistSchema)

export default Pharmacist
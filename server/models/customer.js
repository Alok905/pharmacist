import mongoose from 'mongoose'
import { validateEmail } from '../utils/emailValidation'

const customerSchema = mongoose.Schema({
    name: {
        type: String,
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
    phone: {
        type: Number,
        unique: true,
        max: 9999999999,
        min: 1000000000,
    },
})

const Customer = mongoose.model("Customer", customerSchema)

export default Customer
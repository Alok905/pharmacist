import mongoose from 'mongoose'
import { validateEmail } from '../utils/emailValidation'

const adminSchema = mongoose.Schema({
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

const Admin = mongoose.model("Admin", adminSchema)

export default Admin
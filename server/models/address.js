import mongoose, { trusted } from 'mongoose'
import { ADDRESS_OF, ADDRESS_TYPE } from '../constants/constants'
import capitalize from '../utils/capitalize'

const addressSchema = mongoose.Schema({
    type: {
        required: true,
        enum: {
            values: [ADDRESS_TYPE.home, ADDRESS_TYPE.work, ADDRESS_TYPE.hotel, ADDRESS_TYPE.other],
            message: "Invalid type of address."
        }
    },
    addressOf: {
        type: String,
        required: true,
        enum: [ADDRESS_OF.customer, ADDRESS_OF.pharmacist, ADDRESS_OF.admin]
    },
    receiverName: {
        type: String,
        required: function () {
            return this.addressOf == ADDRESS_OF.customer
        },
        selected: function () {
            return this.addressOf == ADDRESS_OF.customer
        },
    },
    phone: {
        type: Number,
        required: true,
        min: 1000000000,
        max: 999999999
    },
    houseBuilding: {
        type: String,
        required: true
    },
    roadArea: {
        type: String,
        required: trusted
    },
    landmark: {
        type: String
    },
    ref: {
        type: mongoose.Schema.Types.ObjectId,
        ref: function () {
            return capitalize(this.addressOf)
        }
    }
})

const Address = mongoose.model("Address", addressSchema)

export default Address
import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment'

const customerSchema =mongoose.Schema({
    phoneNo:String,
    AadharNo:String,
    passportNo:String,
    date:Date,
    pickup:String,
    pickupAddress:String,
    destinationAddress:String,
    duration : Number
});

autoIncrement.initialize(mongoose.connection);
customerSchema.plugin(autoIncrement.plugin,'customerusers')

const customerusers =mongoose.model('customerusers',customerSchema);

export default customerusers;
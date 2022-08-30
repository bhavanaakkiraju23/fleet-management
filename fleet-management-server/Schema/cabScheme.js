import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment'

const cabSchema =mongoose.Schema({
    carNumber:String,
    chasisNumber : String,
    model :String,
    make:String,
    Type:String,
    NoSeats:Number,
    bootCapacity:Number,
    luggageHolder:false
});

autoIncrement.initialize(mongoose.connection);
cabSchema.plugin(autoIncrement.plugin,'cabusers')

const cabusers =mongoose.model('cabusers',cabSchema);

export default cabusers;
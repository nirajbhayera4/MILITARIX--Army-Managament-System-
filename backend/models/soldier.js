const mongoose = require("mongoose");
 
const soldierSchema = new mongoose.Schema({
    name:{
        type :String,
        required: true,
    },
    rank :String,
    age :Number,
},{timestamps :true});

module.exports = mongoose.model("Soldier", soldierSchema);
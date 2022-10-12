/*------<INTIATE OPTION MODEL>------*/
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
/*------<OPTION SCHEMA>------*/
const optionSchema = new mongoose.Schema({
    key : {
        type: String,
        required : true,
    },    
    value : {
        type: Number,
        required : true,
    }
});
/*------<CONST OPTION MODEL>------*/
const Option = mongoose.model("Option",optionSchema);
/*------<EXPORT OPTION MODEL>------*/
module.exports = Option;

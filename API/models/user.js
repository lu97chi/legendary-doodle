const MOONGOSE = require('mongoose');
const Schema = MOONGOSE.Schema;

const userSchema = new Schema({
    username: String,
    password: {type: String, unique:false, uppercase:true, required: true}
});

module.exports = MOONGOSE.model('User', userSchema);



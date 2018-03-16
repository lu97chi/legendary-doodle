const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const titlize = require('mongoose-title-case');


const userSchema = new Schema({
   email: {type: String, unique: true, required: true},
   name: {type: String},
   password: {type: String},
   client:[{
     name: {type: String},
     phone: {type: Number},
     address: {type: String},
     email: {type: String},
     photo: {type: String},
     sex: {type: String}
   }]
  });

  userSchema.pre('save', function(next){
    if (!this.isModified('password')) {
      return next();
    }
    else{
      bcrypt.hash(this.password, null, null,(err, hash)=>{
        if (err) return next(err);
        else{
          this.password = hash;
          next();
        }
      })
    }
  });
  
  userSchema.methods.comparePass = function(password){
    return bcrypt.compareSync(password, this.password);
  }
  
  userSchema.plugin(titlize, {
    paths: [ 'name']
  });

  module.exports = mongoose.model('User',userSchema)
  

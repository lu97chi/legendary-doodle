const User = require('../models/user');

module.exports = (router) => {
    //CRUD
    //POST,GET,PUT,DELETE
    router.post('/register',(req,res)=> {
       if (!req.body.username) {
           res.json({
               exito: false,
               mensaje: 'Falta el nombre de usuario'
           })
       } else if(!req.body.password) {
        res.json({
            exito: false,
            mensaje: 'Falta la contraseña'
        })
       } else {
           let user = new User();
           user.username = req.body.username; 
           user.password = req.body.password;
           user.save((err)=>{
               if (err) {
                   res.json({
                       exito: false,
                       mensaje: err
                   })
               } else {
                   res.json({
                       exito: true,
                       mensaje: 'Usuario guardado'
                   })
               }
           })
       }
    })
    return router;
}
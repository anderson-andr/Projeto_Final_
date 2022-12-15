const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UsuarioSchema = new Schema ({
    nome:String,
    data_Nascimento:Date,
    cpf:String,
    email:String,
    senha:String,
    foto_perfil:String,
    tipo_Perfil:String,
    

},

{

        versionKey: false
    })  

module.exports = mongoose.model("Usuario",UsuarioSchema);
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ServicoSchema = new Schema ({
    descricao:String, 
    valor:Number,
    tipo:String,
    foto:String,
    usuario: {
        type:mongoose.ObjectId,
        ref:'Usuario'
   
   }

},{

        versionKey: false
    })  

module.exports = mongoose.model("Servico",ServicoSchema);

const Servico = require('../model/servico');
const Usuario = require('../model/usuario')

exports.listar = (req, res) => {
    Servico.find({},(err, servicos) =>{
        if(err){
            res.status(500).json({Erro: err});
        }
        res.json(servicos)
       })
    }

    exports.inserir = (req, res) => {
        const servicoRequest = new Servico(req.body);
        if(servicoRequest && servicoRequest.descricao && servicoRequest.valor) {
              const servicoNovo = new Servico(servicoRequest);
              servicoNovo.save((err, servicoSalvo) =>{
                  if(err){
                      res.status(500).json({Erro: err});
                  }
                  else {
                      return  res.status(201).json(servicoSalvo);
                  }
      
              });
         }
         else {
              return res.status(400).json ({
                  Erro:"Descrição e valor  são obrigatorios"
                })
      
         }
      
      };
      

      exports.buscarPorId = (req, res) => {
        const id = req.params.id;
    
        Servico.findById(id, (err, servicoAtualizado ) => {
    
            if(err){
                res.status(500).json({Erro: err});
            }
            else if(servicoAtualizado){
                 return res.json(servicoAtualizado);
            }
            else {
                return  res.status(404).json(
                    { Erro : "Serviço não encontrado"}
                    )
            }
    
        })
    
     
    
    }

    
    
    
    
    exports.atualizar = (req, res) => {
        const id = req.params.id;
        const servicoRequest = req.body;
    
        if(!servicoRequest || !servicoRequest.descricao || !servicoRequest.valor) {
            return res.status(400).json({
                Erro:"descrição e/ou preco sao obrigatorios"
            });    
        }
    
        Servico.findByIdAndUpdate (id, servicoRequest, {new: true}, (err , servicoAtualizado) =>{
            if(err) {
                res.status(500).json({Erro: err})
            }
           
             else if(servicoAtualizado) {
        
                return res.json(servicoAtualizado);
            }
            else {
                return res.status(404).json(
                    { Erro: "servico nao encontrado" }
                )
            }
        
        })
        
    }
    


exports.deletar = (req, res) => {
    const id = req.params.id;

   Servico.findByIdAndDelete (id, (err, servicoDeletado ) =>{
    if(err) {
        return  res.status(500).json({Erro: err})
    }
    else if (servicoDeletado) {
        return res.json({Servico_Deletado:servicoDeletado});
    }

    else{
        return res.status(404).json (
            {Erro: "Serviço não encontrado"}
        )
    }
  
   })
}


exports.servicosByUser = (req, res ) => {
    if( req.query && req.query.usuario) {
        const paramEmail = req.query.usuario;
        Servico.find({usuario: paramEmail}, (err, usuarioEncontrado ) => {
            if(err) {
                return  res.status(500).json({Erro: err})
            }
            else if (usuarioEncontrado) {
                return res.json(usuarioEncontrado);
            }
        
            else{
                return res.status(404).json (
                    {Erro: "Usuario não encontrado"}
                )
            }
          


        })
    }
    else {
        res.status(400).json({Error: "Faltou o parametro email"})
    }



}
const express = require('express')
const mongoose =  require('mongoose')

const cors = require('cors');
const rotaServico = require( './routers/servico_rotas');
const rotaServicos = require( './routers/servicos_rotas');
const rotaUsuario = require('./routers/usuario_rotas');
const rotaCastrado = require('./routers/cadastro_rota');
const rotaLogin = require('./routers/login_rota')

const loginMiddleware = require('./middleware/login_middleware');

const app = express()
const port = 3000
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const corsOptions = {
  origin: '*' ,
  optionSuccessStatus:200
};

 /* cors caso de erro de access-control-allow-origin porém deve ser ajustado no front end no arquivo prox-config */

app.use(cors(corsOptions));

const tratarLog = (req, res, next) => {
  console.log("Metodo",req.method);
  console.log("URI",req.originalUrl);
  next();
  console.log("Status", res.statusCode);
}
//configuração da conexão com Mongo
mongoose.connect('mongodb://localhost:27017/app_service_Play') 
  .then(() => {
      console.log("Conectado ao  Mongo...")
  }).catch((Error) => { console.log("Erro >: ", Error)

  });

app.use(tratarLog);


app.use('/api/login', rotaLogin);
app.use('/api/cadastro', rotaCastrado);
app.use('/api/servico', rotaServicos);
app.use(loginMiddleware.validaToken);

app.use('/api/usuarios', rotaUsuario);
app.use('/api/servicos', rotaServico);


app.listen(port, () => {
    console.log(`Rodando servidor na porta ${port}`)
  })
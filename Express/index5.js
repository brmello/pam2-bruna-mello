// Importo o Express
const express = require('express');
const aplicativoExpress = express();

// Porta onde o servidor vai rodar
const portaServidor = 3000;

// Defino o EJS como mecanismo de views
aplicativoExpress.set('view engine', 'ejs');
// Pasta onde ficam os arquivos .ejs
aplicativoExpress.set('views', './views');

// Middleware que interpreta os dados de formulário enviados via POST
aplicativoExpress.use(express.urlencoded({ extended: true }));

// Lista inicial de contatos
let listaDeContatos = [
  { nome: "XPTO", email: "xpto@xpto.com" }
];

// Rota GET para exibir os contatos
aplicativoExpress.get('/contatos', (requisicao, resposta) => {
  // Se vier o parâmetro delId na URL, removo o contato correspondente
  if (requisicao.query.delId) {
    listaDeContatos.splice(requisicao.query.delId, 1);
  }

  // Renderizo a view passando a lista de contatos
  // (a chave "contatos" precisa continuar assim, é o nome usado dentro da view)
  resposta.render('contatos', { contatos: listaDeContatos });
});

// Rota POST para adicionar um novo contato
aplicativoExpress.post('/contatos', (requisicao, resposta) => {
  // Adiciono o novo contato com os dados vindos do formulário
  // (os campos n1 e e1 são os names definidos no formulário da view)
  listaDeContatos.push({
    nome: requisicao.body.n1,
    email: requisicao.body.e1
  });

  // Renderizo a view de novo, já com a lista atualizada
  resposta.render('contatos', { contatos: listaDeContatos });
});

// Inicio o servidor e escuto na porta definida
aplicativoExpress.listen(portaServidor, () => {
  console.log(`Servidor rodando em http://localhost:${portaServidor}`);
});

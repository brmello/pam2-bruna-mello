// Importo o Express
const express = require('express');
const aplicativoExpress = express();

// Configuro o EJS como mecanismo de views
aplicativoExpress.set('view engine', 'ejs');
// Defino a pasta onde ficam os arquivos .ejs
aplicativoExpress.set('views', './views');

// Rota GET para /exemplo
aplicativoExpress.get('/exemplo', (requisicao, resposta) => {
  // Dados simulados que vão ser exibidos na view
  const listaDePessoas = [
    { nome: "Carlos", idade: 45 },
    { nome: "Joana", idade: 36 }
  ];

  // Renderizo o arquivo views/exemplo.ejs passando os dados
  // (a chave "pessoas" precisa continuar com esse nome, pois é o que a view espera)
  resposta.render('exemplo', { pessoas: listaDePessoas });
});

// Inicio o servidor na porta 3000
aplicativoExpress.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

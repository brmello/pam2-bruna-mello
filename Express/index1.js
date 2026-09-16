// Importo o Express, o framework que uso para criar o servidor web
const express = require('express');
const aplicativoExpress = express();

// Porta onde o servidor vai ficar escutando as requisições
const portaServidor = 3000;

// Rota principal (GET /)
// Toda vez que alguém acessa a raiz do site, essa função é chamada
aplicativoExpress.get('/', (requisicao, resposta) => {
  // Respondo com um JSON simples contendo a mensagem de saudação
  resposta.json({ mensagem: "Alô mundo" }); // o .json() já envia a resposta pro cliente
});

// Coloco o servidor pra rodar na porta definida acima
aplicativoExpress.listen(portaServidor, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

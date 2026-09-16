// Importo o Express (framework para criar aplicações web com Node.js)
const express = require('express');
// Crio a instância principal da aplicação
const aplicativoExpress = express();

// Lista de tarefas simulada (no futuro isso podia vir de um banco de dados)
let listaDeTarefas = [
  { tarefa: "compilar" },
  { tarefa: "testar" }
];

// Rota GET para '/' e '/tarefas'
// Quando o usuário acessa qualquer uma dessas duas rotas, essa função roda
aplicativoExpress.get(['/', '/tarefas'], (requisicao, resposta) => {
  // Começo a montar o HTML que vou enviar como resposta
  let paginaHtml = "<html><body><ul>";

  // Para cada tarefa da lista, gero um item <li> dentro do <ul>
  for (let tarefaAtual of listaDeTarefas) {
    paginaHtml += `<li>${tarefaAtual.tarefa}</li>`; // mostra a tarefa como item da lista
  }

  // Fecho a lista e o HTML
  paginaHtml += "</ul></body></html>";

  // Envio a resposta:
  // - status HTTP 200 (OK)
  // - tipo de conteúdo HTML
  // - corpo da resposta é o HTML montado acima
  resposta.status(200)
    .contentType('text/html');

  send(paginaHtml);
});

// Inicio o servidor na porta 3000
// Mostro no console uma mensagem quando ele estiver no ar
aplicativoExpress.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

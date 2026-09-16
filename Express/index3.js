// Importo o Express
const express = require('express');
const aplicativoExpress = express();

// Middleware que interpreta os dados enviados por formulários (POST)
aplicativoExpress.use(express.urlencoded({ extended: true }));

// Lista inicial de tarefas
let listaDeTarefas = [
  { tarefa: "compilar" },

  { tarefa: "testar" }
];

// Função que monta e devolve a página HTML como string
const gerarPaginaHtml = () => {
  let paginaHtml = "<html><body>";

  // Formulário para adicionar uma nova tarefa
  paginaHtml += "<form method='post'>";
  paginaHtml += "<input type='text' name='tarefa' placeholder='Tarefa'>";
  paginaHtml += "<input type='submit' value='Adicionar'>";
  paginaHtml += "</form>";

  // Lista com as tarefas atuais
  paginaHtml += "<ul>";
  for (let tarefaAtual of listaDeTarefas) {
    paginaHtml += `<li>${tarefaAtual.tarefa}</li>`;
  }
  paginaHtml += "</ul>";

  paginaHtml += "</body></html>";
  return paginaHtml;
};

// Rota GET para exibir a página
aplicativoExpress.get(['/', '/web/tarefas'], (requisicao, resposta) => {
  resposta.status(200)
    .contentType('text/html')
    .send(gerarPaginaHtml());
});

// Rota POST para adicionar uma nova tarefa
aplicativoExpress.post(['/', '/web/tarefas'], (requisicao, resposta) => {
  // Só adiciono a tarefa na lista se o campo não estiver vazio
  if (requisicao.body.tarefa && requisicao.body.tarefa.trim() !== "") {
    listaDeTarefas.push({ tarefa: requisicao.body.tarefa.trim() });
  }

  // Reenvio a página já com a tarefa nova incluída
  resposta.status(200)
    .contentType('text/html')
    .send(gerarPaginaHtml());
});

// Inicio o servidor na porta 3000
aplicativoExpress.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});

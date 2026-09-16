// data/products.js
//
// Aqui simulamos um banco de dados usando um array em memória.
// Em um projeto real, isso seria substituído por chamadas a um banco
// de verdade (MySQL, PostgreSQL, MongoDB etc). Mas a LÓGICA de negócio
// (buscar, criar, atualizar, remover) continua sendo a mesma ideia.

// Array que guarda os produtos. Começa com alguns itens de exemplo.
let products = [
  { id: 1, name: "Cadeira de Escritório", price: 599.9, stock: 12 },
  { id: 2, name: "Luminária de Mesa LED", price: 89.9, stock: 35 },
  { id: 3, name: "Fone de Ouvido sem Fio", price: 219.9, stock: 25 },
  { id: 4, name: "Headset Bluetooth", price: 179.9, stock: 22 },
  { id: 5, name: "Webcam Full HD", price: 159.9, stock: 18 },
  { id: 6, name: "Cadeira Gamer", price: 1099.0, stock: 5 },
  { id: 7, name: "SSD 1TB NVMe", price: 449.9, stock: 40 },
  { id: 8, name: "Mousepad Grande", price: 49.9, stock: 60 },
  { id: 9, name: "Placa de Vídeo RTX 4060", price: 2199.0, stock: 4 },
  { id: 10, name: "Notebook Gamer 15'", price: 5499.0, stock: 3 },
];

// Contador para gerar o próximo id disponível.
// Em um banco real isso seria automático (auto-incremento / UUID).
let nextId = 11;

// Retorna TODOS os produtos. Usado pelo GET /product
function getAll() {
  return products;
}

// Busca um produto específico pelo id. Usado pelo GET /product/:id
function getById(id) {
  return products.find((p) => p.id === id);
}

// Cria um novo produto e devolve ele já com o id atribuído.
// Usado pelo POST /product
function create(data) {
  const newProduct = { id: nextId++, ...data };
  products.push(newProduct);
  return newProduct;
}

// Substitui um produto INTEIRO (todos os campos são trocados).
// Usado pelo PUT /product/:id
function replace(id, data) {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return null; // não achou -> devolve null
  products[index] = { id, ...data };
  return products[index];
}

// Atualiza APENAS os campos enviados, mantendo o resto como estava.
// Usado pelo PATCH /product/:id
function update(id, data) {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return null;
  // "..." (spread) mescla o objeto antigo com os campos novos
  products[index] = { ...products[index], ...data };
  return products[index];
}

// Remove um produto pelo id. Devolve true/false indicando sucesso.
// Usado pelo DELETE /product/:id
function remove(id) {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return false;
  products.splice(index, 1);
  return true;
}

// Exportamos as funções para que routes/products.js possa usá-las
module.exports = { getAll, getById, create, replace, update, remove };
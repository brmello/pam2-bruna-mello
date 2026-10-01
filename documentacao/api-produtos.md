# 📦 API de Produtos - Express.js

Uma API RESTful simples e eficiente para gerenciamento de produtos desenvolvida com **Node.js** e **Express.js**, incluindo um frontend em HTML, CSS e JavaScript para interação em tempo real.

---

## 📋 Sumário

- [Visão Geral](#-visão-geral)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação e Execução](#-instalação-e-execução)
- [Endpoints da API](#-endpoints-da-api)
  - [Listar todos os produtos](#1-listar-todos-os-produtos)
  - [Buscar produto por ID](#2-buscar-produto-por-id)
  - [Cadastrar novo produto](#3-cadastrar-novo-produto)
  - [Atualizar produto](#4-atualizar-produto)
  - [Deletar produto](#5-deletar-produto)
- [Interface Web (Frontend)](#-interface-web-frontend)

---

## 🚀 Visão Geral

Este projeto é uma API para realização de operações **CRUD** (Create, Read, Update, Delete) de produtos. Além dos endpoints HTTP, o projeto possui uma pasta `public/` servida estaticamente, oferecendo um painel web funcional para visualizar e gerenciar os produtos consumindo a própria API.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express.js**: Framework para construção de rotas e servidores web.
- **HTML5 / CSS3 / JavaScript (ES6+)**: Interface do usuário simples e responsiva.
- **NPM**: Gerenciador de pacotes do Node.js.

---

## 📂 Estrutura do Projeto

```text
api-produtos/
├── data/
│   └── products.js      # Base de dados (em memória/simulada)
├── public/
│   ├── index.html       # Estrutura do painel web
│   ├── style.css        # Estilos da interface
│   └── app.js           # Lógica JavaScript para consumir a API
├── routes/
│   └── products.js      # Definição e lógica das rotas de produtos
├── .gitignore           # Arquivos e pastas ignorados pelo Git
├── package.json         # Dependências e scripts do projeto
├── package-lock.json    # Mapeamento de versões de dependências
└── server.js            # Arquivo principal (Ponto de entrada da aplicação)
```

---

## ⚙️ Pré-requisitos

Antes de iniciar, garanta que você possui os seguintes softwares instalados na sua máquina:

- [Node.js](https://nodejs.org/) (versão 14.x ou superior)
- [NPM](https://www.npmjs.com/) ou [Yarn]
- Um cliente para testar requisições HTTP (opcional), como [Postman](https://www.postman.com/), [Insomnia](https://insomnia.rest/) ou a extensão REST Client do VS Code.

---

## 🔧 Instalação e Execução

1. **Clone este repositório ou navegue até a pasta do projeto:**
   ```bash
   cd api-produtos
   ```

2. **Instale as dependências do projeto:**
   ```bash
   npm install
   ```

3. **Inicie o servidor:**
   ```bash
   npm start
   # ou, caso tenha configurado o nodemon para desenvolvimento:
   npm run dev
   ```

4. **Acesse a aplicação:**
   - **Interface Web:** [http://localhost:3000](http://localhost:3000)
   - **Base das rotas da API:** [http://localhost:3000/api/products](http://localhost:3000/api/products)

---

## 📡 Endpoints da API

A URL base para acesso às rotas da API é `/api/products`.

### 1. Listar todos os produtos
Retorna a lista completa de produtos cadastrados.

- **Método:** `GET`
- **URL:** `/api/products`
- **Resposta de Sucesso (200 OK):**
  ```json
  [
    {
      "id": 1,
      "name": "Teclado Mecânico",
      "price": 250.00
    },
    {
      "id": 2,
      "name": "Mouse Gamer",
      "price": 120.50
    }
  ]
  ```

---

### 2. Buscar produto por ID
Retorna as informações de um produto específico com base no parâmetro `:id`.

- **Método:** `GET`
- **URL:** `/api/products/:id`
- **Exemplo de Requisição:** `/api/products/1`
- **Resposta de Sucesso (200 OK):**
  ```json
  {
    "id": 1,
    "name": "Teclado Mecânico",
    "price": 250.00
  }
  ```
- **Resposta de Erro (404 Not Found):**
  ```json
  {
    "message": "Produto não encontrado."
  }
  ```

---

### 3. Cadastrar novo produto
Adiciona um novo produto ao catálogo.

- **Método:** `POST`
- **URL:** `/api/products`
- **Cabeçalhos (Headers):** `Content-Type: application/json`
- **Corpo da Requisição (Body):**
  ```json
  {
    "name": "Monitor UltraWide 29\"",
    "price": 1200.00
  }
  ```
- **Resposta de Sucesso (201 Created):**
  ```json
  {
    "id": 3,
    "name": "Monitor UltraWide 29\"",
    "price": 1200.00
  }
  ```

---

### 4. Atualizar produto
Atualiza os dados de um produto existente identificado por `:id`.

- **Método:** `PUT`
- **URL:** `/api/products/:id`
- **Cabeçalhos (Headers):** `Content-Type: application/json`
- **Corpo da Requisição (Body):**
  ```json
  {
    "name": "Teclado Mecânico RGB",
    "price": 280.00
  }
  ```
- **Resposta de Sucesso (200 OK):**
  ```json
  {
    "id": 1,
    "name": "Teclado Mecânico RGB",
    "price": 280.00
  }
  ```

---

### 5. Deletar produto
Remove um produto específico através do `:id`.

- **Método:** `DELETE`
- **URL:** `/api/products/:id`
- **Exemplo de Requisição:** `/api/products/1`
- **Resposta de Sucesso (200 OK):**
  ```json
  {
    "message": "Produto removido com sucesso."
  }
  ```

---

## 🖥️ Interface Web (Frontend)

O projeto conta com um cliente web hospedado no próprio servidor Express. Ao acessar `http://localhost:3000` pelo navegador:

1. A página executa as requisições `Fetch API` contidas em `public/app.js`.
2. Exibe os produtos listados no arquivo de dados `data/products.js`.
3. Oferece formulários e botões para a adição, alteração e exclusão de itens de forma visual e intuitiva.

---

✨ **Feito por: Bruna de Mello**
# API de Gestão de Clientes

Este é um projeto de API RESTful simples para gerenciar informações de clientes. A API permite criar, ler, atualizar e excluir clientes.

## Tecnologias Utilizadas

- Node.js
- Express.js

## Instalação

Para rodar o projeto, siga os passos abaixo:

1. Clone o repositório:

    \`\`\`bash
    git clone https://github.com/YOUR-USERNAME/your-repository-name.git
    \`\`\`

2. Entre no diretório do projeto:

    \`\`\`bash
    cd your-repository-name
    \`\`\`

3. Instale as dependências:

    \`\`\`bash
    npm install
    \`\`\`

4. Inicie o servidor:

    \`\`\`bash
    npm start
    \`\`\`

O servidor estará rodando em \`http://localhost:3000\`.

## Endpoints

### 1. **GET /clients**
Retorna todos os clientes.

\`\`\`bash
GET http://localhost:3000/clients
\`\`\`

### 2. **GET /clients/:id**
Retorna um cliente específico pelo ID.

\`\`\`bash
GET http://localhost:3000/clients/:id
\`\`\`

**Exemplo**:
\`\`\`bash
GET http://localhost:3000/clients/1
\`\`\`

### 3. **POST /clients**
Adiciona um novo cliente. O corpo da requisição deve conter as informações do cliente.

\`\`\`bash
POST http://localhost:3000/clients
\`\`\`

**Exemplo de corpo da requisição**:

\`\`\`json
{
  \"id\": 4,
  \"name\": \"Novo Cliente\",
  \"email\": \"novo@cliente.com\"
}
\`\`\`

### 4. **PUT /clients/:id**
Atualiza um cliente existente pelo ID.

\`\`\`bash
PUT http://localhost:3000/clients/:id
\`\`\`

**Exemplo de corpo da requisição**:

\`\`\`json
{
  \"name\": \"Cliente Atualizado\",
  \"email\": \"atualizado@cliente.com\"
}
\`\`\`

### 5. **DELETE /clients/:id**
Remove um cliente pelo ID.

\`\`\`bash
DELETE http://localhost:3000/clients/:id
\`\`\`

**Exemplo**:
\`\`\`bash
DELETE http://localhost:3000/clients/1
\`\`\`

## Contribuição

1. Faça um fork do repositório
2. Crie uma branch para a sua feature (\`git checkout -b minha-feature\`)
3. Commit suas alterações (\`git commit -am 'Adicionando nova feature'\`)
4. Envie para o branch (\`git push origin minha-feature\`)
5. Abra um pull request

## Licença

[MIT](https://choosealicense.com/licenses/mit/)" > README.md
 

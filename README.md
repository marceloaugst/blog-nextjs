# Blog App

Este é um projeto de blog simples desenvolvido com **Next.js**. Ele permite exibir postagens, visualizar detalhes individuais e gerenciar conteúdos de maneira intuitiva.

## Funcionalidades
- Listagem de postagens.
- Detalhes completos de cada postagem.
- Interface administrativa para criar novos posts.

---

## Configuração do Ambiente

### 1. Pré-requisitos
- **Node.js**: Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na versão 16 ou superior.
- **npm** ou **yarn**: Gerenciador de pacotes.

### Instale as dependências:

npm install
# ou
yarn

### Inicie o servidor de desenvolvimento:

npm run dev
# ou
yarn dev

### Acesse o projeto no navegador:

http://localhost:3000

### Estrutura do Projeto

blog/
 components/
    ─ index/              # Componentes para a página inicial
    ─ PostHeader.js       # Cabeçalho da página de detalhes do post
    ─ PostContent.js      # Corpo do conteúdo do post
    mock/
    - posts.js            # Dados mockados de posts
    pages/
    ─ index.js            # Página inicial (listagem de posts)
    ─ post/[id].js        # Página dinâmica para detalhes de post
    public/
    ─ images/             # Imagens dos posts e autores
    styles/
    ─ globals.css         # Estilos globais
README.md               # Documentação principal

### Guia de Uso
## Listagem de Postagens
Na página inicial, as postagens são exibidas em forma de cards.

Página de Detalhes
Cada postagem possui uma página dedicada, acessada pela URL /post/[id].
Exibe:
Título
Autor e data
Imagem destacada
Conteúdo completo
Adicionar Novos Posts
Acesse a interface administrativa clicando em "Adicionar Nova Postagem".
Preencha os campos do formulário e clique em "Salvar".

### Tecnologias Usadas
Next.js: Framework para aplicações React com renderização do lado do servidor.
Tailwind CSS: Biblioteca de CSS para estilização rápida e eficiente.

### Testes

Os testes cobrem as principais funcionalidades do projeto, incluindo renderização de componentes e navegação entre páginas.

## Rodando os Testes
Execute o comando abaixo para rodar todos os testes:

npm test

## Gerando Relatório de Cobertura
Para verificar a cobertura dos testes:
npm run test:coverage


### 2. Instalação
1. Clone o repositório:
   git clone https://github.com/marceloaugst/blog
   cd blog

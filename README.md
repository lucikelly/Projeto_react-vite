# Projeto de Demonstração de Arquitetura
Este é um projeto de demonstração para uma página de arquitetura desenvolvida com React e Vite. O projeto inclui funcionalidades de rotas, gerenciamento de idioma usando Context API, salvamento de preferências de idioma no local storage, responsividade para dispositivos móveis e componentes reutilizáveis. Todo o conteúdo da página é adicionado de forma dinâmica através do consumo de uma API.  Além disso, o projeto inclui um formulário de contato que permite enviar e-mails utilizando o Web3Forms e permite que os usuários curtam projetos, com as curtidas sendo salvas no session storage.

<b> Confira a versão Publicada: https://projeto-arqnet-lucikelly.vercel.app/ </b>

<b> Funcionalidades </b>
- Rotas: Navegue entre diferentes páginas da aplicação.
- ContextApp: Gerencie e altere o idioma da aplicação.
- Local Storage: Salve e recupere a preferência de idioma do usuário.
- Responsividade: Design adaptativo para dispositivos móveis.
- Componentes Reutilizáveis: Componentes modulares para facilitar o desenvolvimento e manutenção.
- Conteúdo Dinâmico: O conteúdo da página é carregado dinamicamente a partir de uma API.
- Formulário de Contato: Envie e-mails para um endereço de e-mail referenciado utilizando o Web3Forms.
- Curtidas: Permita que os usuários curtam projetos e salve essas curtidas no session storage.

### Instalação Local:
Para começar a usar o projeto, siga estes passos:

- Clone o Repositório:
  ``` git clone https://github.com/lucikelly/projeto-ArqNet ```
- Instale as Dependências:
  ``` npm install ```
- Inicie o Servidor de Desenvolvimento:
  ``` npm run dev ```


### Estrutura do Projeto:
- src/: Contém os principais arquivos de código-fonte.
- assets/: imagens usadas no projeto
- components/: Componentes reutilizáveis.
- pages/: Páginas da aplicação.
- contexts/: Contexto para gerenciamento de idioma.
- services/: Funções para consumir a API.
- utils/: Função de scrollTop para mudança de telas.
- App.jsx: Componente principal que configura o roteamento e o Context API.
- main.jsx: Chama e renderiza nossa App.jsx
- main.css: Estilização geral das páginas.



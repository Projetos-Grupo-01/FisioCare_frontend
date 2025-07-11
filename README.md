
# 🩺💻 FisioCare - Frontend  

<br />

<div align="center">     
    <img src="https://i.imgur.com/AzshGmS.png" title="REACT" width="50%"/>
</div> 

<br />

<div align="center">   
    <img src="https://img.shields.io/github/languages/top/Projetos-Grupo-01/FisioCare_frontend?style=flat-square" />
    <img src="https://img.shields.io/github/repo-size/Projetos-Grupo-01/FisioCare_frontend?style=flat-square" />   
    <img src="https://img.shields.io/github/languages/count/Projetos-Grupo-01/FisioCare_frontend?style=flat-square" />
    <img src="https://img.shields.io/github/last-commit/Projetos-Grupo-01/FisioCare_frontend?style=flat-square" />
    <img src="https://img.shields.io/github/issues/Projetos-Grupo-01/FisioCare_frontend?style=flat-square" />
    <img src="https://img.shields.io/github/issues-pr/Projetos-Grupo-01/FisioCare_frontend?style=flat-square" />
    <img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=flat-square" />
</div>


<br />



## 1. 📝 Descrição
Este repositório contém o frontend em React do sistema FisioCare, um aplicativo para gerenciamento e acompanhamento das rotinas de treino de pacientes em fisioterapia. Desenvolvido com React, Vite, Tailwind CSS e TypeScript, o sistema permite que fisioterapeutas e pacientes cadastrem, visualizem, editem e excluam informações de usuários, exercícios e categorias, tudo de forma integrada com o sistema de back-end. A plataforma simula um sistema completo de gestão de tratamentos fisioterapêuticos, priorizando a experiência do usuário, a eficiência no acompanhamento e, acima de tudo, a segurança dos dados.


1.1. 🛠️ Funcionalidades
- Visualização de Usuários, Exercícios e Categorias: Interface intuitiva para exibir todos os dados relevantes.
- Cadastro de Novos Registros: Formulários para adicionar novos usuários, exercícios e categorias de exercícios.
- Edição e Remoção de Informações Existentes: Funcionalidades para atualizar ou remover dados de usuários, exercícios e categorias.
- Navegação entre Páginas com transições fluidas e organização das diferentes seções da aplicação.
- Autenticação e Autorização: Gerenciamento de acesso seguro para diferentes perfis de usuários (fisioterapeutas, pacientes).



## 2. 🧑‍💻 Tecnologias Utilizadas

    Item	Descrição
    HTML5	Estrutura do layout
    CSS3	Estilização base
    Tailwind CSS	Framework de utilitários
    JavaScript / TypeScript	Lógica e tipagem
    Axios  Requisições HTTP e integração com o back-end
    Vite  Bundler moderno e rápido
    Yarn	Gerenciador de pacotes 

## 3. 🎨 Protótipo no Figma
Confira o protótipo da interface no Figma:

🔗 [**Figma**](https://www.figma.com/design/hbprIx1EKr1viiHQUlmoc9/FisioCare?node-id=0-1&p=f&t=lD9qZIlq2wOSnOQn-0)



## 4. 🌐 Estrutura do Projeto

📦 FisioCare-frontend

```plaintext
├── 📁 public
│   ├── 📁 src
│   │   ├── 📁 components         // Componentes reutilizáveis da UI
│   │   ├── 📁 models             // Definições de tipos e interfaces
│   │   ├── 📁 pages              // Páginas principais da aplicação
│   │   ├── 📁 services           // Lógica de comunicação com a API (Axios)
│   │   ├── 📁 utils              // Funções utilitárias e helpers
│   │   ├── App.tsx               // Componente principal da aplicação
│   │   ├── App.css               // Estilos globais (ou específicos do App)
│   │   ├── index.css             // Estilos CSS de base (incluindo Tailwind)
│   │   ├── main.tsx              // Ponto de entrada da aplicação
│   │   └── vite-env.d.ts         // Definições de ambiente Vite
├── tailwind.config.js            // Configuração do Tailwind CSS
├── index.html                    // Arquivo HTML principal
├── vite.config.ts                // Configuração do Vite
├── package.json                  // Dependências e scripts do projeto
└── yarn.lock                     // Lockfile do Yarn
```


## 5. ⚙️ Como Executar o Projeto
5.1. 🔄 Clonar o repositório

git clone https://github.com/Projetos-Grupo-01/FisioCare_frontend 
cd FisioCare_frontend

5.2. 📦 Instalar dependências

    npm install

Ou com yarn:

    yarn


5.3. ▶️ Rodar a aplicação

    npm run dev
    
Ou com yarn:

    yarn dev

Acesse em: http://localhost:5173

## 6. 🔗 Integração com o Backend
A aplicação consome uma API local, desenvolvida com Java + Spring Boot. O backend está disponível neste repositório:

🔗 [**FisioCare - Backend**](https://github.com/Projetos-Grupo-01/fisiocare)

O deploy do back-end foi realizado no render e pode ser acessado através do link abaixo:
[**Deploy API FisioCare**](https://fisiocare.onrender.com/)

Use a conta root@email.com e a senha rootroot para autenticação.


## 9. 🤝 Contribuidores
**Integrantes**
* [Aylla](https://www.linkedin.com/in/aylla-scaglia/)
* [Fernanda](https://www.linkedin.com/in/fernandamurched/)
* [Gabriel](https://www.linkedin.com/in/gabriel-souza77/)
* [Giovana](https://www.linkedin.com/in/giovana-lucia/)
* [Luan](https://www.linkedin.com/in/luan-queiroz/)
* [Maria Luiza](https://www.linkedin.com/in/marialuiza-torres/)
* [Samuel](https://www.linkedin.com/in/samuel-ssf/)

## 11. 👩‍💻 Contato 
Desenvolvido por [**OctaCode**](https://github.com/Projetos-Grupo-01)
Dúvidas ou sugestões? Entre em contato pelo GitHub ou abra uma issue no repositório.

# Knowledge Orbit | Portal de Estudos ADS 🚀

Bem-vindo ao **Knowledge Orbit**, um portal interativo projetado para auxiliar estudantes de Análise e Desenvolvimento de Sistemas (ADS) na revisão de conceitos fundamentais através de resumos teóricos e flashcards práticos.

![Demo do Projeto](file:///home/daniel/.gemini/antigravity/brain/a0039d99-15cd-44eb-a0c9-f5ec8e86b7a8/knowledge_orbit_demo_1774196322909.webp)

## 📌 Sobre o Projeto

O Knowledge Orbit centraliza conhecimentos de diversas matérias do curso de ADS, permitindo que o usuário alterne entre a leitura de resumos detalhados e a prática ativa com flashcards (pergunta e resposta).

## 🏗️ Arquitetura do Projeto

Abaixo, a estrutura de diretórios e a organização lógica do sistema:

```text
.
├── index.html           # Ponto de entrada HTML (Estrutura principal)
├── main.js             # Lógica de bootstrap e inicialização
├── package.json        # Manifesto do projeto e dependências (Vite/Vitest)
├── public/             # Ativos estáticos globais (favicon, ícones)
└── src/                # Código-fonte da aplicação
    ├── assets/         # Recursos visuais (imagens hero, SVGs de linguagens)
    ├── components.js   # Componentes reutilizáveis de UI (Cards, NavBar)
    ├── data/           # Camada de Dados Estáticos
    │   ├── flashcards.js # Base de dados de questões/respostas
    │   ├── knowledge.js  # Conteúdo teórico por tópico
    │   └── topics.js     # Configurações e metadados dos tópicos
    ├── data.test.js    # Testes de integridade (Vitest) - Modus Operandi
    ├── main.js         # Orquestrador de visualizações e lógica de estado
    ├── style.css       # Sistema de design e estilização global
    └── utils/          # Funções utilitárias e ajudantes técnicos
```

## 🚀 Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado.
- [npm](https://www.npmjs.com/) ou [Yarn].

### Passo a Passo
1. Clone o repositório.
2. Na raiz do projeto, instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse o link informado no terminal (geralmente `http://localhost:5173`).

## 🧪 Testes

Seguindo o **Modus Operandi**, este projeto inclui testes de integridade para garantir que os dados de estudo estejam sempre consistentes.

Para rodar os testes:
```bash
npm test
```

## 🛠️ Tecnologias Utilizadas

- **Vite**: Ferramenta de build e servidor de desenvolvimento ultra-rápido.
- **JavaScript (ES6+)**: Semântica moderna e módulos.
- **HTML5 & CSS3**: Estrutura semântica e design responsivo (Vanilla CSS).
- **Vitest**: Framework de testes unitários.

## 📖 Casos de Uso e Estudos de Caso

### Casos de Uso
1. **Revisão Rápida**: O estudante acessa um tópico específico para ler um resumo antes de uma prova.
2. **Prática Ativa**: O usuário utiliza os flashcards para testar sua memorização sobre conceitos de algoritmos.
3. **Consulta de Sintaxe**: Acesso rápido a exemplos de código em diferentes linguagens de programação.

### Estudo de Caso: Aprendizado Evolutivo
Durante o desenvolvimento, observamos que a separação clara entre a camada de dados (`src/data`) e a lógica de visualização permite a expansão rápida do portal para novas disciplinas sem a necessidade de alterar o núcleo do código, seguindo princípios de design aberto/fechado.

---

## 🌐 Deploy no GitHub Pages

Este projeto foi estruturado para ser totalmente compatível com o **GitHub Pages**. Toda a lógica é executada no lado do cliente (Client-side), garantindo que o portal funcione perfeitamente como um site estático.

> [!NOTE]
> Caso o projeto venha a ter um backend complexo no futuro, este será mantido de forma desacoplada para não interferir na natureza estática do portal principal.

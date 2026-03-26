/**
 * Flashcards de Frameworks Para Desenvolvimento de Software
 * Conteúdo extraído dos PDFs do 2º semestre
 * Reescrito de forma resumida e acessível
 */

export const frameworks = [
  // ==================== CONCEITOS BÁSICOS DE FRAMEWORKS ====================
  {
    id: "fw-1",
    question: "O que é um Framework?",
    answer: "É uma estrutura de código reutilizável que fornece funcionalidades comuns, acelerando o desenvolvimento. Define arquitetura, padrões e boas práticas para construir aplicações."
  },
  {
    id: "fw-2",
    question: "Qual a diferença entre Framework e Biblioteca?",
    answer: "Biblioteca: você chama suas funções quando precisa. Framework: ele chama seu código através de inversão de controle (IoC). Frameworks ditam o fluxo da aplicação."
  },
  {
    id: "fw-3",
    question: "O que é Inversão de Controle (IoC)?",
    answer: "Princípio onde o framework controla o fluxo da aplicação, chamando seu código em momentos específicos. Diferente de programação tradicional onde você controla tudo."
  },
  {
    id: "fw-4",
    question: "O que é Dependency Injection (DI)?",
    answer: "Padrão de design onde dependências são fornecidas externamente pelo framework, não criadas internamente. Facilita testes, manutenção e flexibilidade do código."
  },
  {
    id: "fw-5",
    question: "Quais são os tipos de Frameworks?",
    answer: "1) Frontend: React, Angular, Vue.js. 2) Backend: Spring Boot, Django, Express.js. 3) Mobile: React Native, Flutter. 4) Full-stack: Meteor, Next.js. 5) Testes: JUnit, Jest, Selenium."
  },
  // ==================== FRAMEWORKS FRONTEND ====================
  {
    id: "fw-6",
    question: "O que é React?",
    answer: "Biblioteca JavaScript para construir interfaces de usuário. Usa componentes reutilizáveis e Virtual DOM para atualizações eficientes. Desenvolvida pelo Facebook."
  },
  {
    id: "fw-7",
    question: "O que são Componentes em React?",
    answer: "São blocos de construção reutilizáveis que encapsulam HTML, CSS e JavaScript. Podem ser funcionais (funções) ou de classe (objetos). Permitem criar interfaces modulares."
  },
  {
    id: "fw-8",
    question: "O que é Virtual DOM?",
    answer: "É uma representação em memória do DOM real. React atualiza apenas as partes que mudaram, não toda a página. Isso melhora significativamente a performance."
  },
  {
    id: "fw-9",
    question: "O que é Angular?",
    answer: "Framework completo para aplicações web, desenvolvido pelo Google. Usa TypeScript, oferece roteamento, formulários, HTTP client e muito mais. É mais opinativo que React."
  },
  {
    id: "fw-10",
    question: "O que é Vue.js?",
    answer: "Framework progressivo para interfaces de usuário. Combina o melhor de React e Angular. Fácil de aprender, flexível e performático. Ideal para projetos pequenos a médios."
  },
  // ==================== FRAMEWORKS BACKEND ====================
  {
    id: "fw-11",
    question: "O que é Spring Boot?",
    answer: "Framework Java para criar aplicações web rapidamente. Usa Injeção de Dependência, suporte a bancos de dados, segurança e muito mais. Elimina configuração complexa do Spring tradicional."
  },
  {
    id: "fw-12",
    question: "O que é Django?",
    answer: "Framework Python para web com filosofia 'baterias incluídas'. Fornece ORM, admin automático, autenticação, roteamento e templates. Muito usado para desenvolvimento rápido."
  },
  {
    id: "fw-13",
    question: "O que é Express.js?",
    answer: "Framework minimalista para Node.js. Fornece recursos essenciais para construir APIs e aplicações web. É flexível e não opinativo, permitindo escolher suas próprias bibliotecas."
  },
  {
    id: "fw-14",
    question: "O que é Laravel?",
    answer: "Framework PHP elegante para web. Usa MVC, Eloquent ORM, Blade templates, roteamento e muito mais. Foco em simplicidade e legibilidade do código."
  },
  // ==================== PADRÕES DE PROJETO ====================
  {
    id: "fw-15",
    question: "O que são Padrões de Projeto?",
    answer: "São soluções reutilizáveis para problemas comuns em desenvolvimento de software. Descrevem como estruturar código para ser mantível, flexível e reutilizável."
  },
  {
    id: "fw-16",
    question: "O que é padrão MVC?",
    answer: "Model-View-Controller: separa dados (Model), interface (View) e lógica (Controller). Facilita manutenção, testes e reutilização de código."
  },
  {
    id: "fw-17",
    question: "O que é padrão Singleton?",
    answer: "Garante que uma classe tenha apenas uma instância e fornece acesso global a ela. Útil para objetos que devem ser únicos no sistema, como conexões de banco."
  },
  {
    id: "fw-18",
    question: "O que é padrão Observer?",
    answer: "Define dependência um-para-muitos entre objetos. Quando um objeto muda estado, todos os dependentes são notificados automaticamente. Usado em eventos e notificações."
  },
  {
    id: "fw-19",
    question: "O que é padrão Factory?",
    answer: "Cria objetos sem especificar a classe exata. Define uma interface para criação de objetos, permitindo subclasses decidirem qual classe instanciar."
  },
  // ==================== ARQUITETURA DE SOFTWARE ====================
  {
    id: "fw-20",
    question: "O que é arquitetura MVC?",
    answer: "Separa aplicação em três camadas: Model (dados e regras de negócio), View (interface do usuário) e Controller (lógica de controle). Promove organização e manutenibilidade."
  },
  {
    id: "fw-21",
    question: "O que é arquitetura em Camadas?",
    answer: "Organiza código em camadas com responsabilidades específicas: apresentação, negócio, dados. Cada camada só se comunica com a imediatamente inferior."
  },
  {
    id: "fw-22",
    question: "O que é arquitetura Microserviços?",
    answer: "Divide aplicação em serviços pequenos e independentes, cada um responsável por uma funcionalidade específica. Facilita escalabilidade, implantação e manutenção."
  },
  {
    id: "fw-23",
    question: "O que é arquitetura Monolítica?",
    answer: "Toda aplicação em um único código fonte, implantada como uma unidade. Mais simples para projetos pequenos, mas difícil de escalar e manter em projetos grandes."
  },
  // ==================== TESTES EM FRAMEWORKS ====================
  {
    id: "fw-24",
    question: "O que são testes unitários?",
    answer: "Testam unidades isoladas de código (funções, métodos) para verificar se funcionam corretamente. Automatizados e rápidos. Exemplo: JUnit para Java, Jest para JavaScript."
  },
  {
    id: "fw-25",
    question: "O que são testes de integração?",
    answer: "Testam como diferentes partes do sistema trabalham juntas. Verificam se módulos se comunicam corretamente e se dados fluem entre eles adequadamente."
  },
  {
    id: "fw-26",
    question: "O que são testes end-to-end?",
    answer: "Testam a aplicação completa do início ao fim, simulando comportamento real do usuário. Verificam se todo o fluxo funciona como esperado."
  },
  // ==================== BOAS PRÁTICAS ====================
  {
    id: "fw-27",
    question: "O que é SOLID?",
    answer: "Cinco princípios de design: S (Single Responsibility), O (Open/Closed), L (Liskov Substitution), I (Interface Segregation), D (Dependency Inversion). Promovem código maintível e extensível."
  },
  {
    id: "fw-28",
    question: "O que é DRY (Don't Repeat Yourself)?",
    answer: "Princípio que evita duplicação de código. Cada pedaço de informação deve ter uma representação única e autoritativa no sistema."
  },
  {
    id: "fw-29",
    question: "O que é KISS (Keep It Simple, Stupid)?",
    answer: "Princípio que defende simplicidade no design. Sistemas funcionam melhor quando são simples e fáceis de entender. Evite complexidade desnecessária."
  },
  {
    id: "fw-30",
    question: "O que é YAGNI (You Aren't Gonna Need It)?",
    answer: "Princípio que sugere não implementar funcionalidades até que sejam realmente necessárias. Evita over-engineering e mantém o código focado no essencial."
  },
  // ==================== FRAMEWORKS DE TESTE ====================
  {
    id: "fw-31",
    question: "O que é JUnit?",
    answer: "Framework de testes unitários para Java. Permite escrever testes automatizados com anotações como @Test, @Before, @After. Verifica se código funciona como esperado."
  },
  {
    id: "fw-32",
    question: "O que é Jest?",
    answer: "Framework de testes para JavaScript. Fácil de configurar, executa testes rapidamente, fornece mocking e assertions. Muito usado com React e Node.js."
  },
  {
    id: "fw-33",
    question: "O que é Selenium?",
    answer: "Framework para automação de testes em navegadores web. Simula interações do usuário como cliques, preenchimento de formulários e navegação."
  },
  // ==================== FERRAMENTAS DE BUILD ====================
  {
    id: "fw-34",
    question: "O que é Webpack?",
    answer: "Empacotador de módulos JavaScript. Agrupa arquivos (JS, CSS, imagens) em um ou mais bundles otimizados para produção. Gerencia dependências e assets."
  },
  {
    id: "fw-35",
    question: "O que é Vite?",
    answer: "Ferramenta de build rápida para desenvolvimento. Usa ES modules nativos, hot module replacement (HMR) e build otimizado. Mais rápido que Webpack para desenvolvimento."
  },
  {
    id: "fw-36",
    question: "O que é Babel?",
    answer: "Transpilador JavaScript que converte código moderno (ES6+) para versões mais antigas (ES5). Permite usar novas features mesmo em navegadores antigos."
  }
];

// Exportação padrão para compatibilidade
export default frameworks;

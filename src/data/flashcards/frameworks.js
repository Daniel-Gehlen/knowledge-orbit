/**
 * Flashcards de Frameworks Para Desenvolvimento de Software
 * Conteúdo extraído dos PDFs do 2º semestre
 * Reescrito de forma resumida e acessível
 */

export const frameworks = [
  // ==================== CONCEITOS BÁSICOS DE FRAMEWORKS ====================
  {
    id: "fw-1",
    q: "O que é um Framework?",
    a: "É uma estrutura de código reutilizável que fornece funcionalidades comuns, acelerando o desenvolvimento. Define arquitetura, padrões e boas práticas para construir aplicações."
  },
  {
    id: "fw-2",
    q: "Qual a diferença entre Framework e Biblioteca?",
    a: "Biblioteca: você chama suas funções quando precisa. Framework: ele chama seu código através de inversão de controle (IoC). Frameworks ditam o fluxo da aplicação."
  },
  {
    id: "fw-3",
    q: "O que é Inversão de Controle (IoC)?",
    a: "Princípio onde o framework controla o fluxo da aplicação, chamando seu código em momentos específicos. Diferente de programação tradicional onde você controla tudo."
  },
  {
    id: "fw-4",
    q: "O que é Dependency Injection (DI)?",
    a: "Padrão de design onde dependências são fornecidas externamente pelo framework, não criadas internamente. Facilita testes, manutenção e flexibilidade do código."
  },
  {
    id: "fw-5",
    q: "Quais são os tipos de Frameworks?",
    a: "1) Frontend: React, Angular, Vue.js. 2) Backend: Spring Boot, Django, Express.js. 3) Mobile: React Native, Flutter. 4) Full-stack: Meteor, Next.js. 5) Testes: JUnit, Jest, Selenium."
  },
  // ==================== FRAMEWORKS FRONTEND ====================
  {
    id: "fw-6",
    q: "O que é React?",
    a: "Biblioteca JavaScript para construir interfaces de usuário. Usa componentes reutilizáveis e Virtual DOM para atualizações eficientes. Desenvolvida pelo Facebook."
  },
  {
    id: "fw-7",
    q: "O que são Componentes em React?",
    a: "São blocos de construção reutilizáveis que encapsulam HTML, CSS e JavaScript. Podem ser funcionais (funções) ou de classe (objetos). Permitem criar interfaces modulares."
  },
  {
    id: "fw-8",
    q: "O que é Virtual DOM?",
    a: "É uma representação em memória do DOM real. React atualiza apenas as partes que mudaram, não toda a página. Isso melhora significativamente a performance."
  },
  {
    id: "fw-9",
    q: "O que é Angular?",
    a: "Framework completo para aplicações web, desenvolvido pelo Google. Usa TypeScript, oferece roteamento, formulários, HTTP client e muito mais. É mais opinativo que React."
  },
  {
    id: "fw-10",
    q: "O que é Vue.js?",
    a: "Framework progressivo para interfaces de usuário. Combina o melhor de React e Angular. Fácil de aprender, flexível e performático. Ideal para projetos pequenos a médios."
  },
  // ==================== FRAMEWORKS BACKEND ====================
  {
    id: "fw-11",
    q: "O que é Spring Boot?",
    a: "Framework Java para criar aplicações web rapidamente. Usa Injeção de Dependência, suporte a bancos de dados, segurança e muito mais. Elimina configuração complexa do Spring tradicional."
  },
  {
    id: "fw-12",
    q: "O que é Django?",
    a: "Framework Python para web com filosofia 'baterias incluídas'. Fornece ORM, admin automático, autenticação, roteamento e templates. Muito usado para desenvolvimento rápido."
  },
  {
    id: "fw-13",
    q: "O que é Express.js?",
    a: "Framework minimalista para Node.js. Fornece recursos essenciais para construir APIs e aplicações web. É flexível e não opinativo, permitindo escolher suas próprias bibliotecas."
  },
  {
    id: "fw-14",
    q: "O que é Laravel?",
    a: "Framework PHP elegante para web. Usa MVC, Eloquent ORM, Blade templates, roteamento e muito mais. Foco em simplicidade e legibilidade do código."
  },
  // ==================== PADRÕES DE PROJETO ====================
  {
    id: "fw-15",
    q: "O que são Padrões de Projeto?",
    a: "São soluções reutilizáveis para problemas comuns em desenvolvimento de software. Descrevem como estruturar código para ser mantível, flexível e reutilizável."
  },
  {
    id: "fw-16",
    q: "O que é padrão MVC?",
    a: "Model-View-Controller: separa dados (Model), interface (View) e lógica (Controller). Facilita manutenção, testes e reutilização de código."
  },
  {
    id: "fw-17",
    q: "O que é padrão Singleton?",
    a: "Garante que uma classe tenha apenas uma instância e fornece acesso global a ela. Útil para objetos que devem ser únicos no sistema, como conexões de banco."
  },
  {
    id: "fw-18",
    q: "O que é padrão Observer?",
    a: "Define dependência um-para-muitos entre objetos. Quando um objeto muda estado, todos os dependentes são notificados automaticamente. Usado em eventos e notificações."
  },
  {
    id: "fw-19",
    q: "O que é padrão Factory?",
    a: "Cria objetos sem especificar a classe exata. Define uma interface para criação de objetos, permitindo subclasses decidirem qual classe instanciar."
  },
  // ==================== ARQUITETURA DE SOFTWARE ====================
  {
    id: "fw-20",
    q: "O que é arquitetura MVC?",
    a: "Separa aplicação em três camadas: Model (dados e regras de negócio), View (interface do usuário) e Controller (lógica de controle). Promove organização e manutenibilidade."
  },
  {
    id: "fw-21",
    q: "O que é arquitetura em Camadas?",
    a: "Organiza código em camadas com responsabilidades específicas: apresentação, negócio, dados. Cada camada só se comunica com a imediatamente inferior."
  },
  {
    id: "fw-22",
    q: "O que é arquitetura Microserviços?",
    a: "Divide aplicação em serviços pequenos e independentes, cada um responsável por uma funcionalidade específica. Facilita escalabilidade, implantação e manutenção."
  },
  {
    id: "fw-23",
    q: "O que é arquitetura Monolítica?",
    a: "Toda aplicação em um único código fonte, implantada como uma unidade. Mais simples para projetos pequenos, mas difícil de escalar e manter em projetos grandes."
  },
  // ==================== TESTES EM FRAMEWORKS ====================
  {
    id: "fw-24",
    q: "O que são testes unitários?",
    a: "Testam unidades isoladas de código (funções, métodos) para verificar se funcionam corretamente. Automatizados e rápidos. Exemplo: JUnit para Java, Jest para JavaScript."
  },
  {
    id: "fw-25",
    q: "O que são testes de integração?",
    a: "Testam como diferentes partes do sistema trabalham juntas. Verificam se módulos se comunicam corretamente e se dados fluem entre eles adequadamente."
  },
  {
    id: "fw-26",
    q: "O que são testes end-to-end?",
    a: "Testam a aplicação completa do início ao fim, simulando comportamento real do usuário. Verificam se todo o fluxo funciona como esperado."
  },
  // ==================== BOAS PRÁTICAS ====================
  {
    id: "fw-27",
    q: "O que é SOLID?",
    a: "Cinco princípios de design: S (Single Responsibility), O (Open/Closed), L (Liskov Substitution), I (Interface Segregation), D (Dependency Inversion). Promovem código maintível e extensível."
  },
  {
    id: "fw-28",
    q: "O que é DRY (Don't Repeat Yourself)?",
    a: "Princípio que evita duplicação de código. Cada pedaço de informação deve ter uma representação única e autoritativa no sistema."
  },
  {
    id: "fw-29",
    q: "O que é KISS (Keep It Simple, Stupid)?",
    a: "Princípio que defende simplicidade no design. Sistemas funcionam melhor quando são simples e fáceis de entender. Evite complexidade desnecessária."
  },
  {
    id: "fw-30",
    q: "O que é YAGNI (You Aren't Gonna Need It)?",
    a: "Princípio que sugere não implementar funcionalidades até que sejam realmente necessárias. Evita over-engineering e mantém o código focado no essencial."
  },
  // ==================== FRAMEWORKS DE TESTE ====================
  {
    id: "fw-31",
    q: "O que é JUnit?",
    a: "Framework de testes unitários para Java. Permite escrever testes automatizados com anotações como @Test, @Before, @After. Verifica se código funciona como esperado."
  },
  {
    id: "fw-32",
    q: "O que é Jest?",
    a: "Framework de testes para JavaScript. Fácil de configurar, executa testes rapidamente, fornece mocking e assertions. Muito usado com React e Node.js."
  },
  {
    id: "fw-33",
    q: "O que é Selenium?",
    a: "Framework para automação de testes em navegadores web. Simula interações do usuário como cliques, preenchimento de formulários e navegação."
  },
  // ==================== FERRAMENTAS DE BUILD ====================
  {
    id: "fw-34",
    q: "O que é Webpack?",
    a: "Empacotador de módulos JavaScript. Agrupa arquivos (JS, CSS, imagens) em um ou mais bundles otimizados para produção. Gerencia dependências e assets."
  },
  {
    id: "fw-35",
    q: "O que é Vite?",
    a: "Ferramenta de build rápida para desenvolvimento. Usa ES modules nativos, hot module replacement (HMR) e build otimizado. Mais rápido que Webpack para desenvolvimento."
  },
  {
    id: "fw-36",
    q: "O que é Babel?",
    a: "Transpilador JavaScript que converte código moderno (ES6+) para versões mais antigas (ES5). Permite usar novas features mesmo em navegadores antigos."
  }
];

// Exportação padrão para compatibilidade
export default frameworks;

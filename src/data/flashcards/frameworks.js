export const frameworks = [
  // ==================== CONCEITOS FUNDAMENTAIS ====================
  { q: "O que é um framework?", a: "Estrutura de código reutilizável que fornece funcionalidades comuns, permitindo que desenvolvedores foquem na lógica específica da aplicação. Evita 'reinventar a roda'." },
  { q: "Qual a diferença entre framework e biblioteca?", a: "Na biblioteca, você chama o código (controle direto). No framework, o controle é invertido (Inversão de Controle - IoC): o framework chama seu código através de pontos de extensão." },
  { q: "O que é API (Application Programming Interface)?", a: "Conjunto de regras que permite comunicação entre aplicações. Age como intermediário entre sistemas, processando transferência de dados de forma segura." },
  { q: "O que são componentes de software?", a: "Unidades de software reutilizáveis e independentes que podem ser combinadas para construir sistemas. Permitem foco na composição ao invés de implementação." },
  { q: "Quais os principais benefícios dos frameworks?", a: "Código mais seguro, testes simplificados, prevenção de duplicação, desenvolvimento acelerado, reutilização de código e possibilidade de extensão." },

  // ==================== PADRÃO MVC ====================
  { q: "O que é MVC (Model-View-Controller)?", a: "Padrão arquitetônico que separa aplicação em três camadas: Model (dados/lógica de negócio), View (interface/presentation) e Controller (controle de fluxo)." },
  { q: "Quais as características do MVC?", a: "Testabilidade fácil, controle total sobre HTML/URLs, separação clara de lógica, roteamento amigável para SEO e suporte a TDD (Test Driven Development)." },
  { q: "Como funciona o fluxo MVC?", a: "1) Navegador envia requisição ao Controller. 2) Controller invoca Model para buscar dados. 3) Controller fornece dados à View. 4) View é renderizada e enviada ao navegador." },

  // ==================== FRAMEWORKS WEB ====================
  { q: "O que é um framework web back-end?", a: "Estrutura que lida com lógica do servidor: processamento de requisições, acesso a banco de dados, autenticação e APIs. Exemplos: Spring, Django, Laravel." },
  { q: "O que é um framework web front-end?", a: "Estrutura focada na interface do usuário e experiência visual. Lida com HTML, CSS e JavaScript para renderização no navegador. Exemplos: Angular, React, Vue.js." },

  // ==================== FRAMEWORK SPRING ====================
  { q: "O que é o Spring Framework?", a: "Framework Java open-source para aplicações corporativas. Usa Injeção de Dependência e Programação Orientada a Aspectos. Permite criar módulos fracamente acoplados." },
  { q: "O que é Injeção de Dependência (DI)?", a: "Padrão de design onde o framework fornece as dependências de um objeto ao invés do próprio objeto criá-las. Facilita testes e manutenção." },
  { q: "O que é IoC (Inversão de Controle)?", a: "Princípio onde o framework controla o fluxo da aplicação. O código do desenvolvedor é chamado pelo framework, não o contrário." },
  { q: "O que são Beans no Spring?", a: "Objetos gerenciados pelo container Spring. São instanciados, configurados e gerenciados pela BeanFactory ou ApplicationContext." },
  { q: "O que é Spring Boot?", a: "Evolução do Spring que simplifica configuração com auto-configuração, servidor embutido (Tomcat) e dependências pré-configuradas. Permite criar aplicações standalone rapidamente." },
  { q: "O que é Apache Maven?", a: "Ferramenta de gerenciamento de projetos Java. Gerencia dependências, build, documentação e ciclo de vida do projeto via arquivo POM (Project Object Model)." },
  { q: "O que é JPA (Jakarta Persistence API)?", a: "Especificação Java para persistência e mapeamento objeto-relacional. Permite mapear classes Java para tabelas de banco de dados usando anotações." },

  // ==================== HIBERNATE ORM ====================
  { q: "O que é Hibernate?", a: "Framework de persistência de dados open-source que mapeia objetos Java para banco de dados relacional. Gerencia conexões, tabelas e consultas em HQL." },
  { q: "O que é ORM (Object-Relational Mapping)?", a: "Técnica que mapeia objetos de programação para tabelas de banco de dados. Resolve a 'impedância objeto-relacional' entre paradigmas diferentes." },
  { q: "O que é HQL (Hibernate Query Language)?", a: "Linguagem de consulta do Hibernate, similar ao SQL mas trabalhando com objetos e propriedades ao invés de tabelas e colunas. É traduzida para SQL em tempo real." },
  { q: "Qual a diferença entre HQL e SQL?", a: "HQL trabalha com objetos/classes (orientado a objetos). SQL trabalha com tabelas/colunas (relacional). HQL é traduzido para SQL pelo Hibernate." },
  { q: "O que é cache no Hibernate?", a: "Mecanismo para acelerar acessos frequentes. Cache de 1º nível: por sessão (obrigatório). Cache de 2º nível: compartilhado entre sessões (configurável)." },
  { q: "O que são transações ACID?", a: "Propriedades de transações: Atomicidade (tudo ou nada), Consistência (estado válido), Isolamento (transações independentes), Durabilidade (persistência garantida)." },

  // ==================== JAKARTA EE (JAVA EE) ====================
  { q: "O que é Jakarta EE (Java EE)?", a: "Plataforma para desenvolvimento de aplicações empresariais Java. Define containers (Web, Enterprise Beans) e especificações para computação distribuída." },
  { q: "O que é um Servlet?", a: "Componente web Java que gera conteúdo dinâmico. É gerenciado pelo container e responde a requisições HTTP (GET, POST, etc.)." },
  { q: "O que é JSP (Java Server Pages)?", a: "Tecnologia que permite inserir código Java em páginas HTML. Separa apresentação da lógica de negócio usando tag libraries." },
  { q: "O que é Jakarta Server Faces (JSF)?", a: "Framework MVC para interfaces web baseadas em componentes. Evolução do JSP com gerenciamento de estado, validação e navegação." },
  { q: "O que são Enterprise Beans?", a: "Componentes Jakarta EE com lógica de negócio transacional. Incluem Session Beans (lógica) e Entity Beans (persistência/dados)." },
  { q: "Diferença entre Stateless e Stateful Session Bean?", a: "Stateless: compartilhado, sem estado entre chamadas. Stateful: exclusivo por cliente, mantém estado durante sessão." },

  // ==================== FRAMEWORKS JAVASCRIPT ====================
  { q: "O que é Ajax?", a: "Asynchronous JavaScript And XML. Tecnologia cliente que atualiza conteúdo de páginas sem recarregar, usando XMLHttpRequest para comunicação assíncrona com servidor." },
  { q: "O que é Node.js?", a: "Ambiente de execução JavaScript multiplataforma e open-source no servidor. Construído sobre a engine V8 do Chrome. Permite usar JavaScript tanto no front-end quanto no back-end." },
  { q: "Quais vantagens do Node.js?", a: "Comunicação assíncrona, single-thread com event loop para milhares de conexões concorrentes, acesso a sistema de arquivos e bancos de dados." },
  { q: "O que é Angular?", a: "Framework TypeScript para aplicações web baseado em componentes. Usa templates, injeção de dependência e ferramentas para build, teste e deploy." },
  { q: "Quais os principais conceitos do Angular?", a: "Component (elementos de UI), Template (renderização HTML), Metadata (ligação entre componentes e templates), Services (lógica reutilizável) e Dependency Injection." },

  // ==================== FRAMEWORKS PHP ====================
  { q: "O que é Laravel?", a: "Framework PHP open-source focado em web. Oferece Eloquent ORM, query builder, roteamento RESTful, testes unitários e autenticação. Usa arquitetura MVC." },
  { q: "O que é Symfony?", a: "Framework PHP com componentes desacoplados e reutilizáveis. Usado por projetos como Drupal, Joomla e Laravel. Enfatiza boas práticas e interoperabilidade." },
  { q: "O que é CodeIgniter?", a: "Framework PHP leve que oferece bibliotecas para acelerar desenvolvimento web. Usa padrão MVC e facilita tarefas como banco de dados e formulários." },
  { q: "O que é PHP-FIG?", a: "PHP Framework Interop Group. Grupo que promove PSR (PHP Standard Recommendations) para interoperabilidade entre frameworks PHP." },

  // ==================== FRAMEWORKS PYTHON ====================
  { q: "O que é Django?", a: "Framework Python full-stack que segue princípio DRY. Inclui ORM próprio, templates, admin, autenticação e é usado por sites como Instagram e Pinterest." },
  { q: "O que é Flask?", a: "Microframework Python minimalista e extensível. Fornece roteamento básico e usa extensões para funcionalidades adicionais como banco de dados e autenticação." },
  { q: "Quais os tipos de frameworks Python?", a: "Full-stack (Django, Web2Py), Microframeworks (Flask, Bottle, CherryPy) e Assíncronos (AIOHTTP, Sanic, Tornado) usando asyncio." },
  { q: "O que é arquitetura MVT no Django?", a: "Model-View-Template. Similar ao MVC, mas o Controller é tratado pelo framework. Model gerencia dados, Template renderiza HTML, View conecta ambos." },

  // ==================== FRAMEWORKS MOBILE ====================
  { q: "O que é Android ADT?", a: "Android Development Tools. Conjunto de ferramentas para Eclipse para desenvolvimento Android incluindo DDMS, emulador e editor de código." },
  { q: "O que é Activity no Android?", a: "Componente que representa uma tela do aplicativo. Possui ciclo de vida gerenciado pelo sistema: onCreate, onStart, onResume, onPause, onStop, onDestroy." },
  { q: "O que é SQLite?", a: "Banco de dados relacional embutido em dispositivos móveis. Compacto, sem servidor e usado para armazenamento local em apps Android." },
  { q: "O que são Web Services?", a: "Serviços que permitem comunicação entre sistemas diferentes via rede. Usam protocolos como SOAP ou REST para transferência de dados (XML/JSON)." },
  { q: "Frameworks para React mobile?", a: "Redux (gerenciamento de estado), React Admin (administração B2B), Ant Design (componentes UI), Styled Components (CSS-in-JS), React-Motion (animações)." },
  { q: "Frameworks para Swift?", a: "Quick (testes), Vapor (web/API), Kitura (servidor HTTP), Zip (compactação). Usados para apps iOS/macOS/watchOS." },

  // ==================== FERRAMENTAS DE DESENVOLVIMENTO ====================
  { q: "O que é Eclipse IDE?", a: "Ambiente de Desenvolvimento Integrado open-source. Suporta Java, C/C++, JavaScript, PHP. Inclui depuração, refatoração e controle de versão." },
  { q: "O que é NetBeans?", a: "IDE open-source para Java, HTML5, PHP e C++. Oferece editor de código, depuração, gerenciamento de projetos e integração com servidores." },
  { q: "O que é Visual Studio Code?", a: "Editor de código leve e gratuito da Microsoft. Suporta múltiplas linguagens via extensões, Git integrado, terminal e depuração." },
  { q: "O que é Android Studio?", a: "IDE oficial para desenvolvimento Android baseado no IntelliJ. Inclui emulador, editor visual, compilação flexível e integração com Google Cloud." },
  { q: "O que é Anaconda?", a: "Distribuição Python/R para ciência de dados. Inclui 250+ pacotes, gerenciador conda, Navigator gráfico e ferramentas para machine learning." },
  { q: "O que é PyCharm?", a: "IDE JetBrains para Python com depuração avançada, testes integrados, controle de versão e suporte a frameworks como Django e Flask." },

  // ==================== CONCEITOS AVANÇADOS ====================
  { q: "O que é AOP (Aspect-Oriented Programming)?", a: "Paradigma que complementa POO modularizando questões transversais (logging, segurança, transações) em aspectos reutilizáveis." },
  { q: "Conceitos principais de AOP?", a: "Aspect (preocupação modularizada), Join Point (ponto de execução), Advice (ação), Pointcut (predicado de matching), Weaving (ligação de aspectos)." },
  { q: "O que é JNDI (Java Naming Directory Interface)?", a: "API Java para localização de recursos nomeados em servidor. Usada para catalogar beans, conexões de banco e outros recursos." },
  { q: "O que é Session no Hibernate?", a: "Interface principal para comunicação com banco. Representa conversa entre aplicação e banco, com cache de 1º nível e controle de transações." },
  { q: "O que é SessionFactory no Hibernate?", a: "Factory para criar Sessions. Thread-safe e pesado, deve ser criado uma vez por aplicação. Gerencia cache de 2º nível e mapeamentos." },
  { q: "Estratégias de carregamento: Lazy vs Eager?", a: "Lazy: carrega dados sob demanda (mais rápido inicial). Eager: carrega tudo de uma vez (mais lento inicial, mas acesso imediato)." }
];

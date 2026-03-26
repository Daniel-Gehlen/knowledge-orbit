// Programação Web - Flashcards completos baseados em Ta1, Ta2, Ta3, Ta4
// Total: 80+ flashcards cobrindo HTML5, CSS, JavaScript e PHP

export const programacaoWeb = [
  // ========== TA1 - HTML5 ==========
  // Internet e Infraestrutura
  { q: "O que é a Internet?", a: "Conjunto de diversas redes interligadas que compartilham serviços comuns. Surgiu em 1969 com o projeto ARPA." },
  { q: "Quando o HTML foi criado?", a: "HTML foi criado em 1991 para estruturar conteúdo web. O HTML5 surgiu em 2007." },
  { q: "Quais são os tipos de aplicações Web?", a: "Site de conteúdo, site de registro de dados, portal e aplicação orientada à transação." },
  { q: "Quais tecnologias são usadas para criar websites?", a: "HTML5, CSS, JavaScript, PHP e MySQL - formando a stack completa de desenvolvimento web." },
  { q: "O que é hospedagem de site?", a: "Serviço que armazena e disponibiliza um website na Internet, permitindo que usuários acessem as páginas." },

  // HTML Fundamentals
  { q: "O que é HTML?", a: "Linguagem de marcação de texto usada para especificar conteúdo e formato de páginas Web, delimitando informações como parágrafos, imagens e títulos." },
  { q: "HTML é uma linguagem de programação?", a: "Não. HTML é uma linguagem especializada para estruturar documentos, não para programação." },
  { q: "O que é URL?", a: "Uniform Resource Locator - especifica protocolo, endereço do computador, porta e localização do recurso na web." },
  { q: "Qual é a estrutura de uma URL?", a: "<protocolo>://<endereço_computador>:<porta>/<localização_recurso>?<parâmetros>" },
  { q: "O que é HTTP?", a: "Protocolo de transferência de hipertexto usado pelo navegador para interagir com um servidor web." },
  { q: "Quais são os principais métodos HTTP?", a: "GET (buscar dados), HEAD (cabeçalho), POST (enviar dados), PUT (atualizar recurso)." },

  // HTML Structure
  { q: "O que são tags HTML?", a: "Palavras reservadas envolvidas pelos caracteres < e >, como <html>. Podem ser de abertura e fechamento." },
  { q: "O que são elementos HTML?", a: "Tudo que está entre a tag de início e fim, incluindo as próprias tags e o conteúdo." },
  { q: "O que são atributos HTML?", a: "Informações adicionais definidas na tag de abertura, como id, style e class." },
  { q: "Como é a estrutura básica de um documento HTML5?", a: "<!DOCTYPE html><html><head><title>Título</title></head><body>conteúdo</body></html>" },

  // HTML5 Semantic Elements
  { q: "Quais são os elementos semânticos do HTML5?", a: "header (cabeçalho), nav (links), section (seção), article (conteúdo), aside (apoio) e footer (rodapé)." },
  { q: "Qual é a diferença entre HTML4 e HTML5?", a: "HTML5 substitui <div id='header'> por <header>, tornando o código mais semântico e legível." },
  { q: "Por que o HTML5 é melhor que o HTML4?", a: "Resolve o uso excessivo de <div>, usando tags semânticas que facilitam CSS e acessibilidade." },

  // Text Tags
  { q: "Quais tags de texto existem no HTML5?", a: "<p> (parágrafo), <span> (container texto), <li> (item lista), <ol>/<ul> (listas), <h1>-<h6> (títulos)." },
  { q: "Qual é a diferença entre <ol> e <ul>?", a: "<ol> cria lista ordenada (numerada), <ul> cria lista não ordenada (com marcadores)." },
  { q: "O que faz a tag <span>?", a: "Container inline para pequenas informações como legendas de formulário ou imagem." },

  // Special Tags
  { q: "O que faz a tag <br/>?", a: "Executa quebra de linha. Não necessita de fechamento (tag auto-fechável)." },
  { q: "O que faz a tag <hr/>?", a: "Cria uma linha horizontal. Não necessita de fechamento." },
  { q: "O que faz a tag <pre>?", a: "Representa texto pré-formatado, preservando espaços e quebras de linha originais." },

  // HTML5 Media
  { q: "Quais são as principais tags de mídia do HTML5?", a: "<img> (imagem), <audio> (som), <video> (vídeo) e <iframe> (página incorporada)." },
  { q: "O que é a tag <iframe>?", a: "Permite incorporar outra página HTML dentro da página atual, útil para vídeos e mapas." },

  // Forms
  { q: "Para que servem formulários HTML?", a: "Permitir coleta de dados dos usuários para processamento no servidor." },
  { q: "O que é a tag <form>?", a: "Container dos controles de formulário, com action (URL destino) e method (POST/GET)." },
  { q: "Quais tipos de input existem?", a: "hidden, text, password, radio, checkbox, file, submit, reset, button e image." },
  { q: "Qual a diferença entre type='radio' e type='checkbox'?", a: "Radio permite selecionar apenas uma opção do grupo; checkbox permite múltiplas seleções." },

  // HTML5 Symbols
  { q: "Como exibir < e > em HTML?", a: "Usar entidades HTML: < para < e > para >." },
  { q: "O que são entidades HTML?", a: "Códigos especiais como &copy; (©), &reg; (®), &trade; (™) para exibir símbolos reservados." },

  // ========== TA2 - CSS ==========
  // CSS Basics
  { q: "O que é CSS?", a: "Cascading Style Sheets - linguagem de folhas de estilo para definir apresentação visual de documentos HTML." },
  { q: "Qual é a principal função do CSS?", a: "Separar o conteúdo (HTML) da forma como é exibido, tornando páginas mais dinâmicas e elegantes." },
  { q: "Quais são as versões do CSS?", a: "CSS1, CSS2, CSS2.1 e CSS3, cada versão com novas funcionalidades e melhorias." },

  // CSS Syntax
  { q: "Qual é a sintaxe básica de uma regra CSS?", a: "seletor { propriedade: valor; } - exemplo: h1 { color: red; }" },
  { q: "Como agrupar seletores CSS?", a: "Separar cada seletor com vírgula: h1, h2, h3 { font-family: sans-serif; }" },

  // CSS Inclusion Methods
  { q: "Quais são as formas de incluir CSS?", a: "Inline (dentro da tag), Interno (no <head> com <style>) e Externo (arquivo .css separado)." },
  { q: "Como incluir CSS externo?", a: "Usar <link href='estilos.css' type='text/css' rel='stylesheet'/> no <head>." },

  // Selectors
  { q: "O que são seletores CSS?", a: "Determinam em quais elementos HTML uma regra de estilo será aplicada." },
  { q: "O que é um seletor de classe?", a: "Seleciona elementos com class específica: .minha-classe { }. Pode ser aplicado a vários elementos." },
  { q: "O que é um seletor de ID?", a: "Seleciona elemento único com id específico: #meu-id { }. Deve ser único na página." },
  { q: "O que é o seletor universal?", a: "* aplica formatação a todos os elementos da página." },
  { q: "O que são pseudo-classes CSS?", a: "Seletores que aplicam estilo em estados específicos: a:hover, a:visited, a:focus." },
  { q: "O que é o combinador '+' em CSS?", a: "Seleciona elemento que segue imediatamente outro: ul + li seleciona li após ul." },
  { q: "O que é o combinador '>' em CSS?", a: "Seleciona filho direto: ul > li seleciona li que são filhos diretos de ul." },

  // Box Model
  { q: "O que é o modelo de caixa CSS?", a: "Elementos são retângulos com borda, preenchimento (padding) e margem (margin)." },
  { q: "Qual a diferença entre padding e margin?", a: "Padding é espaço interno (entre conteúdo e borda); margin é espaço externo (entre borda e outros elementos)." },

  // Positioning
  { q: "Quais são os tipos de posicionamento CSS?", a: "static (padrão), relative (relativo à posição original), fixed (fixo na tela), absolute (relativo ao pai) e sticky." },

  // Colors and Measurements
  { q: "Quais formas de definir cores em CSS?", a: "Hexadecimal (#FF0000), nome (red), RGB (rgb(255,0,0)), RGBA com transparência." },
  { q: "Quais unidades de medida existem em CSS?", a: "em (relativa ~16px), pixels (absoluta), porcentagem (relativa ao elemento pai)." },

  // Fonts
  { q: "O que são famílias de fontes?", a: "Fontes específicas como Arial, Times New Roman. Famílias genéricas: serif, sans-serif, cursive." },

  // Other Properties
  { q: "O que a propriedade font-weight controla?", a: "Espessura da fonte: normal, bold, bolder, lighter ou valores numéricos (100-900)." },
  { q: "O que a propriedade font-style controla?", a: "Estilo da fonte: normal, italic ou oblique." },

  // Bootstrap
  { q: "O que é Bootstrap?", a: "Framework front-end popular para construção de sites responsivos com design mobile-first." },
  { q: "Como incluir Bootstrap via CDN?", a: "<link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css'>" },

  // ========== TA3 - JavaScript ==========
  // JavaScript Basics
  { q: "O que é JavaScript?", a: "Linguagem de programação que adiciona interatividade às páginas web, permitindo manipulação do DOM." },
  { q: "Qual a história do JavaScript?", a: "Teve nomes como Cmm, ScriptEase, Mocha, LiveScript antes de se tornar JavaScript." },
  { q: "JavaScript roda onde?", a: "Principalmente no cliente (navegador), mas também no servidor com Node.js." },

  // Data Types
  { q: "Quais são os tipos primitivos em JavaScript?", a: "Boolean, Null, Undefined, Number e String." },
  { q: "O que é undefined em JavaScript?", a: "Valor atribuído a variável declarada mas não inicializada." },

  // Functions
  { q: "O que são funções em JavaScript?", a: "Blocos de código encapsulados que podem ser reutilizados chamando apenas pelo nome." },
  { q: "Qual a vantagem de usar funções?", a: "Evita redundância no código, diminui tamanho e facilita manutenção." },
  { q: "O que faz a função alert()?", a: "Exibe uma caixa pop-up no navegador com mensagem para o usuário." },

  // Variable Scope
  { q: "Quais são os escopos de variável em JavaScript?", a: "Global (todo código), Função (dentro de função), Bloco (dentro de if/for/while)." },
  { q: "Qual a diferença entre var, let e const?", a: "var tem escopo de função, let/const têm escopo de bloco. const não pode ser reatribuído." },

  // Operators
  { q: "Quais são os operadores matemáticos em JavaScript?", a: "+ (soma/concatenação), -, *, /, % (módulo), ** (exponenciação)." },
  { q: "Quais são os operadores lógicos?", a: "&& (AND lógico), || (OR lógico), ! (NOT lógico)." },
  { q: "Qual a diferença entre == e ===?", a: "== compara valor, === compara valor e tipo. Recomenda-se usar === para evitar coerção." },
  { q: "O que são operadores relacionais?", a: "==, ===, !=, !==, >, <, >=, <= - comparam valores e retornam booleano." },

  // Control Structures
  { q: "Como funciona o if em JavaScript?", a: "if (condição) { código } else { código alternativo } - executa código baseado em condição booleana." },
  { q: "Como funciona o for em JavaScript?", a: "for (inicialização; condição; incremento) { código } - repete bloco número definido de vezes." },
  { q: "Como funciona o while em JavaScript?", a: "while (condição) { código } - repete bloco enquanto condição for verdadeira." },

  // DOM
  { q: "O que é o DOM?", a: "Document Object Model - interface de programação que representa HTML como árvore de objetos manipulável." },
  { q: "O que faz getElementById()?", a: "Retorna o elemento HTML que possui o ID informado." },
  { q: "O que faz getElementByClass()?", a: "Retorna HTML Collection de todos elementos com o nome da classe informada." },
  { q: "O que faz getElementByTagName()?", a: "Retorna elementos que contêm a tag name informada." },
  { q: "Para que serve o DOM?", a: "Permite modificar estrutura, estilo e conteúdo da página sem recarregar do servidor." },

  // JSON
  { q: "O que é JSON?", a: "JavaScript Object Notation - formato padrão para representar dados estruturados, usado em transmissão web." },
  { q: "Qual a relação entre JSON e JavaScript?", a: "JSON usa sintaxe similar a objetos JavaScript, mas é independente de linguagem." },

  // AJAX
  { q: "O que é AJAX?", a: "Asynchronous JavaScript and XML - técnica para carregar conteúdo web assíncrono sem recarregar página." },
  { q: "Como AJAX e JSON trabalham juntos?", a: "AJAX pode obter dados do servidor em formato JSON, que são lidos e tratados em JavaScript." },

  // Canvas
  { q: "O que é Canvas?", a: "Elemento HTML5 para criação de desenhos, animações e gráficos usando JavaScript." },
  { q: "Como usar Canvas?", a: "getContext() obtém contexto de renderização; métodos como fillRect() criam formas." },

  // Geolocation
  { q: "O que é Geolocalização?", a: "API que fornece localização do usuário para aplicações web (com consentimento)." },
  { q: "Como obter localização do usuário?", a: "navigator.geolocation.getCurrentPosition() retorna coordenadas de latitude e longitude." },

  // Audio/Video
  { q: "Quais tags HTML5 controlam mídia?", a: "<video> e <audio> com APIs JavaScript para controle avançado de reprodução." },

  // Libraries
  { q: "O que é jQuery?", a: "Biblioteca JavaScript que simplifica desenvolvimento, oferecendo efeitos e manipulação DOM fácil." },
  { q: "O que é React?", a: "Biblioteca popular para criação de interfaces de usuário, usada por grandes empresas de tecnologia." },
  { q: "O que é Node.js?", a: "Ambiente JavaScript para desenvolvimento back-end, permitindo usar JS no servidor." },
  { q: "O que são bibliotecas JavaScript?", a: "Conjuntos de funções prontas que programadores reutilizam, como jQuery e React." },

  // ========== TA4 - PHP ==========
  // PHP Basics
  { q: "O que é PHP?", a: "PHP Hypertext Preprocessor - linguagem de script aberta e adequada para desenvolvimento web." },
  { q: "PHP roda onde?", a: "No lado do servidor. É multiplataforma: Linux, Windows, macOS, Solaris, etc." },
  { q: "Quais características do PHP?", a: "Interpretada, fracamente tipada, embutida no HTML e orientada a objetos." },

  // PHP Syntax
  { q: "Como iniciar código PHP?", a: "Usar delimitadores <?php e ?>. Linhas terminam com ponto e vírgula (;)." },
  { q: "Como exibir dados em PHP?", a: "Usar print ou echo: print \"Olá\"; ou echo \"Mundo\";" },
  { q: "O que é printf em PHP?", a: "Função para saída formatada: printf(\"Cotação: %.2f\", 7.1456) exibe número com 2 casas decimais." },

  // Variables
  { q: "Como declarar variáveis em PHP?", a: "Usar $ antes do nome: $nome = \"João\"; $ano = 2024; $pi = 3.14;" },
  { q: "Quais são os tipos de dados em PHP?", a: "String, Integer, Float, Boolean, Array, Object, NULL, Resource." },

  // Operators
  { q: "Quais são os operadores aritméticos em PHP?", a: "+, -, *, /, % (módulo), ** (exponenciação)." },
  { q: "Qual a diferença entre == e === em PHP?", a: "== compara valor, === compara valor e tipo (idêntico)." },

  // Built-in Functions
  { q: "O que faz mysqli_connect()?", a: "Função responsável por conectar ao banco de dados MySQL." },
  { q: "O que faz phpinfo()?", a: "Mostra informações sobre estado atual do PHP, útil para diagnóstico e resolução de problemas." },

  // Variable Scope
  { q: "Quais são os escopos de variável em PHP?", a: "Local (função), Global (todo código), Estática (mantém valor entre chamadas)." },
  { q: "Como acessar variável global dentro de função?", a: "Usar palavra-chave global: global $minhaVar; ou usar $GLOBALS['minhaVar']." },

  // User Functions
  { q: "Como definir função em PHP?", a: "function nomeFunção($param1, $param2) { código return $valor; }" },
  { q: "O que é retorno de função em PHP?", a: "Valor que a função devolve com return: function soma($a, $b) { return $a + $b; }" },

  // Control Structures
  { q: "Como funciona if em PHP?", a: "if ($condição) { código } elseif ($outra) { código } else { código }" },
  { q: "Como funciona while em PHP?", a: "$i = 1; while ($i <= 10) { echo $i; $i++; }" },
  { q: "Como funciona for em PHP?", a: "for ($i = 0; $i < 5; $i++) { echo $i; }" },
  { q: "O que faz continue em PHP?", a: "Pula para próxima iteração do loop: if ($i == 2) continue;" },

  // File Handling
  { q: "Como abrir arquivo em PHP?", a: "fopen('arquivo.txt', 'w') - abre para escrita; 'r' para leitura; 'a' para append." },
  { q: "Quais funções manipulam arquivos?", a: "fopen (abrir), fwrite (escrever), fread (ler), fclose (fechar)." },
  { q: "O que faz a função copy()?", a: "Copia arquivo: copy('origem.txt', 'destino.txt')." },
  { q: "O que faz a função unlink()?", a: "Apaga arquivo: unlink('arquivo.txt')." },
  { q: "O que a variável $_FILES contém?", a: "Informações sobre arquivo enviado via upload: nome, tipo, tamanho, etc." },

  // Databases
  { q: "O que é SGBD?", a: "Sistema Gerenciador de Banco de Dados - gerencia armazenamento, acesso e integridade dos dados." },
  { q: "Qual a diferença entre banco relacional e não relacional?", a: "Relacional (MySQL) usa tabelas; não relacional (MongoDB) usa documentos flexíveis." },
  { q: "Quais comandos SQL básicos existem?", a: "SELECT (buscar), INSERT INTO (inserir), UPDATE (atualizar), DELETE (remover), CREATE TABLE." },
  { q: "Como conectar PHP ao MySQL?", a: "Usar mysqli_connect($servidor, $usuario, $senha, $banco)." },

  // Cookies
  { q: "O que são Cookies?", a: "Pequenos arquivos salvos no navegador para melhorar experiência de navegação do usuário." },
  { q: "Como criar Cookie em PHP?", a: "Usar setcookie(\"nome\", \"valor\", time() + 3600) - armazena informação no navegador." },

  // OOP
  { q: "O que é uma classe em PHP?", a: "Bloco estrutural definido com class NomeClasse { propriedades e métodos }." },
  { q: "O que é $this em PHP?", a: "Pseudo-variável que refere ao objeto atual dentro de seus métodos." },
  { q: "Como criar objeto em PHP?", a: "Usar operador new: $obj = new MinhaClasse();" },
  { q: "Quais modificadores de visibilidade existem?", a: "Public (acesso total), Protected (classe e filhos), Private (apenas classe)." },
  { q: "O que são métodos em PHP?", a: "Funções declaradas dentro de uma classe, executando comportamentos do objeto." },
  { q: "O que é construtor em PHP?", a: "Método especial __construct() chamado automaticamente ao criar objeto." },
  { q: "Como criar classe com construtor?", a: "class Pessoa { function __construct($nome) { $this->nome = $nome; } }" }
];

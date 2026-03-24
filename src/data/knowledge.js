export const knowledge = {
  "algoritmos": {
    summary: "Algoritmos são sequências de passos finitos e bem definidos para resolver problemas. Imagine como uma receita de bolo: você segue uma ordem lógica para chegar ao resultado final. Um algoritmo sempre tem três componentes básicos: entrada (dados que chegam), processamento (o que fazemos com eles) e saída (o resultado final).",
    concepts: [
      { term: "Variável", definition: "Um espaço na memória com um nome, usado para guardar informações que podem mudar durante a execução. Pense nela como uma caixa rotulada onde você coloca dados." },
      { term: "Descrição Narrativa", definition: "Forma de representar um algoritmo usando linguagem natural, como uma receita de bolo. É simples de entender, mas pode ser imprecisa." },
      { term: "Fluxograma", definition: "Representação gráfica de um algoritmo usando formas geométricas (retângulos, losangos, etc.) conectadas por flechas que mostram o fluxo de execução." },
      { term: "Pseudocódigo", definition: "Forma de escrever algoritmos usando português estruturado, semelhante à sintaxe de programação. É um meio-termo entre a linguagem natural e o código real." },
      { term: "Tipos de Dados", definition: "Classificações que especificam as características dos dados: inteiro (números sem casa decimal), real (números com casa decimal), caractere (letras e símbolos) e lógico (verdadeiro ou falso)." },
      { term: "Regras para Variáveis", definition: "Nomes devem ser únicos e significativos, começar com letra, usar apenas letras, números e underline, e não podem ser palavras reservadas da linguagem." },
      { term: "Estrutura Condicional if", definition: "Permite tomar uma decisão e criar um desvio dentro do programa. Se a condição for verdadeira, os comandos dentro do if são executados." },
      { term: "Estrutura Condicional if-else", definition: "Executa um bloco de código se a condição for verdadeira e outro bloco (else) se for falsa. Oferece dois caminhos possíveis." },
      { term: "Estrutura switch-case", definition: "Permite escolher entre múltiplas opções baseadas no valor de uma variável. Usa constantes para comparação e break para sair de cada caso." },
      { term: "Estrutura Condicional Encadeada", definition: "Quando múltiplas estruturas if-else são usadas em sequência para verificar várias condições em ordem." },
      { term: "Estrutura de Repetição while", definition: "Executa comandos repetidamente enquanto uma condição verdadeira for verificada. Só para quando a condição se tornar falsa." },
      { term: "Estrutura de Repetição do-while", definition: "Executa os comandos primeiro e depois analisa a condição no final do laço. Garante que os comandos sejam executados pelo menos uma vez." },
      { term: "Estrutura de Repetição for", definition: "Repete uma informação por um número fixo de vezes. Tem três partes: inicialização, condição final e incremento." },
      { term: "Contador", definition: "Variável utilizada para controlar as repetições, podendo ser incrementada (aumentar) ou decrementada (diminuir)." },
      { term: "Acumulador", definition: "Variável que soma as entradas de dados de cada iteração da repetição, gerando um somatório ao final." },
      { term: "Vetor", definition: "Tipo especial de variável que armazena diversos valores ao mesmo tempo usando um mesmo endereço na memória. Sintaxe: tipo variavel[n]." },
      { term: "Matriz", definition: "Arranjo de duas ou mais dimensões. Todos os elementos são do mesmo tipo. Sintaxe: tipo variável[m][n]." },
      { term: "Índices em Variáveis Compostas", definition: "Em qualquer variável composta, o índice começa por zero. Em uma matriz, o primeiro espaço é sempre (0,0). Não é obrigatório ocupar todas as posições." },
      { term: "Função", definition: "Um trecho de código escrito para resolver um subproblema. Divide a complexidade de um problema maior e evita repetição de código. A técnica de dividir para conquistar é fundamental." },
      { term: "Componentes de uma Função", definition: "Tipo de retorno (obrigatório, indica o tipo de valor que a função retorna, como int, float, char ou void) e nome (obrigatório, identifica a função). Parâmetros são opcionais." },
      { term: "Ponteiro", definition: "Tipo especial de variável que armazena um endereço de memória. Usa-se o asterisco (*) para criação e o 'e comercial' (&) para acessar o endereço da memória." },
      { term: "Função malloc()", definition: "Aloca memória dinamicamente. Exemplo: int *memoria = malloc(100); Retorna NULL ou um ponteiro genérico." },
      { term: "Escopo de Variáveis", definition: "Define onde uma variável pode ser 'enxergada'. Variáveis locais são visíveis apenas dentro da função; variáveis globais são visíveis em todo o programa." },
      { term: "Passagem de Valor", definition: "A função cria variáveis locais automaticamente para armazenar os valores passados; após a execução, essas variáveis são liberadas." },
      { term: "Passagem por Referência", definition: "Usa ponteiro e endereço de memória; não cria cópia dos argumentos, a função trabalha diretamente com os valores originais armazenados." },
      { term: "Função Recursiva", definition: "Uma função que é invocada dentro dela mesma. Resolve um problema dividindo-o em subproblemas mais simples, cuja solução é a aplicação da mesma função." },
      { term: "Requisitos para Recursividade", definition: "Ter um ponto de parada (condição que encerra a recursão), variáveis na memória de trabalho e variáveis independentes." },
      { term: "Fatorial", definition: "O fatorial de um número N consiste em multiplicações sucessivas até que N seja igual ao valor unitário. Exemplo: 5! = 5×4×3×2×1 = 120." },
      { term: "Sequência de Fibonacci", definition: "Uma sequência onde cada número é a soma dos dois anteriores. O n-ésimo elemento é calculado recursivamente: F(n) = F(n-1) + F(n-2)." },
      { term: "Estrutura de Dados", definition: "Forma organizada de armazenar e gerencizar dados na memória do computador para que possam ser acessados e modificados de forma eficiente." },
      { term: "Struct", definition: "Variável que armazena valores de tipos diferentes. Imagine como uma caixa com compartimentos: cada compartimento guarda um tipo de informação (nome, idade, etc.)." },
      { term: "Lista Ligada", definition: "Estrutura de dados linear e dinâmica onde cada elemento (nó) contém dados e um ponteiro para o próximo elemento. É como uma corrente onde cada elo aponta para o próximo." },
      { term: "Nó (Node)", definition: "Elemento individual de uma lista ligada que contém dois campos: o dado armazenado e um ponteiro para o próximo nó da lista." },
      { term: "Operações em Lista Ligada", definition: "Principais operações: criação da estrutura, inicialização, inserção de elementos (no início, meio ou final), remoção de elementos e percorrer a lista para buscar elementos." },
      { term: "Pilha (Stack)", definition: "Estrutura de dados do tipo LIFO (Last-In, First-Out): o último elemento inserido é o primeiro a ser removido. Imagine uma pilha de pratos: você sempre pega o prato do topo." },
      { term: "Operação Push", definition: "Ação de empilhar um elemento na pilha. Coloca o novo elemento no topo da estrutura." },
      { term: "Operação Pop", definition: "Ação de desempilhar um elemento da pilha. Remove e retorna o elemento do topo da estrutura." },
      { term: "Fila (Queue)", definition: "Estrutura de dados do tipo FIFO (First-In, First-Out): o primeiro elemento inserido é o primeiro a ser removido. Imagine uma fila de banco: quem chega primeiro é atendido primeiro." },
      { term: "Operações em Fila", definition: "Principais operações: criar fila vazia, inserir elemento no final (enqueue), remover elemento do início (dequeue) e verificar se a fila está vazia." }
    ]
  },
  "engenharia-software": {
    summary: "A Engenharia de Software aplica princípios de engenharia para criar programas de qualidade, de forma organizada e dentro do prazo.",
    concepts: [
      { term: "Ciclo de Vida (SDLC)", definition: "As etapas pelas quais um software passa: requisitos, design, código, testes e manutenção." },
      { term: "Metodologia Ágil", definition: "Uma forma flexível de trabalhar que prioriza entregas rápidas e colaboração com o cliente." },
      { term: "Qualidade de Software", definition: "O grau em que o programa atende às necessidades do usuário e funciona sem erros." }
    ]
  },
  "linguagem-programacao": {
    summary: "Linguagem C é uma linguagem de programação de médio nível, muito utilizada para desenvolvimento de sistemas e aplicações que exigem performance. Ela oferece controle direto sobre o hardware do computador.",
    concepts: [
      { term: "Estrutura de Programa em C", definition: "Um programa em C segue uma estrutura básica: início com bibliotecas, definição da função main(), declaração de variáveis, instruções de entrada/saída, demais instruções e fim do programa." },
      { term: "Bibliotecas", definition: "Conjuntos de funções pré-definidas incluídas no início do programa com #include. Exemplo: stdio.h para funções de entrada/saída, math.h para operações matemáticas." },
      { term: "Função main()", definition: "É o ponto de entrada de todo programa em C. Todo código executável deve estar dentro desta função." },
      { term: "Tipos de Dados em C", definition: "int para números inteiros, float para números decimais, char para caracteres individuais. Cada tipo ocupa uma quantidade específica de memória." },
      { term: "Operadores", definition: "Símbolos que realizam operações: aritméticos (+, -, *, /, %), de atribuição (=), relacionais (==, !=, >, <) e lógicos (&&, ||, !)." },
      { term: "Comandos de Entrada/Saída", definition: "printf() para mostrar dados na tela e scanf() para ler dados do teclado. Usam especificadores de formato como %d para inteiros e %f para decimais." },
      { term: "Comando switch em C", definition: "Avalia uma variável e executa o bloco de código correspondente ao case que coincide com o valor. Usa break para sair e default para caso não haja correspondência." },
      { term: "Comando for em C", definition: "Sintaxe: for (inicialização; condição final; incremento) { comandos; }. Repete um número fixo de vezes." },
      { term: "Comando while em C", definition: "Sintaxe: while (condição) { comandos; }. Executa enquanto a condição for verdadeira." },
      { term: "Comando do-while em C", definition: "Sintaxe: do { comandos; } while (condição);. Executa pelo menos uma vez, depois verifica a condição." },
      { term: "Declaração de Função em C", definition: "tipo_retorno nome_função(parâmetros) { comandos; return valor; }. O tipo void indica que não retorna valor." },
      { term: "Declaração de Ponteiro em C", definition: "tipo *nome_do_ponteiro; Exemplo: int *idade;. Apenas cria sentido quando associado a um endereço de memória." },
      { term: "Alocação Dinâmica em C", definition: "Usando a função malloc(): tipo *ponteiro = malloc(tamanho_em_bytes);. Retorna NULL se falhar ou um ponteiro genérico se sucesso." }
    ]
  },
  "logica-matematica": {
    summary: "A base de toda computação. Estuda como o computador 'pensa' usando lógica booleana (Verdadeiro ou Falso).",
    concepts: [
      { term: "Proposição", definition: "Uma afirmação que só pode ser verdadeira ou falsa." },
      { term: "Tabela Verdade", definition: "Uma tabela que mostra todos os resultados possíveis de uma operação lógica." },
      { term: "Álgebra de Conjuntos", definition: "O estudo de grupos de elementos e as relações entre eles (união, intersecção)." }
    ]
  },
  "analise-oo": {
    summary: "Fase de planejamento onde modelamos o problema usando Diagramas UML antes de começar a programar.",
    concepts: [
      { term: "Diagrama de Classe", definition: "Mostra a estrutura do sistema, os tipos de objetos e como eles se relacionam." },
      { term: "UML", definition: "Linguagem de Modelagem Unificada, um padrão visual para documentar sistemas." },
      { term: "Caso de Uso", definition: "Descrição de como um usuário interage com o sistema para atingir um objetivo." }
    ]
  },
  "redes-computadores": {
    summary: "Estudo de como os computadores se conectam e conversam através de fios ou sinais sem fio.",
    concepts: [
      { term: "Protocolo TCP/IP", definition: "O conjunto de regras que permite que a internet funcione globalmente." },
      { term: "Endereço IP", definition: "O 'número de identificação' único de cada aparelho conectado a uma rede." },
      { term: "Roteador", definition: "O dispositivo que decide qual o melhor caminho para os dados viajarem até o destino." }
    ]
  },
  "seguranca-auditoria": {
    summary: "Proteção de dados e sistemas contra acessos não autorizados e ataques digitais.",
    concepts: [
      { term: "Criptografia", definition: "Técnica de embaralhar as informações para que só quem tem a 'chave' consiga ler." },
      { term: "Firewall", definition: "Uma barreira de segurança que monitora o tráfego de rede e bloqueia o que for suspeito." },
      { term: "Vulnerabilidade", definition: "Uma fraqueza no sistema que pode ser explorada por um invasor." }
    ]
  },
  "linguagem-oo": {
    summary: "Linguagem de programação que utiliza o paradigma de Orientação a Objetos, organizando código em classes e objetos que interagem entre si.",
    concepts: [
      { term: "Classe", definition: "Modelo ou molde para criar objetos. Define atributos (características) e métodos (comportamentos) que os objetos terão." },
      { term: "Objeto", definition: "Instância de uma classe. É uma entidade concreta criada a partir do molde da classe, com valores específicos para seus atributos." },
      { term: "Herança", definition: "Mecanismo que permite criar uma nova classe baseada em uma classe existente, herdando seus atributos e métodos." },
      { term: "Polimorfismo", definition: "Capacidade de objetos de diferentes classes responderem de forma diferente à mesma mensagem ou método." },
      { term: "Encapsulamento", definition: "Ocultação dos detalhes internos de implementação de um objeto, expondo apenas uma interface pública." },
      { term: "Abstração", definition: "Processo de simplificar sistemas complexos, focando nos aspectos relevantes e ocultando detalhes desnecessários." },
      { term: "Interface", definition: "Contrato que define quais métodos uma classe deve implementar, sem definir como serão implementados." },
      { term: "Construtor", definition: "Método especial chamado automaticamente quando um objeto é criado, usado para inicializar seus atributos." },
      { term: "Destruidor", definition: "Método especial chamado quando um objeto é destruído, usado para liberar recursos alocados." },
      { term: "Atributo", definition: "Variável que armazena dados dentro de uma classe, representando características do objeto." },
      { term: "Método", definition: "Função definida dentro de uma classe que descreve comportamentos ou ações que o objeto pode realizar." }
    ]
  },
  "frameworks": {
    summary: "Conjuntos de ferramentas e bibliotecas pré-construídas que facilitam o desenvolvimento de software, fornecendo uma estrutura base para construir aplicações.",
    concepts: [
      { term: "Framework", definition: "Estrutura de código reutilizável que fornece funcionalidades comuns, permitindo que desenvolvedores foquem na lógica específica da aplicação." },
      { term: "Biblioteca", definition: "Conjunto de funções e classes reutilizáveis que podem ser chamadas pelo código da aplicação quando necessário." },
      { term: "MVC (Model-View-Controller)", definition: "Padrão arquitetônico que separa a aplicação em três camadas: Model (dados), View (interface) e Controller (lógica de controle)." },
      { term: "Spring Boot", definition: "Framework Java que simplifica a criação de aplicações standalone, com configuração automática e servidor embutido." },
      { term: "React", definition: "Biblioteca JavaScript para construção de interfaces de usuário, baseada em componentes reutilizáveis e virtual DOM." },
      { term: "Angular", definition: "Framework TypeScript para desenvolvimento de aplicações web, com arquitetura baseada em componentes e injeção de dependência." },
      { term: "Vue.js", definition: "Framework JavaScript progressivo para construção de interfaces de usuário, conhecido por sua simplicidade e flexibilidade." },
      { term: "Django", definition: "Framework Python para desenvolvimento web, seguindo o padrão MTV (Model-Template-View) com ORM integrado." },
      { term: "Flask", definition: "Microframework Python para desenvolvimento web, minimalista e flexível, ideal para APIs e aplicações pequenas." },
      { term: "ORM (Object-Relational Mapping)", definition: "Técnica que mapeia objetos de programação para tabelas de banco de dados, facilitando a manipulação de dados." },
      { term: "Dependência", definition: "Biblioteca ou framework externo que uma aplicação precisa para funcionar corretamente." }
    ]
  },
  "governanca-ti": {
    summary: "Conjunto de práticas e processos que garantem que a TI suporte e agregue valor aos objetivos estratégicos da organização.",
    concepts: [
      { term: "Governança de TI", definition: "Sistema pelo qual a TI é dirigida, monitorada e controlada, alinhando-a com os objetivos do negócio." },
      { term: "COBIT", definition: "Framework de governança e gestão de TI desenvolvido pela ISACA, oferecendo boas práticas para gestão de TI." },
      { term: "ITIL", definition: "Biblioteca de infraestrutura de TI que descreve boas práticas para gerenciamento de serviços de TI." },
      { term: "ISO 27001", definition: "Padrão internacional para sistemas de gestão de segurança da informação, definindo requisitos para proteção de dados." },
      { term: "SLA (Service Level Agreement)", definition: "Acordo formal entre prestador de serviço e cliente que define níveis de serviço esperados." },
      { term: "KPI (Key Performance Indicator)", definition: "Indicador-chave de desempenho usado para medir o sucesso de uma organização ou atividade específica." },
      { term: "Risco de TI", definition: "Probabilidade de um evento adverso ocorrer que possa impactar negativamente os ativos de informação da organização." },
      { term: "Compliance", definition: "Conformidade com leis, regulamentos, políticas e padrões aplicáveis às operações da organização." },
      { term: "Auditoria de TI", definition: "Processo sistemático de avaliação dos controles, processos e governança de TI para garantir conformidade e eficácia." },
      { term: "Gestão de Ativos", definition: "Processo de rastreamento e gerenciamento de todos os ativos de TI da organização ao longo de seu ciclo de vida." },
      { term: "Continuidade de Negócios", definition: "Capacidade de uma organização manter operações essenciais durante e após um desastre ou interrupção." }
    ]
  },
  "programacao-web": {
    summary: "Desenvolvimento de aplicações que funcionam na internet ou intranets, utilizando tecnologias como HTML, CSS e JavaScript para criar interfaces e lógica de negócios.",
    concepts: [
      { term: "HTML", definition: "Linguagem de marcação para estruturar conteúdo web, definindo elementos como cabeçalhos, parágrafos, links e imagens." },
      { term: "CSS", definition: "Linguagem de folhas de estilo para definir a apresentação visual de documentos HTML, incluindo cores, layouts e fontes." },
      { term: "JavaScript", definition: "Linguagem de programação que adiciona interatividade às páginas web, permitindo manipulação do DOM e comunicação com servidores." },
      { term: "DOM (Document Object Model)", definition: "Representação em árvore da estrutura de um documento HTML/XML, que pode ser manipulada via JavaScript." },
      { term: "API (Application Programming Interface)", definition: "Conjunto de definições e protocolos que permite a comunicação entre diferentes sistemas ou componentes de software." },
      { term: "REST (Representational State Transfer)", definition: "Estilo arquitetônico para sistemas distribuídos, baseado em recursos identificados por URLs e operações HTTP." },
      { term: "HTTP/HTTPS", definition: "Protocolo de comunicação web (HyperText Transfer Protocol), com 'S' indicando versão segura com criptografia." },
      { term: "Frontend", definition: "Parte da aplicação que interage diretamente com o usuário, incluindo interface visual e lógica de apresentação." },
      { term: "Backend", definition: "Parte da aplicação que processa dados, gerencia banco de dados e executa lógica de negócios no servidor." },
      { term: "Responsividade", definition: "Capacidade de uma página web se adaptar automaticamente a diferentes tamanhos de tela e dispositivos." },
      { term: "SPA (Single Page Application)", definition: "Aplicação web que carrega uma única página HTML e atualiza dinamicamente o conteúdo conforme o usuário interage." },
      { term: "WebSocket", definition: "Protocolo de comunicação bidirecional que permite conexão persistente entre cliente e servidor para tempo real." }
    ]
  },
  "arquitetura-computadores": {
    summary: "Estudo da estrutura e organização dos componentes de um computador, incluindo processador, memória, entrada/saída e barramentos.",
    concepts: [
      { term: "CPU (Central Processing Unit)", definition: "Unidade central de processamento, o 'cérebro' do computador que executa instruções e processa dados." },
      { term: "ALU (Arithmetic Logic Unit)", definition: "Unidade lógica aritmética que realiza operações matemáticas e lógicas dentro da CPU." },
      { term: "Registrador", definition: "Pequena memória de alta velocidade dentro da CPU usada para armazenar dados temporários durante o processamento." },
      { term: "Barramento", definition: "Sistema de comunicação que transfere dados entre componentes do computador (CPU, memória, dispositivos)." },
      { term: "Memória RAM", definition: "Memória de acesso aleatório volátil, usada para armazenar dados e programas em uso pelo processador." },
      { term: "Memória ROM", definition: "Memória de leitura apenas não-volátil, contendo instruções essenciais para inicialização do sistema." },
      { term: "Cache", definition: "Memória de alta velocidade que armazena dados frequentemente acessados para reduzir tempo de acesso." },
      { term: "Pipeline", definition: "Técnica que permite executar múltiplas instruções simultaneamente em diferentes estágios de processamento." },
      { term: "Interrupção", definition: "Sinal que pausa a execução normal da CPU para tratar eventos externos ou internos prioritários." },
      { term: "DMA (Direct Memory Access)", definition: "Mecanismo que permite dispositivos de E/S acessar memória diretamente, sem intervenção da CPU." },
      { term: "ISA (Instruction Set Architecture)", definition: "Conjunto de instruções que uma CPU pode executar, definindo a interface entre hardware e software." },
      { term: "Ciclo de Instrução", definition: "Processo de buscar, decodificar, executar e armazenar resultados de uma instrução pelo processador." }
    ]
  }
};

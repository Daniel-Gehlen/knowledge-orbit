export const flashcards = {
  "algoritmos": [
    { q: "O que é um algoritmo?", a: "Uma sequência finita de passos bem definidos para resolver um problema." },
    { q: "O que é uma variável?", a: "Um espaço na memória rotulado para armazenar dados." },
    { q: "Qual a função do comando 'if'?", a: "Executar um bloco de código baseado em uma condição booleana." },
    { q: "Quais são as formas de representação de algoritmos?", a: "Descrição narrativa, fluxograma e pseudocódigo." },
    { q: "O que é um fluxograma?", a: "Representação gráfica de um algoritmo usando formas geométricas e flechas que indicam o fluxo de execução." },
    { q: "O que é um pseudocódigo?", a: "Uma forma de escrever algoritmos usando português estruturado, semelhante à forma como os programas são escritos." },
    { q: "Quais são os componentes básicos de um algoritmo?", a: "Entrada, processamento e saída." },
    { q: "Quais são as regras para nomear variáveis?", a: "Identificação única, nomes significativos, caracteres válidos (números, letras, underline), primeiro caractere deve ser letra, não pode usar palavras reservadas." },
    { q: "O que é a estrutura condicional if-else?", a: "Permite executar um bloco de código se a condição for verdadeira e outro bloco se for falsa." },
    { q: "O que é a estrutura switch-case?", a: "Permite escolher entre múltiplas opções baseadas no valor de uma variável, usando constantes para comparação." },
    { q: "O que é uma estrutura condicional encadeada?", a: "É quando múltiplas estruturas if-else são usadas em sequência para verificar várias condições." },
    { q: "O que é a estrutura de repetição while?", a: "Executa comandos repetidamente enquanto uma condição verdadeira for verificada; só para quando a condição se tornar falsa." },
    { q: "O que é a estrutura de repetição do-while?", a: "Executa os comandos primeiro e depois analisa a condição no final do laço; garante pelo menos uma execução." },
    { q: "O que é a estrutura de repetição for?", a: "Repete uma informação por um número fixo de vezes, com inicialização, condição final e incremento definidos." },
    { q: "O que é um contador?", a: "Variável utilizada para controlar as repetições, podendo ser incrementada ou decrementada." },
    { q: "O que é um acumulador?", a: "Variável que soma as entradas de dados de cada iteração da repetição, gerando um somatório." },
    { q: "O que é um vetor?", a: "Tipo especial de variável que armazena diversos valores ao mesmo tempo usando um mesmo endereço na memória. Sintaxe: tipo variavel[n]." },
    { q: "O que é uma matriz?", a: "Arranjo de duas ou mais dimensões; todos os elementos são do mesmo tipo. Sintaxe: tipo variável[m][n]." },
    { q: "Qual a regra sobre índices em variáveis compostas?", a: "O índice sempre começa por zero; em uma matriz, o primeiro espaço é sempre (0,0)." },
    { q: "É obrigatório ocupar todas as posições de um vetor ou matriz?", a: "Não, é possível declarar um vetor ou matriz com mais posições do que serão utilizadas." },
    { q: "O que é uma função?", a: "Um trecho de código escrito para resolver um subproblema, dividindo a complexidade de um problema maior e evitando repetição de código." },
    { q: "Quais são os componentes obrigatórios de uma função?", a: "Tipo de retorno (obrigatório, indica qual o tipo de valor a função retornará) e nome (obrigatório, identifica a função)." },
    { q: "O que são parâmetros de uma função?", a: "São opcionais e permitem passar valores para a função; quando o tipo de retorno não é void, é obrigatório usar retorno." },
    { q: "O que é um ponteiro?", a: "Um tipo especial de variável que armazena um endereço de memória. Usa-se o asterisco (*) para criação e o 'e comercial' (&) para acessar o endereço." },
    { q: "Como funciona a função malloc()?", a: "Aloca memória dinamicamente. Exemplo: int *memoria = malloc(100); Retorna NULL ou um ponteiro genérico." },
    { q: "O que é escopo de variáveis?", a: "Define onde uma variável pode ser 'enxergada'. Variáveis locais são visíveis apenas dentro da função; variáveis globais são visíveis em todo o programa." },
    { q: "O que é passagem de valor?", a: "A função cria variáveis locais automaticamente para armazenar os valores passados; após a execução, essas variáveis são liberadas." },
    { q: "O que é passagem por referência?", a: "Usa ponteiro e endereço de memória; não cria cópia dos argumentos, a função trabalha diretamente com os valores originais." },
    { q: "O que é uma função recursiva?", a: "Uma função que é invocada dentro dela mesma. Resolve um problema dividindo-o em subproblemas mais simples." },
    { q: "Quais são os requisitos para uma função recursiva?", a: "Ter um ponto de parada, variáveis na memória de trabalho e variáveis independentes." },
    { q: "O que é o fatorial?", a: "O fatorial de um número N consiste em multiplicações sucessivas até que N seja igual ao valor unitário. Exemplo: 5! = 5×4×3×2×1 = 120." },
    { q: "O que é a sequência de Fibonacci?", a: "Uma sequência onde cada número é a soma dos dois anteriores. O n-ésimo elemento é calculado recursivamente." }
  ],
  "engenharia-software": [
    { q: "O que é o Manifesto Ágil?", a: "Um conjunto de princípios para o desenvolvimento ágil de software." },
    { q: "Qual o foco do Scrum?", a: "Trabalho iterativo e incremental através de Sprints." }
  ],
  "linguagem-programacao": [
    { q: "O que é uma lista em Python?", a: "Uma estrutura de dados mutável e ordenada." },
    { q: "O que faz o método 'append'?", a: "Adiciona um item ao final de uma lista." },
    { q: "Qual a estrutura básica de um programa em C?", a: "Início do programa, definição das variáveis, instrução de leitura dos dados, instrução do formato de escrita, demais instruções e funções, fim do programa." },
    { q: "O que são bibliotecas em C?", a: "Conjuntos de funções pré-definidas que são incluídas no início do programa. Exemplo: stdio.h para funções de entrada e saída." },
    { q: "Qual a função main() em C?", a: "É o ponto de início da execução de um programa em C." },
    { q: "Quais são os tipos de dados básicos em C?", a: "Inteiro (int), Real (float) e Caractere (char)." },
    { q: "O que são palavras reservadas?", a: "Palavras que têm significado especial na linguagem C e não podem ser usadas como nomes de variáveis." },
    { q: "Como funciona o comando switch em C?", a: "Avalia uma variável e executa o bloco de código correspondente ao case que coincide com o valor; usa break para sair e default para caso não haja correspondência." },
    { q: "Como é a sintaxe do comando for em C?", a: "for (inicialização; condição final; incremento) { comandos; }" },
    { q: "Como é a sintaxe do comando while em C?", a: "while (condição) { comandos; }" },
    { q: "Como é a sintaxe do comando do-while em C?", a: "do { comandos; } while (condição);" },
    { q: "Como declarar uma função em C?", a: "tipo_retorno nome_função(parâmetros) { comandos; return valor; }" },
    { q: "Como declarar um ponteiro em C?", a: "tipo *nome_do_ponteiro; Exemplo: int *idade;" },
    { q: "Como alocar memória dinamicamente em C?", a: "Usando a função malloc(): tipo *ponteiro = malloc(tamanho_em_bytes);" }
  ],
  "logica-matematica": [
    { q: "O que é uma proposição?", a: "Uma oração declarativa que pode ser classificada como verdadeira ou falsa." },
    { q: "O que é uma Tabela Verdade?", a: "Um dispositivo usado para determinar o valor lógico de uma proposição composta." },
    { q: "Quais são os tipos de operadores em C?", a: "Operadores aritméticos (+, -, *, /, %), operadores de atribuição (=), operadores relacionais (==, !=, >, <, >=, <=) e operadores lógicos (&&, ||, !)." },
    { q: "O que faz o comando printf?", a: "Comando de saída de dados que envia informações, mensagens e conteúdo de variáveis para o usuário visualizá-las." },
    { q: "O que faz o comando scanf?", a: "Comando de entrada de dados que transfere as informações dos usuários para variáveis do programa." }
  ],
  "linguagem-oo": [
    { q: "O que é uma classe?", a: "Modelo ou molde para criar objetos. Define atributos (características) e métodos (comportamentos) que os objetos terão." },
    { q: "O que é um objeto?", a: "Instância de uma classe. É uma entidade concreta criada a partir do molde da classe, com valores específicos para seus atributos." },
    { q: "O que é herança?", a: "Mecanismo que permite criar uma nova classe baseada em uma classe existente, herdando seus atributos e métodos." },
    { q: "O que é polimorfismo?", a: "Capacidade de objetos de diferentes classes responderem de forma diferente à mesma mensagem ou método." },
    { q: "O que é encapsulamento?", a: "Ocultação dos detalhes internos de implementação de um objeto, expondo apenas uma interface pública." },
    { q: "O que é abstração?", a: "Processo de simplificar sistemas complexos, focando nos aspectos relevantes e ocultando detalhes desnecessários." },
    { q: "O que é uma interface?", a: "Contrato que define quais métodos uma classe deve implementar, sem definir como serão implementados." },
    { q: "O que é um construtor?", a: "Método especial chamado automaticamente quando um objeto é criado, usado para inicializar seus atributos." },
    { q: "O que é um atributo?", a: "Variável que armazena dados dentro de uma classe, representando características do objeto." },
    { q: "O que é um método?", a: "Função definida dentro de uma classe que descreve comportamentos ou ações que o objeto pode realizar." }
  ],
  "frameworks": [
    { q: "O que é um framework?", a: "Estrutura de código reutilizável que fornece funcionalidades comuns, permitindo que desenvolvedores foquem na lógica específica da aplicação." },
    { q: "O que é MVC?", a: "Padrão arquitetônico que separa a aplicação em três camadas: Model (dados), View (interface) e Controller (lógica de controle)." },
    { q: "O que é Spring Boot?", a: "Framework Java que simplifica a criação de aplicações standalone, com configuração automática e servidor embutido." },
    { q: "O que é React?", a: "Biblioteca JavaScript para construção de interfaces de usuário, baseada em componentes reutilizáveis e virtual DOM." },
    { q: "O que é ORM?", a: "Técnica que mapeia objetos de programação para tabelas de banco de dados, facilitando a manipulação de dados." },
    { q: "O que é uma dependência?", a: "Biblioteca ou framework externo que uma aplicação precisa para funcionar corretamente." }
  ],
  "governanca-ti": [
    { q: "O que é Governança de TI?", a: "Sistema pelo qual a TI é dirigida, monitorada e controlada, alinhando-a com os objetivos do negócio." },
    { q: "O que é COBIT?", a: "Framework de governança e gestão de TI desenvolvido pela ISACA, oferecendo boas práticas para gestão de TI." },
    { q: "O que é ITIL?", a: "Biblioteca de infraestrutura de TI que descreve boas práticas para gerenciamento de serviços de TI." },
    { q: "O que é ISO 27001?", a: "Padrão internacional para sistemas de gestão de segurança da informação, definindo requisitos para proteção de dados." },
    { q: "O que é SLA?", a: "Acordo formal entre prestador de serviço e cliente que define níveis de serviço esperados." },
    { q: "O que é KPI?", a: "Indicador-chave de desempenho usado para medir o sucesso de uma organização ou atividade específica." },
    { q: "O que é compliance?", a: "Conformidade com leis, regulamentos, políticas e padrões aplicáveis às operações da organização." },
    { q: "O que é continuidade de negócios?", a: "Capacidade de uma organização manter operações essenciais durante e após um desastre ou interrupção." }
  ],
  "programacao-web": [
    { q: "O que é HTML?", a: "Linguagem de marcação para estruturar conteúdo web, definindo elementos como cabeçalhos, parágrafos, links e imagens." },
    { q: "O que é CSS?", a: "Linguagem de folhas de estilo para definir a apresentação visual de documentos HTML, incluindo cores, layouts e fontes." },
    { q: "O que é JavaScript?", a: "Linguagem de programação que adiciona interatividade às páginas web, permitindo manipulação do DOM e comunicação com servidores." },
    { q: "O que é DOM?", a: "Representação em árvore da estrutura de um documento HTML/XML, que pode ser manipulada via JavaScript." },
    { q: "O que é API?", a: "Conjunto de definições e protocolos que permite a comunicação entre diferentes sistemas ou componentes de software." },
    { q: "O que é REST?", a: "Estilo arquitetônico para sistemas distribuídos, baseado em recursos identificados por URLs e operações HTTP." },
    { q: "O que é frontend?", a: "Parte da aplicação que interage diretamente com o usuário, incluindo interface visual e lógica de apresentação." },
    { q: "O que é backend?", a: "Parte da aplicação que processa dados, gerencia banco de dados e executa lógica de negócios no servidor." },
    { q: "O que é responsividade?", a: "Capacidade de uma página web se adaptar automaticamente a diferentes tamanhos de tela e dispositivos." },
    { q: "O que é SPA?", a: "Aplicação web que carrega uma única página HTML e atualiza dinamicamente o conteúdo conforme o usuário interage." }
  ],
  "arquitetura-computadores": [
    { q: "O que é CPU?", a: "Unidade central de processamento, o 'cérebro' do computador que executa instruções e processa dados." },
    { q: "O que é ALU?", a: "Unidade lógica aritmética que realiza operações matemáticas e lógicas dentro da CPU." },
    { q: "O que é um registrador?", a: "Pequena memória de alta velocidade dentro da CPU usada para armazenar dados temporários durante o processamento." },
    { q: "O que é um barramento?", a: "Sistema de comunicação que transfere dados entre componentes do computador (CPU, memória, dispositivos)." },
    { q: "O que é memória RAM?", a: "Memória de acesso aleatório volátil, usada para armazenar dados e programas em uso pelo processador." },
    { q: "O que é memória ROM?", a: "Memória de leitura apenas não-volátil, contendo instruções essenciais para inicialização do sistema." },
    { q: "O que é cache?", a: "Memória de alta velocidade que armazena dados frequentemente acessados para reduzir tempo de acesso." },
    { q: "O que é pipeline?", a: "Técnica que permite executar múltiplas instruções simultaneamente em diferentes estágios de processamento." },
    { q: "O que é interrupção?", a: "Sinal que pausa a execução normal da CPU para tratar eventos externos ou internos prioritários." },
    { q: "O que é DMA?", a: "Mecanismo que permite dispositivos de E/S acessar memória diretamente, sem intervenção da CPU." }
  ],
  "analise-oo": [
    { q: "O que é um Diagrama de Classe?", a: "Mostra a estrutura do sistema, os tipos de objetos e como eles se relacionam." },
    { q: "O que é UML?", a: "Linguagem de Modelagem Unificada, um padrão visual para documentar sistemas." },
    { q: "O que é um Caso de Uso?", a: "Descrição de como um usuário interage com o sistema para atingir um objetivo." }
  ],
  "redes-computadores": [
    { q: "O que é o protocolo TCP/IP?", a: "O conjunto de regras que permite que a internet funcione globalmente." },
    { q: "O que é um endereço IP?", a: "O 'número de identificação' único de cada aparelho conectado a uma rede." },
    { q: "O que é um roteador?", a: "O dispositivo que decide qual o melhor caminho para os dados viajarem até o destino." }
  ],
  "seguranca-auditoria": [
    { q: "O que é criptografia?", a: "Técnica de embaralhar as informações para que só quem tem a 'chave' consiga ler." },
    { q: "O que é um firewall?", a: "Uma barreira de segurança que monitora o tráfego de rede e bloqueia o que for suspeito." },
    { q: "O que é uma vulnerabilidade?", a: "Uma fraqueza no sistema que pode ser explorada por um invasor." }
  ]
};

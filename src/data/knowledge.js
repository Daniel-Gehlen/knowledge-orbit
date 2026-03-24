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
      { term: "Sequência de Fibonacci", definition: "Uma sequência onde cada número é a soma dos dois anteriores. O n-ésimo elemento é calculado recursivamente: F(n) = F(n-1) + F(n-2)." }
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
  }
};

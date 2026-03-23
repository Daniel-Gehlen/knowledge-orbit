export const knowledge = {
  "algoritmos": {
    summary: "Algoritmos são sequências de passos finitos e bem definidos para resolver problemas. Imagine como uma receita de bolo: você segue uma ordem lógica para chegar ao resultado final. Um algoritmo sempre tem três componentes básicos: entrada (dados que chegam), processamento (o que fazemos com eles) e saída (o resultado final).",
    concepts: [
      { term: "Variável", definition: "Um espaço na memória com um nome, usado para guardar informações que podem mudar durante a execução. Pense nela como uma caixa rotulada onde você coloca dados." },
      { term: "Descrição Narrativa", definition: "Forma de representar um algoritmo usando linguagem natural, como uma receita de bolo. É simples de entender, mas pode ser imprecisa." },
      { term: "Fluxograma", definition: "Representação gráfica de um algoritmo usando formas geométricas (retângulos, losangos, etc.) conectadas por flechas que mostram o fluxo de execução." },
      { term: "Pseudocódigo", definition: "Forma de escrever algoritmos usando português estruturado, semelhante à sintaxe de programação. É um meio-termo entre a linguagem natural e o código real." },
      { term: "Tipos de Dados", definition: "Classificações que especificam as características dos dados: inteiro (números sem casa decimal), real (números com casa decimal), caractere (letras e símbolos) e lógico (verdadeiro ou falso)." },
      { term: "Regras para Variáveis", definition: "Nomes devem ser únicos e significativos, começar com letra, usar apenas letras, números e underline, e não podem ser palavras reservadas da linguagem." }
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
      { term: "Comandos de Entrada/Saída", definition: "printf() para mostrar dados na tela e scanf() para ler dados do teclado. Usam especificadores de formato como %d para inteiros e %f para decimais." }
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

// Módulo de Flashcards - Linguagem Orientada a Objetos
// Conteúdo extraído dos PDFs Ta1, Ta2, Ta3, Ta4
// Formato: pergunta (q) e resposta (a)

export const linguagemOo = [
  // ==================== TA1 - CONCEITOS BÁSICOS ====================
  {
    q: "O que é uma classe?",
    a: "Modelo ou molde para criar objetos. Define atributos (características) e métodos (comportamentos) que os objetos terão."
  },
  {
    q: "O que é um objeto?",
    a: "Instância de uma classe. É uma entidade concreta criada a partir do molde da classe, com valores específicos para seus atributos."
  },
  {
    q: "O que é herança?",
    a: "Mecanismo que permite criar uma nova classe baseada em uma classe existente, herdando seus atributos e métodos."
  },
  {
    q: "O que é polimorfismo?",
    a: "Capacidade de objetos de diferentes classes responderem de forma diferente à mesma mensagem ou método."
  },
  {
    q: "O que é encapsulamento?",
    a: "Ocultação dos detalhes internos de implementação de um objeto, expondo apenas uma interface pública."
  },
  {
    q: "O que é abstração?",
    a: "Processo de simplificar sistemas complexos, focando nos aspectos relevantes e ocultando detalhes desnecessários."
  },
  {
    q: "O que é uma interface?",
    a: "Contrato que define quais métodos uma classe deve implementar, sem definir como serão implementados."
  },
  {
    q: "O que é um construtor?",
    a: "Método especial chamado automaticamente quando um objeto é criado, usado para inicializar seus atributos."
  },
  {
    q: "O que é um atributo?",
    a: "Variável que armazena dados dentro de uma classe, representando características do objeto."
  },
  {
    q: "O que é um método?",
    a: "Função definida dentro de uma classe que descreve comportamentos ou ações que o objeto pode realizar."
  },
  {
    q: "O que é POO?",
    a: "Programação Orientada a Objetos - paradigma de programação que organiza código em objetos, usando classes como modelos para criar instâncias com atributos e métodos."
  },
  {
    q: "Quais são os 4 pilares da POO?",
    a: "1) Abstração; 2) Encapsulamento; 3) Herança; 4) Polimorfismo"
  },
  {
    q: "O que diferencia POO da programação procedural?",
    a: "POO foca em objetos que encapsulam dados e comportamentos. Programação procedural foca em funções e procedimentos executados em sequência."
  },
  {
    q: "O que é uma IDE?",
    a: "Integrated Development Environment - ambiente de desenvolvimento integrado que auxilia o programador com autocompletar, realce de sintaxe, depuração e refatoração de código."
  },
  {
    q: "O que é Alice?",
    a: "Ferramenta educacional que auxilia no ensino de programação OO, permitindo criar animações e jogos 3D de forma lúdica."
  },
  {
    q: "O que é Greenfoot?",
    a: "Ferramenta para desenvolvimento de jogos e simulações gráficas, ideal para programadores iniciantes em Java."
  },

  // ==================== TA2 - CONSTRUTORES E SOBRECARGA ====================
  {
    q: "O que são atributos e métodos estáticos?",
    a: "São atributos e métodos que pertencem à classe, não aos objetos. Usam a palavra-chave 'static' e podem ser acessados sem criar instâncias."
  },
  {
    q: "O que é sobrecarga (overload)?",
    a: "Conceito de polimorfismo que cria variações de um mesmo método com nomes iguais, mas com parâmetros diferentes. O compilador escolhe qual método chamar baseado nos argumentos."
  },
  {
    q: "O que é sobreposição (override)?",
    a: "Quando uma subclasse reescreve um método herdado da superclasse. Usa-se @Override para indicar que o método foi sobreposto."
  },
  {
    q: "Qual a diferença entre sobrecarga e sobreposição?",
    a: "Sobrecarga: mesmo nome, parâmetros diferentes, mesma classe. Sobreposição: mesmo nome, mesmos parâmetros, classes diferentes (pai e filha)."
  },
  {
    q: "O que são estruturas de decisão?",
    a: "Comandos que quebram a execução sequencial do código, criando bifurcações. Principais: if, if-else, switch-case, operador ternário."
  },
  {
    q: "O que são estruturas de repetição?",
    a: "Comandos que executam um bloco de código várias vezes. Principais: while, for, do-while."
  },
  {
    q: "O que fazem break e continue?",
    a: "Break: interrompe completamente o loop. Continue: pula para a próxima iteração, ignorando o resto do código para essa iteração."
  },
  {
    q: "O que são modificadores de acesso?",
    a: "Palavras-chave que controlam a visibilidade de classes, atributos e métodos: public (acesso total), private (só na própria classe), protected (mesmo pacote + subclasses), default (mesmo pacote)."
  },
  {
    q: "O que são getters e setters?",
    a: "Métodos públicos para acessar (get) e modificar (set) atributos privados. Permitem controlar como os dados são lidos e escritos."
  },
  {
    q: "O que são operadores aritméticos?",
    a: "Operadores matemáticos: + (adição), - (subtração), * (multiplicação), / (divisão), % (módulo/resto)."
  },
  {
    q: "O que são operadores relacionais?",
    a: "Operadores de comparação: == (igual), != (diferente), > (maior), < (menor), >= (maior ou igual), <= (menor ou igual)."
  },
  {
    q: "O que são operadores lógicos?",
    a: "Operadores booleanos: && (AND/e), || (OR/ou), ! (NOT/negação). Usados para combinar condições."
  },
  {
    q: "O que é o operador ternário?",
    a: "Forma simplificada de if-else. Sintaxe: condição ? valorSeVerdadeiro : valorSeFalso."
  },

  // ==================== TA3 - TRATAMENTO DE EXCEÇÕES ====================
  {
    q: "O que são exceções?",
    a: "Erros que ocorrem durante a execução do programa. Podem ser capturadas e tratadas com try-catch-finally."
  },
  {
    q: "O que é ArithmeticException?",
    a: "Exceção lançada quando ocorre erro aritmético, como divisão por zero com números inteiros."
  },
  {
    q: "O que é NullPointerException?",
    a: "Exceção lançada quando se tenta usar um objeto que é null. Exemplo: chamar métodos em referências nulas."
  },
  {
    q: "O que é NumberFormatException?",
    a: "Exceção lançada ao tentar converter uma string em número, mas a string não tem formato válido."
  },
  {
    q: "O que é IndexOutOfBoundsException?",
    a: "Exceção lançada ao tentar acessar um índice que não existe em um array, vetor ou string."
  },
  {
    q: "O que é IllegalArgumentException?",
    a: "Exceção lançada quando um método recebe um argumento inválido ou inapropriado."
  },
  {
    q: "Como funciona try-catch-finally?",
    a: "Try: bloco que pode lançar exceção. Catch: captura e trata a exceção. Finally: sempre executa, útil para fechar recursos."
  },
  {
    q: "O que é a classe Scanner?",
    a: "Classe Java para leitura de dados em tempo real do teclado. Métodos: nextInt(), nextDouble(), nextLine()."
  },
  {
    q: "O que são especificadores de formato?",
    a: "Códigos usados em funções de impressão: %d (inteiro), %f (decimal), %s (string), %c (caractere), %n (nova linha)."
  },
  {
    q: "O que são sequências de escape?",
    a: "Caracteres especiais: \n (nova linha), \t (tab), \\ (barra invertida), \" (aspas), \' (aspas simples)."
  },
  {
    q: "O que é For Each?",
    a: "Loop simplificado para iterar sobre coleções. Sintaxe: for(Tipo item : coleção) { ... }. Executa para cada item."
  },
  {
    q: "O que são argumentos variáveis (Varargs)?",
    a: "Permitem passar número variável de argumentos para um método. Usa-se '...' após o tipo. Exemplo: void somar(int... numeros)."
  },
  {
    q: "O que são interfaces em Java?",
    a: "Contratos que definem quais métodos uma classe DEVE implementar. Exemplos: Comparable, Runnable, Serializable."
  },
  {
    q: "O que é JavaFX?",
    a: "Biblioteca gráfica moderna do Java para criar interfaces gráficas (GUI). Substituiu o Swing como padrão."
  },

  // ==================== TA4 - ARRAYS E STRINGS ====================
  {
    q: "O que é um array unidimensional (vetor)?",
    a: "Estrutura que armazena múltiplos valores do mesmo tipo em linha ou coluna. Acesso por índice (começa em 0)."
  },
  {
    q: "O que é um array multidimensional (matriz)?",
    a: "Estrutura organizada em linhas e colunas (2D ou mais). Acesso por múltiplos índices."
  },
  {
    q: "Por que String é imutável em Java?",
    a: "Uma vez criada, não pode ser alterada. Qualquer modificação cria uma nova String. Garante segurança, mas pode ser ineficiente."
  },
  {
    q: "O que é StringBuilder?",
    a: "Alternativa mutável à String. Permite modificar conteúdo sem criar novos objetos. Mais eficiente para concatenações."
  },
  {
    q: "O que é StringBuffer?",
    a: "Similar ao StringBuilder, mas thread-safe (sincronizado). Use quando múltiplas threads precisam modificar a mesma string."
  },
  {
    q: "O que é String Pool?",
    a: "Área especial da memória Java onde strings literais são armazenadas e reutilizadas, economizando memória."
  },
  {
    q: "O que é um arquivo CSV?",
    a: "Comma-Separated Values - formato simples onde dados são separados por vírgulas. Cada linha é um registro."
  },
  {
    q: "O que é SQL?",
    a: "Structured Query Language - linguagem padrão para manipular bancos de dados relacionais. Comandos: SELECT, INSERT, UPDATE, DELETE."
  },
  {
    q: "O que é CRUD?",
    a: "Operações básicas de banco de dados: Create (criar), Read (ler), Update (atualizar), Delete (deletar)."
  },
  {
    q: "Como ler um arquivo de texto em Java?",
    a: "Usando classes como FileReader, BufferedReader ou Scanner. Exemplo: BufferedReader br = new BufferedReader(new FileReader('arquivo.txt'))."
  },
  {
    q: "O que é Heap?",
    a: "Área de memória onde objetos são armazenados dinamicamente. Diferente do String Pool que armazena strings literais."
  },
  {
    q: "O que é o operador new?",
    a: "Operador que cria novos objetos em memória. Chama o construtor da classe e retorna uma referência ao objeto criado."
  },
  {
    q: "O que são tipos primitivos em Java?",
    a: "Tipos básicos: int (inteiro), double (decimal), boolean (verdadeiro/falso), char (caractere), byte, short, long, float."
  },
  {
    q: "O que é autoboxing?",
    a: "Conversão automática entre tipos primitivos e suas classes wrapper. Exemplo: int → Integer, double → Double."
  }
];

// Exportação padrão para compatibilidade
export default linguagemOo;

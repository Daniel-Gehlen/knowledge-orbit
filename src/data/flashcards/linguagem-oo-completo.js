// Módulo de Flashcards - Linguagem Orientada a Objetos Completo
// Conteúdo extraído e reescrito dos PDFs Ta1, Ta2, Ta3, Ta4
// Formato: pergunta (q) e resposta (a) com linguagem acessível

export const linguagemOoCompleto = [
  // ==================== TA1 - CONCEITOS BÁSICOS ====================
  {
    q: "O que é Programação Orientada a Objetos (POO)?",
    a: "É um paradigma de programação que organiza o código em objetos (como coisas do mundo real). Em vez de apenas funções, você cria 'modelos' (classes) que representam entidades com características (atributos) e ações (métodos)."
  },
  {
    q: "O que diferencia POO da programação procedural?",
    a: "Na programação procedural, o foco é em funções e procedimentos executados em sequência. Na POO, o foco é em objetos que encapsulam dados e comportamentos, promovendo reutilização e organização melhor do código."
  },
  {
    q: "Quais são os 4 pilares fundamentais da POO?",
    a: "1) Abstração - focar no essencial; 2) Encapsulamento - esconder detalhes internos; 3) Herança - reutilizar código de classes pai; 4) Polimorfismo - mesmo método, comportamentos diferentes."
  },
  {
    q: "O que é Abstração na POO?",
    a: "É o processo de simplificar sistemas complexos, focando apenas no que é relevante. Por exemplo: um sistema de notas de alunos precisa dos dados acadêmicos, não das características físicas do aluno."
  },
  {
    q: "O que é Encapsulamento?",
    a: "É ocultar os detalhes internos de funcionamento de uma classe. Os atributos ficam protegidos (private) e só podem ser acessados via métodos públicos (getters/setters), evitando mudanças indevidas."
  },
  {
    q: "O que é Herança?",
    a: "Mecanismo que permite criar uma nova classe (filha) baseada em uma existente (pai), herdando seus atributos e métodos. A classe filha pode adicionar novas características ou modificar as herdadas."
  },
  {
    q: "O que é Polimorfismo?",
    a: "Capacidade de objetos de diferentes classes responderem de forma diferente à mesma mensagem. Exemplo: método 'abrirConexao()' funciona diferente para Oracle e PostgreSQL, mas tem o mesmo nome."
  },
  {
    q: "O que é uma Classe?",
    a: "É um modelo ou molde para criar objetos. Define quais atributos (características) e métodos (comportamentos) os objetos criados a partir dela terão. Pense como a planta de uma casa."
  },
  {
    q: "O que é um Objeto?",
    a: "É uma instância concreta de uma classe. Se Classe é a planta, Objeto é a casa construída. Cada objeto tem seus próprios valores para os atributos definidos na classe."
  },
  {
    q: "O que são Atributos?",
    a: "São variáveis dentro de uma classe que representam características do objeto. Exemplo: na classe 'Carro', atributos seriam marca, modelo, cor, combustível."
  },
  {
    q: "O que são Métodos?",
    a: "São funções dentro de uma classe que definem comportamentos ou ações que o objeto pode realizar. Exemplo: na classe 'Carro', métodos seriam ligar(), acelerar(), frear()."
  },

  // ==================== TA2 - CONSTRUTORES E SOBRECARGA ====================
  {
    q: "O que é um Construtor?",
    a: "É um método especial chamado automaticamente quando um objeto é criado com 'new'. Tem o mesmo nome da classe, não tem retorno (nem void) e serve para inicializar os atributos do objeto."
  },
  {
    q: "O que é Sobrecarga (Overload)?",
    a: "É criar múltiplos métodos com o mesmo nome na mesma classe, mas com parâmetros diferentes. O Java escolhe qual método chamar baseado nos argumentos passados. Exemplo: calcularArea(lado) e calcularArea(largura, altura)."
  },
  {
    q: "O que é Sobreposição (Override)?",
    a: "É quando uma classe filha reescreve um método herdado da classe pai, dando a ele uma implementação diferente. Usa-se a annotation @Override para indicar isso."
  },
  {
    q: "Qual a diferença entre Sobrecarga e Sobreposição?",
    a: "Sobrecarga: mesmo nome, parâmetros diferentes, mesma classe. Sobreposição: mesmo nome, mesmos parâmetros, classes diferentes (pai e filha). Sobrecarga é compilação, Sobreposição é execução."
  },
  {
    q: "O que são Estruturas de Decisão?",
    a: "São comandos que quebram a execução sequencial do código, criando bifurcações. As principais são: if (se), if-else (se-senão), switch-case (seleção múltipla) e operador ternário."
  },
  {
    q: "O que são Estruturas de Repetição?",
    a: "São comandos que executam um bloco de código várias vezes. As principais são: while (enquanto condição for verdadeira), for (para cada iteração), do-while (executa pelo menos uma vez)."
  },
  {
    q: "O que fazem break e continue?",
    a: "Break: interrompe completamente o loop. Continue: pula para a próxima iteração do loop, ignorando o resto do código dentro do loop para essa iteração específica."
  },
  {
    q: "O que são modificadores de acesso?",
    a: "São palavras-chave que controlam a visibilidade de classes, atributos e métodos. Principais: public (acesso total), private (só na própria classe), protected (mesmo pacote + subclasses), default (mesmo pacote)."
  },
  {
    q: "O que são getters e setters?",
    a: "São métodos públicos para acessar (get) e modificar (set) atributos privados. Permitem controlar como os dados são lidos e escritos, validando valores antes de alterar."
  },

  // ==================== TA3 - TRATAMENTO DE EXCEÇÕES ====================
  {
    q: "O que são Exceções?",
    a: "São erros que ocorrem durante a execução do programa que quebram o fluxo normal. Em vez de travar, você pode 'capturar' e tratar esses erros usando try-catch-finally."
  },
  {
    q: "O que é ArithmeticException?",
    a: "Exceção lançada quando ocorre um erro aritmético, como divisão por zero com números inteiros. Exemplo: int resultado = 10 / 0; lança essa exceção."
  },
  {
    q: "O que é NullPointerException?",
    a: "Exceção lançada quando se tenta usar um objeto que é null. Exemplo: String s = null; s.length(); - não se pode chamar métodos em referências nulas."
  },
  {
    q: "O que é NumberFormatException?",
    a: "Exceção lançada ao tentar converter uma string em número, mas a string não tem formato válido. Exemplo: Integer.parseInt('abc') lança essa exceção."
  },
  {
    q: "O que é IndexOutOfBoundsException?",
    a: "Exceção lançada ao tentar acessar um índice que não existe em um array, vetor ou string. Exemplo: array[10] quando o array só tem 5 posições."
  },
  {
    q: "O que é IllegalArgumentException?",
    a: "Exceção lançada quando um método recebe um argumento inválido ou inapropriado. É uma forma de validar parâmetros de entrada."
  },
  {
    q: "Como funciona try-catch-finally?",
    a: "Try: bloco de código que pode lançar exceção. Catch: captura e trata a exceção. Finally: sempre executa, com ou sem erro, útil para fechar recursos como conexões."
  },
  {
    q: "O que é a classe Scanner?",
    a: "Classe Java para leitura de dados em tempo real do teclado. Fornece métodos como nextInt(), nextDouble(), nextLine() para ler diferentes tipos de dados do usuário."
  },
  {
    q: "O que são Especificadores de Formato?",
    a: "São códigos usados em funções de impressão para formatar saídas. Exemplos: %d (inteiro), %f (decimal), %s (string), %c (caractere), %n (nova linha)."
  },
  {
    q: "O que são Interfaces em Java?",
    a: "São contratos que definem quais métodos uma classe DEVE implementar, sem dizer COM implementar. Exemplos: Comparable (ordenação), Runnable (tarefas), Serializable (persistência)."
  },
  {
    q: "O que é JavaFX?",
    a: "É a biblioteca gráfica moderna do Java para criar interfaces gráficas (GUI). Substituiu o Swing como padrão, oferecendo componentes visuais modernos e suporte a CSS."
  },

  // ==================== TA4 - ARRAYS E STRINGS ====================
  {
    q: "O que é um Array Unidimensional (Vetor)?",
    a: "É uma estrutura que armazena múltiplos valores do mesmo tipo em uma linha ou coluna. Acesso por índice (começa em 0). Exemplo: int[] notas = {8, 7, 9};"
  },
  {
    q: "O que é um Array Multidimensional (Matriz)?",
    a: "É uma estrutura organizada em linhas e colunas (2D ou mais). Acesso por múltiplos índices. Exemplo: int[][] tabela = new int[3][4]; // 3 linhas, 4 colunas."
  },
  {
    q: "Por que String é imutável em Java?",
    a: "Uma vez criada, uma String não pode ser alterada. Qualquer modificação cria uma nova String na memória. Isso garante segurança, mas pode ser ineficiente para muitas alterações."
  },
  {
    q: "O que é StringBuilder?",
    a: "É uma alternativa mutável à String. Permite modificar o conteúdo sem criar novos objetos, sendo mais eficiente para concatenações frequentes. Não é thread-safe."
  },
  {
    q: "O que é StringBuffer?",
    a: "É similar ao StringBuilder, mas é thread-safe (sincronizado). Use quando múltiplas threads precisam modificar a mesma string simultaneamente."
  },
  {
    q: "O que é String Pool?",
    a: "É uma área especial da memória Java onde strings literais são armazenadas e reutilizadas. Quando você escreve 'Olá', o Java pode reutilizar uma string 'Olá' já existente, economizando memória."
  },
  {
    q: "O que é CRUD?",
    a: "São as 4 operações básicas de banco de dados: Create (criar dados), Read (ler/consultar dados), Update (atualizar dados), Delete (deletar dados)."
  },
  {
    q: "O que é SQL?",
    a: "Structured Query Language - linguagem padrão para manipular bancos de dados relacionais. Comandos principais: SELECT (ler), INSERT (criar), UPDATE (atualizar), DELETE (deletar)."
  },
  {
    q: "Como ler um arquivo de texto em Java?",
    a: "Usando classes como FileReader, BufferedReader ou Scanner. Exemplo: BufferedReader br = new BufferedReader(new FileReader('arquivo.txt')); String linha = br.readLine();"
  },
  {
    q: "O que é um arquivo CSV?",
    a: "Comma-Separated Values - formato simples onde dados são separados por vírgulas. Cada linha é um registro, cada vírgula separa um campo. Fácil de importar/exportar entre sistemas."
  },
  {
    q: "O que são argumentos variáveis (Varargs)?",
    a: "Permitem passar número variável de argumentos para um método. Usa-se '...' após o tipo. Exemplo: void somar(int... numeros) pode receber somar(1), somar(1,2), somar(1,2,3,4)."
  },
  {
    q: "O que é o comando For Each?",
    a: "É um loop simplificado para iterar sobre coleções (arrays, listas). Sintaxe: for(Tipo item : coleção) { ... }. Executa para cada item da coleção, sem precisar de índice."
  }
];

// Exportação padrão para compatibilidade
export default linguagemOoCompleto;

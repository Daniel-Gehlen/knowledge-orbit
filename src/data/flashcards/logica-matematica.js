export const logicaMatematica = [
  // ==================== FUNDAMENTOS DA LÓGICA ====================
  { q: "O que é Lógica?", a: "É a ciência que estuda os argumentos, suas premissas e conclusões, os métodos e princípios que possibilitam a distinção entre argumentos válidos e não válidos. Também pode ser definida como a arte de pensar corretamente." },
  { q: "O que é uma proposição?", a: "É um enunciado, uma frase declarativa que pode ser classificado como verdadeiro ou falso, jamais ambas ao mesmo tempo. É uma classificação binária: V ou F (1 ou 0)." },
  { q: "O que são premissas?", a: "São proposições utilizadas como base para um raciocínio. Podem ser consideradas as proposições do silogismo." },
  { q: "O que é um argumento?", a: "É um conjunto de enunciados que se relacionam uns com os outros, compostos por hipóteses e conclusão." },
  { q: "O que é um silogismo?", a: "É um raciocínio dedutivo constituído de proposições das quais se infere uma conclusão. É um argumento mediado que fornece conhecimento de uma coisa a partir de outras." },
  { q: "O que é uma falácia?", a: "É um argumento que logicamente está incorreto, ou seja, uma inferência inválida." },
  { q: "O que é inferência?", a: "É o processo que permite chegar a conclusões a partir de premissas, constituindo a argumentação lógica. Pode ser de dois tipos: indutiva e dedutiva." },
  { q: "O que é Lógica Indutiva?", a: "Parte da experiência com verdades e fatos particulares na busca de uma conclusão geral. Exemplo: O Sol nasceu todas as manhãs até hoje. Logo, é provável que nasça amanhã." },
  { q: "O que é Lógica Dedutiva?", a: "Parte de premissas gerais para concluir verdades específicas e particulares. Exemplo: Todo homem é mortal. Sócrates é um homem. Logo, Sócrates é mortal." },
  { q: "O que é Lógica Formal?", a: "É a lógica que analisa e representa a forma de qualquer argumento para que possa ser considerado válido. Lida com relações entre premissas e conclusões, independentemente se a premissa é verdadeira ou falsa." },
  { q: "Quais são os princípios fundamentais da Lógica Clássica?", a: "1) Princípio da Identidade: uma proposição é igual a si mesma; 2) Princípio da Não-Contradição: uma proposição não pode ser verdadeira e falsa ao mesmo tempo; 3) Princípio do Terceiro Excluído: uma proposição ou é verdadeira ou é falsa." },
  { q: "O que é o Princípio da Identidade?", a: "Garante que uma proposição é igual a si mesma. Uma proposição verdadeira é verdadeira e uma proposição falsa é falsa." },
  { q: "O que é o Princípio da Não-Contradição?", a: "Uma proposição não pode ser verdadeira e falsa ao mesmo tempo." },
  { q: "O que é o Princípio do Terceiro Excluído?", a: "Uma proposição ou é verdadeira ou é falsa; não existe uma terceira alternativa." },

  // ==================== EVOLUÇÃO DA LÓGICA ====================
  { q: "Quem foi George Boole?", a: "Foi o inventor da Álgebra Booleana, o primeiro sistema totalmente detalhado que lida com a lógica como cálculo." },
  { q: "O que é Álgebra Booleana?", a: "É um sistema que utiliza apenas dois números (0 e 1), significando falso e verdadeiro respectivamente, e por meio de propriedades essenciais dos operadores lógicos oferece uma estrutura para lidar com proposições." },
  { q: "Na Álgebra Booleana, o que representa 0 e 1?", a: "0 representa falso e 1 representa verdadeiro." },
  { q: "Na Álgebra Booleana, como funciona a adição?", a: "A adição é associada ao conectivo OU. Exemplo: (A) + (B) = 1 + 0 = 1 (Verdadeira)." },
  { q: "Na Álgebra Booleana, como funciona a multiplicação?", a: "A multiplicação é associada ao conectivo E. Exemplo: (A) x (B) = 1 x 0 = 0 (Falsa)." },
  { q: "Quem foi Georg Cantor?", a: "Foi o idealizador da Teoria de Conjuntos, que serviu como estrutura de linguagem para a lógica formal e alicerce da Matemática Moderna." },
  { q: "O que é Matemática Discreta?", a: "É um ramo da matemática voltado ao estudo de objetos e estruturas discretas ou finitas, usada quando contamos objetos, estudamos relações entre conjuntos finitos e analisamos processos envolvendo número finito de passos." },

  // ==================== PRINCÍPIOS MATEMÁTICOS ====================
  { q: "O que é um Arranjo?", a: "É uma sequência ordenada de p elementos distintos escolhidos entre n elementos existentes. A fórmula é n!/(n-p)!." },
  { q: "O que é uma Permutação?", a: "É um caso especial de arranjo onde selecionamos exatamente n elementos para formar a sequência ordenada. A fórmula é n!." },
  { q: "O que é uma Combinação?", a: "É um subconjunto formado por p elementos distintos escolhidos entre n existentes, onde a ordem não importa. A fórmula é n!/(p!(n-p)!)." },
  { q: "O que é uma Árvore de Decisão?", a: "É uma estrutura hierárquica que representa um mapeamento de possíveis resultados de uma série de escolhas relacionadas, útil para tomada de decisões e algoritmos." },
  { q: "O que é o Princípio Multiplicativo?", a: "É um método de contagem que diz que se uma tarefa pode ser dividida em etapas, o número total de maneiras de realizar a tarefa é o produto do número de maneiras de realizar cada etapa." },

  // ==================== TEORIA DE CONJUNTOS ====================
  { q: "O que é um Conjunto?", a: "É uma coleção, um agrupamento ou um grupo de elementos que possui alguma característica em comum. Pode ser finito (ex: estados do Brasil) ou infinito (ex: números ímpares)." },
  { q: "O que é um Conjunto Unitário?", a: "É um conjunto que contém um único elemento. Exemplo: A = {5}." },
  { q: "O que é o Conjunto Vazio?", a: "É um conjunto que não possui elementos. Representado por {} ou ∅." },
  { q: "O que é o Conjunto Universo?", a: "É o conjunto ao qual pertence todos os elementos que pretendemos utilizar. Exemplo: ℕ = conjunto de todos os números inteiros não negativos." },
  { q: "O que é um Diagrama de Venn?", a: "São círculos (que podem estar intersectados) que representam os conjuntos. No interior dos círculos são listados os elementos do conjunto." },
  { q: "O que é Subconjunto?", a: "A é subconjunto de B se, e somente se, todos os elementos de A pertencerem a B. Denotado como A ⊆ B." },
  { q: "Como calcular o número de subconjuntos?", a: "O número de subconjuntos de um conjunto com n elementos é 2^n. Exemplo: conjunto com 3 elementos tem 2³ = 8 subconjuntos." },
  { q: "O que é Cardinalidade?", a: "É o número de elementos de um conjunto. Denotado por |A|. Exemplo: se A = {1,2,3}, então |A| = 3." },

  // ==================== ÁLGEBRA DE CONJUNTOS ====================
  { q: "O que é a União de conjuntos?", a: "Dados os conjuntos A e B, a união de A e B é o conjunto formado por todos os elementos que pertencem a A ou a B. Denotado por A ∪ B." },
  { q: "O que é a Intersecção de conjuntos?", a: "Dados os conjuntos A e B, a intersecção de A e B é o conjunto formado pelos elementos que pertencem a A e a B. Denotado por A ∩ B." },
  { q: "O que é a Diferença de conjuntos?", a: "Dados os conjuntos A e B, a diferença A - B é o conjunto formado pelos elementos que pertencem a A, mas não a B." },
  { q: "O que é o Complementar de um conjunto?", a: "Dados dois conjuntos A e B, o complementar de B em relação a A é o conjunto formado pelos elementos que pertencem a A e não pertencem a B." },
  { q: "O que é o Produto Cartesiano?", a: "O produto cartesiano A × B dos conjuntos A e B é formado pelos pares ordenados (a,b) com a ∈ A e b ∈ B. Note que A × B ≠ B × A." },
  { q: "O que é o método de inclusão-exclusão?", a: "É um método de contagem que consiste em: A ∪ B = A + B - A ∩ B. Usado para calcular o número de elementos na união de conjuntos." },

  // ==================== LÓGICA PROPOSICIONAL ====================
  { q: "O que é uma proposição simples?", a: "É uma proposição que contém uma única afirmação. Designadas por letras latinas minúsculas (p, q, r, s...). Exemplo: p: '12 > 2'." },
  { q: "O que é uma proposição composta?", a: "É constituída de, pelo menos, duas proposições simples ligadas por um conectivo lógico. Designadas por letras latinas maiúsculas (P, Q, R, S...)." },
  { q: "Quais são os conectivos lógicos?", a: "Os principais conectivos são: Negação (¬), Conjunção (∧ - E), Disjunção (∨ - OU), Condicional (→ - se...então) e Bicondicional (↔ - se e somente se)." },
  { q: "Como funciona a Negação?", a: "A negação de uma proposição p é denotada por ¬p. Se p é verdadeira, ¬p é falsa, e vice-versa. Exemplo: p: '2 é primo'; ¬p: '2 não é primo'." },
  { q: "Como funciona a Conjunção (E)?", a: "A conjunção p∧q é verdadeira apenas quando ambas p e q forem verdadeiras. Em todos os outros casos, o resultado é falso." },
  { q: "Como funciona a Disjunção (OU)?", a: "A disjunção p∨q é verdadeira quando pelo menos uma das proposições for verdadeira. É falsa apenas quando ambas são falsas." },
  { q: "Como funciona o Condicional (se...então)?", a: "O condicional p→q é falso apenas quando p é verdadeira e q é falsa. Nos demais casos, é verdadeiro." },
  { q: "Como funciona o Bicondicional?", a: "O bicondicional p↔q é verdadeiro quando p e q tiverem o mesmo valor lógico (ambas verdadeiras ou ambas falsas)." },
  { q: "Qual é a ordem de precedência dos conectivos?", a: "1) ¬ (negação); 2) ∧ ou ∨ (conjunção/disjunção); 3) → (condicional); 4) ↔ (bicondicional). O mais forte é a negação, o mais fraco é o bicondicional." },
  { q: "O que é uma fórmula bem-formulada (fbf)?", a: "É uma fórmula que segue as regras de sintaxe do cálculo proposicional. Uma proposição simples é uma fbf; a negação de uma fbf é uma fbf; e se p e q são fbf, então p∧q, p∨q, p→q e p↔q também são fbf." },

  // ==================== MÉTODOS DEDUTIVOS ====================
  { q: "O que é uma Tautologia?", a: "É uma proposição composta que sempre assume valor lógico verdadeiro, independentemente dos valores das proposições simples que a constituem." },
  { q: "O que é uma Contradição?", a: "É uma proposição composta que sempre assume valor lógico falso, independentemente dos valores das proposições simples que a constituem." },
  { q: "O que é uma Contingência?", a: "É uma proposição que não é tautologia nem contradição. Pode assumir tanto valores verdadeiros quanto falsos." },
  { q: "O que é Modus Ponens?", a: "É uma regra de inferência que permite, a partir de A→B e A, inferir B. Exemplo: 'Se chove, então fico em casa' e 'Choveu', logo 'Fico em casa'." },

  // ==================== TABELA VERDADE ====================
  { q: "O que é uma Tabela Verdade?", a: "É um recurso empregado na avaliação do valor lógico de uma proposição a partir dos valores lógicos das proposições que a constituem. Mostra todas as combinações possíveis de valores verdadeiros." },
  { q: "Como calcular o número de linhas de uma Tabela Verdade?", a: "O número de linhas é 2^n, onde n é o número de proposições simples. Exemplo: 2 proposições = 2² = 4 linhas." },
  { q: "Como funciona a Tabela Verdade do AND?", a: "O resultado é verdadeiro (V) apenas quando ambas as entradas são verdadeiras. Nos demais casos (VV→V, VF→F, FV→F, FF→F), o resultado é falso." },
  { q: "Como funciona a Tabela Verdade do OR?", a: "O resultado é falso (F) apenas quando ambas as entradas são falsas. Nos demais casos (VV→V, VF→V, FV→V, FF→F), o resultado é verdadeiro." },
  { q: "Como funciona a Tabela Verdade do Condicional?", a: "O resultado é falso apenas quando o antecedente é verdadeiro e o consequente é falso (VF→F). Nos demais casos, é verdadeiro." },
  { q: "Qual é a importância da Lógica na Computação?", a: "Permite o desenvolvimento de algoritmos de tomada de decisão, estruturas condicionais, validação de argumentos, circuitos lógicos e inteligência artificial." },
  { q: "O que são Circuitos Lógicos?", a: "São dispositivos que utilizam operações lógicas (E, OU, NÃO) para processar sinais binários (0 e 1), fundamentais para o funcionamento de computadores." },
  { q: "O que é Lógica Computacional?", a: "É a aplicação dos princípios da lógica formal na computação, permitindo a construção de algoritmos capazes de tomar decisões baseadas em regras lógicas." }
];

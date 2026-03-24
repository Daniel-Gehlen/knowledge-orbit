export const tabelaVerdade = [
  { q: "O que é uma Tabela Verdade?", a: "É um recurso empregado na avaliação do valor lógico de uma proposição a partir dos valores lógicos das proposições que a constituem." },
  { q: "Como calcular o número de linhas de uma Tabela Verdade?", a: "O número de linhas é igual a 2^n, onde n é o número de proposições simples envolvidas." },
  { q: "Qual é a Tabela Verdade da Negação?", a: "~V = F e ~F = V. A negação inverte o valor lógico da proposição." },
  { q: "Qual é a Tabela Verdade da Conjunção (AND)?", a: "V∧V = V; V∧F = F; F∧V = F; F∧F = F. Resultado verdadeiro apenas quando ambas são verdadeiras." },
  { q: "Qual é a Tabela Verdade da Disjunção (OR)?", a: "V∨V = V; V∨F = V; F∨V = V; F∨F = F. Resultado falso apenas quando ambas são falsas." },
  { q: "Qual é a Tabela Verdade do Condicional (→)?", a: "V→V = V; V→F = F; F→V = V; F→F = V. Resultado falso apenas quando a antecedente é verdadeira e a consequente é falsa." },
  { q: "Qual é a Tabela Verdade do Bicondicional (↔)?", a: "V↔V = V; V↔F = F; F↔V = F; F↔F = V. Resultado verdadeiro quando ambas têm o mesmo valor lógico." },
  { q: "O que é Matriz de Conectivos?", a: "É uma forma de organizar os resultados das operações lógicas, onde o centro da matriz mostra os possíveis resultados para a operação lógica." },
  { q: "Como usar Tabela Verdade para classificar clientes?", a: "Define-se proposições simples (ex: p: cliente é feminino, q: idade entre 20-30), monta-se a tabela com todas combinações e avalia-se a fórmula para cada registro." },
  { q: "O que é uma proposição composta na Tabela Verdade?", a: "É uma expressão formada por proposições simples combinadas por conectivos lógicos, cujo valor lógico depende dos valores das proposições simples." },
  { q: "Como construir uma Tabela Verdade?", a: "1) Determinar o número de linhas (2^n); 2) Observar a precedência dos conectivos; 3) Aplicar as definições das operações lógicas." },
  { q: "O que é uma expressão lógica?", a: "É uma combinação de proposições simples e conectivos lógicos que pode ser avaliada como verdadeira ou falsa." },
  { q: "Como avaliar uma fórmula lógica com Tabela Verdade?", a: "Substitui-se as proposições pelos seus valores lógicos (V ou F) e aplica-se as regras dos conectivos para obter o resultado final." },
  { q: "O que são os resultados das validações em Tabela Verdade?", a: "São classificados como: Tautologia (sempre verdadeiro), Contradição (sempre falso) ou Contingência (pode ser verdadeiro ou falso)." }
];

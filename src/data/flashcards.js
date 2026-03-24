// Flashcards organizados por módulo de conhecimento
// Cada módulo está em um arquivo separado em src/data/flashcards/

import {
  algoritmos,
  engenhariaSoftware,
  linguagemProgramacao,
  logicaMatematica,
  linguagemOo,
  frameworks,
  governancaTi,
  programacaoWeb,
  arquiteturaComputadores,
  analiseOo,
  redesComputadores,
  segurancaAuditoria
} from './flashcards/index.js';

export const flashcards = {
  "algoritmos": algoritmos,
  "engenharia-software": engenhariaSoftware,
  "linguagem-programacao": linguagemProgramacao,
  "logica-matematica": logicaMatematica,
  "linguagem-oo": linguagemOo,
  "frameworks": frameworks,
  "governanca-ti": governancaTi,
  "programacao-web": programacaoWeb,
  "arquitetura-computadores": arquiteturaComputadores,
  "analise-oo": analiseOo,
  "redes-computadores": redesComputadores,
  "seguranca-auditoria": segurancaAuditoria
};

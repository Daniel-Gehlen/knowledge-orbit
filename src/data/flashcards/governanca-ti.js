/**
 * Flashcards de Governança de Tecnologia da Informação
 * Conteúdo extraído dos PDFs Ta1, Ta2, Ta3, Ta4 do 4º semestre
 * Reescrito de forma resumida e acessível
 */

export const governancaTi = [
  // ==================== TA1 - INTRODUÇÃO A GOVERNANÇA EM TI ====================
  {
    id: "gov-ti-1",
    question: "O que é Governança Corporativa?",
    answer: "É um sistema de relacionamento entre stakeholders (acionistas, executivos, conselheiros) que envolve processos, costumes, políticas e procedimentos para administrar uma empresa."
  },
  {
    id: "gov-ti-2",
    question: "Quais são os princípios de governança?",
    answer: "1) Transparência: divulgar informações relevantes. 2) Responsabilidade corporativa: viabilidade econômica/financeira. 3) Equidade: direitos iguais para todos stakeholders. 4) Prestação de contas (accountability): demonstração clara das informações."
  },
  {
    id: "gov-ti-3",
    question: "O que é Governança de TI?",
    answer: "É um ferramental que especifica decisões e responsabilidades para melhorar o desempenho da TI, promovendo transparência, alinhamento estratégico e controle dos processos."
  },
  {
    id: "gov-ti-4",
    question: "Quais dimensões a Governança de TI deve considerar?",
    answer: "Ambiente de negócio, integração tecnológica, segurança da informação, dependência da TI com o negócio, conformidade regulatória, disponibilidade e manuseio da informação."
  },
  {
    id: "gov-ti-5",
    question: "O que são ativos que contribuem para geração de valor?",
    answer: "Ativos humanos, financeiros, físicos, de propriedade intelectual, de informação, de TI e de relacionamento."
  },
  {
    id: "gov-ti-6",
    question: "O que é a ISO/IEC 38500?",
    answer: "Define governança de TI como o sistema pelo qual o uso atual e futuro da TI são dirigidos e controlados. Inclui avaliar, direcionar e monitorar o uso da TI para dar suporte à organização."
  },
  {
    id: "gov-ti-7",
    question: "O que é um Plano Diretor de TI?",
    answer: "Contém estratégias extraídas do plano estratégico para alinhar objetivos da TI com objetivos da organização. Responde: O que será feito? Quem fará? Quando fará? Por que fará? Onde fará? Como fará? Quanto custará?"
  },
  {
    id: "gov-ti-8",
    question: "Qual é o ciclo da governança de TI?",
    answer: "Avaliar → Direcionar → Monitorar (conforme Fernandes e Abreu, 2014)."
  },
  {
    id: "gov-ti-9",
    question: "O que é Segurança da Informação?",
    answer: "É a proteção das informações contra ameaças à integridade, confidencialidade e disponibilidade, incluindo proteção contra acessos não autorizados e alterações não permitidas."
  },
  {
    id: "gov-ti-10",
    question: "O que é a família ISO/IEC 27000?",
    answer: "Conjunto de normas para Sistema de Gestão de Segurança da Informação (SGSI). ISO 27001 define requisitos, ISO 27002 fornece códigos de práticas."
  },
  {
    id: "gov-ti-11",
    question: "O que são as propriedades básicas da Segurança da Informação (ACID)?",
    answer: "Confidencialidade: somente autorizados acessam. Integridade: apenas autorizados modificam. Disponibilidade: autorizados acessam quando precisarem. Legalidade: informações geradas cumprindo a lei. Autenticidade: envolvidos são quem dizem ser."
  },
  {
    id: "gov-ti-12",
    question: "O que é o ciclo PDCA na ISO 27001?",
    answer: "Plan (estabelecer SGSI, definir escopo, diretrizes) → Do (implementar SGSI, plano de gestão de riscos) → Check (monitorar, medir eficácia, auditorias) → Act (ações preventivas/corretivas, melhorias)."
  },
  {
    id: "gov-ti-13",
    question: "Por que a Segurança da Informação impacta na Governança?",
    answer: "Governança deve comunicar práticas e resultados aos stakeholders. Segurança deve garantir divulgação segura. Elas andam juntas - a ISO 27014 tem objetivo de planejar, organizar, dirigir e controlar práticas de segurança."
  },

  // ==================== TA2 - MODELOS DE TRABALHO E FERRAMENTAS ====================
  {
    id: "gov-ti-14",
    question: "O que é COBIT (Control Objectives for Information and Related Technology)?",
    answer: "Framework para gerenciamento de melhores práticas da TI em processos e controles. Foco em alinhamento estratégico, controle de processos e criação de KPIs."
  },
  {
    id: "gov-ti-15",
    question: "Quais são os 7 critérios de requisitos de negócio do COBIT?",
    answer: "1) Eficiência 2) Efetividade 3) Confidencialidade 4) Integridade 5) Disponibilidade 6) Conformidade 7) Confiabilidade."
  },
  {
    id: "gov-ti-16",
    question: "O que são os domínios do COBIT 5?",
    answer: "Governança (5 processos: avaliar, dirigir, monitorar) e Gestão (4 domínios: APO - Alinhar/Planejar/Organizar, BAI - Construir/Adquirir/Implementar, DSS - Entregar/Serviço/Suporte, MEA - Monitorar/Avaliar/Analisar)."
  },
  {
    id: "gov-ti-17",
    question: "Quais são os resultados esperados da implementação do COBIT?",
    answer: "Alcançar objetivos estratégicos, cumprir leis e regulamentos, criar vantagem competitiva, tornar TI mais inovadora, oferecer excelência operacional, aumentar satisfação do usuário, reduzir riscos operacionais."
  },
  {
    id: "gov-ti-18",
    question: "O que é ITIL (Information Technology Infrastructure Library)?",
    answer: "Framework de gerenciamento de serviços de TI criado pelo governo britânico. Preenche lacunas do COBIT respondendo 'como fazer' as atividades."
  },
  {
    id: "gov-ti-19",
    question: "Quais são os 5 livros do ciclo de vida ITIL V3?",
    answer: "1) Estratégia de serviço 2) Desenho de serviço 3) Transição de serviço 4) Operação de serviço 5) Melhoria contínua do serviço."
  },
  {
    id: "gov-ti-20",
    question: "O que é PMBOK (Project Management Body of Knowledge)?",
    answer: "Guia do PMI com conjunto de conhecimentos em gerenciamento de projetos. Traz padronização de teorias, técnicas, métodos e regras para gestão de projetos."
  },
  {
    id: "gov-ti-21",
    question: "Quais são as 5 fases do projeto no PMBOK?",
    answer: "1) Iniciação 2) Planejamento 3) Execução 4) Monitoramento e Controle 5) Encerramento."
  },
  {
    id: "gov-ti-22",
    question: "O que é PMO (Project Management Office)?",
    answer: "Estrutura organizacional que padroniza processos de governança relacionados a projetos e facilita compartilhamento de recursos, metodologias, ferramentas e técnicas."
  },

  // ==================== TA3 - MAPEAMENTO DE RISCOS E OPORTUNIDADES ====================
  {
    id: "gov-ti-23",
    question: "O que é Gerenciamento de Riscos segundo o PMI?",
    answer: "Processo que contempla: 1) Planejar 2) Identificar 3) Analisar (R = P x I) 4) Planejar respostas 5) Monitorar riscos do projeto."
  },
  {
    id: "gov-ti-24",
    question: "Quais são os tipos de riscos?",
    answer: "1) Conhecidos: identificados e analisados 2) Desconhecidos: não identificados 3) Individuais: relacionados a atividade 4) Gerais: incerteza do projeto como um todo."
  },
  {
    id: "gov-ti-25",
    question: "O que são apetite, tolerância e limite de riscos?",
    answer: "Apetite: grau de incerteza que organização aceita. Tolerância: quantidade/volume de riscos aceitos. Limite: até que ponto o risco pode ser aceito."
  },
  {
    id: "gov-ti-26",
    question: "O que é análise SWOT?",
    answer: "Ferramenta para análise de ambientes: Pontos Fortes e Fracos (internos) e Oportunidades e Ameaças (externos). Usada em planejamento estratégico."
  },
  {
    id: "gov-ti-27",
    question: "O que é VME (Valor Monetário Esperado)?",
    answer: "VME = Pr (probabilidade) x I (impacto). Considera: Ic (custo), Ie (empenho), Icr (cronograma). Usado para análise quantitativa de riscos."
  },
  {
    id: "gov-ti-28",
    question: "Quais são as estratégias de resposta a riscos negativos (ameaças)?",
    answer: "1) Prevenir: eliminar/proteger contra ameaça 2) Transferir: passar para terceiros (seguros) 3) Mitigar: reduzir impacto 4) Aceitar: tomar atitudes apenas se ocorrer."
  },
  {
    id: "gov-ti-29",
    question: "Quais são as estratégias de resposta a riscos positivos (oportunidades)?",
    answer: "1) Explorar: garantir que oportunidade se torne realidade 2) Melhorar: ampliar possibilidade 3) Compartilhar: com terceiros 4) Aceitar: sem ações para viabilidade."
  },
  {
    id: "gov-ti-30",
    question: "O que é RISK IT?",
    answer: "Framework da ISACA que fornece visão abrangente de todos riscos relacionados ao uso de TI. Complementa COBIT - COBIT fornece meios, RISK IT fornece fins."
  },

  // ==================== TA4 - INDICADORES E MÉTRICAS DE DESEMPENHO ====================
  {
    id: "gov-ti-31",
    question: "O que é BSC (Balanced Scorecard)?",
    answer: "Modelo para definição de indicadores de desempenho com 4 perspectivas: Financeira, Clientes, Processos Internos, Aprendizado e Crescimento."
  },
  {
    id: "gov-ti-32",
    question: "Quais são as perspectivas de BSC-TI?",
    answer: "1) Contribuição para o negócio 2) Eficiência operacional 3) Usuário 4) Novas tecnologias 5) Financeira."
  },
  {
    id: "gov-ti-33",
    question: "Qual é a diferença entre Métricas e KPIs?",
    answer: "Métricas: valores que auxiliam na formação de indicadores (ex: 1.082 carros vendidos). KPIs: indicadores estratégicos (ex: vendas representam 65% do faturamento)."
  },
  {
    id: "gov-ti-34",
    question: "O que é CMMI (Capability Maturity Model Integration)?",
    answer: "Modelo de maturidade para avaliar nível de habilidade em gerenciar projetos. Foco na melhoria contínua dos processos de software."
  },
  {
    id: "gov-ti-35",
    question: "O que é OPM3 (Organizational Project Management Maturity Model)?",
    answer: "Modelo de maturidade do PMI para avaliar capacidade das empresas no gerenciamento de portfólios, programas e projetos. Alinhado ao PMBOK."
  },
  {
    id: "gov-ti-36",
    question: "Quais são as ferramentas de análise de métricas de desempenho?",
    answer: "1) Monitoramento: Zabbix, h4Nagios 2) Controle de chamado: OTRS, GLPI, Jira 3) Inventário: Kaseya 4) Produtividade: LanDesk, SystemCenter."
  }
];

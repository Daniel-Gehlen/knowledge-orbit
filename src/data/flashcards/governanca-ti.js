/**
 * Flashcards de Governança de Tecnologia da Informação
 * Conteúdo extraído dos PDFs Ta1, Ta2, Ta3, Ta4 do 4º semestre
 * Reescrito de forma resumida e acessível
 */

export const governancaTi = [
  // ==================== TA1 - INTRODUÇÃO A GOVERNANÇA EM TI ====================
  {
    id: "gov-ti-1",
    q: "O que é Governança Corporativa?",
    a: "É um sistema de relacionamento entre stakeholders (acionistas, executivos, conselheiros) que envolve processos, costumes, políticas e procedimentos para administrar uma empresa."
  },
  {
    id: "gov-ti-2",
    q: "Quais são os princípios de governança?",
    a: "1) Transparência: divulgar informações relevantes. 2) Responsabilidade corporativa: viabilidade econômica/financeira. 3) Equidade: direitos iguais para todos stakeholders. 4) Prestação de contas (accountability): demonstração clara das informações."
  },
  {
    id: "gov-ti-3",
    q: "O que é Governança de TI?",
    a: "É um ferramental que especifica decisões e responsabilidades para melhorar o desempenho da TI, promovendo transparência, alinhamento estratégico e controle dos processos."
  },
  {
    id: "gov-ti-4",
    q: "Quais dimensões a Governança de TI deve considerar?",
    a: "Ambiente de negócio, integração tecnológica, segurança da informação, dependência da TI com o negócio, conformidade regulatória, disponibilidade e manuseio da informação."
  },
  {
    id: "gov-ti-5",
    q: "O que são ativos que contribuem para geração de valor?",
    a: "Ativos humanos, financeiros, físicos, de propriedade intelectual, de informação, de TI e de relacionamento."
  },
  {
    id: "gov-ti-6",
    q: "O que é a ISO/IEC 38500?",
    a: "Define governança de TI como o sistema pelo qual o uso atual e futuro da TI são dirigidos e controlados. Inclui avaliar, direcionar e monitorar o uso da TI para dar suporte à organização."
  },
  {
    id: "gov-ti-7",
    q: "O que é um Plano Diretor de TI?",
    a: "Contém estratégias extraídas do plano estratégico para alinhar objetivos da TI com objetivos da organização. Responde: O que será feito? Quem fará? Quando fará? Por que fará? Onde fará? Como fará? Quanto custará?"
  },
  {
    id: "gov-ti-8",
    q: "Qual é o ciclo da governança de TI?",
    a: "Avaliar → Direcionar → Monitorar (conforme Fernandes e Abreu, 2014)."
  },
  {
    id: "gov-ti-9",
    q: "O que é Segurança da Informação?",
    a: "É a proteção das informações contra ameaças à integridade, confidencialidade e disponibilidade, incluindo proteção contra acessos não autorizados e alterações não permitidas."
  },
  {
    id: "gov-ti-10",
    q: "O que é a família ISO/IEC 27000?",
    a: "Conjunto de normas para Sistema de Gestão de Segurança da Informação (SGSI). ISO 27001 define requisitos, ISO 27002 fornece códigos de práticas."
  },
  {
    id: "gov-ti-11",
    q: "O que são as propriedades básicas da Segurança da Informação (ACID)?",
    a: "Confidencialidade: somente autorizados acessam. Integridade: apenas autorizados modificam. Disponibilidade: autorizados acessam quando precisarem. Legalidade: informações geradas cumprindo a lei. Autenticidade: envolvidos são quem dizem ser."
  },
  {
    id: "gov-ti-12",
    q: "O que é o ciclo PDCA na ISO 27001?",
    a: "Plan (estabelecer SGSI, definir escopo, diretrizes) → Do (implementar SGSI, plano de gestão de riscos) → Check (monitorar, medir eficácia, auditorias) → Act (ações preventivas/corretivas, melhorias)."
  },
  {
    id: "gov-ti-13",
    q: "Por que a Segurança da Informação impacta na Governança?",
    a: "Governança deve comunicar práticas e resultados aos stakeholders. Segurança deve garantir divulgação segura. Elas andam juntas - a ISO 27014 tem objetivo de planejar, organizar, dirigir e controlar práticas de segurança."
  },

  // ==================== TA2 - MODELOS DE TRABALHO E FERRAMENTAS ====================
  {
    id: "gov-ti-14",
    q: "O que é COBIT (Control Objectives for Information and Related Technology)?",
    a: "Framework para gerenciamento de melhores práticas da TI em processos e controles. Foco em alinhamento estratégico, controle de processos e criação de KPIs."
  },
  {
    id: "gov-ti-15",
    q: "Quais são os 7 critérios de requisitos de negócio do COBIT?",
    a: "1) Eficiência 2) Efetividade 3) Confidencialidade 4) Integridade 5) Disponibilidade 6) Conformidade 7) Confiabilidade."
  },
  {
    id: "gov-ti-16",
    q: "O que são os domínios do COBIT 5?",
    a: "Governança (5 processos: avaliar, dirigir, monitorar) e Gestão (4 domínios: APO - Alinhar/Planejar/Organizar, BAI - Construir/Adquirir/Implementar, DSS - Entregar/Serviço/Suporte, MEA - Monitorar/Avaliar/Analisar)."
  },
  {
    id: "gov-ti-17",
    q: "Quais são os resultados esperados da implementação do COBIT?",
    a: "Alcançar objetivos estratégicos, cumprir leis e regulamentos, criar vantagem competitiva, tornar TI mais inovadora, oferecer excelência operacional, aumentar satisfação do usuário, reduzir riscos operacionais."
  },
  {
    id: "gov-ti-18",
    q: "O que é ITIL (Information Technology Infrastructure Library)?",
    a: "Framework de gerenciamento de serviços de TI criado pelo governo britânico. Preenche lacunas do COBIT respondendo 'como fazer' as atividades."
  },
  {
    id: "gov-ti-19",
    q: "Quais são os 5 livros do ciclo de vida ITIL V3?",
    a: "1) Estratégia de serviço 2) Desenho de serviço 3) Transição de serviço 4) Operação de serviço 5) Melhoria contínua do serviço."
  },
  {
    id: "gov-ti-20",
    q: "O que é PMBOK (Project Management Body of Knowledge)?",
    a: "Guia do PMI com conjunto de conhecimentos em gerenciamento de projetos. Traz padronização de teorias, técnicas, métodos e regras para gestão de projetos."
  },
  {
    id: "gov-ti-21",
    q: "Quais são as 5 fases do projeto no PMBOK?",
    a: "1) Iniciação 2) Planejamento 3) Execução 4) Monitoramento e Controle 5) Encerramento."
  },
  {
    id: "gov-ti-22",
    q: "O que é PMO (Project Management Office)?",
    a: "Estrutura organizacional que padroniza processos de governança relacionados a projetos e facilita compartilhamento de recursos, metodologias, ferramentas e técnicas."
  },

  // ==================== TA3 - MAPEAMENTO DE RISCOS E OPORTUNIDADES ====================
  {
    id: "gov-ti-23",
    q: "O que é Gerenciamento de Riscos segundo o PMI?",
    a: "Processo que contempla: 1) Planejar 2) Identificar 3) Analisar (R = P x I) 4) Planejar respostas 5) Monitorar riscos do projeto."
  },
  {
    id: "gov-ti-24",
    q: "Quais são os tipos de riscos?",
    a: "1) Conhecidos: identificados e analisados 2) Desconhecidos: não identificados 3) Individuais: relacionados a atividade 4) Gerais: incerteza do projeto como um todo."
  },
  {
    id: "gov-ti-25",
    q: "O que são apetite, tolerância e limite de riscos?",
    a: "Apetite: grau de incerteza que organização aceita. Tolerância: quantidade/volume de riscos aceitos. Limite: até que ponto o risco pode ser aceito."
  },
  {
    id: "gov-ti-26",
    q: "O que é análise SWOT?",
    a: "Ferramenta para análise de ambientes: Pontos Fortes e Fracos (internos) e Oportunidades e Ameaças (externos). Usada em planejamento estratégico."
  },
  {
    id: "gov-ti-27",
    q: "O que é VME (Valor Monetário Esperado)?",
    a: "VME = Pr (probabilidade) x I (impacto). Considera: Ic (custo), Ie (empenho), Icr (cronograma). Usado para análise quantitativa de riscos."
  },
  {
    id: "gov-ti-28",
    q: "Quais são as estratégias de resposta a riscos negativos (ameaças)?",
    a: "1) Prevenir: eliminar/proteger contra ameaça 2) Transferir: passar para terceiros (seguros) 3) Mitigar: reduzir impacto 4) Aceitar: tomar atitudes apenas se ocorrer."
  },
  {
    id: "gov-ti-29",
    q: "Quais são as estratégias de resposta a riscos positivos (oportunidades)?",
    a: "1) Explorar: garantir que oportunidade se torne realidade 2) Melhorar: ampliar possibilidade 3) Compartilhar: com terceiros 4) Aceitar: sem ações para viabilidade."
  },
  {
    id: "gov-ti-30",
    q: "O que é RISK IT?",
    a: "Framework da ISACA que fornece visão abrangente de todos riscos relacionados ao uso de TI. Complementa COBIT - COBIT fornece meios, RISK IT fornece fins."
  },

  // ==================== TA4 - INDICADORES E MÉTRICAS DE DESEMPENHO ====================
  {
    id: "gov-ti-31",
    q: "O que é BSC (Balanced Scorecard)?",
    a: "Modelo para definição de indicadores de desempenho com 4 perspectivas: Financeira, Clientes, Processos Internos, Aprendizado e Crescimento."
  },
  {
    id: "gov-ti-32",
    q: "Quais são as perspectivas de BSC-TI?",
    a: "1) Contribuição para o negócio 2) Eficiência operacional 3) Usuário 4) Novas tecnologias 5) Financeira."
  },
  {
    id: "gov-ti-33",
    q: "Qual é a diferença entre Métricas e KPIs?",
    a: "Métricas: valores que auxiliam na formação de indicadores (ex: 1.082 carros vendidos). KPIs: indicadores estratégicos (ex: vendas representam 65% do faturamento)."
  },
  {
    id: "gov-ti-34",
    q: "O que é CMMI (Capability Maturity Model Integration)?",
    a: "Modelo de maturidade para avaliar nível de habilidade em gerenciar projetos. Foco na melhoria contínua dos processos de software."
  },
  {
    id: "gov-ti-35",
    q: "O que é OPM3 (Organizational Project Management Maturity Model)?",
    a: "Modelo de maturidade do PMI para avaliar capacidade das empresas no gerenciamento de portfólios, programas e projetos. Alinhado ao PMBOK."
  },
  {
    id: "gov-ti-36",
    q: "Quais são as ferramentas de análise de métricas de desempenho?",
    a: "1) Monitoramento: Zabbix, h4Nagios 2) Controle de chamado: OTRS, GLPI, Jira 3) Inventário: Kaseya 4) Produtividade: LanDesk, SystemCenter."
  }
];

// Flashcards de Segurança e Auditoria de Sistemas
// Conteúdo extraído dos PDFs Cw1, Cw2, Cw3, Cw4 do 5º semestre
// Reescrito de forma resumida e acessível

export const segurancaAuditoria = [
  // ==================== TA1 - INTRODUÇÃO À SEGURANÇA DA INFORMAÇÃO ====================
  {
    id: "sa-ta1-1",
    question: "O que é segurança da informação?",
    answer: "É a proteção da informação contra ameaças para garantir a continuidade dos negócios, minimizando danos e maximizando retorno dos investimentos. Envolve identificação, proteção, detecção, resposta e recuperação."
  },
  {
    id: "sa-ta1-2",
    question: "Quais são os princípios da segurança da informação (CID)?",
    answer: "Confidencialidade (acesso apenas a autorizados), Integridade (exatidão e completeza dos dados) e Disponibilidade (acesso quando necessário). Complementados por Autenticidade, Não-Repúdio e Legalidade."
  },
  {
    id: "sa-ta1-3",
    question: "O que é Confidencialidade?",
    answer: "Propriedade de que a informação não esteja disponível ou seja revelada a indivíduos, entidades ou processos não autorizados."
  },
  {
    id: "sa-ta1-4",
    question: "O que é Integridade?",
    answer: "Propriedade de salvaguarda da exatidão e completeza dos ativos."
  },
  {
    id: "sa-ta1-5",
    question: "O que é Disponibilidade?",
    answer: "Está relacionada ao tempo e à acessibilidade que se tem dos dados e sistemas da organização."
  },
  {
    id: "sa-ta1-6",
    question: "O que é Autenticidade?",
    answer: "Busca garantir que determinada pessoa ou sistema é, de fato, quem ela diz ser."
  },
  {
    id: "sa-ta1-7",
    question: "O que é Não-Repúdio (Irretratabilidade)?",
    answer: "Busca garantir que o usuário não tenha condições de negar ou contrariar o fato de que foi ele quem gerou determinado conteúdo ou informação."
  },
  {
    id: "sa-ta1-8",
    question: "O que é um Ativo em segurança da informação?",
    answer: "Qualquer elemento que tenha valor para uma organização: informação, equipamentos ou pessoas."
  },
  {
    id: "sa-ta1-9",
    question: "O que é Agente de Ameaça?",
    answer: "Aquele que explora intencionalmente uma vulnerabilidade por meio de algum método ou técnica de ataque."
  },
  {
    id: "sa-ta1-10",
    question: "O que é Vulnerabilidade?",
    answer: "Ponto fraco que, uma vez explorado, resulta em incidente de segurança. Inclui fraquezas de um ativo que podem ser exploradas por uma ameaça."
  },
  {
    id: "sa-ta1-11",
    question: "O que são Controles de segurança?",
    answer: "Englobam mecanismos de defesa e uso de medidas e técnicas de segurança. Podem ser físicos, tecnológicos ou processuais, aplicados nos ativos para remover vulnerabilidades."
  },
  {
    id: "sa-ta1-12",
    question: "O que é Risco em segurança da informação?",
    answer: "Probabilidade de um agente de ameaça explorar vulnerabilidades de ativos utilizando técnicas de ataque, causando impactos à empresa."
  },
  {
    id: "sa-ta1-13",
    question: "Quais são os elementos a serem protegidos?",
    answer: "Pessoas (vulneráveis a engenharia social), Ativos (físicos e tecnológicos) e Informação (principal elemento, que trafega por diversos canais)."
  },
  {
    id: "sa-ta1-14",
    question: "O que é Gestão de Riscos da Segurança da Informação?",
    answer: "Processo contínuo que envolve avaliação de riscos, identificação de ativos, vulnerabilidades, ameaças e agentes de ameaças. Risco = Probabilidade x Impacto."
  },
  {
    id: "sa-ta1-15",
    question: "Quais são as formas de tratamento de riscos?",
    answer: "Mitigação/Redução (aplicar controles), Aceitação (monitorar risco baixo), Eliminação (inutilizar ativo) e Transferência (seguros, terceiros)."
  },
  {
    id: "sa-ta1-16",
    question: "Quais são os tipos de Controles de Segurança?",
    answer: "Físicos (câmeras, guardas), Tecnológicos (firewall, criptografia), Processuais (políticas de senhas) e Regulatórios (LGPD)."
  },
  {
    id: "sa-ta1-17",
    question: "O que são Vulnerabilidades de Rede?",
    answer: "Fraquezas em hardware, software, protocolos e aplicações que podem ser exploradas por indivíduos mal-intencionados para comprometer a segurança."
  },
  {
    id: "sa-ta1-18",
    question: "Quais são os tipos de Ameaças e Ataques à Rede?",
    answer: "Hackers, Malware (vírus, Trojan, ransomware), DoS/DDoS, Força Bruta, Man-in-the-Middle (MitM), Phishing, Spoofing."
  },
  {
    id: "sa-ta1-19",
    question: "O que é Criptografia?",
    answer: "Ciência que permite criptografar e descriptografar dados usando matemática. Protege confidencialidade, integridade e autenticação das informações."
  },
  {
    id: "sa-ta1-20",
    question: "Quais são os tipos de Criptografia?",
    answer: "Simétrica (mesma chave para criptografar/descriptografar), Assimétrica (chave pública/privada), Hashing (resumo fixo), Curva Elíptica, Quântica, Homomórfica."
  },
  {
    id: "sa-ta1-21",
    question: "O que é criptografia Simétrica?",
    answer: "Mesma chave é usada para criptografar e descriptografar. Algoritmos: AES, DES, 3DES, IDEA. Eficiente e rápida."
  },
  {
    id: "sa-ta1-22",
    question: "O que é criptografia Assimétrica?",
    answer: "Usa par de chaves: pública (criptografar) e privada (descriptografar). Algoritmos: RSA, DSA, ECC. Permite comunicação segura sem compartilhar chave."
  },
  {
    id: "sa-ta1-23",
    question: "O que são protocolos de proteção de dados em trânsito?",
    answer: "HTTPS, TLS e SSL protegem informações transmitidas pela rede, garantindo segurança das transações online."
  },

  // ==================== TA2 - POLÍTICA E CULTURA DE SEGURANÇA ====================
  {
    id: "sa-ta2-1",
    question: "O que é Política de Segurança da Informação (PSI)?",
    answer: "Documento formal que estabelece diretrizes, regras e procedimentos para proteger informações, ativos e sistemas contra ameaças e violações de segurança."
  },
  {
    id: "sa-ta2-2",
    question: "O que é Sistema de Gestão de Segurança da Informação (SGSI)?",
    answer: "Sistema que preserva confidencialidade, integridade e disponibilidade da informação por meio de gestão de riscos, integrado aos processos da organização."
  },
  {
    id: "sa-ta2-3",
    question: "O que é ciclo PDCA no SGSI?",
    answer: "Plan (estabelecer), Do (implementar), Check (monitorar), Act (melhorar). Processo de melhoria contínua para manter a segurança da informação."
  },
  {
    id: "sa-ta2-4",
    question: "O que é a Família ISO 27000?",
    answer: "Conjunto de normas para SGSI: ISO 27001 (requisitos), ISO 27002 (controles), ISO 27005 (gestão de riscos), ISO 27701 (privacidade de dados)."
  },
  {
    id: "sa-ta2-5",
    question: "O que é LGPD (Lei Geral de Proteção de Dados)?",
    answer: "Legislação brasileira que trata da proteção de dados pessoais. Foca na privacidade e nos direitos dos titulares de dados pessoais."
  },
  {
    id: "sa-ta2-6",
    question: "O que é Ambiente de Desenvolvimento Seguro?",
    answer: "Conjunto de práticas, políticas e procedimentos para garantir que a segurança seja considerada desde o início do desenvolvimento de software."
  },
  {
    id: "sa-ta2-7",
    question: "Quais são os modelos de Controle de Acesso?",
    answer: "DAC (proprietário controla), MAC (administradores controlam), RBAC (baseado em funções), ABAC (baseado em atributos)."
  },
  {
    id: "sa-ta2-8",
    question: "O que são mecanismos de Autenticação?",
    answer: "Senha, Autenticação de Dois Fatores (2FA), Biometria, Certificados Digitais. Verificam a identidade do usuário."
  },
  {
    id: "sa-ta2-9",
    question: "O que é IAM (Identity and Access Management)?",
    answer: "Sistema de gerenciamento de identidades que centraliza autenticação, autorização, controle de acesso, auditoria e proteção de dados."
  },
  {
    id: "sa-ta2-10",
    question: "O que é ciclo de vida dos dados?",
    answer: "Processo que abrange coleta, classificação, retenção e destruição de informações. Inclui anonimização para proteger privacidade."
  },
  {
    id: "sa-ta2-11",
    question: "O que é Computação em Nuvem (Cloud)?",
    answer: "Disponibilidade de recursos computacionais via internet, incluindo armazenamento e análise de dados. Aumenta poder computacional e mobilidade."
  },
  {
    id: "sa-ta2-12",
    question: "O que são Tecnologias Emergentes em segurança?",
    answer: "Inteligência Artificial, Blockchain, IoT, 5G, Edge Computing, Computação Quântica. Trazem oportunidades e novos desafios de segurança."
  },
  {
    id: "sa-ta2-13",
    question: "O que são Ameaças Emergentes?",
    answer: "Ataques de IA, ataques a dispositivos IoT, ransomware aprimorado, deepfakes, ciberataques estatais e guerras cibernéticas."
  },

  // ==================== TA3 - SEGURANÇA NA INTERNET E DISPOSITIVOS MÓVEIS ====================
  {
    id: "sa-ta3-1",
    question: "O que é SQL Injection?",
    answer: "Vulnerabilidade onde invasores inserem comandos SQL maliciosos em campos de entrada, permitindo acesso, modificação ou exclusão de dados do banco."
  },
  {
    id: "sa-ta3-2",
    question: "O que é Cross-Site Scripting (XSS)?",
    answer: "Atacantes inserem scripts maliciosos em páginas web que são executados nos navegadores dos usuários, permitindo roubo de informações de sessão."
  },
  {
    id: "sa-ta3-3",
    question: "O que é Cross-Site Request Forgery (CSRF)?",
    answer: "Ataque onde invasores induzem usuários a executar ações não intencionais, explorando a confiança do navegador do usuário."
  },
  {
    id: "sa-ta3-4",
    question: "Quais são as práticas seguras de desenvolvimento web?",
    answer: "Validação de entrada, autenticação robusta, criptografia, atualizações regulares, tokens anti-CSRF, gerenciamento seguro de sessões."
  },
  {
    id: "sa-ta3-5",
    question: "O que é Data Loss Prevention (DLP)?",
    answer: "Ferramenta que monitora tráfego de rede e dispositivos para evitar perda, vazamento ou uso não autorizado de dados sensíveis."
  },
  {
    id: "sa-ta3-6",
    question: "Quais são as ameaças em dispositivos móveis?",
    answer: "Malware, perda/roubo, phishing, redes Wi-Fi inseguras, SMS/MMS maliciosos, jailbreaking/rooting, senhas fracas, aplicativos não verificados."
  },
  {
    id: "sa-ta3-7",
    question: "O que é EMM/MDM (Enterprise Mobility Management)?",
    answer: "Solução para prover segurança em dispositivos móveis corporativos, incluindo políticas, configurações e monitoramento de conformidade."
  },
  {
    id: "sa-ta3-8",
    question: "Quais são os modelos de gestão de dispositivos móveis?",
    answer: "COPE (Corporate-Owned Personally-Enabled), BYOD (Bring Your Own Device), CYOD (Choose Your Own Device). Diferem na propriedade e controle."
  },
  {
    id: "sa-ta3-9",
    question: "O que é Pentest (Teste de Penetração)?",
    answer: "Metodologia de segurança cibernética que simula ataques controlados para identificar e explorar vulnerabilidades em sistemas, redes e aplicativos."
  },
  {
    id: "sa-ta3-10",
    question: "Quais são as fases do Pentest?",
    answer: "Coleta de informações, Análise de vulnerabilidades, Planejamento de ataques, Execução de ataques, Documentação e relatório, Discussão e melhorias."
  },
  {
    id: "sa-ta3-11",
    question: "Quais são os tipos de Pentest?",
    answer: "Black-box (conhecimento mínimo), White-box (conhecimento completo), Gray-box (nível intermediário de informações)."
  },
  {
    id: "sa-ta3-12",
    question: "O que é SAST e DAST?",
    answer: "SAST (Static Application Security Testing): análise de código sem execução. DAST (Dynamic Application Security Testing): análise durante execução em tempo real."
  },
  {
    id: "sa-ta3-13",
    question: "O que é Engenharia Social?",
    answer: "Técnica que manipula pessoas para obter informações confidenciais, explorando características humanas como boa vontade, medo ou curiosidade."
  },
  {
    id: "sa-ta3-14",
    question: "Quais são as técnicas de Engenharia Social?",
    answer: "Phishing, pretexting, baiting, quid pro quo, tailgating, dumpster diving, vishing (phishing por voz), smishing (phishing por SMS)."
  },
  {
    id: "sa-ta3-15",
    question: "Como se proteger da Engenharia Social?",
    answer: "Treinamento de conscientização, políticas de segurança, verificação de identidade, autenticação de dois fatores, princípio do mínimo privilégio."
  },

  // ==================== TA4 - AUDITORIA DE SISTEMAS ====================
  {
    id: "sa-ta4-1",
    question: "O que é Auditoria de Sistemas?",
    answer: "Processo sistemático de avaliação e verificação dos controles de segurança, políticas e procedimentos em ambiente TI para garantir conformidade e melhores práticas."
  },
  {
    id: "sa-ta4-2",
    question: "Quais são os princípios da Auditoria de Sistemas?",
    answer: "Evidências substanciais, conformidade com normas, confidencialidade, comunicação clara, evolução contínua, melhoria constante."
  },
  {
    id: "sa-ta4-3",
    question: "Qual é o papel do Auditor de Sistemas?",
    answer: "Avaliar controles de segurança, identificar vulnerabilidades, assegurar conformidade, fornecer recomendações e contribuir para conscientização em segurança."
  },
  {
    id: "sa-ta4-4",
    question: "Quais são as fases da Auditoria?",
    answer: "Planejamento (objetivos, escopo, riscos), Execução (coleta de evidências, testes), Relatório (resultados, recomendações), Follow-up (monitoramento)."
  },
  {
    id: "sa-ta4-5",
    question: "O que são Controles de Software de Sistema?",
    answer: "Medidas de segurança no nível do sistema operacional: atualizações, configurações de segurança, logs, controles de acesso físico a servidores."
  },
  {
    id: "sa-ta4-6",
    question: "O que são Controles de Acesso?",
    answer: "Gerenciam quem tem permissão para acessar recursos: autenticação (senhas, tokens), autorização (RBAC), controles físicos."
  },
  {
    id: "sa-ta4-7",
    question: "O que são Controles de Desenvolvimento de Software?",
    answer: "Práticas durante ciclo de vida do desenvolvimento: políticas de segurança, revisão de código, testes de segurança, gerenciamento de configuração."
  },
  {
    id: "sa-ta4-8",
    question: "O que são Controles Físicos?",
    answer: "Medidas tangíveis para proteger ativos: cercas, barreiras, portas com fechaduras, cartões de acesso, biometria, câmeras de vigilância."
  },
  {
    id: "sa-ta4-9",
    question: "O que são Controles Lógicos?",
    answer: "Medidas computacionais: autenticação de usuários, firewalls, roteadores, RBAC, criptografia de dados."
  },
  {
    id: "sa-ta4-10",
    question: "O que são Controles Organizacionais?",
    answer: "Políticas de segurança, gestão de riscos, BCP/DRP, treinamento, governança de segurança da informação, COBIT, ITIL."
  },
  {
    id: "sa-ta4-11",
    question: "Quais são as técnicas de Auditoria?",
    answer: "Entrevistas, questionários, observação, revisão documental, análise de dados, testes de penetração, varredura de vulnerabilidades."
  },
  {
    id: "sa-ta4-12",
    question: "Quais são as ferramentas de Auditoria?",
    answer: "Wireshark, Metasploit, OpenVAS, Nessus, Splunk, Burp Suite, OWASP ZAP, Nmap, SonarQube, EnCase."
  },
  {
    id: "sa-ta4-13",
    question: "O que é Auditoria Contínua?",
    answer: "Abordagem que realiza avaliações em tempo real, monitorando controles constantemente para identificar e corrigir problemas imediatamente."
  },
  {
    id: "sa-ta4-14",
    question: "O que é Análise de Dados em Auditoria?",
    answer: "Aplicação de técnicas analíticas para examinar grandes volumes de dados e identificar padrões, anomalias, tendências ou áreas de interesse."
  },
  {
    id: "sa-ta4-15",
    question: "Como auditar ambientes de IoT?",
    answer: "Avaliar protocolos de comunicação, segurança do dispositivo, privacidade de dados, integridade, gerenciamento de acesso, monitoramento e atualizações."
  },
  {
    id: "sa-ta4-16",
    question: "O que são SIEM (Security Information and Event Management)?",
    answer: "Ferramenta que analisa e gerencia eventos de segurança, criando casos de uso para identificar ações fora da política e tomar ações automáticas."
  },
  {
    id: "sa-ta4-17",
    question: "Quais são os casos de auditoria comuns?",
    answer: "Auditoria de segurança de rede em banco, conformidade em saúde (HIPAA), sistemas internos em tecnologia, continuidade de negócios, segurança em e-commerce."
  },
  {
    id: "sa-ta4-18",
    question: "O que é Hardening de sistemas?",
    answer: "Processo de fortalecimento da segurança de sistemas operacionais, redes e aplicações, reduzindo superfícies de ataque e vulnerabilidades."
  },
  {
    id: "sa-ta4-19",
    question: "O que é ISO 19011?",
    answer: "Norma que fornece diretrizes para auditoria de sistemas de gestão, incluindo SGSI baseados na ISO 27001."
  },
  {
    id: "sa-ta4-20",
    question: "O que é COBIT?",
    answer: "Framework para governança de TI com controles amplos incluindo segurança e privacidade, focando em processos e controles."
  },
  {
    id: "sa-ta4-21",
    question: "O que é ITIL?",
    answer: "Conjunto de melhores práticas para gerenciamento de serviços de TI, incluindo aspectos de segurança e continuidade de serviços."
  },
  {
    id: "sa-ta4-22",
    question: "O que é NIST Cybersecurity Framework?",
    answer: "Framework que oferece diretrizes para gerenciamento de riscos de segurança cibernética com funções: Identificar, Proteger, Detectar, Responder, Recuperar."
  },
  {
    id: "sa-ta4-23",
    question: "O que é PCI DSS?",
    answer: "Padrão de segurança de dados para indústria de cartões de pagamento, exigindo controles rigorosos para proteger dados de portadores de cartões."
  },
  {
    id: "sa-ta4-24",
    question: "O que é GDPR?",
    answer: "Regulamento Geral de Proteção de Dados da União Europeia que estabelece regras para proteção de dados pessoais e privacidade."
  },
  {
    id: "sa-ta4-25",
    question: "O que é HIPAA?",
    answer: "Health Insurance Portability and Accountability Act - regulamentação americana para proteção de dados de saúde e informações médicas."
  }
];

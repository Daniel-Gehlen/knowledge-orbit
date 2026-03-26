// Flashcards - Segurança e Auditoria de Sistemas
// Conteúdo extraído dos 4 PDFs (Cw1, Cw2, Cw3, Cw4)
// Resumido e com termos técnicos explicados para fácil compreensão

export const segurancaAuditoriaCompleto = [
  // ===== CW1: FUNDAMENTOS DE SEGURANÇA DA INFORMAÇÃO =====
  {
    id: "sec-001",
    pergunta: "O que é a Tríade CID (Confidencialidade, Integridade, Disponibilidade)?",
    resposta: "São os três princípios fundamentais da segurança da informação. Confidencialidade garante que apenas pessoas autorizadas acessem a informação. Integridade garante que os dados não sejam alterados indevidamente. Disponibilidade assegura que os dados estejam acessíveis quando necessário.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-002",
    pergunta: "O que são os princípios complementares: Autenticidade, Não-Repúdio e Legalidade?",
    resposta: "Autenticidade confirma que a pessoa ou sistema é quem diz ser. Não-Repúdio (Irretratabilidade) impede que alguém negue ter executado uma ação. Legalidade assegura conformidade com legislações e normas.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-003",
    pergunta: "O que é um Ativo em segurança da informação?",
    resposta: "Ativo é qualquer elemento com valor para a organização: informação, equipamentos, pessoas, sistemas ou processos que precisam ser protegidos.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-004",
    pergunta: "O que é Vulnerabilidade?",
    resposta: "É um ponto fraco em um sistema que pode ser explorado por um atacante. Pode ser uma falha de software, configuração incorreta, falta de atualização ou erro humano.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-005",
    pergunta: "O que é Ameaça?",
    resposta: "É qualquer evento ou entidade que pode explorar uma vulnerabilidade para causar dano a um ativo. Ameaças só existem quando há vulnerabilidades a explorar.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-006",
    pergunta: "O que é Risco em segurança da informação?",
    resposta: "É a probabilidade de uma ameaça explorar vulnerabilidades de ativos, causando impactos à organização. Calcula-se como: Risco = Probabilidade × Impacto. Classifica-se como Alto (6-9), Médio (3-4) ou Baixo (1-2).",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-007",
    pergunta: "Quais são as formas de tratamento de riscos?",
    resposta: "Mitigação/Redução: aplicar controles. Aceitação: quando o risco é baixo ou o controle muito caro. Eliminação: remover o ativo. Transferência: contratar seguro ou terceirizar.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-008",
    pergunta: "Quais são os tipos de Controles de Segurança?",
    resposta: "Físicos (câmeras, biometria, cercas). Tecnológicos (firewall, VPN, criptografia, antivírus). Processuais (políticas de senhas, backups). Regulatórios (LGPD, ISO 27002).",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-009",
    pergunta: "O que é um Agente de Ameaça?",
    resposta: "É alguém que explora intencionalmente uma vulnerabilidade usando técnicas de ataque. Pode ser hackers crackers, funcionários mal-intencionados ou concorrentes.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-010",
    pergunta: "O que são os três elementos a proteger em segurança?",
    resposta: "Pessoas (exploradas por engenharia social), Ativos (físicos como hardware e tecnológicos como sistemas) e Informação (elemento principal que trafega entre pessoas e ativos).",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-011",
    pergunta: "O que é um Incidente de Segurança da Informação?",
    resposta: "É um evento indesejado ou inesperado que compromete significativamente as operações. Diferente de evento de segurança, que é apenas uma possível violação de política.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-012",
    pergunta: "Quais são as principais ameaças de rede?",
    resposta: "Hackers (éticos ou crackers), Malware (vírus, trojans, worms, ransomware), DoS/DDoS (sobrecarga de servidores), Ataques de Força Bruta (adivinhar senhas), Man-in-the-Middle (interceptar comunicação).",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-013",
    pergunta: "O que são Malwares e seus tipos?",
    resposta: "Software malicioso. Tipos: Vírus (se replica), Trojan (cavalos de Troia), Worm (se multiplica), Ransomware (sequestra dados por criptografia), Phishing (pescaria de dados), Backdoor (acesso remoto), Spoofing (mascarar identidade).",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-014",
    pergunta: "O que é criptografia e sua evolução histórica?",
    resposta: "Ciência que oculta dados usando matemática. Evoluiu desde a Cifra de César (50 a.C.), passando por Vigenère (século XVI), Máquina Enigma (WWII), até a Criptografia de Chave Pública (1970), RSA (1978), Curva Elíptica (1985) e Quântica (século XXI).",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-015",
    pergunta: "Quais são os tipos de criptografia?",
    resposta: "Simétrica (mesma chave para criptografar/descriptografar - AES, DES). Assimétrica/Chave Pública (chave pública para criptografar, privada para descriptografar - RSA, ECC). Hashing (resumo fixo - SHA-256). Curva Elíptica, Quântica, Homomórfica (opera em dados criptografados).",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-016",
    pergunta: "O que é esteganografia?",
    resposta: "Prática de ocultar informações dentro de outra mensagem ou objeto físico. Diferente da criptografia que oculta o conteúdo, a esteganografia oculta a existência da mensagem. Pode esconder texto, imagem, vídeo ou áudio.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-017",
    pergunta: "Quais são as proteções de rede recomendadas?",
    resposta: "Firewalls, atualizações constantes, autenticação multifatorial (MFA), senhas fortes, criptografia, IDS/IPS, monitoramento, backups regulares, segmentação de rede (DMZ), testes de penetração e conscientização dos usuários.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-018",
    pergunta: "O que é uma DMZ (Zona Desmilitarizada)?",
    resposta: "Rede específica entre a internet (rede pública) e a rede interna. Permite acesso aos serviços na DMZ, mas não à rede interna, criando uma camada adicional de proteção.",
    categoria: "seguranca-auditoria"
  },

  // ===== CW2: GESTÃO E POLÍTICAS DE SEGURANÇA =====
  {
    id: "sec-019",
    pergunta: "O que é SGSI (Sistema de Gestão de Segurança da Informação)?",
    resposta: "Sistema que preserva confidencialidade, integridade e disponibilidade da informação através de gestão de riscos. Usa o ciclo PDCA (Plan-Do-Check-Act) para melhoria contínua. Pode ser certificado pela ISO 27001.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-020",
    pergunta: "O que é uma Política de Segurança da Informação (PSI)?",
    resposta: "Documento formal com diretrizes, regras e procedimentos para proteger informações da organização. Deve ser construída colaborativamente, com apoio da alta direção e comunicação constante a todos.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-021",
    pergunta: "O que é a Família ISO 27000?",
    resposta: "Conjunto de normas de segurança: ISO 27001 (requisitos para SGSI), ISO 27002 (diretrizes de controles), ISO 27005 (gestão de riscos), ISO 27701 (privacidade de dados).",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-022",
    pergunta: "O que é LGPD (Lei Geral de Proteção de Dados)?",
    resposta: "Legislação brasileira que protege dados pessoais. Impõe obrigações legais sobre coleta, armazenamento e processamento de dados, diferentemente das normas ISO que são voluntárias.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-023",
    pergunta: "Quais são os Modelos de Controle de Acesso?",
    resposta: "DAC (proprietário decide acessos), MAC (administrador define políticas), RBAC (acesso por função/cargo), ABAC (acesso por atributos como localização e horário).",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-024",
    pergunta: "O que é IAM (Identity and Access Management)?",
    resposta: "Sistema para gerenciar identidades e acessos dos usuários. Centraliza autenticação, autorização, auditoria, SSO (Single Sign-On), e ciclo de vida das identidades.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-025",
    pergunta: "Quais são os métodos de autenticação?",
    resposta: "Senha (combinar caracteres), 2FA/dois fatores (senha + código), Biometria (impressão digital, íris), Certificados digitais (emitidos por autoridades de certificação).",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-026",
    pergunta: "O que é o ciclo de vida dos dados?",
    resposta: "Processo que abrange: Coleta → Classificação (público, interno, confidencial, secreto) → Retenção (quanto tempo guardar) → Anonimização (tornar não identificável) → Destruição segura.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-027",
    pergunta: "O que é computação em nuvem (Cloud Computing)?",
    resposta: "Disponibilidade de recursos computacionais (armazenamento, processamento) via internet. Características: elasticidade, acesso amplo, modelos de serviço (IaaS, PaaS, SaaS). Desafios incluem acesso compartilhado (multitenancy).",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-028",
    pergunta: "Quais são as tendências em segurança da informação?",
    resposta: "Inteligência Artificial para detecção de ameaças, Computação Quântica (quebra criptografia atual), Blockchain (integridade de dados), 5G/IoT (novos desafios), Edge Computing, Deepfakes, Ciberataques estatais.",
    categoria: "seguranca-auditoria"
  },

  // ===== CW3: SEGURANÇA NA INTERNET E DISPOSITIVOS MÓVEIS =====
  {
    id: "sec-029",
    pergunta: "O que é SQL Injection?",
    resposta: "Vulnerabilidade onde invasores inserem comandos SQL maliciosos em campos de entrada de aplicações web, permitindo acessar, modificar ou deletar dados do banco de dados.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-030",
    pergunta: "O que é Cross-Site Scripting (XSS)?",
    resposta: "Ataque onde invasores injetam scripts maliciosos em páginas web que são executados nos navegadores dos usuários. Pode roubar informações de sessão ou exibir conteúdo malicioso.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-031",
    pergunta: "O que é Cross-Site Request Forgery (CSRF)?",
    resposta: "Ataque onde invasores induzem usuários a executar ações não intencionais em uma aplicação, explorando a confiança do navegador do usuário.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-032",
    pergunta: "O que é DLP (Data Loss Prevention)?",
    resposta: "Ferramenta que previne perda, vazamento ou uso não autorizado de dados sensíveis. Monitora tráfego de rede e dispositivos em busca de informações confidenciais como números de cartão de crédito.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-033",
    pergunta: "O que são BYOD, COPE e CYOD?",
    resposta: "BYOD (Bring Your Own Device): funcionário usa dispositivo próprio. COPE (Corporate-Owned Personally-Enabled): empresa é dona, mas permite uso pessoal. CYOD (Choose Your Own Device): funcionário escolhe dispositivo da empresa.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-034",
    pergunta: "O que é MDM/EMM (Enterprise Mobility Management)?",
    resposta: "Soluções para gerenciar dispositivos móveis corporativos. Permitem configuração de políticas de segurança, monitoramento, bloqueio remoto e geolocalização de dispositivos.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-035",
    pergunta: "O que são ataques de camada de aplicação?",
    resposta: "Ataques feitos na camada de aplicação do modelo OSI. Incluem sobrecarga de servidores, phishing, apps maliciosos, vulnerabilidades de injeção e interceptação de sessões.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-036",
    pergunta: "O que é Pentest (Teste de Penetração)?",
    resposta: "Metodologia que simula ataques cibernéticos para identificar vulnerabilidades. Etapas: coleta de informações, análise de vulnerabilidades, planejamento, execução, documentação e relatório.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-037",
    pergunta: "Quais são os tipos de Pentest?",
    resposta: "Black-box (sem conhecimento interno), White-box (com conhecimento completo do sistema), Gray-box (conhecimento intermediário). Cada um tem custos e aplicações diferentes.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-038",
    pergunta: "O que é SAST e DAST?",
    resposta: "SAST (Static Application Security Testing): analisa código-fonte sem executar. DAST (Dynamic Application Security Testing): analisa sistema em execução em tempo real. Ambos são usados no DevSecOps.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-039",
    pergunta: "O que é Engenharia Social?",
    resposta: "Técnica que manipula pessoas usando psicologia (curiosidade, medo, urgência) para obter informações confidenciais. Inclui phishing, pretexting, vishing (phishing por voz) e pretexting.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-040",
    pergunta: "Como se proteger da Engenharia Social?",
    resposta: "Treinamento de funcionários, verificação de identidade antes de compartilhar dados, autenticação 2FA, princípio do mínimo privilégio, desconfiar de solicitações urgentes e suspeitas.",
    categoria: "seguranca-auditoria"
  },

  // ===== CW4: AUDITORIA DE SISTEMAS =====
  {
    id: "sec-041",
    pergunta: "O que é Auditoria de Sistemas?",
    resposta: "Processo sistemático de avaliação e verificação dos controles de segurança para garantir que sistemas operem conforme melhores práticas, políticas e regulamentações. É realizada por auditores certificados e independentes.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-042",
    pergunta: "Quais são as fases da auditoria?",
    resposta: "Planejamento (definir objetivos, escopo, avaliação de riscos). Execução (coleta de evidências, testes técnicos, avaliação de controles). Relatório (documentar descobertas, recomendações e follow-up).",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-043",
    pergunta: "O que são Controles Físicos vs Controles Lógicos?",
    resposta: "Físicos: medidas tangíveis (cercas, biometria, câmeras, portas). Lógicos: métodos computacionais (senhas, firewalls, criptografia, RBAC). Ambos são necessários para defesa completa.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-044",
    pergunta: "O que são controles organizacionais de segurança?",
    resposta: "Políticas de segurança, gestão de riscos, BCP/DRP (planos de continuidade e recuperação de desastres), treinamento de funcionários, governança de segurança e frameworks como COBIT e ITIL.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-045",
    pergunta: "Quais são as técnicas de auditoria?",
    resposta: "Interação com pessoas (entrevistas, questionários, pesquisas). Análise manual (revisão de documentação, configurações, fluxos). Análise técnica (planilhas, scripts, ferramentas de auditoria, pentests).",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-046",
    pergunta: "Quais são as principais ferramentas de auditoria?",
    resposta: "Wireshark (análise de pacotes), Metasploit (testes de penetração), OpenVAS (varredura de vulnerabilidades), Nessus (verificação de vulnerabilidades), Splunk (análise de logs), Burp Suite (testes web).",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-047",
    pergunta: "O que é auditoria contínua?",
    resposta: "Abordagem que realiza avaliações em tempo real, usando tecnologias de monitoramento constante e análise de dados. Permite resposta imediata a riscos e detecção proativa de anomalias.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-048",
    pergunta: "O que é auditoria em ambientes IoT?",
    resposta: "Processo de avaliação de dispositivos conectados para garantir segurança em ambientes distribuídos e heterogêneos. Foca em protocolos de comunicação, firmware, autenticação e monitoramento contínuo.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-049",
    pergunta: "O que é SIEM (Security Information and Event Management)?",
    resposta: "Ferramenta que analisa e gerencia eventos de segurança em tempo real. Cria casos de uso específicos para identificar ações fora da política e pode tomar ações automáticas como notificações.",
    categoria: "seguranca-auditoria"
  },
  {
    id: "sec-050",
    pergunta: "Quais são os frameworks de segurança para auditoria?",
    resposta: "COBIT (governança de TI), ITIL (gerenciamento de serviços), NIST Cybersecurity Framework (controles de acesso), ISO 27001 (SGSI), PCI DSS (segurança de cartões), LGPD (proteção de dados no Brasil).",
    categoria: "seguranca-auditoria"
  }
];

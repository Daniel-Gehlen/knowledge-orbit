export const arquiteturaComputadores = [
  // Conceitos básicos de CPU
  { q: "O que é CPU?", a: "Unidade Central de Processamento: o 'cérebro' do computador que executa instruções e processa dados. É composta por ALU, registradores, unidade de controle e cache." },
  { q: "O que é ALU?", a: "Unidade Lógica Aritmética: componente da CPU que realiza operações matemáticas (soma, subtração) e lógicas (comparações, AND, OR)." },
  { q: "O que são registradores?", a: "Pequenas memórias de alta velocidade dentro da CPU. Armazenam dados temporários durante o processamento. Exemplos: acumulador, contador de programa, registradores de dados." },
  { q: "O que é o Contador de Programa (PC)?", a: "Registrador especial que mantém o endereço da próxima instrução a ser executada. Aponta para a memória indicando qual instrução deve ser buscada." },
  { q: "O que é a Unidade de Controle?", a: "Parte da CPU que interpreta instruções e coordena as operações das outras unidades. Direciona o fluxo de dados e garante funcionamento em harmonia." },
  { q: "O que é Clock do Processador?", a: "Oscilador que produz pulsos em ritmo constante, controlando a velocidade de execução das instruções. Medido em GHz, indica ciclos por segundo." },

  // Memória
  { q: "O que é memória RAM?", a: "Random Access Memory: memória volátil de acesso aleatório. Armazena dados e programas em execução. Perde dados quando desligada." },
  { q: "O que é memória ROM?", a: "Read-Only Memory: memória não volátil de apenas leitura. Armazena firmware como BIOS. Mantém dados mesmo sem energia." },
  { q: "O que é cache?", a: "Memória de alta velocidade entre CPU e memória principal. Armazena dados frequentemente acessados, reduzindo buscas na memória principal mais lenta." },
  { q: "O que são níveis de Cache (L1, L2, L3)?", a: "L1: menor e mais rápido, dentro do chip da CPU. L2: maior e um pouco mais lento. L3: maior e mais lento, serve como ponte entre L2 e memória principal." },
  { q: "O que é Hierarquia de Memória?", a: "Organização das memórias em níveis baseada em velocidade, capacidade e custo: registradores (mais rápidos) → cache → RAM → memória secundária (mais lentos e maiores)." },
  { q: "O que é HDD (Hard Disk Drive)?", a: "Disco rígido magnético com discos rotativos. Grande capacidade de armazenamento e custo-benefício, mas velocidade de leitura/escrita mais lenta que SSDs." },
  { q: "O que é SSD (Solid-State Drive)?", a: "Unidade de estado sólido que usa memória flash sem partes móveis. Mais rápido, resistente a impactos e consome menos energia que HDDs." },

  // Barramentos e comunicação
  { q: "O que é um barramento?", a: "Sistema de comunicação que transfere dados entre componentes do computador. Existem três tipos: barramento de dados, barramento de endereços e barramento de controle." },
  { q: "O que é Barramento de Dados?", a: "Transporta os dados entre os componentes. Quando você digita uma letra, o valor correspondente é transmitido pelo barramento de dados do teclado até a memória RAM." },
  { q: "O que é Barramento de Endereços?", a: "Indica o local na memória onde os dados devem ser lidos ou armazenados. Ao salvar um documento, a Unidade de Controle usa o barramento de endereços para especificar onde salvar." },
  { q: "O que é Barramento de Controle?", a: "Coordena e controla o uso dos outros dois barramentos, enviando sinais que indicam quando a informação deve ser lida ou escrita, quando o sistema deve esperar e outras funções operacionais." },

  // Arquitetura de Von Neumann
  { q: "O que é a Arquitetura de Von Neumann?", a: "Modelo de design de computador que usa uma única memória para dados e instruções, uma CPU para processamento e um sistema de controle. É a base da maioria dos computadores modernos." },
  { q: "Quais são as cinco unidades da Arquitetura de Von Neumann?", a: "1) Unidade Aritmética e Lógica (UAL). 2) Unidade de Controle. 3) Memória. 4) Dispositivos de Entrada e Saída. 5) Barramento." },
  { q: "O que é o Gargalo de Von Neumann?", a: "Limitação onde a CPU pode buscar instruções OU ler/escrever dados na memória, mas não ambos simultaneamente. Isso causa atrasos no fluxo de informação." },

  // Arquiteturas de processadores
  { q: "O que é uma Arquitetura CISC?", a: "Complex Instruction Set Computers: conjunto extenso de instruções complexas. Cada instrução pode realizar múltiplas operações. Usada em computadores pessoais (Intel, AMD)." },
  { q: "O que é uma Arquitetura RISC?", a: "Reduced Instruction Set Computer: conjunto reduzido de instruções simples e rápidas. Cada instrução é executada em menos ciclos. Usada em smartphones e tablets (ARM)." },
  { q: "Qual a diferença entre CISC e RISC?", a: "CISC: instruções complexas, menos instruções por programa, mais ciclos por instrução. RISC: instruções simples, mais instruções por programa, menos ciclos por instrução, maior eficiência energética." },

  // Dispositivos de entrada e saída
  { q: "O que são Dispositivos de Entrada?", a: "Interfaces que permitem inserir dados no computador. Exemplos: teclado, mouse, scanner, microfone, câmera/webcam, touchscreen." },
  { q: "O que são Dispositivos de Saída?", a: "Mecanismos que apresentam dados processados ao usuário. Exemplos: monitor, impressora, alto-falantes, projetor, fones de ouvido." },
  { q: "O que é DMA (Acesso Direto à Memória)?", a: "Permite transferência de dados entre dispositivos de E/S e memória sem intervenção da CPU. Um controlador especializado gerencia as transferências, liberando a CPU para outras tarefas." },
  { q: "O que são Canais de E/S?", a: "Circuitos especializados que transferem dados entre memória e dispositivos de E/S. Operam independentemente da CPU, permitindo múltiplas operações de E/S simultaneamente." },

  // História e gerações
  { q: "Quem foi Charles Babbage?", a: "Matemático inglês do século XIX que projetou a Máquina Analítica, considerada o conceito precursor do computador moderno. Nunca foi concluída, mas influenciou toda a computação." },
  { q: "Quem foi Ada Lovelace?", a: "Matemática inglesa, considerada a primeira programadora da história. Trabalhou com Babbage e descreveu algoritmos para a Máquina Analítica, incluindo conceitos como loops e sub-rotinas." },
  { q: "O que é o ENIAC?", a: "Foi o primeiro computador eletrônico de propósito geral, criado em 1945. Usava válvulas eletrônicas, ocupava salas inteiras e era usado principalmente para cálculos balísticos." },
  { q: "Quais são as cinco gerações de computadores?", a: "1ª: Válvulas (anos 1940-50). 2ª: Transistores (anos 1950-60). 3ª: Circuitos Integrados (anos 1960-70). 4ª: Microprocessadores (anos 1980-90). 5ª: Computação Inteligente (anos 2000-presente)." },
  { q: "O que foi a invenção do transistor?", a: "Marcou o início da segunda geração de computadores nos anos 1950. Transistores são menores, mais eficientes e consomem menos energia que as válvulas, permitindo computadores mais compactos." },
  { q: "O que são Circuitos Integrados?", a: "Dispositivos microeletrônicos com componentes (transistores, resistores) fabricados em uma placa de silício. Classificados por escala: SSI, MSI, LSI, VLSI." },

  // Sistemas operacionais
  { q: "O que é um Sistema Operacional?", a: "Software que gerencia o hardware do computador e fornece serviços para aplicativos. Atua como intermediário entre o usuário e o hardware, permitindo execução de programas." },
  { q: "O que são Sistemas Batch?", a: "Primeiros sistemas operacionais onde tarefas eram agrupadas e processadas sequencialmente sem interação direta durante a execução. Melhoraram a eficiência, mas tinham limitações." },
  { q: "O que é Multiprogramação?", a: "Técnica que permite vários programas residirem na memória ao mesmo tempo, melhorando a utilização da CPU ao alternar entre programas quando um está esperando por E/S." },

  // Tópicos avançados
  { q: "O que é Pipeline em processadores?", a: "Técnica que permite executar múltiplas instruções simultaneamente em diferentes estágios de processamento, como uma linha de montagem onde cada estágio realiza uma parte da instrução." },
  { q: "O que é uma interrupção?", a: "Sinal que pausa a execução normal da CPU para tratar eventos externos ou internos prioritários, como entrada de dados do teclado ou erros de hardware." },
  { q: "O que é um processador Multicore?", a: "Processador com múltiplos núcleos (cores) em um único chip. Cada núcleo pode executar instruções independentemente, permitindo processamento paralelo e melhor desempenho." },
  { q: "O que é a Lei de Moore?", a: "Observação que prevê que o número de transistores em um chip dobra aproximadamente a cada dois anos, resultando em aumento exponencial da capacidade de processamento ao longo do tempo." },
  { q: "O que é Firmware?", a: "Software gravado permanentemente em hardware, como BIOS ou UEFI. É essencial para o funcionamento básico do computador e inicialização do sistema operacional." }
];

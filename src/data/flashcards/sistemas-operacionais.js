/**
 * Flashcards de Sistemas Operacionais
 * Conteúdo extraído de Ta1, Ta2, Ta3 e Ta4
 * Reescrito de forma resumida e acessível
 */

export const sistemasOperacionais = [
  // ==================== TA1 - Introdução aos Sistemas Operacionais ====================
  {
    id: "so-ta1-1",
    q: "O que é um Sistema Operacional?",
    a: "É o software essencial que gerencia o computador, servindo de interface entre o usuário e o hardware. Controla processadores, memória, dispositivos de E/S e arquivos, garantindo eficiência e segurança."
  },
  {
    id: "so-ta1-2",
    q: "Quais são as duas funções básicas de um S.O.?",
    a: "1) Facilitar o acesso aos recursos do sistema. 2) Organizar o compartilhamento de recursos garantindo proteção."
  },
  {
    id: "so-ta1-3",
    q: "O que é o Kernel do sistema operacional?",
    a: "É o núcleo do S.O., composto por processador, memória, sistema de arquivos e gerência de dispositivos de E/S. É o programa que interpreta comandos e faz chamadas de sistema."
  },
  {
    id: "so-ta1-4",
    q: "Quais são os tipos de Sistemas Operacionais?",
    a: "1) Monoprogramáveis (monotarefa): executam uma tarefa por vez, ex: MS-DOS. 2) Multiprogramáveis (multitarefa): compartilham recursos e executam várias tarefas simultaneamente. 3) Sistemas com múltiplos processadores."
  },
  {
    id: "so-ta1-5",
    q: "O que são Sistemas Multiprogramáveis?",
    a: "São S.O. que compartilham recursos e permitem executar vários programas ao mesmo tempo. Podem ser monousuário (um usuário, várias tarefas) ou multiusuário (vários usuários compartilhando recursos)."
  },
  {
    id: "so-ta1-6",
    q: "O que são Sistemas com Múltiplos Processadores?",
    a: "Utilizam duas ou mais CPUs trabalhando em conjunto. Vantagens: escalabilidade (aumentar capacidade), disponibilidade (manter processos mesmo com falhas) e balanceamento de carga (distribuir processamento)."
  },
  {
    id: "so-ta1-7",
    q: "Quais são os tipos de sistemas multiprocessadores?",
    a: "1) Fortemente acoplados: vários processadores compartilham uma única memória física e são gerenciados por um único S.O. (Unix e Windows). 2) Fracamente acoplados: sistemas interconectados em rede, cada um com seu próprio S.O."
  },
  {
    id: "so-ta1-8",
    q: "O que é um sistema operacional embarcado?",
    a: "É usado em dispositivos como celulares, TVs e micro-ondas. Possui características de tempo real, mas com limitações de memória e consumo de energia. Exemplos: tvOS (Apple), WebOS (LG), Tizen (Samsung)."
  },
  {
    id: "so-ta1-9",
    q: "O que são sistemas operacionais mobile?",
    a: "Encontrados em celulares, tablets e MP3 players. Permitem comunicação sem fio (Bluetooth, Wi-Fi), uso de rádio, câmera e gravador. Exemplos: Android, iOS, Windows Phone."
  },
  {
    id: "so-ta1-10",
    q: "Quais são as diferenças entre Linux e Windows?",
    a: "Linux: gratuito, código aberto, linha de comando eficiente, flexível. Windows: paga licença, código restrito, interface gráfica predominante, suporte pago da Microsoft. Ambos exigem configuração mínima de hardware."
  },
  {
    id: "so-ta1-11",
    q: "O que são interrupções e exceções?",
    a: "Interrupção: evento externo ao programa (ex: dispositivo termina tarefa), o S.O. interrompe execução atual para tratar. Exceção: evento síncrono ligado ao programa (ex: divisão por zero), erro lógico que precisa ser tratado no código."
  },
  {
    id: "so-ta1-12",
    q: "O que são as técnicas de buffering e spooling?",
    a: "Buffering: usa registradores para transferir dados dos dispositivos de E/S para memória principal, permitindo acesso rápido e liberando dispositivos. Spooling: armazena Jobs em fita magnética para processamento sequencial, diminuindo tempo de processamento."
  },

  // ==================== TA2 - Processos e Threads ====================
  {
    id: "so-ta2-1",
    q: "O que são processos?",
    a: "São programas ou tarefas em execução. O S.O. os administra através do gerenciador de processos. Incluem contador de programa, registradores e variáveis. Diferem de programas: programa é a receita, processo é a execução dela."
  },
  {
    id: "so-ta2-2",
    q: "Quais são os estados de um processo?",
    a: "1) Execução (Running): sendo processado pela CPU. 2) Pronto (Ready): aguardando para ser processado. 3) Espera (Wait): aguardando recurso ou tratamento de evento."
  },
  {
    id: "so-ta2-3",
    q: "O que é PCB (Process Control Block)?",
    a: "É o Bloco de Controle de Processos, um conjunto de bits que armazena sinais de comunicação entre processos e eventos. Permite que processos fiquem em modo de espera até serem escalonados."
  },
  {
    id: "so-ta2-4",
    q: "Quais são os tipos de processos?",
    a: "1) CPU-bound: ocupa mais recursos da CPU, passa mais tempo em execução e pronto (operações de cálculo). 2) I/O-bound: passa maior tempo em espera (operações de leitura, gravação e processamento)."
  },
  {
    id: "so-ta2-5",
    q: "O que é pseudoparalelismo?",
    a: "É a falsa impressão de que todos os programas executam ao mesmo tempo. Na verdade, o S.O. alterna entre processos a cada milissegundos, dando a ilusão de paralelismo."
  },
  {
    id: "so-ta2-6",
    q: "O que são semáforos?",
    a: "Mecanismo criado por Dijkstra em 1965 para sincronizar processos. É uma variável inteira com operações DOWN (decremento) e UP (incremento). Classificação: binários (mutexes, valores 0 ou 1) e contadores (qualquer valor positivo)."
  },
  {
    id: "so-ta2-7",
    q: "O que é deadlock?",
    a: "Situação em que um processo aguarda indefinidamente por um recurso que nunca será liberado, devido à alocação dinâmica de recursos em sistemas concorrentes."
  },
  {
    id: "so-ta2-8",
    q: "O que são os comandos FORK e JOIN?",
    a: "FORK: cria um processo a partir do buffer, associando-o ao subprocesso (processo filho). JOIN: sincroniza processos criados pelo FORK, garantindo que um processo só execute após o encerramento de outro."
  },
  {
    id: "so-ta2-9",
    q: "O que são algoritmos de escalonamento?",
    a: "São políticas usadas pelo escalonador para otimizar o uso do processador, definindo qual processo ocupará a CPU. Exemplos: FIFO, SJF, Round Robin, Prioridade."
  },
  {
    id: "so-ta2-10",
    q: "Quais são os critérios de escalonamento?",
    a: "1) Utilização da CPU (ideal ≥90%). 2) Throughput: quantos processos executados por tempo. 3) Tempo de processador: tempo para executar e finalizar. 4) Tempo de espera: tempo na fila de pronto. 5) Tempo de turnaround: tempo total desde criação até encerramento."
  },
  {
    id: "so-ta2-11",
    q: "O que é escalonamento preemptivo e não preemptivo?",
    a: "Não preemptivo: recursos dedicados, só libera quando processo finaliza ou erro. Preemptivo: compartilhamento de tempo e recursos, intercala processos em execução."
  },
  {
    id: "so-ta2-12",
    q: "O que é o problema dos filósofos de Dijkstra?",
    a: "É um exemplo clássico de sincronização: cinco filósofos (processos) sentados à mesa com cinco garfos (recursos). Precisam de dois garfos para comer. Dijkstra propôs limitar a quatro filósofos sentados simultaneamente para evitar deadlock."
  },

  // ==================== TA3 - Sistema de Arquivos ====================
  {
    id: "so-ta3-1",
    q: "O que é um Sistema de Arquivos?",
    a: "É a estrutura que facilita a organização e identificação de arquivos no armazenamento. Realiza operações como criar, excluir, abrir, ler, gravar e fechar arquivos, além de gerenciar metadados."
  },
  {
    id: "so-ta3-2",
    q: "Quais são as organizações de arquivos?",
    a: "1) Sequencial: sem estrutura lógica, acesso precário (leitura de todos até encontrar). 2) Indexada: dados interligados por índice e chave de acesso. 3) Relativa/Direta: alocação dinâmica e aleatória, localização por chave de acesso."
  },
  {
    id: "so-ta3-3",
    q: "O que são sistemas de arquivos Linux e Windows?",
    a: "Linux: EXT2, EXT3, JFS, ReiserFS (hierárquico com raiz '/'). Windows: FAT16 (16 bits, até 2GB), FAT32 (32 bits, até 4GB), NTFS (seguro, suporte a discos grandes, permissões de acesso)."
  },
  {
    id: "so-ta3-4",
    q: "O que são estruturas de diretórios?",
    a: "1) Nível único: todas contas em um diretório (limitações, conflitos de nomes). 2) Dois níveis: primeiro nível divide contas de usuários, segundo aloca arquivos. 3) Árvore: estrutura hierárquica onde raiz é o usuário, galhos são diretórios, folhas são arquivos."
  },
  {
    id: "so-ta3-5",
    q: "O que são tabelas e listas encadeadas para alocação?",
    a: "Tabelas: cada linha representa um bloco do HD (0=livre, 1=ocupado), ocupa muito espaço. Listas encadeadas: controle pelos blocos livres, cada bloco aponta para o próximo disponível."
  },
  {
    id: "so-ta3-6",
    q: "O que é um descritor de arquivos?",
    a: "É um registro que mantém informações sobre o arquivo: atributos, localização e dados não visíveis ao usuário. Acessado em todas as operações de leitura e escrita."
  },
  {
    id: "so-ta3-7",
    q: "Quais são os métodos de implementação de sistemas de arquivos?",
    a: "1) Alocação contígua. 2) Lista encadeada: blocos ligados logicamente no disco. 3) FAT (File Allocation Table): ponteiros na memória principal. 4) I-nodes: cada arquivo associado a estrutura com atributos e endereços."
  },
  {
    id: "so-ta3-8",
    q: "O que são TDAA e TAAP?",
    a: "TDAA: Tabela de Descritores de Arquivos Abertos (atualiza informações para todos os processos). TAAP: Tabela de Descritores de Arquivos Abertos por Processo (posição corrente, permissão e ponteiro para TDAA)."
  },
  {
    id: "so-ta3-9",
    q: "Quais são os mecanismos de proteção de arquivos?",
    a: "1) Senha de acesso. 2) Grupo de usuários: associar usuários para compartilhar arquivos. 3) ACL (Access Control List): lista de permissões para cada usuário, S.O. verifica acesso."
  },
  {
    id: "so-ta3-10",
    q: "O que é o NFS (Network File System)?",
    a: "É um sistema de arquivos de rede compatível com Windows, Unix e Linux. Melhora acessibilidade, usa protocolo RPSEC_GSS para segurança, suporta servidores clusterizados e redes distribuídas, integra com Active Directory."
  },

  // ==================== TA4 - Gerenciamento de Memória e Dispositivos ====================
  {
    id: "so-ta4-1",
    q: "O que é gerenciamento de memória?",
    a: "É a função do S.O. de proteger áreas de memória, alocar quando processos precisam, liberar após término e controlar troca de processos entre memória e disco quando a RAM é insuficiente."
  },
  {
    id: "so-ta4-2",
    q: "O que é MMU (Memory Management Unit)?",
    a: "É a unidade de gerenciamento de memória que mapeia endereços lógicos em físicos. Converte endereços virtuais gerados pelos processos para endereços correspondentes na memória principal."
  },
  {
    id: "so-ta4-3",
    q: "Quais são os tipos de alocação de memória?",
    a: "1) Contígua simples: para S.O. monoprogramáveis (duas áreas: S.O. e aplicações). 2) Overlay: divide aplicação em módulos para alocação independente. 3) Particionada estática: partições de tamanho fixo. 4) Particionada dinâmica: espaço suficiente para cada programa."
  },
  {
    id: "so-ta4-4",
    q: "O que é Swapping (troca de processos)?",
    a: "Técnica que carrega todo programa para memória principal, executa por tempo definido e retorna para disco. Opera com swap out (memória→disco) e swap in (disco→memória)."
  },
  {
    id: "so-ta4-5",
    q: "Quais são os algoritmos de alocação de memória?",
    a: "1) First Fit: primeiro segmento livre suficiente. 2) Next Fit: variação do First Fit (memoriza posição). 3) Best Fit: menor segmento livre suficiente. 4) Worst Fit: maior segmento disponível. 5) Quick Fit: listas separadas por tamanhos mais solicitados."
  },
  {
    id: "so-ta4-6",
    q: "O que é Memória Virtual?",
    a: "Permite que programas ultrapassem a memória física disponível, mantendo partes ativas na RAM e demais no disco. É um arquivo dinâmico e de tamanho variável que reduz fragmentação da memória principal."
  },
  {
    id: "so-ta4-7",
    q: "O que é Paginação?",
    a: "Técnica de gerência de memória onde endereçamento virtual e real são divididos em blocos do mesmo tamanho (páginas). Foi criada para fornecer espaço de endereçamento linear sem necessidade de mais memória física."
  },
  {
    id: "so-ta4-8",
    q: "Quais são as políticas de busca de páginas?",
    a: "1) Paginação por demanda: transferência apenas quando há referência. 2) Paginação antecipada: acréscimo de páginas caso o processo precise. Inclui políticas de alocação, substituição e working set."
  },
  {
    id: "so-ta4-9",
    q: "O que é o subsistema de E/S?",
    a: "É a camada que distingue solicitações de cada dispositivo e executa rotinas de comunicação entre aplicações, sistemas de arquivos, SGBDs e device drivers. Isola atividades dos periféricos."
  },
  {
    id: "so-ta4-10",
    q: "O que são Device Drivers?",
    a: "São instruções que interpretam e traduzem solicitações do controlador para comandos compreensíveis pelo subsistema de E/S. Facilitam a comunicação entre hardware e software."
  },
  {
    id: "so-ta4-11",
    q: "O que são Line Discipline, Raw e Cooked?",
    a: "Line Discipline: interface entre processos de usuários e drivers de terminal (codificação/decodificação). Raw: transmissão de caracteres de entrada. Cooked: codificação de caracteres de entrada processados."
  },
  {
    id: "so-ta4-12",
    q: "O que são Clist e Cblocks?",
    a: "Clist: lista encadeada de blocos de caracteres (Cblocks) que armazena dados de E/S. Possui três operações: Raw Clist (dados de entrada), Cooked Clist (dados processados), Output Clist (dados de saída para o usuário)."
  }
];

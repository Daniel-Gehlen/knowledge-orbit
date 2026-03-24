export const sistemaUnix = [
  // === SISTEMA DE ARQUIVOS ===
  { q: "O que é o diretório raiz (/) no Unix?", a: "O diretório raiz é o ponto de partida de toda a árvore de arquivos do sistema Unix. Todos os outros diretórios e arquivos estão organizados abaixo dele, como galhos de uma árvore invertida." },
  { q: "Para que serve o diretório /home?", a: "Armazena os diretórios pessoais dos usuários. Cada usuário tem sua própria pasta dentro de /home (ex: /home/usuario) onde guarda seus arquivos pessoais." },
  { q: "Para que serve o diretório /etc?", a: "Contém arquivos de configuração do sistema e dos serviços instalados. É como o 'cérebro de configurações' do sistema — quase toda opção global fica aqui." },
  { q: "Para que serve o diretório /var?", a: "Armazena dados variáveis que mudam durante a execução do sistema: logs (/var/log), cache, filas de impressão e bancos de dados." },
  { q: "Para que serve o diretório /tmp?", a: "Diretório temporário para arquivos criados por programas e usuários. Geralmente é limpo automaticamente a cada reinicialização." },
  { q: "Para que serve o diretório /dev?", a: "Contém arquivos especiais que representam dispositivos físicos (disco, teclado, mouse) e virtuais (/dev/null, /dev/zero). No Unix, tudo é arquivo, incluindo dispositivos." },
  { q: "O que é um link simbólico (ln -s)?", a: "Um atalho que aponta para outro arquivo ou diretório. É como um 'atalho do Windows', mas mais poderoso — se o arquivo original for movido, o link pode quebrar." },
  { q: "O que é um link físico (ln)?", a: "Cria uma entrada adicional para o mesmo inode (dados físicos) do arquivo. Diferente do symlink, ambos os nomes apontam para os mesmos dados no disco." },
  { q: "Para que servem mount e umount?", a: "mount conecta um sistema de arquivos (dispositivo, ISO, rede) a um ponto de montagem no sistema. umount desconecta com segurança. Exemplo: mount /dev/sda1 /mnt" },
  { q: "O que são inodes?", a: "Estruturas de dados que armazenam metadados de um arquivo (tamanho, permissões, dono, datas). Cada arquivo tem um único inode. O nome do arquivo é apenas uma entrada que aponta para o inode." },
  { q: "O que significa 'tudo é arquivo' no Unix?", a: "Filosofia fundamental do Unix: dispositivos de hardware, sockets de rede, pipes e até processos são representados como arquivos no sistema, unificando a interface de acesso." },

  // === PERMISSÕES ===
  { q: "O que significam rwx nas permissões?", a: "r = read (leitura, valor 4), w = write (escrita, valor 2), x = execute (execução, valor 1). São aplicadas separadamente para dono (owner), grupo (group) e outros (others)." },
  { q: "Como funciona o comando chmod?", a: "Altera permissões de arquivos. Modo numérico: chmod 755 arquivo (rwxr-xr-x). Modo simbólico: chmod u+x arquivo (adiciona execução ao dono). Os números somam r+w+x." },
  { q: "Como funciona o comando chown?", a: "Altera o dono e/ou grupo de um arquivo. Exemplo: chown usuario:grupo arquivo. Requer permissão de root para transferir propriedade." },
  { q: "Como funciona o comando chgrp?", a: "Altera apenas o grupo de um arquivo. Exemplo: chgrp desenvolvedores arquivo. Mais restrito que chown, só mexe no grupo." },
  { q: "O que é umask?", a: "Define as permissões padrão para novos arquivos criados. É uma 'máscara' que remove permissões. Exemplo: umask 022 cria arquivos com 644 (rw-r--r--) e diretórios com 755." },
  { q: "O que é SUID (Set User ID)?", a: "Permissão especial que faz um programa executar com as permissões do dono do arquivo, não de quem o executou. Útil para programas como passwd que precisam de acesso root temporário. Representado por 's' no lugar do 'x' do owner." },
  { q: "O que é SGID (Set Group ID)?", a: "Similar ao SUID, mas executa com as permissões do grupo. Em diretórios, garante que novos arquivos herdem o grupo do diretório. Representado por 's' no lugar do 'x' do grupo." },
  { q: "O que é sticky bit?", a: "Permissão especial em diretórios que impede que usuários apaguem arquivos de outros usuários. Exemplo: /tmp tem sticky bit. Representado por 't' no lugar do 'x' de others." },

  // === PROCESSOS ===
  { q: "O que é um processo no Unix?", a: "Uma instância de um programa em execução. Cada processo tem um PID (identificador único), um PPID (pai), e ocupa memória e CPU. O processo init (PID 1) é o ancestral de todos." },
  { q: "Para que serve o comando ps?", a: "Lista os processos em execução. ps aux mostra todos os processos de todos os usuários com detalhes (CPU, memória, PID). ps -ef mostra a árvore de processos." },
  { q: "Para que serve o comando top?", a: "Monitor de processos em tempo real, mostrando os mais pesados por CPU/memória. Atualiza a cada 3 segundos. htop é uma alternativa mais moderna e colorida." },
  { q: "Como funciona o comando kill?", a: "Envia sinais para processos. kill PID envia SIGTERM (encerramento gentil). kill -9 PID envia SIGKILL (encerramento forçado, sem chance de salvar dados)." },
  { q: "Como funciona o comando killall?", a: "Mata processos pelo nome, não pelo PID. Exemplo: killall firefox encerra todas as instâncias do Firefox. Cuidado: pode matar processos importantes se usado incorretamente." },
  { q: "Para que servem nice e renice?", a: "nice inicia um processo com prioridade ajustada (-20 a 19, onde -20 é mais prioritário). renice altera a prioridade de um processo já em execução." },
  { q: "O que faz o símbolo & após um comando?", a: "Executa o comando em segundo plano (background), liberando o terminal. Exemplo: sleep 100 &. O terminal mostra o PID do processo." },
  { q: "Para que servem os comandos jobs, fg e bg?", a: "jobs lista processos em segundo plano. fg traz o último processo para o foreground. bg continua um processo suspenso em segundo plano. Ctrl+Z suspende um processo." },
  { q: "Para que serve o comando nohup?", a: "Executa um comando imune ao sinal SIGHUP (desconexão do terminal). O processo continua rodando mesmo após fechar o terminal. Exemplo: nohup ./script.sh &" },
  { q: "O que são sinais Unix?", a: "Mensagens enviadas a processos: SIGHUP (1, recarregar), SIGINT (2, interromper/Ctrl+C), SIGKILL (9, forçar morte), SIGTERM (15, encerrar gentilmente), SIGSTOP (19, pausar)." },

  // === PIPES E REDIRECIONAMENTO ===
  { q: "O que é o pipe (|) no Unix?", a: "Conecta a saída de um comando à entrada de outro. É como uma 'mangueira' que passa dados entre programas. Exemplo: cat arquivo.txt | grep 'erro' | wc -l conta linhas com 'erro'." },
  { q: "O que faz o redirecionamento de saída (>)?", a: "Grava a saída de um comando em um arquivo, sobrescrevendo-o se existir. Exemplo: ls > lista.txt. Use >> para anexar ao invés de sobrescrever." },
  { q: "O que faz o redirecionamento de entrada (<)?", a: "Lê a entrada de um comando a partir de um arquivo. Exemplo: sort < desordenado.txt. O comando 'sort' recebe o conteúdo do arquivo como entrada." },
  { q: "O que é o redirecionamento de erro (2>)?", a: "Redireciona mensagens de erro (stderr) para um arquivo. Exemplo: comando 2> erros.log. Use 2>&1 para juntar erro e saída normal." },
  { q: "Para que serve o comando tee?", a: "Lê da entrada padrão e escreve tanto na saída quanto em arquivos. Exemplo: ls | tee lista.txt mostra na tela E salva no arquivo. Útil para logs em tempo real." },
  { q: "Para que serve o comando xargs?", a: "Converte entrada padrão em argumentos de comando. Exemplo: find . -name '*.txt' | xargs rm remove todos os arquivos .txt encontrados." },
  { q: "Qual a diferença entre stdin, stdout e stderr?", a: "stdin (0) é a entrada padrão (teclado). stdout (1) é a saída normal (tela). stderr (2) são mensagens de erro. Todos podem ser redirecionados separadamente." },

  // === FILTROS E BUSCA ===
  { q: "Para que serve o comando grep?", a: "Busca padrões em texto usando expressões regulares. grep 'padrão' arquivo.txt mostra linhas que contêm o padrão. Opções: -i (ignorar maiúsculas), -r (recursivo), -v (inverter)." },
  { q: "Para que serve o comando find?", a: "Busca arquivos e diretórios por nome, tipo, tamanho, data, etc. Exemplo: find /home -name '*.pdf' -mtime -7 busca PDFs modificados nos últimos 7 dias." },
  { q: "Qual a diferença entre find e locate?", a: "find busca em tempo real pelo sistema de arquivos (mais preciso mas mais lento). locate usa um banco de dados pré-indexado (mais rápido mas pode estar desatualizado)." },
  { q: "Para que servem which e whereis?", a: "which mostra o caminho completo de um comando executável. whereis mostra o binário, código fonte e páginas de manual de um comando." },
  { q: "Para que serve o comando awk?", a: "Linguagem de programação para processamento de texto por colunas. Exemplo: awk '{print $1, $3}' arquivo.txt imprime as colunas 1 e 3. É como um 'Excel da linha de comando'." },
  { q: "Para que serve o comando sed?", a: "Editor de stream que transforma texto com expressões regulares. Exemplo: sed 's/antigo/novo/g' arquivo.txt substitui todas as ocorrências de 'antigo' por 'novo'." },
  { q: "Para que servem sort e uniq?", a: "sort ordena linhas alfabeticamente ou numericamente. uniq remove linhas duplicadas consecutivas (use sort | uniq para remover todas as duplicatas)." },
  { q: "Para que serve o comando wc?", a: "Conta linhas, palavras e caracteres. wc -l conta linhas, -w conta palavras, -c conta bytes. Exemplo: cat arquivo | wc -l." },
  { q: "Para que servem head e tail?", a: "head mostra as primeiras N linhas de um arquivo (padrão 10). tail mostra as últimas N linhas. tail -f acompanha atualizações em tempo real (útil para logs)." },
  { q: "Para que serve o comando cut?", a: "Extrai colunas específicas de um arquivo baseado em delimitador. Exemplo: cut -d':' -f1 /etc/passwd mostra apenas os nomes de usuário." },

  // === SHELL ===
  { q: "O que é um Shell?", a: "Interface de linha de comando entre o usuário e o kernel do Unix. Interpreta comandos, executa scripts e gerencia processos. Exemplos: bash, sh, zsh, fish." },
  { q: "Qual a diferença entre bash, sh e zsh?", a: "sh (Bourne Shell) é o shell original. bash (Bourne Again Shell) é o padrão na maioria das distribuições Linux. zsh é mais moderno com autocompletar avançado e temas." },
  { q: "O que são variáveis de ambiente?", a: "Variáveis que afetam o comportamento do shell e dos programas. Exemplos: HOME (diretório do usuário), PATH (caminhos de busca de comandos), USER (nome do usuário)." },
  { q: "O que é a variável PATH?", a: "Lista de diretórios onde o shell procura comandos executáveis, separados por dois pontos (:). Exemplo: /usr/bin:/bin. Adicione caminhos com export PATH=$PATH:/novo/caminho." },
  { q: "O que são aliases no shell?", a: "Atalhos para comandos longos. Exemplo: alias ll='ls -la'. Coloque no ~/.bashrc para persistir entre sessões. Use unalias para remover." },
  { q: "Para que servem os arquivos .bashrc e .profile?", a: ".bashrc é executado a cada nova sessão interativa do bash (configurações, aliases). .profile é executado no login (variáveis de ambiente). São os 'scripts de inicialização' do shell." },
  { q: "O que é um script shell?", a: "Arquivo de texto com comandos Unix executáveis. Começa com #!/bin/bash (shebang). Use chmod +x script.sh para dar permissão de execução e ./script.sh para rodar." },

  // === GERENCIAMENTO DE PACOTES ===
  { q: "Para que serve o comando apt?", a: "Gerenciador de pacotes do Debian/Ubuntu. apt update atualiza lista de pacotes. apt install pacote instala. apt remove pacote desinstala. apt upgrade atualiza todos os pacotes." },
  { q: "Qual a diferença entre apt, yum e dnf?", a: "apt é para Debian/Ubuntu. yum é para CentOS/RHEL antigos. dnf é o sucessor do yum, usado em Fedora e RHEL 8+. Todos gerenciam pacotes .rpm ou .deb." },
  { q: "Para que serve o comando pip?", a: "Gerenciador de pacotes Python. pip install numpy instala bibliotecas Python. pip list mostra pacotes instalados. pip freeze > requirements.txt gera lista de dependências." },

  // === REDE ===
  { q: "Para que serve o comando ssh?", a: "Conexão segura remota criptografada a outro computador. Exemplo: ssh usuario@servidor. Usa porta 22 por padrão. Configurações ficam em ~/.ssh/config." },
  { q: "Para que serve o comando scp?", a: "Copia arquivos entre computadores via SSH. Exemplo: scp arquivo.txt usuario@servidor:/destino/ copia para o servidor. Use -r para diretórios." },
  { q: "Para que serve o comando rsync?", a: "Sincronização eficiente de arquivos, transferindo apenas as diferenças. Exemplo: rsync -avz origem/ destino/. Muito usado para backups e deploys." },
  { q: "Para que serve o comando ping?", a: "Testa conectividade com outro host enviando pacotes ICMP. Exemplo: ping google.com. Ctrl+C para parar. Útil para diagnosticar problemas de rede." },
  { q: "Para que servem ifconfig e ip?", a: "ifconfig (antigo) mostra/configura interfaces de rede. ip (moderno) é o substituto: ip addr mostra endereços, ip link mostra interfaces. Recomenda-se usar ip." },
  { q: "Para que serve o comando netstat?", a: "Mostra conexões de rede, portas abertas e rotas. netstat -tulpn mostra portas TCP/UDP em uso com PIDs. ss é o comando moderno equivalente." },
  { q: "Para que servem curl e wget?", a: "curl transfere dados de URLs (suporta HTTP, FTP, etc). wget baixa arquivos da web. curl é mais versátil para APIs; wget é melhor para downloads recursivos." },

  // === COMPRESSÃO ===
  { q: "Para que serve o comando tar?", a: "Agrupa múltiplos arquivos em um arquivo tarball (.tar). tar -cvf arquivo.tar dir/ cria. tar -xvf arquivo.tar extrai. Use -z para gzip, -j para bzip2." },
  { q: "Qual a diferença entre gzip e bzip2?", a: "gzip é mais rápido e comum (.gz). bzip2 comprime mais mas é mais lento (.bz2). xz oferece melhor compressão mas é ainda mais lento (.xz)." },
  { q: "Para que servem zip e unzip?", a: "Formato compatível com Windows. zip arquivo.zip arquivos cria o arquivo compactado. unzip arquivo.zip extrai. Use -r para incluir diretórios recursivamente." },

  // === EDITORES ===
  { q: "O que é o editor vi/vim?", a: "Editor modal poderoso e presente em quase todo Unix. Modos: Normal (navegação), Insert (edição, tecla i), Command (comandos, tecla :). vim é a versão melhorada do vi." },
  { q: "Comandos básicos do vim?", a: "i = entrar modo insert, ESC = voltar modo normal, :w = salvar, :q = sair, :wq = salvar e sair, :q! = sair sem salvar, dd = deletar linha, yy = copiar linha, p = colar." },
  { q: "O que é o editor nano?", a: "Editor simples e amigável para iniciantes. Mostra os comandos na tela (^O salvar, ^X sair). Menos poderoso que vim, mas muito mais fácil de aprender." },
  { q: "O que é o editor emacs?", a: "Editor extensível que pode funcionar como IDE, navegador de email, gerenciador de arquivos e até navegador web. Usa combinações de teclas (Ctrl+X Ctrl+S para salvar)." },

  // === CONCEITOS AVANÇADOS ===
  { q: "O que é o Kernel?", a: "Núcleo do sistema operacional que gerencia hardware (CPU, memória, dispositivos) e fornece serviços aos programas. É o 'coração' do sistema, sempre em execução." },
  { q: "O que são runlevels?", a: "Modos de operação do sistema: 0 (halt), 1 (single-user), 2-3 (multi-user), 5 (GUI), 6 (reboot). Systemd usa targets como graphical.target e multi-user.target." },
  { q: "O que é o sistema init/systemd?", a: "Primeiro processo iniciado pelo kernel (PID 1). init é o tradicional. systemd é o moderno, usado pela maioria das distribuições. Gerencia todos os outros serviços." },
  { q: "O que são daemons?", a: "Processos que rodam em segundo plano, sem interface gráfica. Exemplos: sshd (servidor SSH), httpd (servidor web), crond (agendador de tarefas). Terminam com 'd'." },
  { q: "O que é o comando cron?", a: "Agendador de tarefas que executa comandos em horários programados. crontab -e edita a tabela. Formato: minuto hora dia mês dia_semana comando." },
  { q: "O que é um socket Unix?", a: "Mecanismo de comunicação entre processos no mesmo computador. Mais rápido que TCP/IP local. Usado por bancos de dados e servidores para comunicação interna." },
  { q: "O que são regular expressions (regex)?", a: "Padrões para buscar e manipular texto. . (qualquer char), * (zero ou mais), + (uma ou mais), [] (classe), ^ (início), $ (fim). Usadas por grep, sed, awk." },
  { q: "O que é o comando tee?", a: "Lê da entrada padrão e escreve na saída padrão E em arquivos simultaneamente. Exemplo: echo 'log' | tee -a arquivo.log mostra na tela e adiciona ao arquivo." },
  { q: "O que é stdin (0), stdout (1) e stderr (2)?", a: "Descritores de arquivo padrão: 0 = entrada (teclado), 1 = saída normal (tela), 2 = saída de erro (tela vermelha). Podem ser redirecionados independentemente." }
];

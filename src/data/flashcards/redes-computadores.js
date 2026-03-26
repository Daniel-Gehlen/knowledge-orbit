export const redesComputadores = [
  // Fundamentos de Redes
  { q: "O que é uma Rede de Computadores?", a: "É um conjunto de dispositivos (computadores, impressoras, servidores) interconectados que trocam dados e compartilham recursos usando protocolos de comunicação. Permitem comunicação local ou global." },
  { q: "O que é um Protocolo?", a: "É um conjunto de regras que define como os dispositivos se comunicam em uma rede. Exemplos: TCP/IP, HTTP, FTP. São como 'regras de trânsito' para dados." },
  { q: "O que é um Endereço IP?", a: "É um número único que identifica cada dispositivo na rede. IPv4 usa 32 bits (ex: 192.168.1.1), IPv6 usa 128 bits. Funciona como um 'número de telefone' para dispositivos." },
  { q: "O que é um Endereço MAC?", a: "É um identificador físico único de 48 bits gravado na placa de rede. Usado na camada de enlace para identificar dispositivos em redes locais." },
  { q: "O que é um ISP?", a: "Internet Service Provider: empresa que fornece acesso à internet. Conecta usuários à rede mundial através de infraestrutura própria e contratos de serviço." },
  { q: "O que é um Backbone?", a: "É a 'espinha dorsal' da internet: rede de alta capacidade que interconecta ISPs e regiões geográficas. Permite tráfego de dados em larga escala globalmente." },

  // Modelo OSI
  { q: "O que é o Modelo OSI?", a: "Modelo de referência com 7 camadas para padronizar comunicação de redes: Física, Enlace, Rede, Transporte, Sessão, Apresentação e Aplicação." },
  { q: "O que é a Camada Física (OSI)?", a: "Camada 1: transmite bits pelo meio físico. Define voltagens, duração dos bits e método de transmissão. Exemplos: cabos, hubs, repetidores." },
  { q: "O que é a Camada de Enlace (OSI)?", a: "Camada 2: transforma dados em quadros, detecta erros e controla acesso ao meio. Usa endereços MAC. Exemplos: switches, bridges." },
  { q: "O que é a Camada de Rede (OSI)?", a: "Camada 3: roteia pacotes de dados entre redes usando endereços IP. Controla congestionamento. Exemplo: roteadores." },
  { q: "O que é a Camada de Transporte (OSI)?", a: "Camada 4: garante entrega confiável de dados usando TCP (com confirmação) ou UDP (sem confirmação). Gerencia fluxo e erros." },
  { q: "O que é a Camada de Sessão (OSI)?", a: "Camada 5: gerencia conexões entre dispositivos, controlando início, manutenção e encerramento de sessões de comunicação." },
  { q: "O que é a Camada de Apresentação (OSI)?", a: "Camada 6: lida com formatação, codificação e criptografia dos dados. Traduz informações para diferentes sistemas." },
  { q: "O que é a Camada de Aplicação (OSI)?", a: "Camada 7: interface com o usuário final. Fornece serviços como HTTP, FTP, SMTP, DNS. Onde aplicativos interagem com a rede." },

  // TCP/IP
  { q: "O que é a Arquitetura TCP/IP?", a: "Modelo prático com 4 camadas: Acesso à Rede, Internet, Transporte e Aplicação. É a base da internet moderna." },
  { q: "O que é o protocolo TCP?", a: "Transmission Control Protocol: orientado à conexão, garante entrega confiável de dados. Confirma recebimento e retransmite pacotes perdidos." },
  { q: "O que é o protocolo UDP?", a: "User Datagram Protocol: sem conexão, não garante entrega. Mais rápido, usado para streaming e jogos online onde velocidade é prioritária." },
  { q: "O que é o protocolo HTTP?", a: "Hypertext Transfer Protocol: usado para navegação web. Permite transferência de páginas e recursos entre clientes e servidores." },
  { q: "O que é o protocolo HTTPS?", a: "HTTP Secure: versão segura do HTTP usando TLS/SSL para criptografar comunicações. Protege dados sensíveis em trânsito." },
  { q: "O que é o protocolo DNS?", a: "Domain Name System: traduz nomes de domínio (google.com) em endereços IP. É como uma 'lista telefônica' da internet." },
  { q: "O que é o protocolo DHCP?", a: "Dynamic Host Configuration Protocol: atribui endereços IP automaticamente aos dispositivos. Simplifica configuração de rede." },
  { q: "O que é o protocolo FTP?", a: "File Transfer Protocol: usado para transferência de arquivos entre clientes e servidores. Permite upload e download de arquivos." },
  { q: "O que é o protocolo SSH?", a: "Secure Shell: acesso remoto seguro a dispositivos. Criptografa comunicação para proteger dados durante conexões remotas." },
  { q: "O que é o protocolo SMTP?", a: "Simple Mail Transfer Protocol: usado para envio de e-mails entre servidores. Gerencia transferência de mensagens." },

  // Ethernet e Hardware
  { q: "O que é Ethernet?", a: "Tecnologia de rede que opera nas camadas física e de enlace. Define como dados são transmitidos em redes com fio usando cabos e switches." },
  { q: "O que é um Switch?", a: "Dispositivo de rede camada 2 que encaminha quadros baseado em endereços MAC. Cria domínios de colisão separados por porta." },
  { q: "O que é um Roteador?", a: "Dispositivo camada 3 que conecta redes diferentes e encaminha pacotes baseado em endereços IP. Quebra domínios de broadcast." },
  { q: "O que é um Hub?", a: "Dispositivo camada 1 que repete sinais para todas as portas. Cria único domínio de colisão. Menos eficiente que switches." },
  { q: "O que é um Modem?", a: "Dispositivo que modula e demodula sinais para transmissão. Converte dados digitais em analógicos e vice-versa." },

  // Conceitos de Rede
  { q: "O que é um Domínio de Colisão?", a: "Área da rede onde pacotes podem colidir. Switches criam domínios separados por porta. Hubs criam único domínio." },
  { q: "O que é um Domínio de Broadcast?", a: "Área da rede onde pacotes de broadcast são recebidos por todos dispositivos. Roteadores quebram domínios de broadcast." },
  { q: "O que é uma VLAN?", a: "Virtual Local Area Network: segmenta rede fisicamente em sub-redes lógicas. Melhora segurança e gerenciamento de tráfego." },
  { q: "O que é NAT?", a: "Network Address Translation: permite vários dispositivos compartilharem um único IP público. Traduz endereços privados para públicos." },

  // IPv4 e IPv6
  { q: "O que é IPv4?", a: "Internet Protocol version 4: usa endereços de 32 bits (ex: 192.168.1.1). Suporta cerca de 4,3 bilhões de endereços únicos." },
  { q: "O que é IPv6?", a: "Internet Protocol version 6: usa endereços de 128 bits. Resolve escassez de endereços IPv4 com espaço virtualmente ilimitado." },
  { q: "O que é uma Máscara de Sub-rede?", a: "Define parte de rede e parte do host em endereço IP. Ex: 255.255.255.0 indica 24 bits para rede, 8 para hosts." },
  { q: "O que é CIDR?", a: "Classless Inter-Domain Routing: permite criar sub-redes personalizadas usando notação como /24. Mais flexível que classes fixas." },

  // Segurança
  { q: "O que é um Firewall?", a: "Sistema de segurança que monitora e controla tráfego de rede baseado em regras. Pode ser hardware ou software." },
  { q: "O que é Criptografia?", a: "Técnica de proteger dados transformando-os em formato ilegível sem chave apropriada. Protege confidencialidade e integridade." },
  { q: "O que é SSL/TLS?", a: "Secure Sockets Layer/Transport Layer Security: protocolos de segurança que criptografam comunicações web. Base do HTTPS." },
  { q: "O que é VPN?", a: "Virtual Private Network: cria túnel seguro sobre redes públicas. Criptografa tráfego para proteger privacidade e segurança." },

  // Gerenciamento
  { q: "O que é SNMP?", a: "Simple Network Management Protocol: monitora e gerencia dispositivos de rede. Coleta informações sobre estado e desempenho." },
  { q: "O que é QoS?", a: "Quality of Service: conjunto de regras para otimizar uso de recursos de rede. Prioriza tráfego baseado em latência, jitter e perda de pacotes." },
  { q: "O que é Latência?", a: "Tempo entre envio e confirmação de recebimento de pacote. Inclui tempo de transmissão e propagação. Afeta experiência do usuário." },
  { q: "O que é Jitter?", a: "Variação no tempo de entrega de pacotes devido a variação de latência. Afeta qualidade em comunicações em tempo real como VoIP." },
  { q: "O que é Throughput?", a: "Quantidade de dados transferidos por unidade de tempo. Representa velocidade real de transferência na rede." }
];

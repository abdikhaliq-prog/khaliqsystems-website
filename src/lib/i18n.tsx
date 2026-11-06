import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "pt" | "en";

export const WHATSAPP_URL = "https://wa.me/5511926749544";
export const WHATSAPP_DISPLAY = "+55 11 92674-9544";
export const CONTACT_EMAIL = "khaliqsystems@gmail.com";

type Dict = typeof pt;

const pt = {
  meta: {
    title: "Khaliq Systems | Automação com IA, Sites e Sistemas Digitais",
    description:
      "A Khaliq Systems é uma empresa de tecnologia em São Paulo, Brasil, que constrói automação com IA, sistemas de WhatsApp, sites empresariais e infraestrutura digital inteligente para empresas modernas.",
  },

  nav: {
    home: "Início",
    features: "Recursos",
    demos: "Demos",
    faq: "FAQ",
    websites: "Sites",
    solutions: "Soluções",
    industries: "Setores",
    about: "Sobre",
    contact: "Contato",
    systems: "Sistemas",
    automations: "Automations",
    digital: "Digital",
  },
  cta: {
    whatsapp: "Fale conosco pelo WhatsApp",
    sofia: "Conheça a Sofia",
  },
  parent: {
    hero: {
      eyebrow: "Khaliq Systems · São Paulo, Brasil",
      title: ["Infraestrutura operacional inteligente", "para empresas modernas."],
      body: "Projetamos sistemas confiáveis de IA, automação e tecnologia digital que passam a fazer parte da forma como as empresas operam.",
      primary: "Conheça nossos sistemas",
      secondary: "Fale com a gente",
      pillars: [
        "Inteligência artificial",
        "Automação",
        "Sites e sistemas digitais",
        "Infraestrutura digital",
      ],
    },
    systems: {
      eyebrow: "Ecossistema",
      title: "Nossos Sistemas",
      body: "Sistemas de IA desenvolvidos para a operação real das empresas — e a infraestrutura que os mantém funcionando.",
      aiLabel: "Sistemas de IA",
      ai: [
        {
          status: "",
          name: "Recepcionista de IA",
          desc: "Uma recepção inteligente que conduz conversas com clientes, responde dúvidas aprovadas do negócio, orienta o cliente, apoia agendamentos e faz follow-up quando apropriado.",
          areas: [
            "Conversas no WhatsApp",
            "Dúvidas e orientação ao cliente",
            "Agendamentos",
            "Follow-up automático",
            "Transferência para humano",
          ],
          cta: "Conhecer a Recepcionista de IA",
          to: "/automations",
        },
      ],

      supportLabel: "Sistemas de apoio ao negócio",
      support: [
        {
          status: "",
          name: "Automação e Integrações",
          desc: "Sistemas confiáveis de automação e integração criados para conectar ferramentas, eliminar trabalho repetitivo e melhorar a operação do dia a dia.",
          areas: [
            "Automação de WhatsApp",
            "Fluxos em n8n",
            "Integrações com CRM",
            "Fluxos de agendamento",
            "Integrações de API",
            "Automação de processos internos",
          ],
          cta: "Conhecer a Automations",
          to: "/automations",
        },
        {
          status: "",
          name: "Sites e Sistemas Digitais",
          desc: "Sites profissionais e sistemas digitais construídos em torno de usabilidade, performance e funcionalidade real de negócio.",
          areas: [
            "Sites empresariais",
            "Desenvolvimento de sites",
            "Design responsivo",
            "Landing pages",
            "Integrações de site",
            "Infraestrutura digital",
          ],
          cta: "Conhecer a Digital",
          to: "/digital",
        },
      ],
      futureLabel: "Direção futura",
      future: {
        status: "Sistemas futuros",
        name: "Khaliq Autonomous",
        desc: "Nossa direção de longo prazo em sistemas autônomos inteligentes e robótica.",
        note: "Ainda não são serviços comercialmente disponíveis.",
      },
    },

    about: {
      eyebrow: "Khaliq Systems",
      title: "Feita para sistemas em que empresas podem confiar.",
      body: "A Khaliq Systems é uma empresa de tecnologia sediada em São Paulo, Brasil, que desenvolve infraestrutura operacional inteligente para empresas modernas. Por meio de nossas divisões especializadas, desenvolvemos automação com inteligência artificial, sistemas inteligentes de comunicação com clientes, websites empresariais, sistemas digitais e tecnologia operacional para ajudar empresas a operar com mais eficiência.",
      cta: "Sobre a Khaliq Systems",
    },
    principles: {
      eyebrow: "Engenharia",
      title: "Como projetamos",
      items: [
        ["Confiabilidade", "A Sofia responde na hora, sem depender de alguém estar disponível."],
        ["Regras operacionais claras", "Cada sistema sabe o que pode e o que não pode fazer."],
        ["Supervisão humana", "Casos sensíveis sempre chegam a uma pessoa."],
        ["Manutenibilidade", "Arquitetura documentada e fácil de evoluir."],
        ["IA responsável", "Implantação medida, sem promessas exageradas."],
      ],
    },
  },
  automationsPage: {
    eyebrow: "Khaliq Automations",
    title: ["IA e automação de WhatsApp", "para empresas brasileiras."],
    body: "A Khaliq Automations é a divisão de automação da Khaliq Systems. Construímos recepcionistas de IA e sistemas de atendimento que respondem na hora, automatizam o trabalho repetitivo e escalam para a equipe quando necessário.",
    parentLink: "Uma divisão da Khaliq Systems",
  },
  digitalPage: {
    eyebrow: "Khaliq Digital",
    title: ["Sites construídos", "em torno do seu negócio."],
    body: "A Khaliq Digital projeta sites modernos e responsivos e sistemas digitais que ajudam empresas a estabelecer uma presença profissional online e conectar suas operações digitais.",
    cta: "Começar um projeto",
    exampleAlt:
      "Exemplos de sites para uma clínica, uma pousada, um restaurante, uma academia e um salão de beleza, no computador e no celular",
    exampleCaption: "Exemplos de layout",
    examples: {
      pick: "Escolha um tipo de negócio:",
      tabs: {
        clinica: "Clínica",
        pousada: "Pousada",
        restaurante: "Restaurante",
        academia: "Academia",
        salao: "Salão de beleza",
      },
      gallery: "Conheça o espaço",
      clinica: {
        brand: "Sua Clínica",
        nav: ["Especialidades", "Equipe", "Contato"],
        heading: "Consultas com hora marcada",
        sub: "Atendimento humanizado e várias especialidades em um só lugar.",
        sectionTitle: "Especialidades",
        cards: [
          ["Clínica geral", "Consultas e check-up"],
          ["Pediatria", "Cuidado para crianças"],
          ["Odontologia", "Limpeza e clareamento"],
        ],
        button: "Agende pelo WhatsApp",
        info: "Seg a sex, 8h às 18h · Vila Mariana, São Paulo",
      },
      pousada: {
        brand: "Sua Pousada",
        nav: ["Quartos", "Experiências", "Contato"],
        heading: "Uma estadia tranquila em São Paulo",
        sub: "Quartos confortáveis, café da manhã e atendimento próximo.",
        sectionTitle: "Acomodações",
        cards: [
          ["Quarto Standard", "Até 2 pessoas"],
          ["Quarto Superior", "Varanda e vista"],
          ["Suíte", "Banheira e sala"],
        ],
        button: "Reservar pelo WhatsApp",
        info: "Check-in a partir das 14h · Café da manhã incluso",
      },
      restaurante: {
        brand: "Seu Restaurante",
        nav: ["Cardápio", "Sobre", "Contato"],
        heading: "Comida boa, todo dia.",
        sub: "Pratos feitos na hora, com ingredientes frescos.",
        sectionTitle: "Nosso cardápio",
        cards: [
          ["Picanha", "R$ 32,00"],
          ["Strogonoff", "R$ 22,00"],
          ["Parmegiana", "R$ 30,00"],
        ],
        button: "Pedir no WhatsApp",
        info: "Estamos aqui · Aberto todos os dias, 11h às 23h",
      },
      academia: {
        brand: "Sua Academia",
        nav: ["Planos", "Aulas", "Contato"],
        heading: "Treine no seu ritmo",
        sub: "Musculação, aulas coletivas e professores para acompanhar seu treino.",
        sectionTitle: "Planos",
        cards: [
          ["Mensal", "R$ 119/mês"],
          ["Trimestral", "R$ 99/mês"],
          ["Anual", "R$ 89/mês"],
        ],
        button: "Agendar aula experimental",
        info: "Seg a sex, 6h às 23h · Sáb e dom, 8h às 14h",
      },
      salao: {
        brand: "Seu Salão",
        nav: ["Serviços", "Equipe", "Contato"],
        heading: "Beleza e bem-estar no seu tempo",
        sub: "Cabelo, unhas, estética e spa em um espaço acolhedor.",
        sectionTitle: "Serviços",
        cards: [
          ["Corte e escova", "A partir de R$ 90"],
          ["Manicure e pedicure", "A partir de R$ 60"],
          ["Massagem relaxante", "A partir de R$ 150"],
        ],
        button: "Agende pelo WhatsApp",
        info: "Ter a sáb, 9h às 20h · Pinheiros, São Paulo",
      },
    },
    intro:
      "A Khaliq Digital é a divisão web e digital da Khaliq Systems. Projetamos e desenvolvemos sites empresariais profissionais e experiências digitais com foco em design moderno, usabilidade, performance e funcionalidade de negócio.",
    capsTitle: "Capacidades atuais",
    caps: [
      ["Design de sites empresariais", "Identidade visual aplicada a uma estrutura clara."],
      ["Desenvolvimento de sites", "Implementação rápida, acessível e bem construída."],
      ["Sites responsivos mobile-first", "Projetados primeiro para o celular."],
      ["Landing pages", "Páginas focadas em uma única ação."],
      ["Experiências digitais", "Interfaces pensadas para o uso real."],
      ["Integrações de site", "Conexão com as ferramentas que você já usa."],
      ["Sistemas web de negócio", "Áreas internas, formulários e fluxos."],
      ["Infraestrutura digital", "Hospedagem, domínios, performance e SEO técnico."],
    ],
    availableNow: "O que construímos",
  },
  aboutPage: {
    title: "Sobre a Khaliq Systems",
    body: [
      "A Khaliq Systems é uma empresa de tecnologia sediada em São Paulo, Brasil, que desenvolve infraestrutura operacional inteligente para empresas modernas.",
      "Por meio de nossas divisões especializadas, desenvolvemos automação com inteligência artificial, sistemas inteligentes de comunicação com clientes, websites empresariais, sistemas digitais e tecnologia operacional para ajudar empresas a operar com mais eficiência.",
      "Nossas divisões: Khaliq Automations, para sistemas de IA e automação de atendimento; Khaliq Digital, para websites e sistemas digitais; e Khaliq Autonomous, nossa direção futura em sistemas autônomos inteligentes e robótica — ainda uma visão, não um serviço comercial disponível.",
    ],
  },

  hero: {
    eyebrow: "São Paulo, Brasil",
    title: [
      "Sua empresa.",
      "A Sofia responde a qualquer hora — inclusive de madrugada e nos fins de semana.",
    ],
    body: "A Khaliq Systems constrói recepcionistas de IA e sistemas inteligentes de atendimento que ajudam empresas de serviço no Brasil a responder na hora, automatizar o trabalho repetitivo e entregar uma experiência excepcional pelo WhatsApp.",
    badges: [
      "A Sofia responde às mensagens dos pacientes a qualquer hora — inclusive de madrugada e nos fins de semana.",
      "Conversas naturais",
      "Escalonamento para atendimento humano",
      "Integração com WhatsApp Business",
    ],
  },
  chat: {
    header: "Sofia",
    status: "online",
    demoLabel: "Trechos reais de uma conversa com a Sofia, numa clínica fictícia de demonstração.",
    messages: [
      { from: "them", time: "21:31", text: "Oi, boa noite" },
      {
        from: "us",
        time: "21:31",
        text: "Boa noite! 😊 Seja bem-vinda à Khaliq Odontologia. Como posso te ajudar?",
      },
      { from: "them", time: "21:31", text: "Vocês fazem limpeza e clareamento?" },
      {
        from: "us",
        time: "21:31",
        text: "Fazemos sim! 😊 Limpeza sai R$220 e clareamento a partir de R$900.",
      },
      { from: "them", time: "21:33", text: "Qual o horário de vocês?" },
      {
        from: "us",
        time: "21:33",
        text: "Funcionamos de segunda a sexta, das 8h às 18h, e aos sábados das 8h às 13h. Domingo ficamos fechados 😊",
      },
      {
        from: "them",
        time: "21:34",
        text: "Queria marcar uma consulta, tem horário essa semana?",
      },
      {
        from: "us",
        time: "21:34",
        text: "Consigo te ajudar sim! 😊 Só finalizar o agendamento por aqui: https://calendly.com/khaliqsystems/30min — lá você vê os horários disponíveis dessa semana e escolhe o que for melhor pra você.",
      },
      { from: "them", time: "21:34", text: "Pode ser na sexta de manhã?" },
      {
        from: "us",
        time: "21:34",
        text: "Pode sim! 😊 Sextas atendemos das 8h às 18h. Só finalizar o horário certinho por aqui: https://calendly.com/khaliqsystems/30min",
      },
      { from: "them", time: "21:34", text: "Tem estacionamento por perto?" },
      {
        from: "us",
        time: "21:34",
        text: "Temos sim! Estacionamento gratuito bem na clínica 😊",
      },
      {
        from: "them",
        time: "21:34",
        text: "To sentindo uma dor meio forte no dente do fundo, isso é urgente? Sei que já é tarde da noite",
      },
      {
        from: "us",
        time: "21:34",
        text: "A clínica está fechada agora e abre Quarta às 8h. Já deixei sua mensagem para a equipe. Se a dor for muito forte, procure um pronto-socorro odontológico.",
      },
      { from: "them", time: "21:35", text: "Ok, muito obrigado, vou aguardar!" },
      {
        from: "us",
        time: "21:35",
        text: "Sua mensagem já está com a nossa equipe. A clínica abre Quarta às 8h. Se a dor estiver forte ou piorando, não espere — procure um pronto-socorro odontológico agora.",
      },
    ],
    typing: "digitando…",
    booking: {
      url: "calendly.com/khaliqsystems/30min",
      clinic: "Khaliq Odontologia",
      event: "Consulta Dental",
      pickDay: "Escolha um dia",
      pickTime: "Horários disponíveis",
      days: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      times: ["08:00", "09:00", "10:00", "11:00"],
      confirm: "Confirmar",
      taken: "Este horário não está mais disponível. Escolha outro horário.",
      done: "Agendamento confirmado",
      doneWhen: "Sexta-feira, 09:00",
      patient: "Fernanda Costa",
      label: "Ilustração: o paciente abre o link e escolhe o horário.",
    },
    agenda: {
      tab: "Agenda — Khaliq Odontologia",
      clinic: "Khaliq Odontologia",
      title: "Agenda",
      todayCount: "2 consultas hoje",
      groups: { yesterday: "Ontem", today: "Hoje", tomorrow: "Amanhã" },
      status: { past: "Passada", cancelled: "Cancelada", booked: "Agendada" },
      type: "Consulta Dental",
      details: "Detalhes do agendamento",
      fields: { date: "Data", time: "Horário", type: "Tipo", status: "Status" },
      source: "Agendada pelo link de agendamento",
      newBadge: "Novo",
      newToast: "Novo agendamento",
      newName: "Fernanda Costa",
      newDate: "Sexta-feira",
      newTime: "09:00",
      label: "Ilustração com dados fictícios: a agenda que a clínica vê no sistema de agendamento.",
    },
  },
  trust: {
    title: ["A tecnologia muda.", "A confiança, não."],
    body: "As funções são testadas antes de entrar em uso, e tudo fica documentado.",
    cards: [
      {
        t: "Engenharia confiável",
        d: "As funções são testadas antes de entrar em uso, e tudo fica documentado.",
      },
      {
        t: "Feito para a operação diária",
        d: "Integrado à rotina da equipe, não a um experimento paralelo.",
      },
      {
        t: "Supervisão humana",
        d: "Conversas sensíveis vão para uma pessoa. A IA sabe quando parar.",
      },
    ],
  },
  sofia: {
    eyebrow: "Produto",
    title: "Conheça a Sofia.",
    subtitle: "Seu agente de IA no WhatsApp.",
    body: "Em vez de descrever, mostramos. Abaixo, um exemplo de conversa como a que seus clientes teriam hoje à noite, num domingo ou às seis da manhã.",
    caption: "Trechos de uma conversa real",
    tryReal:
      "Quer testar de verdade? Mande uma mensagem para +55 11 98032-4782 e converse com a Sofia agora. É uma demonstração com uma clínica odontológica fictícia.",
    cfmNote:
      "Alinhada à Resolução CFM nº 2.454/2026: a Sofia se identifica como assistente virtual com IA, não dá orientação médica e encaminha para a equipe humana.",
  },
  compare: {
    eyebrow: "Comparativo",
    title: "Por que empresas escolhem recepcionistas de IA",
    body: "A mesma função, com outra base de confiabilidade.",
    left: {
      title: "Recepção tradicional",
      items: [
        "Apenas em horário comercial",
        "Uma conversa por vez",
        "Precisa de treinamento",
        "Férias e faltas",
        "Respostas inconsistentes",
      ],
    },
    right: {
      title: "Sofia",
      items: [
        "A Sofia responde às mensagens dos pacientes a qualquer hora — inclusive de madrugada e nos fins de semana.",
        "Respostas consistentes",
        "Mensagem que chega às 23h é respondida às 23h, não na manhã seguinte.",
        "Escala casos complexos para a equipe",
      ],
    },
  },
  build: {
    eyebrow: "Soluções",
    title: "O que construímos",
    cards: [
      {
        t: "Recepcionistas de IA",
        d: "Atendimento pelo WhatsApp com linguagem natural e regras claras.",
      },
      {
        t: "Comunicação com clientes",
        d: "Respostas rápidas e consistentes em todos os pontos de contato.",
      },
      {
        t: "Automação operacional",
        d: "Tarefas repetitivas do dia a dia executadas sem intervenção manual.",
      },
      {
        t: "Soluções de IA sob medida",
        d: "Sistemas desenhados para a operação específica da sua empresa.",
      },
    ],
  },
  industries: {
    eyebrow: "Setores",
    title: "Feita para clínicas — odontologia, medicina e áreas afins.",
  },
  how: {
    eyebrow: "Processo",
    title: "Como trabalhamos",
    steps: [
      ["Entender", "Mapeamos a operação, o volume e os gargalos reais."],
      ["Engenharia", "Definimos arquitetura, tom de voz e regras de escalonamento."],
      ["Implantar", "Entra no ar só depois que a clínica aprova todas as respostas."],
      ["Otimizar", "Medimos, ajustamos e refinamos o comportamento do sistema."],
      ["Sustentar", "Evoluímos o sistema ao longo do tempo."],
    ],
  },
  about: {
    eyebrow: "Empresa",
    statement: [
      "Empresas não deveriam adotar IA porque ela impressiona.",
      "Deveriam adotar porque podem depender dela.",
    ],
    body: [
      "A Khaliq Systems constrói sistemas de IA confiáveis, que se tornam parte da operação diária de uma empresa — estáveis, seguros e fáceis de manter.",
      "A Khaliq Systems é sediada em São Paulo.",
    ],
  },
  missed: {
    title: "Cada mensagem perdida é uma oportunidade perdida.",
    body: [
      "Clientes não esperam. Quando uma empresa responde tarde demais, alguém geralmente respondeu antes.",
      "A Sofia responde na hora, sem depender de alguém estar disponível.",
    ],
  },
  final: {
    title: "Pronto para construir sistemas mais inteligentes para sua empresa?",
    body: "Vamos construir algo em que sua empresa possa confiar.",
  },
  demos: {
    pick: "Veja como funcionaria no seu setor:",
    tabs: {
      health: "Clínicas e Saúde",
      realEstate: "Imobiliárias",
      travel: "Agências de Viagem",
      ecommerce: "Lojas Online",
    },
    simNotice:
      "Demonstração com dados de exemplo — não é um cliente real. Construímos soluções assim sob medida para cada negócio.",
    realNotice:
      "Sofia: produto da Khaliq Systems. Conversa real; telas de agendamento e agenda ilustrativas.",
    realEstate: {
      chat: {
        header: "Sua Imobiliária",
        status: "online",
        typing: "digitando…",
        demoLabel: "Demonstração com dados de exemplo.",
        messages: [
          {
            from: "them",
            time: "10:12",
            text: "Oi! Vi o anúncio do apartamento de 2 quartos na Vila Mariana. Ainda está disponível?",
          },
          {
            from: "us",
            time: "10:12",
            text: "Olá! Sou a assistente virtual (IA) da Sua Imobiliária 😊 Está disponível sim: 2 quartos, 68 m² e 1 vaga. Aluguel de R$ 3.200 + condomínio.",
          },
          { from: "them", time: "10:13", text: "Aceita pet?" },
          { from: "us", time: "10:13", text: "Aceita, sim — pets de pequeno porte." },
          { from: "them", time: "10:14", text: "Dá pra visitar no sábado?" },
          {
            from: "us",
            time: "10:14",
            text: "Dá sim! Temos sábado às 10h ou às 11h30. Qual horário fica melhor?",
          },
          { from: "them", time: "10:15", text: "10h. Meu nome é Rafael Lima." },
          {
            from: "us",
            time: "10:15",
            text: "Combinado, Rafael! Visita no sábado às 10h. Um corretor confirma com você por aqui na sexta.",
          },
        ],
      },
      flow: {
        tab: "Agendar visita — Sua Imobiliária",
        org: "Sua Imobiliária",
        title: "Agendar visita",
        fields: [
          ["Imóvel", "Apto 2 quartos · Vila Mariana"],
          ["Data", "Sábado, 10:00"],
          ["Nome", "Rafael Lima"],
          ["Contato", "WhatsApp"],
        ],
        action: "Confirmar visita",
        doneTitle: "Visita agendada",
        doneLines: ["Sábado, 10:00 · Rafael Lima", "Apto 2 quartos · Vila Mariana"],
        label: "Demonstração com dados de exemplo: página de agendamento.",
      },
      table: {
        tab: "CRM — Sua Imobiliária",
        org: "Sua Imobiliária",
        title: "Leads",
        badge: "Esta semana",
        columns: ["Lead", "Imóvel", "Visita", "Follow-up"],
        statusCol: "Status",
        newRow: {
          cells: ["Rafael Lima", "Apto 2q · Vila Mariana", "Sáb 10:00", "Sex"],
          status: "Visita agendada",
          tone: "new",
        },
        rows: [
          {
            cells: ["Carla Souza", "Casa 3q · Butantã", "Realizada", "Hoje"],
            status: "Em negociação",
            tone: "pending",
          },
          {
            cells: ["Helena Rocha", "Apto 3q · Moema", "Realizada", "Seg"],
            status: "Aguardando retorno",
            tone: "pending",
          },
          {
            cells: ["Diego Alves", "Studio · Pinheiros", "—", "Amanhã"],
            status: "Novo lead",
            tone: "ok",
          },
          {
            cells: ["Marcos Teixeira", "Cobertura · Itaim", "—", "—"],
            status: "Perdido",
            tone: "cancel",
          },
        ],
        newBadge: "Novo",
        toast: "Nova visita · Rafael Lima · Sáb 10:00",
        label: "Demonstração com dados de exemplo: CRM.",
      },
    },
    travel: {
      chat: {
        header: "Sua Agência",
        status: "online",
        typing: "digitando…",
        demoLabel: "Demonstração com dados de exemplo.",
        messages: [
          {
            from: "them",
            time: "14:02",
            text: "Boa tarde! Quanto fica um pacote para Salvador em novembro, para 2 pessoas?",
          },
          {
            from: "us",
            time: "14:02",
            text: "Boa tarde! Sou a assistente virtual (IA) da Sua Agência 😊 Para quais datas vocês pensam em viajar?",
          },
          { from: "them", time: "14:03", text: "De 12 a 16 de novembro." },
          {
            from: "us",
            time: "14:03",
            text: "Para essas datas, temos pacotes a partir de R$ 2.480 por pessoa, com aéreo saindo de São Paulo e hotel com café da manhã.",
          },
          { from: "them", time: "14:04", text: "Inclui transfer?" },
          {
            from: "us",
            time: "14:04",
            text: "Inclui o transfer aeroporto–hotel. Quer que eu envie um pedido de reserva para um agente?",
          },
          { from: "them", time: "14:05", text: "Quero sim. Meu nome é Camila Rocha." },
          {
            from: "us",
            time: "14:05",
            text: "Pedido enviado, Camila! Um agente confirma valores e disponibilidade com você por aqui.",
          },
        ],
      },
      flow: {
        tab: "Pedido de reserva — Sua Agência",
        org: "Sua Agência",
        title: "Pedido de reserva",
        fields: [
          ["Destino", "Salvador, BA"],
          ["Datas", "12 a 16 de nov"],
          ["Viajantes", "2 adultos"],
          ["Pacote", "Aéreo + hotel + transfer"],
          ["Nome", "Camila Rocha"],
        ],
        action: "Enviar pedido",
        doneTitle: "Pedido de reserva enviado",
        doneLines: [
          "Camila Rocha · Salvador, BA",
          "12 a 16 de nov · 2 adultos",
          "Aguardando confirmação do agente",
        ],
        label: "Demonstração com dados de exemplo: página de pedido.",
      },
      table: {
        tab: "Painel — Sua Agência",
        org: "Sua Agência",
        title: "Pedidos de reserva",
        badge: "Novembro",
        columns: ["Cliente", "Destino", "Datas", "Etapa"],
        statusCol: "Status",
        newRow: {
          cells: ["Camila Rocha", "Salvador, BA", "12–16 nov", "Pedido recebido"],
          status: "Aguardando agente",
          tone: "new",
        },
        rows: [
          {
            cells: ["Lucas Prado", "Lisboa", "3–10 nov", "Cotação enviada"],
            status: "Em cotação",
            tone: "pending",
          },
          {
            cells: ["Beatriz Nunes", "Foz do Iguaçu", "8–11 nov", "Pagamento recebido"],
            status: "Confirmada",
            tone: "ok",
          },
          {
            cells: ["André Melo", "Gramado", "20–23 nov", "Aguardando pagamento"],
            status: "Pendente",
            tone: "pending",
          },
          {
            cells: ["Paula Dias", "Santiago", "15–19 nov", "—"],
            status: "Cancelada",
            tone: "cancel",
          },
        ],
        newBadge: "Novo",
        toast: "Novo pedido · Camila Rocha · Salvador",
        label: "Demonstração com dados de exemplo: painel.",
      },
    },
    ecommerce: {
      chat: {
        header: "Sua Loja",
        status: "online",
        typing: "digitando…",
        demoLabel: "Demonstração com dados de exemplo.",
        messages: [
          { from: "them", time: "19:40", text: "Oi, o tênis Aurora tem no 40?" },
          {
            from: "us",
            time: "19:40",
            text: "Oi! Sou a assistente virtual (IA) da Sua Loja 😊 Tem sim, nas cores preta e branca. Sai por R$ 349,90.",
          },
          { from: "them", time: "19:41", text: "Quanto tempo pra chegar em Campinas?" },
          {
            from: "us",
            time: "19:41",
            text: "Para Campinas, de 2 a 3 dias úteis — e o frete é grátis acima de R$ 299.",
          },
          { from: "them", time: "19:42", text: "Quero o preto. Como faço?" },
          {
            from: "us",
            time: "19:42",
            text: "Te enviei o link do pedido #1048 — dá pra pagar no Pix ou no cartão.",
          },
          { from: "them", time: "19:44", text: "Paguei no Pix agora." },
          {
            from: "us",
            time: "19:44",
            text: "Recebido, obrigada! 🎉 O pedido #1048 está sendo separado e o código de rastreio chega por aqui.",
          },
        ],
      },
      flow: {
        tab: "Checkout — Sua Loja",
        org: "Sua Loja",
        title: "Pedido #1048",
        fields: [
          ["Produto", "Tênis Aurora · Preto · 40"],
          ["Cliente", "Marina Alves"],
          ["Entrega", "Campinas, SP · 2 a 3 dias úteis"],
          ["Total", "R$ 349,90 · Frete grátis"],
          ["Pagamento", "Pix"],
        ],
        action: "Pagar com Pix",
        doneTitle: "Pagamento confirmado",
        doneLines: ["Pedido #1048 · Marina Alves", "R$ 349,90 · Pix", "Separando para envio"],
        label: "Demonstração com dados de exemplo: checkout.",
      },
      table: {
        tab: "Pedidos — Sua Loja",
        org: "Sua Loja",
        title: "Pedidos",
        badge: "Hoje",
        columns: ["Pedido", "Cliente", "Produto", "Pagamento"],
        statusCol: "Envio",
        newRow: {
          cells: ["#1048", "Marina Alves", "Tênis Aurora 40", "Pago · Pix"],
          status: "Separando",
          tone: "new",
        },
        rows: [
          {
            cells: ["#1047", "Pedro Santos", "Mochila Trail", "Pago · Cartão"],
            status: "Enviado",
            tone: "ok",
          },
          {
            cells: ["#1046", "Lia Mendes", "Jaqueta Leve M", "Aguardando"],
            status: "Pendente",
            tone: "pending",
          },
          {
            cells: ["#1045", "Rui Costa", "Tênis Aurora 42", "Pago · Pix"],
            status: "Entregue",
            tone: "done",
          },
          {
            cells: ["#1044", "Ana Prado", "Boné Classic", "Estornado"],
            status: "Cancelado",
            tone: "cancel",
          },
        ],
        newBadge: "Novo",
        toast: "Novo pedido pago · #1048 · R$ 349,90",
        label: "Demonstração com dados de exemplo: painel de pedidos.",
      },
    },
  },
  consent: {
    body: "Este site usa o Google Analytics para estatísticas de visitas.",
    ok: "Ok",
  },
  contactDetails: {
    lead: "Ou fale direto com a gente:",
    whatsapp: "WhatsApp",
    email: "E-mail",
  },
  footer: {
    tagline:
      "Sistemas de IA, automação e infraestrutura digital feitos para a operação real das empresas.",
    location: "São Paulo, Brasil",
    rights: "Todos os direitos reservados.",
    email: "khaliqsystems@gmail.com",
    legal:
      "Khaliq Systems · 66.551.503 ABDIKHALIQ ALI HUSSEIN · CNPJ 66.551.503/0001-63 · São Paulo, SP",
  },

  home: {
    hero: {
      eyebrow: "Khaliq Systems · São Paulo, Brasil",
      title: ["Sua empresa não deveria parar", "quando sua equipe fica ocupada."],
      body: "A Khaliq Systems constrói sistemas com IA, automações e sites para empresas de diferentes setores. A Sofia é o agente de IA da Khaliq Systems no WhatsApp: atende seus clientes na hora, envia o link de agendamento quando faz sentido, retoma o contato se a pessoa some e passa a conversa para a sua equipe quando necessário.",
      primary: "Conheça nossos sistemas",
      secondary: "Fale com a gente",
      pillars: [
        "Mensagem que chega às 23h é respondida às 23h, não na manhã seguinte.",
        "A Sofia envia o link de agendamento e o paciente escolhe o horário.",
        "Transfere para sua equipe quando importa",
      ],
    },
    problem: {
      eyebrow: "A lacuna operacional",
      title: ["Os clientes estão prontos.", "Sua operação nem sempre está disponível."],
      body: [
        "Mensagens chegam fora do horário. Equipes ficam sobrecarregadas. Follow-ups são esquecidos. Agendamentos são perdidos. Pedidos rotineiros consomem o tempo que deveria ir para o trabalho de maior valor.",
        "A Khaliq Systems constrói sistemas que assumem essas tarefas operacionais repetitivas e sabem quando uma pessoa precisa entrar.",
      ],
      items: [
        ["Conversas sem resposta", "O cliente não deveria esperar por respostas de rotina."],
        [
          "Trabalho administrativo repetitivo",
          "Sua equipe não deveria passar o dia repetindo as mesmas tarefas.",
        ],
        ["Follow-up perdido", "Oportunidades não deveriam sumir porque ninguém deu retorno."],
        [
          "Sistemas desconectados",
          "Suas ferramentas deveriam funcionar juntas em vez de gerar mais trabalho.",
        ],
      ],
    },
    industries: {
      eyebrow: "Setores",
      title: "Para quem construímos.",
      body: "A Sofia é o nosso produto para clínicas. Para outros setores, desenhamos e construímos a solução a partir dos processos de cada negócio — não são pacotes prontos.",
      product: "Produto: Sofia",
      custom: "Sob medida",
      cards: [
        {
          key: "health",
          name: "Clínicas e Saúde",
          desc: "Pacientes escrevem a qualquer hora. A Sofia responde no WhatsApp, envia o link de agendamento e passa para a equipe o que exige uma pessoa.",
          items: [
            "Agente de IA no WhatsApp",
            "Comunicação com pacientes",
            "Agendamento por link",
            "Follow-up com pacientes",
            "Automação administrativa",
          ],
          cta: "Conhecer a Sofia",
        },
        {
          key: "realEstate",
          name: "Imobiliárias",
          desc: "Contatos de anúncios esfriam sem resposta rápida. Projeto sob medida: um agente que responde na hora, faz a triagem inicial e organiza as visitas.",
          items: [
            "Captação de leads",
            "Perguntas sobre imóveis",
            "Follow-up automático",
            "Agendamento de visitas por link",
            "Comunicação com clientes",
          ],
        },
        {
          key: "travel",
          name: "Agências de viagem",
          desc: "Pedidos de orçamento chegam fora do horário. Projeto sob medida: um agente que entende o pedido, faz a triagem inicial e encaminha ao agente de viagens.",
          items: [
            "Atendimento a pedidos de viagem",
            "Triagem inicial de leads",
            "Follow-up com clientes",
            "Fluxos de pedidos de reserva",
            "Respostas a perguntas frequentes",
          ],
        },
        {
          key: "ecommerce",
          name: "Lojas online e e-commerce",
          desc: "Dúvidas sobre produtos e pedidos tomam o dia. Projeto sob medida: um agente que responde dúvidas, acompanha o pedido e retoma o contato.",
          items: [
            "Atendimento automatizado",
            "Perguntas sobre produtos",
            "Dúvidas sobre pedidos",
            "Follow-up de leads",
            "Fluxos de e-commerce",
          ],
        },
      ],
      moreTitle: "Também construímos para",
      more: [
        ["Restaurantes", "Pedidos e reservas pelo WhatsApp"],
        ["Hotéis e pousadas", "Dúvidas e pedidos de reserva"],
        ["Salões de beleza", "Agendamento por link"],
        ["Clínicas veterinárias", "Agendamento e dúvidas dos tutores"],
        ["Academias e clubes", "Planos, horários e aulas experimentais"],
        ["Locadoras de veículos", "Cotações e pedidos de reserva"],
        ["Agências", "Captação e triagem de leads"],
      ],
      faqLink: "Ver perguntas frequentes",
      cta: "Conte como funciona o seu negócio",
    },
    sofia: {
      eyebrow: "Sistema de IA principal",
      name: "Sofia",
      title: "Um agente operacional de IA para o trabalho entre seus clientes e sua equipe.",
      body: "A Sofia conduz conversas, responde perguntas aprovadas sobre o negócio, apoia agendamento por link e follow-up, resolve pedidos rotineiros e transfere a situação para uma pessoa quando é preciso atenção humana.",
      caps: [
        ["Conversas com clientes", "Conduz conversas de entrada rotineiras nos canais suportados."],
        [
          "Conhecimento do negócio",
          "Responde com base em informações aprovadas e regras de operação.",
        ],
        [
          "Agendamento por link",
          "A Sofia envia o link de agendamento e o paciente escolhe o horário.",
        ],
        ["Follow-up", "Apoia o follow-up estruturado sem depender só do trabalho manual."],
        [
          "Transferência humana",
          "Escala a conversa quando o pedido exige julgamento ou intervenção humana.",
        ],
        [
          "Memória operacional",
          "A Sofia considera o que já foi dito na mesma conversa, e o paciente não precisa repetir o que acabou de dizer.",
        ],
      ],
      ctaPrimary: "Ver a Sofia em ação",
      ctaSecondary: "Conhecer a Sofia",
      health: {
        eyebrow: "Operações em saúde",
        body: "Para clínicas e negócios de saúde, a Sofia pode apoiar operações não clínicas de pacientes, incluindo:",
        items: [
          "Comunicação com pacientes",
          "Agendamento por link",
          "Se o paciente demonstra interesse e depois some, a Sofia retoma o contato automaticamente.",
          "Follow-up administrativo",
          "Perguntas clínicas não são respondidas pela Sofia — ela aciona a equipe na hora.",
          "Escalonamento humano",
        ],
        note: "A Sofia apoia fluxos operacionais não clínicos. Ela não fornece diagnóstico, orientação médica ou recomendação de tratamento.",
      },
    },
    how: {
      eyebrow: "Como funciona",
      title: "Da conversa à ação.",
      body: "A Sofia não apenas gera respostas. Ela opera dentro de regras de negócio definidas e conecta as conversas aos fluxos de trabalho por trás delas.",
      steps: [
        [
          "O cliente entra em contato",
          "Um cliente ou paciente inicia uma conversa por um canal suportado.",
        ],
        [
          "A Sofia entende o pedido",
          "O sistema usa o contexto da conversa e as informações aprovadas do negócio para identificar o que o cliente precisa.",
        ],
        [
          "A Sofia resolve o trabalho rotineiro",
          "Responde às perguntas suportadas e conduz fluxos aprovados, como agendamento por link, coleta de informações e follow-up.",
        ],
        [
          "As pessoas assumem quando necessário",
          "Pedidos fora do escopo permitido ou que exigem julgamento humano são transferidos para a pessoa adequada.",
        ],
        [
          "A operação continua",
          "Quando é preciso, a Sofia aciona sua equipe no WhatsApp com a mensagem do paciente, o número dele e as fotos, vídeos ou áudios que ele enviou.",
        ],
      ],
    },
    support: {
      eyebrow: "Sistemas de apoio",
      title: "Tecnologia em volta da operação.",
      body: "Nem todo problema operacional exige um agente de IA. A Khaliq Systems também constrói a infraestrutura e os sistemas digitais que conectam e sustentam empresas modernas.",
      cards: [
        {
          name: "Automação e Integrações",
          desc: "Sistemas de automação confiáveis que conectam ferramentas de negócio, reduzem trabalho repetitivo e mantêm os processos operacionais em movimento.",
          areas: [
            "Automação de WhatsApp",
            "Integrações com CRM",
            "Integrações de API",
            "Automação de fluxos",
            "Fluxos de agendamento",
            "Automação de processos internos",
          ],
          cta: "Conhecer Automations",
          to: "/automations" as const,
        },
        {
          name: "Sites e Sistemas Digitais",
          desc: "Experiências digitais profissionais construídas em torno de usabilidade, performance e funcionalidade real de negócio.",
          areas: [
            "Sites empresariais",
            "Desenvolvimento de sites",
            "Design responsivo",
            "Landing pages",
            "Integrações de site",
            "Infraestrutura digital",
          ],
          cta: "Conhecer Digital",
          to: "/digital" as const,
        },
      ],
    },
    principles: {
      items: [
        ["Confiabilidade", "A Sofia responde na hora, sem depender de alguém estar disponível."],
        [
          "Regras operacionais claras",
          "Todo sistema implantado opera com responsabilidades definidas, informações aprovadas e limites explícitos.",
        ],
        [
          "Supervisão humana",
          "Quando a situação exige julgamento, sensibilidade ou autoridade fora do escopo do sistema, o fluxo é desenhado para chegar a uma pessoa.",
        ],
        [
          "Manutenibilidade",
          "Sistemas estruturados para que fluxos, informações e regras de operação evoluam junto com o negócio.",
        ],
        [
          "IA responsável",
          "A IA é implantada para responsabilidades operacionais definidas, com limites claros, em vez de autoridade irrestrita.",
        ],
      ],
      closingTitle: "A IA deve saber o que pode fazer — e o que não pode.",
      closingBody:
        "Projetamos limites operacionais dentro dos nossos sistemas. A Sofia é construída em torno de informações aprovadas, fluxos definidos e escalonamento humano, em vez de fingir que a IA deve decidir tudo.",
    },
    faq: {
      eyebrow: "Feito para a operação real",
      title: "Perguntas importantes merecem respostas claras.",
      items: [
        [
          "O que a Khaliq Systems faz?",
          "Construímos sistemas com IA, automações, sites e soluções digitais para empresas de diferentes setores. A Sofia, nosso agente de IA no WhatsApp, foi criada primeiro para clínicas; para outros setores, cada projeto é feito sob medida.",
        ],
        [
          "A Khaliq Systems só trabalha com clínicas?",
          "Não. Construímos sistemas com IA, automações, sites e soluções digitais para empresas de diferentes setores. A Sofia foi criada primeiro para clínicas odontológicas e médicas. Para imobiliárias, agências de viagens e lojas online, cada projeto é personalizado para o negócio.",
        ],
        [
          "O que é a Sofia?",
          "A Sofia é o agente de IA da Khaliq Systems no WhatsApp, criada primeiro para clínicas. Ela responde pacientes no WhatsApp, envia o link de agendamento e passa para a equipe o que precisa de uma pessoa.",
        ],
        [
          "Como a Sofia funciona?",
          "O paciente escreve no WhatsApp. A Sofia responde com base nas informações aprovadas da clínica e, quando o paciente quer marcar, envia o link de agendamento — o paciente escolhe o horário. Quando é preciso, ela aciona a equipe.",
        ],
        [
          "O que acontece quando a Sofia não sabe a resposta?",
          "A Sofia responde apenas com as informações da sua clínica. Se não souber, ela não inventa — passa para a equipe.",
        ],
        [
          "A Sofia pode dar orientação médica?",
          "Não. Em implantações na saúde, a Sofia é feita para fluxos operacionais não clínicos, como comunicação, agendamento e follow-up administrativo — não diagnóstico, recomendação de tratamento ou decisão médica.",
        ],
        [
          "Como vocês lidam com situações que exigem uma pessoa?",
          "Quando é preciso, a Sofia aciona sua equipe no WhatsApp com a mensagem do paciente, o número dele e as fotos, vídeos ou áudios que ele enviou. Perguntas clínicas não são respondidas pela Sofia — ela aciona a equipe na hora.",
        ],
        [
          "A Sofia pode substituir todos os funcionários?",
          "Não. A Sofia é feita para assumir o trabalho operacional repetitivo adequado e apoiar quem toca o negócio. O julgamento humano continua importante em exceções, situações sensíveis e responsabilidades fora do escopo do sistema.",
        ],
        [
          "Vocês conseguem criar uma solução para o meu negócio?",
          "Primeiro entendemos os processos e as necessidades do seu negócio. Depois recomendamos a solução adequada — e dizemos com clareza quando algo não faz sentido.",
        ],
        [
          "Vocês oferecem produtos prontos ou soluções sob medida?",
          "Os dois. A Sofia é a nossa solução para clínicas. Para outras necessidades, desenvolvemos sistemas sob medida para cada negócio.",
        ],
        [
          "Os sistemas se integram às ferramentas que já usamos?",
          "Depende da ferramenta. Hoje, a Sofia funciona no WhatsApp e envia links de agendamento, como os do Calendly. Outras integrações são avaliadas em cada projeto antes de prometermos qualquer coisa.",
        ],
        [
          "Como começamos?",
          "Mande uma mensagem no WhatsApp contando como funciona o seu negócio. Conversamos, entendemos os processos e enviamos uma proposta com escopo e valor.",
        ],
        [
          "Quanto custa?",
          "Depende do escopo. Avaliamos as necessidades do seu negócio e enviamos um orçamento — peça pelo WhatsApp.",
        ],
      ],
    },
    about: {
      eyebrow: "Khaliq Systems",
      title: "Sistemas em que empresas podem confiar.",
      body: [
        "A Khaliq Systems é uma empresa de tecnologia sediada em São Paulo, Brasil, que constrói sistemas operacionais com IA, automação de negócios e infraestrutura digital.",
        "Nosso foco é prático: tecnologia que assume trabalho real, se integra à operação existente e continua compreensível para quem responde pelo negócio.",
        "Construímos a Khaliq Systems para um futuro em que a IA faz parte da infraestrutura cotidiana das empresas — não como demonstração, mas como camada operacional confiável.",
      ],
      cta: "Sobre a Khaliq Systems",
    },
    final: {
      eyebrow: "Veja funcionando",
      title: ["Não leia apenas sobre a Sofia.", "Experimente o sistema."],
      body: "Veja como um agente operacional de IA conduz uma conversa, segue regras definidas e sabe quando uma pessoa precisa entrar.",
      primary: "Ver a Sofia em ação",
      secondary: "Fale com a gente",
    },
  },
};

const en: Dict = {
  meta: {
    title: "Khaliq Systems | AI Automation, Websites & Digital Systems",
    description:
      "Khaliq Systems is a São Paulo, Brazil technology company building AI automation, WhatsApp systems, business websites and intelligent digital infrastructure for modern businesses.",
  },

  nav: {
    home: "Home",
    features: "Features",
    demos: "Demos",
    faq: "FAQ",
    websites: "Websites",
    solutions: "Solutions",
    industries: "Industries",
    about: "About",
    contact: "Contact",
    systems: "Systems",
    automations: "Automations",
    digital: "Digital",
  },
  cta: {
    whatsapp: "Talk to us on WhatsApp",
    sofia: "Meet Sofia",
  },
  parent: {
    hero: {
      eyebrow: "Khaliq Systems · São Paulo, Brazil",
      title: ["Intelligent operational infrastructure", "for modern businesses."],
      body: "We design reliable AI, automation and digital systems that become part of how modern businesses operate.",
      primary: "Explore our systems",
      secondary: "Talk to us",
      pillars: [
        "Artificial intelligence",
        "Automation",
        "Websites and digital systems",
        "Digital infrastructure",
      ],
    },
    systems: {
      eyebrow: "Ecosystem",
      title: "Our Systems",
      body: "AI systems engineered for real business operations — plus the supporting infrastructure that keeps them running.",
      aiLabel: "AI systems",
      ai: [
        {
          status: "",
          name: "AI Receptionist",
          desc: "An AI-powered front desk that handles customer conversations, answers approved business questions, guides customers, supports appointment booking and follows up when appropriate.",
          areas: [
            "WhatsApp conversations",
            "Business FAQs & guidance",
            "Appointment scheduling",
            "Automated follow-up",
            "Human handoff",
          ],
          cta: "Explore AI Receptionist",
          to: "/automations",
        },
      ],

      supportLabel: "Supporting business systems",
      support: [
        {
          status: "",
          name: "Business Automation & Integrations",
          desc: "Reliable automation and integration systems designed to connect business tools, eliminate repetitive work and improve day-to-day operations.",
          areas: [
            "WhatsApp automation",
            "n8n workflows",
            "CRM integrations",
            "Scheduling workflows",
            "API integrations",
            "Internal process automation",
          ],
          cta: "Explore Automations",
          to: "/automations",
        },
        {
          status: "",
          name: "Websites & Digital Systems",
          desc: "Professional websites and digital systems built around usability, performance and real business functionality.",
          areas: [
            "Business websites",
            "Website development",
            "Responsive design",
            "Landing pages",
            "Website integrations",
            "Digital infrastructure",
          ],
          cta: "Explore Digital",
          to: "/digital",
        },
      ],
      futureLabel: "Future direction",
      future: {
        status: "Future systems",
        name: "Khaliq Autonomous",
        desc: "Our long-term direction toward intelligent autonomous systems and robotics.",
        note: "These are not currently commercially available services.",
      },
    },

    about: {
      eyebrow: "Khaliq Systems",
      title: "Built for systems businesses can depend on.",
      body: "Khaliq Systems is a technology company based in São Paulo, Brazil, designing intelligent operational infrastructure for modern businesses. Through our specialized divisions, we develop AI-powered automation, intelligent customer communication systems, business websites, digital systems and operational technology designed to help businesses operate more efficiently.",
      cta: "About Khaliq Systems",
    },
    principles: {
      eyebrow: "Engineering",
      title: "How we design",
      items: [
        ["Reliability", "Sofia replies immediately, without depending on someone being available."],
        ["Clear operational rules", "Every system knows what it may and may not do."],
        ["Human oversight", "Sensitive cases always reach a person."],
        ["Maintainability", "Documented architecture that is easy to evolve."],
        ["Responsible AI", "Measured deployment, with no exaggerated promises."],
      ],
    },
  },
  automationsPage: {
    eyebrow: "Khaliq Automations",
    title: ["AI & WhatsApp automation", "for Brazilian businesses."],
    body: "Khaliq Automations is the automation division of Khaliq Systems. We build AI receptionists and customer communication systems that respond instantly, automate repetitive work, and escalate to your team when needed.",
    parentLink: "A division of Khaliq Systems",
  },
  digitalPage: {
    eyebrow: "Khaliq Digital",
    title: ["Websites built", "around your business."],
    body: "Khaliq Digital designs modern, responsive websites and digital systems that help businesses establish a professional online presence and connect their digital operations.",
    cta: "Start a project",
    exampleAlt:
      "Example websites for a clinic, a guesthouse, a restaurant, a gym and a beauty salon, on desktop and mobile",
    exampleCaption: "Example layouts",
    examples: {
      pick: "Pick a type of business:",
      tabs: {
        clinica: "Clinic",
        pousada: "Guesthouse",
        restaurante: "Restaurant",
        academia: "Gym",
        salao: "Beauty salon",
      },
      gallery: "Take a look inside",
      clinica: {
        brand: "Sua Clínica",
        nav: ["Specialties", "Team", "Contact"],
        heading: "Appointments at a set time",
        sub: "Caring service and several specialties in one place.",
        sectionTitle: "Specialties",
        cards: [
          ["General practice", "Consultations and check-ups"],
          ["Pediatrics", "Care for children"],
          ["Dentistry", "Cleaning and whitening"],
        ],
        button: "Book on WhatsApp",
        info: "Mon–Fri, 8am–6pm · Vila Mariana, São Paulo",
      },
      pousada: {
        brand: "Sua Pousada",
        nav: ["Rooms", "Experiences", "Contact"],
        heading: "A peaceful stay in São Paulo",
        sub: "Comfortable rooms, breakfast and personal service.",
        sectionTitle: "Rooms",
        cards: [
          ["Standard room", "Up to 2 guests"],
          ["Superior room", "Balcony and view"],
          ["Suite", "Bathtub and lounge"],
        ],
        button: "Book on WhatsApp",
        info: "Check-in from 2pm · Breakfast included",
      },
      restaurante: {
        brand: "Seu Restaurante",
        nav: ["Menu", "About", "Contact"],
        heading: "Good food, every day.",
        sub: "Dishes made to order with fresh ingredients.",
        sectionTitle: "Our menu",
        cards: [
          ["Picanha", "R$ 32.00"],
          ["Strogonoff", "R$ 22.00"],
          ["Parmegiana", "R$ 30.00"],
        ],
        button: "Order on WhatsApp",
        info: "We're here · Open every day, 11am–11pm",
      },
      academia: {
        brand: "Sua Academia",
        nav: ["Plans", "Classes", "Contact"],
        heading: "Train at your own pace",
        sub: "Weights, group classes and coaches to follow your training.",
        sectionTitle: "Plans",
        cards: [
          ["Monthly", "R$ 119/month"],
          ["Quarterly", "R$ 99/month"],
          ["Yearly", "R$ 89/month"],
        ],
        button: "Book a trial class",
        info: "Mon–Fri, 6am–11pm · Sat–Sun, 8am–2pm",
      },
      salao: {
        brand: "Seu Salão",
        nav: ["Services", "Team", "Contact"],
        heading: "Beauty and wellbeing on your time",
        sub: "Hair, nails, aesthetics and spa in a welcoming space.",
        sectionTitle: "Services",
        cards: [
          ["Cut and blow-dry", "From R$ 90"],
          ["Manicure and pedicure", "From R$ 60"],
          ["Relaxing massage", "From R$ 150"],
        ],
        button: "Book on WhatsApp",
        info: "Tue–Sat, 9am–8pm · Pinheiros, São Paulo",
      },
    },
    intro:
      "Khaliq Digital is the web and digital division of Khaliq Systems. We design and develop professional business websites and digital experiences with a focus on modern design, usability, performance and business functionality.",
    capsTitle: "Current capabilities",
    caps: [
      ["Business website design", "Visual identity applied to a clear structure."],
      ["Website development", "Fast, accessible and well-built implementation."],
      ["Responsive mobile-first websites", "Designed for the phone first."],
      ["Landing pages", "Pages focused on a single action."],
      ["Digital experiences", "Interfaces designed around real use."],
      ["Website integrations", "Connected to the tools you already use."],
      ["Business web systems", "Internal areas, forms and workflows."],
      ["Digital infrastructure", "Hosting, domains, performance and technical SEO."],
    ],
    availableNow: "What we build",
  },
  aboutPage: {
    title: "About Khaliq Systems",
    body: [
      "Khaliq Systems is a technology company based in São Paulo, Brazil, designing intelligent operational infrastructure for modern businesses.",
      "Through our specialized divisions, we develop AI-powered automation, intelligent customer communication systems, business websites, digital systems and operational technology designed to help businesses operate more efficiently.",
      "Our divisions: Khaliq Automations, for AI and customer communication automation; Khaliq Digital, for business websites and digital systems; and Khaliq Autonomous, our future direction in intelligent autonomous systems and robotics — a vision, not a commercially available service yet.",
    ],
  },

  hero: {
    eyebrow: "São Paulo, Brazil",
    title: [
      "Your business.",
      "Sofia replies at any hour — including late at night and at weekends.",
    ],
    body: "Khaliq Systems builds AI receptionists and intelligent business systems that help Brazilian service businesses respond instantly, automate repetitive work, and deliver exceptional customer experiences through WhatsApp.",
    badges: [
      "Sofia replies to patient messages at any hour — including late at night and at weekends.",
      "Natural conversations",
      "Human escalation to your team",
      "WhatsApp Business integration",
    ],
  },
  chat: {
    header: "Sofia",
    status: "online",
    demoLabel:
      "Real excerpts from a conversation with Sofia at a fictional demo clinic, translated from Portuguese.",
    messages: [
      { from: "them", time: "21:31", text: "Hi, good evening" },
      {
        from: "us",
        time: "21:31",
        text: "Good evening! 😊 Welcome to Khaliq Odontologia. How can I help you?",
      },
      { from: "them", time: "21:31", text: "Do you do cleaning and whitening?" },
      {
        from: "us",
        time: "21:31",
        text: "We do! 😊 Cleaning is R$220 and whitening starts at R$900.",
      },
      { from: "them", time: "21:33", text: "What are your opening hours?" },
      {
        from: "us",
        time: "21:33",
        text: "We're open Monday to Friday, 8am to 6pm, and Saturdays 8am to 1pm. We're closed on Sundays 😊",
      },
      {
        from: "them",
        time: "21:34",
        text: "I'd like to book an appointment, any openings this week?",
      },
      {
        from: "us",
        time: "21:34",
        text: "I can help with that! 😊 Just finish booking here: https://calendly.com/khaliqsystems/30min — you'll see this week's available times and pick what works best for you.",
      },
      { from: "them", time: "21:34", text: "Could it be Friday morning?" },
      {
        from: "us",
        time: "21:34",
        text: "Sure! 😊 On Fridays we're open 8am to 6pm. Just pick the exact time here: https://calendly.com/khaliqsystems/30min",
      },
      { from: "them", time: "21:34", text: "Is there parking nearby?" },
      {
        from: "us",
        time: "21:34",
        text: "Yes! Free parking right at the clinic 😊",
      },
      {
        from: "them",
        time: "21:34",
        text: "I'm feeling pretty strong pain in a back tooth, is it urgent? I know it's late at night",
      },
      {
        from: "us",
        time: "21:34",
        text: "The clinic is closed now and opens Wednesday at 8am. I've already passed your message to the team. If the pain is very strong, go to a dental emergency room.",
      },
      { from: "them", time: "21:35", text: "Ok, thank you so much, I'll wait!" },
      {
        from: "us",
        time: "21:35",
        text: "Your message is already with our team. The clinic opens Wednesday at 8am. If the pain is strong or getting worse, don't wait — go to a dental emergency room now.",
      },
    ],
    typing: "typing…",
    booking: {
      url: "calendly.com/khaliqsystems/30min",
      clinic: "Khaliq Odontologia",
      event: "Consulta Dental",
      pickDay: "Pick a day",
      pickTime: "Available times",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      times: ["8:00", "9:00", "10:00", "11:00"],
      confirm: "Confirm",
      taken: "This time is no longer available. Please pick another time.",
      done: "Appointment confirmed",
      doneWhen: "Friday, 9:00am",
      patient: "Fernanda Costa",
      label: "Illustration: the patient opens the link and picks a time.",
    },
    agenda: {
      tab: "Schedule — Khaliq Odontologia",
      clinic: "Khaliq Odontologia",
      title: "Schedule",
      todayCount: "2 appointments today",
      groups: { yesterday: "Yesterday", today: "Today", tomorrow: "Tomorrow" },
      status: { past: "Past", cancelled: "Cancelled", booked: "Booked" },
      type: "Consulta Dental",
      details: "Booking details",
      fields: { date: "Date", time: "Time", type: "Type", status: "Status" },
      source: "Booked through the booking link",
      newBadge: "New",
      newToast: "New booking",
      newName: "Fernanda Costa",
      newDate: "Friday",
      newTime: "9:00am",
      label:
        "Illustration with fictional data: the schedule the clinic sees in its booking system.",
    },
  },
  trust: {
    title: ["Technology changes.", "Trust shouldn't."],
    body: "Features are tested before they go live, and everything is documented.",
    cards: [
      {
        t: "Reliable engineering",
        d: "Features are tested before they go live, and everything is documented.",
      },
      {
        t: "Built for daily operations",
        d: "Part of how your team already works — not a side experiment.",
      },
      {
        t: "Human oversight",
        d: "Sensitive conversations reach a person. The system knows when to stop.",
      },
    ],
  },
  sofia: {
    eyebrow: "Product",
    title: "Meet Sofia.",
    subtitle: "Your AI agent on WhatsApp.",
    body: "Rather than describe the product, we'll show it. Below is an example conversation — the kind your customers would have tonight, on a Sunday, or at six in the morning.",
    caption: "Excerpts from a real conversation",
    tryReal:
      "Want to try it for real? Message +55 11 98032-4782 and talk to Sofia now. It's a demo with a fictional dental clinic.",
    cfmNote:
      "Aligned with CFM Resolution No. 2,454/2026: Sofia identifies herself as an AI virtual assistant, gives no medical advice, and hands over to the human team.",
  },
  compare: {
    eyebrow: "Comparison",
    title: "Why businesses choose AI receptionists",
    body: "The same role, on a different foundation of reliability.",
    left: {
      title: "Traditional reception",
      items: [
        "Business hours only",
        "One conversation at a time",
        "Needs training",
        "Vacation and sick leave",
        "Inconsistent responses",
      ],
    },
    right: {
      title: "Sofia",
      items: [
        "Sofia replies to patient messages at any hour — including late at night and at weekends.",
        "Consistent responses",
        "A message that arrives at 11pm gets answered at 11pm, not the next morning.",
        "Escalates complex situations to staff",
      ],
    },
  },
  build: {
    eyebrow: "Solutions",
    title: "What we build",
    cards: [
      {
        t: "AI receptionists",
        d: "WhatsApp conversations in natural language, with clear rules.",
      },
      {
        t: "Customer communication",
        d: "Fast, consistent answers across every point of contact.",
      },
      {
        t: "Operational automation",
        d: "Repetitive daily work handled without manual effort.",
      },
      {
        t: "Custom AI solutions",
        d: "Systems designed around how your business actually operates.",
      },
    ],
  },
  industries: {
    eyebrow: "Industries",
    title: "Built for clinics — dental, medical and related practices.",
  },
  how: {
    eyebrow: "Process",
    title: "How we work",
    steps: [
      ["Understand", "We map the operation, the volume and the real bottlenecks."],
      ["Engineer", "We define architecture, tone of voice and escalation rules."],
      ["Deploy", "Goes live only after the clinic approves every response."],
      ["Optimize", "We measure, tune and refine how the system behaves."],
      ["Support", "We evolve the system over time."],
    ],
  },
  about: {
    eyebrow: "Company",
    statement: [
      "Businesses shouldn't adopt AI because it's impressive.",
      "They should adopt AI because they can depend on it.",
    ],
    body: [
      "Khaliq Systems builds dependable AI systems that become a trusted part of a company's daily operations — stable, secure and maintainable.",
      "Khaliq Systems is based in São Paulo.",
    ],
  },
  missed: {
    title: "Every missed message is a missed opportunity.",
    body: [
      "Customers don't wait. When businesses respond too late, someone else usually responds first.",
      "Sofia replies immediately, without depending on someone being available.",
    ],
  },
  final: {
    title: "Ready to build smarter systems for your business?",
    body: "Let's build something your business can depend on.",
  },
  demos: {
    pick: "See how it could work in your industry:",
    tabs: {
      health: "Clinics & Healthcare",
      realEstate: "Real Estate",
      travel: "Travel Agencies",
      ecommerce: "Online Stores",
    },
    simNotice:
      "Demo with example data — not a real client. We build solutions like this to order for each business.",
    realNotice:
      "Sofia: a Khaliq Systems product. Real conversation; booking and schedule screens are illustrations.",
    realEstate: {
      chat: {
        header: "Sua Imobiliária",
        status: "online",
        typing: "typing…",
        demoLabel: "Demo with example data.",
        messages: [
          {
            from: "them",
            time: "10:12",
            text: "Hi! I saw the listing for the 2-bedroom flat in Vila Mariana. Is it still available?",
          },
          {
            from: "us",
            time: "10:12",
            text: "Hello! I'm Sua Imobiliária's virtual assistant (AI) 😊 Yes, it's available: 2 bedrooms, 68 m² and 1 parking space. Rent is R$ 3,200 + building fees.",
          },
          { from: "them", time: "10:13", text: "Are pets allowed?" },
          { from: "us", time: "10:13", text: "Yes — small pets are allowed." },
          { from: "them", time: "10:14", text: "Can I visit on Saturday?" },
          {
            from: "us",
            time: "10:14",
            text: "Sure! We have Saturday at 10am or 11:30am. Which works better?",
          },
          { from: "them", time: "10:15", text: "10am. My name is Rafael Lima." },
          {
            from: "us",
            time: "10:15",
            text: "Done, Rafael! Viewing on Saturday at 10am. An agent will confirm with you here on Friday.",
          },
        ],
      },
      flow: {
        tab: "Book a viewing — Sua Imobiliária",
        org: "Sua Imobiliária",
        title: "Book a viewing",
        fields: [
          ["Property", "2-bed flat · Vila Mariana"],
          ["Date", "Saturday, 10:00am"],
          ["Name", "Rafael Lima"],
          ["Contact", "WhatsApp"],
        ],
        action: "Confirm viewing",
        doneTitle: "Viewing booked",
        doneLines: ["Saturday, 10:00am · Rafael Lima", "2-bed flat · Vila Mariana"],
        label: "Demo with example data: booking page.",
      },
      table: {
        tab: "CRM — Sua Imobiliária",
        org: "Sua Imobiliária",
        title: "Leads",
        badge: "This week",
        columns: ["Lead", "Property", "Viewing", "Follow-up"],
        statusCol: "Status",
        newRow: {
          cells: ["Rafael Lima", "2-bed · Vila Mariana", "Sat 10:00", "Fri"],
          status: "Viewing booked",
          tone: "new",
        },
        rows: [
          {
            cells: ["Carla Souza", "3-bed house · Butantã", "Done", "Today"],
            status: "Negotiating",
            tone: "pending",
          },
          {
            cells: ["Helena Rocha", "3-bed · Moema", "Done", "Mon"],
            status: "Awaiting reply",
            tone: "pending",
          },
          {
            cells: ["Diego Alves", "Studio · Pinheiros", "—", "Tomorrow"],
            status: "New lead",
            tone: "ok",
          },
          {
            cells: ["Marcos Teixeira", "Penthouse · Itaim", "—", "—"],
            status: "Lost",
            tone: "cancel",
          },
        ],
        newBadge: "New",
        toast: "New viewing · Rafael Lima · Sat 10:00",
        label: "Demo with example data: CRM.",
      },
    },
    travel: {
      chat: {
        header: "Sua Agência",
        status: "online",
        typing: "typing…",
        demoLabel: "Demo with example data.",
        messages: [
          {
            from: "them",
            time: "14:02",
            text: "Good afternoon! How much is a package to Salvador in November, for 2 people?",
          },
          {
            from: "us",
            time: "14:02",
            text: "Good afternoon! I'm Sua Agência's virtual assistant (AI) 😊 Which dates are you thinking of?",
          },
          { from: "them", time: "14:03", text: "12 to 16 November." },
          {
            from: "us",
            time: "14:03",
            text: "For those dates we have packages from R$ 2,480 per person, with flights from São Paulo and a hotel with breakfast.",
          },
          { from: "them", time: "14:04", text: "Is the transfer included?" },
          {
            from: "us",
            time: "14:04",
            text: "The airport–hotel transfer is included. Shall I send a reservation request to an agent?",
          },
          { from: "them", time: "14:05", text: "Yes please. My name is Camila Rocha." },
          {
            from: "us",
            time: "14:05",
            text: "Request sent, Camila! An agent will confirm prices and availability with you here.",
          },
        ],
      },
      flow: {
        tab: "Reservation request — Sua Agência",
        org: "Sua Agência",
        title: "Reservation request",
        fields: [
          ["Destination", "Salvador, BA"],
          ["Dates", "12–16 Nov"],
          ["Travellers", "2 adults"],
          ["Package", "Flights + hotel + transfer"],
          ["Name", "Camila Rocha"],
        ],
        action: "Send request",
        doneTitle: "Reservation request sent",
        doneLines: [
          "Camila Rocha · Salvador, BA",
          "12–16 Nov · 2 adults",
          "Awaiting agent confirmation",
        ],
        label: "Demo with example data: request page.",
      },
      table: {
        tab: "Dashboard — Sua Agência",
        org: "Sua Agência",
        title: "Reservation requests",
        badge: "November",
        columns: ["Customer", "Destination", "Dates", "Stage"],
        statusCol: "Status",
        newRow: {
          cells: ["Camila Rocha", "Salvador, BA", "12–16 Nov", "Request received"],
          status: "Awaiting agent",
          tone: "new",
        },
        rows: [
          {
            cells: ["Lucas Prado", "Lisbon", "3–10 Nov", "Quote sent"],
            status: "Quoting",
            tone: "pending",
          },
          {
            cells: ["Beatriz Nunes", "Foz do Iguaçu", "8–11 Nov", "Payment received"],
            status: "Confirmed",
            tone: "ok",
          },
          {
            cells: ["André Melo", "Gramado", "20–23 Nov", "Awaiting payment"],
            status: "Pending",
            tone: "pending",
          },
          {
            cells: ["Paula Dias", "Santiago", "15–19 Nov", "—"],
            status: "Cancelled",
            tone: "cancel",
          },
        ],
        newBadge: "New",
        toast: "New request · Camila Rocha · Salvador",
        label: "Demo with example data: dashboard.",
      },
    },
    ecommerce: {
      chat: {
        header: "Sua Loja",
        status: "online",
        typing: "typing…",
        demoLabel: "Demo with example data.",
        messages: [
          { from: "them", time: "19:40", text: "Hi, do you have the Aurora sneaker in size 40?" },
          {
            from: "us",
            time: "19:40",
            text: "Hi! I'm Sua Loja's virtual assistant (AI) 😊 Yes, in black and white. It's R$ 349.90.",
          },
          { from: "them", time: "19:41", text: "How long does delivery to Campinas take?" },
          {
            from: "us",
            time: "19:41",
            text: "To Campinas, 2 to 3 business days — and shipping is free over R$ 299.",
          },
          { from: "them", time: "19:42", text: "I'll take the black one. How do I order?" },
          {
            from: "us",
            time: "19:42",
            text: "I've sent you the link for order #1048 — you can pay with Pix or card.",
          },
          { from: "them", time: "19:44", text: "Just paid with Pix." },
          {
            from: "us",
            time: "19:44",
            text: "Received, thank you! 🎉 Order #1048 is being packed and the tracking code will arrive here.",
          },
        ],
      },
      flow: {
        tab: "Checkout — Sua Loja",
        org: "Sua Loja",
        title: "Order #1048",
        fields: [
          ["Product", "Aurora sneaker · Black · 40"],
          ["Customer", "Marina Alves"],
          ["Delivery", "Campinas, SP · 2–3 business days"],
          ["Total", "R$ 349.90 · Free shipping"],
          ["Payment", "Pix"],
        ],
        action: "Pay with Pix",
        doneTitle: "Payment confirmed",
        doneLines: ["Order #1048 · Marina Alves", "R$ 349.90 · Pix", "Packing for dispatch"],
        label: "Demo with example data: checkout.",
      },
      table: {
        tab: "Orders — Sua Loja",
        org: "Sua Loja",
        title: "Orders",
        badge: "Today",
        columns: ["Order", "Customer", "Product", "Payment"],
        statusCol: "Shipping",
        newRow: {
          cells: ["#1048", "Marina Alves", "Aurora sneaker 40", "Paid · Pix"],
          status: "Packing",
          tone: "new",
        },
        rows: [
          {
            cells: ["#1047", "Pedro Santos", "Trail backpack", "Paid · Card"],
            status: "Shipped",
            tone: "ok",
          },
          {
            cells: ["#1046", "Lia Mendes", "Light jacket M", "Awaiting"],
            status: "Pending",
            tone: "pending",
          },
          {
            cells: ["#1045", "Rui Costa", "Aurora sneaker 42", "Paid · Pix"],
            status: "Delivered",
            tone: "done",
          },
          {
            cells: ["#1044", "Ana Prado", "Classic cap", "Refunded"],
            status: "Cancelled",
            tone: "cancel",
          },
        ],
        newBadge: "New",
        toast: "New paid order · #1048 · R$ 349.90",
        label: "Demo with example data: orders dashboard.",
      },
    },
  },
  consent: {
    body: "This site uses Google Analytics for visit statistics.",
    ok: "Ok",
  },
  contactDetails: {
    lead: "Or reach us directly:",
    whatsapp: "WhatsApp",
    email: "Email",
  },
  footer: {
    tagline:
      "AI systems, automation and digital infrastructure built for real business operations.",
    location: "São Paulo, Brazil",
    rights: "All rights reserved.",
    email: "khaliqsystems@gmail.com",
    legal:
      "Khaliq Systems · 66.551.503 ABDIKHALIQ ALI HUSSEIN · CNPJ 66.551.503/0001-63 · São Paulo, SP",
  },

  home: {
    hero: {
      eyebrow: "Khaliq Systems · São Paulo, Brazil",
      title: ["Your business shouldn't stop", "when your team gets busy."],
      body: "Khaliq Systems builds AI systems, automations and websites for businesses across different industries. Sofia is Khaliq Systems' WhatsApp AI agent: she answers your customers right away, shares your booking link when it fits, follows up if they go quiet, and hands the conversation to your team when needed.",
      primary: "Explore our systems",
      secondary: "Talk to us",
      pillars: [
        "A message that arrives at 11pm gets answered at 11pm, not the next morning.",
        "Sofia sends the booking link and the patient picks a time.",
        "Hands off to your team when it matters",
      ],
    },
    problem: {
      eyebrow: "The operational gap",
      title: ["Customers are ready.", "Your operation isn't always available."],
      body: [
        "Messages arrive after hours. Teams get overwhelmed. Follow-ups are forgotten. Appointments are missed. Routine requests consume time that should be spent on higher-value work.",
        "Khaliq Systems builds systems that take responsibility for these repetitive operational tasks and know when a person needs to step in.",
      ],
      items: [
        ["Unanswered conversations", "Customers shouldn't have to wait for routine answers."],
        [
          "Repetitive administrative work",
          "Your team shouldn't spend every day repeating the same tasks.",
        ],
        ["Lost follow-up", "Opportunities shouldn't disappear because nobody followed up."],
        ["Disconnected systems", "Your tools should work together instead of creating more work."],
      ],
    },
    industries: {
      eyebrow: "Industries",
      title: "Who we build for.",
      body: "Sofia is our product for clinics. For other industries, we design and build the solution around each business's processes — these are not off-the-shelf packages.",
      product: "Product: Sofia",
      custom: "Built to order",
      cards: [
        {
          key: "health",
          name: "Clinics & Healthcare",
          desc: "Patients message at any hour. Sofia replies on WhatsApp, sends the booking link and passes to the team whatever needs a person.",
          items: [
            "AI agent on WhatsApp",
            "Patient communication",
            "Booking by link",
            "Patient follow-ups",
            "Administrative automation",
          ],
          cta: "Meet Sofia",
        },
        {
          key: "realEstate",
          name: "Real Estate",
          desc: "Leads from listings go cold without a fast reply. Custom build: an agent that answers immediately, does an initial screening and organises viewings.",
          items: [
            "Lead capture",
            "Property inquiries",
            "Automated follow-ups",
            "Property visit booking by link",
            "Customer communication",
          ],
        },
        {
          key: "travel",
          name: "Travel Agencies",
          desc: "Quote requests arrive after hours. Custom build: an agent that understands the request, does an initial screening and hands it to a travel agent.",
          items: [
            "Travel inquiry handling",
            "Initial lead screening",
            "Customer follow-ups",
            "Booking inquiry workflows",
            "Answers to frequently asked questions",
          ],
        },
        {
          key: "ecommerce",
          name: "Online Stores & E-commerce",
          desc: "Product and order questions eat up the day. Custom build: an agent that answers questions, tracks the order and follows up.",
          items: [
            "Customer support automation",
            "Product inquiries",
            "Order-related questions",
            "Lead follow-ups",
            "E-commerce workflows",
          ],
        },
      ],
      moreTitle: "We also build for",
      more: [
        ["Restaurants", "Orders and reservations on WhatsApp"],
        ["Hotels & guesthouses", "Questions and reservation requests"],
        ["Beauty salons", "Booking by link"],
        ["Veterinary clinics", "Booking and pet-owner questions"],
        ["Gyms & sports clubs", "Plans, schedules and trial classes"],
        ["Car rentals", "Quotes and reservation requests"],
        ["Agencies", "Lead capture and screening"],
      ],
      faqLink: "See frequently asked questions",
      cta: "Tell us how your business works",
    },
    sofia: {
      eyebrow: "Flagship AI system",
      name: "Sofia",
      title:
        "An AI operations agent built to handle the work between your customers and your team.",
      body: "Sofia manages conversations, answers approved business questions, supports booking by link and follow-up, handles routine customer requests and transfers situations to a person when human attention is required.",
      caps: [
        [
          "Customer conversations",
          "Handles routine inbound conversations through supported communication channels.",
        ],
        ["Business knowledge", "Answers using approved company information and operating rules."],
        ["Booking by link", "Sofia sends the booking link and the patient picks a time."],
        ["Follow-up", "Supports structured follow-up without relying entirely on manual work."],
        [
          "Human handoff",
          "Escalates conversations when a request requires human judgment or intervention.",
        ],
        [
          "Operational memory",
          "Sofia takes into account what was already said in the same conversation, so the patient doesn't have to repeat what they just said.",
        ],
      ],
      ctaPrimary: "See Sofia in action",
      ctaSecondary: "Explore Sofia",
      health: {
        eyebrow: "Healthcare operations",
        body: "For clinics and healthcare businesses, Sofia can support non-clinical patient operations including:",
        items: [
          "Patient communication",
          "Booking by link",
          "If a patient shows interest and then goes quiet, Sofia follows up automatically.",
          "Administrative follow-up",
          "Sofia doesn't answer clinical questions — she hands them to your team immediately.",
          "Human escalation",
        ],
        note: "Sofia supports non-clinical operational workflows. It does not provide diagnosis, medical advice or treatment recommendations.",
      },
    },
    how: {
      eyebrow: "How it works",
      title: "From conversation to action.",
      body: "Sofia doesn't simply generate replies. It operates within defined business rules and connects conversations to the workflows behind them.",
      steps: [
        [
          "Customer contacts the business",
          "A customer or patient starts a conversation through a supported channel.",
        ],
        [
          "Sofia understands the request",
          "The system uses the conversation context and approved business information to determine what the customer needs.",
        ],
        [
          "Sofia handles the routine work",
          "It answers supported questions and guides approved workflows such as booking by link, information collection and follow-up.",
        ],
        [
          "Humans take over when needed",
          "Requests outside Sofia's permitted scope or situations requiring human judgment are transferred to the appropriate person.",
        ],
        [
          "The operation continues",
          "When needed, Sofia alerts your team on WhatsApp with the patient's message, their number, and any photos, videos or voice notes they sent.",
        ],
      ],
    },
    support: {
      eyebrow: "Supporting systems",
      title: "Technology around the operation.",
      body: "Not every operational problem requires an AI agent. Khaliq Systems also builds the infrastructure and digital systems that connect and support modern businesses.",
      cards: [
        {
          name: "Business Automation & Integrations",
          desc: "Reliable automation systems that connect business tools, reduce repetitive work and keep operational processes moving.",
          areas: [
            "WhatsApp automation",
            "CRM integrations",
            "API integrations",
            "Workflow automation",
            "Scheduling workflows",
            "Internal process automation",
          ],
          cta: "Explore Automations",
          to: "/automations" as const,
        },
        {
          name: "Websites & Digital Systems",
          desc: "Professional digital experiences built around usability, performance and real business functionality.",
          areas: [
            "Business websites",
            "Website development",
            "Responsive design",
            "Landing pages",
            "Website integrations",
            "Digital infrastructure",
          ],
          cta: "Explore Digital",
          to: "/digital" as const,
        },
      ],
    },
    principles: {
      items: [
        ["Reliability", "Sofia replies immediately, without depending on someone being available."],
        [
          "Clear operational rules",
          "Every deployed system operates within defined responsibilities, approved information and explicit boundaries.",
        ],
        [
          "Human oversight",
          "When a situation requires judgment, sensitivity or authority outside the system's scope, the workflow is designed to reach a person.",
        ],
        [
          "Maintainability",
          "Systems are structured so workflows, business information and operating rules can evolve as the business changes.",
        ],
        [
          "Responsible AI",
          "AI is deployed for defined operational responsibilities with clear limits rather than being given unrestricted authority.",
        ],
      ],
      closingTitle: "AI should know what it is allowed to do — and what it isn't.",
      closingBody:
        "We design operational boundaries into our systems. Sofia is built around approved business information, defined workflows and human escalation instead of pretending AI should make every decision.",
    },
    faq: {
      eyebrow: "Built for real operations",
      title: "Important questions deserve clear answers.",
      items: [
        [
          "What does Khaliq Systems do?",
          "We build AI-powered systems, automations, websites and digital solutions for businesses in different industries. Sofia, our WhatsApp AI agent, was first built for clinics; for other industries, each project is built to order.",
        ],
        [
          "Does Khaliq Systems only work with clinics?",
          "No. We build AI-powered systems, automations, websites and digital solutions for businesses across different industries. Sofia was first built for dental and medical clinics. For real estate agencies, travel agencies and online stores, each project is customized to the business.",
        ],
        [
          "What is Sofia?",
          "Sofia is Khaliq Systems' WhatsApp AI agent, first built for clinics. She replies to patients on WhatsApp, sends the booking link and passes to the team whatever needs a person.",
        ],
        [
          "How does Sofia work?",
          "The patient writes on WhatsApp. Sofia answers from the clinic's approved information and, when the patient wants an appointment, sends the booking link — the patient picks the time. When needed, she alerts the team.",
        ],
        [
          "What happens when Sofia doesn't know the answer?",
          "Sofia answers only from your clinic's information. If she doesn't know, she doesn't guess — she hands it to your team.",
        ],
        [
          "Can Sofia give medical advice?",
          "No. In healthcare deployments, Sofia is designed for non-clinical operational workflows such as communication, scheduling and administrative follow-up — not diagnosis, treatment recommendations or medical decision-making.",
        ],
        [
          "How do you handle situations that need a person?",
          "When needed, Sofia alerts your team on WhatsApp with the patient's message, their number, and any photos, videos or voice notes they sent. Sofia doesn't answer clinical questions — she hands them to your team immediately.",
        ],
        [
          "Can Sofia replace every employee?",
          "No. Sofia is designed to take responsibility for suitable repetitive operational work and support the people running the business. Human judgment remains important for exceptions, sensitive situations and responsibilities outside the system's scope.",
        ],
        [
          "Can you build a solution for my specific business?",
          "We first understand your business processes and requirements, then recommend an appropriate solution — and we say clearly when something doesn't make sense.",
        ],
        [
          "Do you offer ready-made products or custom solutions?",
          "Both. Sofia is our solution for clinics. For other needs, we develop systems tailored to each business.",
        ],
        [
          "Can your systems integrate with the tools we already use?",
          "It depends on the tool. Today, Sofia works on WhatsApp and sends booking links, such as Calendly's. Other integrations are assessed in each project before we promise anything.",
        ],
        [
          "How do we get started?",
          "Send us a WhatsApp message explaining how your business works. We talk, understand your processes and send a proposal with scope and price.",
        ],
        [
          "How much do your solutions cost?",
          "It depends on the scope. We assess your business's needs and send a quote — ask on WhatsApp.",
        ],
      ],
    },
    about: {
      eyebrow: "Khaliq Systems",
      title: "Systems businesses can depend on.",
      body: [
        "Khaliq Systems is a technology company based in São Paulo, Brazil, building AI-powered operational systems, business automation and digital infrastructure.",
        "Our focus is practical: technology that takes responsibility for real work, integrates into existing operations and remains understandable to the people responsible for the business.",
        "We are building Khaliq Systems for a future in which AI becomes part of everyday business infrastructure — not as a demonstration, but as a dependable operational layer.",
      ],
      cta: "About Khaliq Systems",
    },
    final: {
      eyebrow: "See it work",
      title: ["Don't just read about Sofia.", "Experience the system."],
      body: "See how an AI operations agent can handle a conversation, follow defined rules and know when a person needs to step in.",
      primary: "See Sofia in action",
      secondary: "Talk to us",
    },
  },
};

const dictionaries: Record<Lang, Dict> = { pt, en };

const I18nContext = createContext<{ lang: Lang; t: Dict; setLang: (l: Lang) => void }>({
  lang: "pt",
  t: pt,
  setLang: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const stored = window.localStorage.getItem("khaliq-lang");
    if (stored === "en" || stored === "pt") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("khaliq-lang", l);
  }, []);

  const value = useMemo(() => ({ lang, t: dictionaries[lang], setLang }), [lang, setLang]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);

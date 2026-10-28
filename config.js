/**
 * ====================================================================
 * ARQUIVO DE CONFIGURAÇÃO CENTRALIZADA - VEXA WEB STUDIO
 * ====================================================================
 * Altere aqui suas informações de contato, links e preferências.
 * Todas as alterações refletem automaticamente em todo o site!
 */

const SITE_CONFIG = {
  // Informações do Desenvolvedor / Estúdio
  brand: {
    name: "VEXA",
    shortName: "VEXA",
    tagline: "Desenvolvimento de Sites Profissionais de Alta Performance",
    developerName: "Desenvolvedor Web Especialista",
    city: "Brasília",
    state: "DF",
    country: "Brasil",
    availability: "Bem-Vindo ao meu Portofolio", // Texto do badge no topo
    experience: "Foco em resultados e código moderno",
  },

  // Dados de Contato Direto
  contact: {
    // Número para a API do WhatsApp (formato internacional: código do país + DDD + número sem espaços nem traços)
    whatsappRaw: "5561984030010",
    
    // Número formatado para exibição visual no site
    whatsappDisplay: "(61) 98403-0010",
    
    // E-mail profissional
    email: "vexawebb@gmail.com",
    
    // Mensagem padrão ao clicar no botão geral de WhatsApp
    whatsappDefaultMessage: "Olá! Vim pelo site da Vexa e gostaria de solicitar um orçamento para criação de um site.",
    
    // Redes sociais (deixe vazio "" se não quiser exibir)
    socials: {
      instagram: "https://instagram.com/vexawebb",
    },

    // Horário de atendimento
    businessHours: "Segunda a Sabado, das 09H às 22H",
  },

  // Serviços e Valores Base (informativos para o simulador de orçamento)
  services: [
    {
      id: "institucional",
      title: "Site Institucional",
      subtitle: "Presença digital sólida e autoridade para sua empresa",
      badge: "Mais Procurado",
      deliveryTime: "7 a 15 dias úteis",
      description: "Ideal para empresas, escritórios e profissionais liberais que buscam transmitir máxima credibilidade, apresentar seus serviços e conquistar clientes qualificados.",
      features: [
        "Design exclusivo e 100% responsivo (celular, tablet e PC)",
        "Até 5 a 8 seções completas e estruturadas",
        "Otimização inicial para o Google (SEO On-page)",
        "Botão flutuante para contato direto no WhatsApp",
        "Formulário de contato seguro com envio direto por e-mail",
        "Integração com Google Maps e redes sociais",
        "Certificado de Segurança SSL gratuito incluso",
        "Painel amigável ou suporte para atualizações",
      ],
    },
    {
      id: "landing-page",
      title: "Landing Page de Alta Conversão",
      subtitle: "Focada 100% em vendas, agendamentos ou captura de leads",
      badge: "Rápido Retorno",
      deliveryTime: "4 a 8 dias úteis",
      description: "Página única com narrativa persuasiva (Copywriting), projetada para transformar visitantes de anúncios do Google e Instagram em clientes reais.",
      features: [
        "Carregamento ultrarrápido (< 1 segundo)",
        "Estrutura psicológica de vendas e gatilhos de conversão",
        "Chamadas para ação (CTAs) estrategicamente posicionadas",
        "Formulário simplificado e link direto para o WhatsApp",
        "Perfeita para campanhas de Meta Ads e Google Ads",
        "Otimização Mobile First impecável",
        "Integração com Pixel do Meta e Google Tag Manager",
        "Seção de depoimentos e perguntas frequentes (FAQ)",
      ],
    },
    {
      id: "ecommerce",
      title: "Loja Virtual & Catálogo Digital",
      subtitle: "Venda seus produtos 24 horas por dia de forma automatizada",
      badge: "Completo",
      deliveryTime: "10 a 20 dias úteis",
      description: "Plataforma de vendas sob medida, com carrinho dinâmico, vitrine de produtos e opção de checkout direto ou fechamento prático pelo WhatsApp.",
      features: [
        "Catálogo organizado com filtros e categorias",
        "Carrinho de compras interativo com gaveta lateral",
        "Cálculo de frete e envio automatizado de pedidos",
        "Checkout simplificado ou direto no WhatsApp da loja",
        "Design moderno focado na melhor experiência de compra",
        "Integração com meios de pagamento (Pix, Cartão, Boleto)",
        "Controle de estoque simplificado e banners promocionais",
        "Totalmente adaptado para compras no celular",
      ],
    },
    {
      id: "manutencao",
      title: "Otimização, SEO & Suporte Contínuo",
      subtitle: "Seu site sempre rápido, protegido e atualizado",
      badge: "Essencial",
      deliveryTime: "Mensal / Sob demanda",
      description: "Cuidado técnico contínuo para garantir que seu site nunca fique fora do ar, mantenha velocidade máxima e suba no ranking do Google.",
      features: [
        "Monitoramento de segurança e backups periódicos",
        "Melhoria contínua dos índices Core Web Vitals",
        "Atualizações de conteúdo, imagens e textos",
        "Suporte prioritário via WhatsApp direto",
      ],
    },
  ],

  // Projetos Conceituais Demonstrativos
  showcaseProjects: [
    {
      id: "nexus-tech",
      type: "Site Institucional B2B",
      title: "Nexus Prime Consultoria & Gestão",
      category: "institucional",
      tagline: "Autoridade corporativa e captação de clientes institucionais",
      demoPath: "demos/institucional/index.html",
      badgeText: "Demonstração Conceitual",
      previewImage: "assets/img/preview-nexus.svg",
      summary: "Plataforma institucional desenvolvida para uma empresa de consultoria financeira e tributária. Apresenta arquitetura corporativa moderna, paleta executiva com detalhes em esmeralda, métricas de impacto, carrossel de serviços e formulário corporativo qualificado.",
      highlights: [
        "Design sóbrio e profissional com tipografia corporativa",
        "Seção de áreas de atuação e diferenciais competitivos",
        "Métricas visuais de impacto e autoridade de mercado",
        "Formulário interativo com triagem de leads qualificados",
        "100% responsivo e otimizado para navegação mobile",
      ],
      techStack: ["HTML5 Semântico", "CSS3 / Modern CSS", "Vanilla JavaScript", "Design Responsivo", "SEO Ready"],
    },
    {
      id: "dr-rafael",
      type: "Landing Page de Negócio Local",
      title: "Dr. Rafael Silva - Odontologia Estética",
      category: "landing-page",
      tagline: "Agendamento rápido e máxima conversão para clínica especializada",
      demoPath: "demos/landing-page/index.html",
      badgeText: "Demonstração Conceitual",
      previewImage: "assets/img/preview-odonto.svg",
      summary: "Landing page desenvolvida para negócios locais e profissionais de saúde. Focada em conduzir o paciente até o agendamento de consulta, conta com barra de contato rápida persistente no mobile, carrossel de tratamentos, mapa integrado e respostas imediatas às principais dúvidas.",
      highlights: [
        "Barra fixa de agendamento no WhatsApp para mobile",
        "Grade visual de especialidades e tratamentos",
        "Apresentação humanizada do profissional e credenciais",
        "Seção de avaliações 5 estrelas e depoimentos simulados",
        "FAQ interativo em formato sanfona para eliminar objeções",
      ],
      techStack: ["Mobile First", "Copywriting Estruturado", "WhatsApp Direct", "Micro-interações", "Performance Ultra"],
    },
    {
      id: "aura-botanicals",
      type: "Loja Virtual & Catálogo Digital",
      title: "Aura Botanicals - Cosméticos & Skincare",
      category: "ecommerce",
      tagline: "Experiência de compra fluida com carrinho dinâmico e pedido no WhatsApp",
      demoPath: "demos/ecommerce/index.html",
      badgeText: "Demonstração Conceitual",
      previewImage: "assets/img/preview-ecommerce.svg",
      summary: "E-commerce conceitual com design minimalista, clean e moderno. Inclui catálogo com filtros de categoria em tempo real, gaveta lateral de carrinho interativo com cálculo automático de subtotal, controle de quantidades e botão de finalização com envio formatado no WhatsApp.",
      highlights: [
        "Carrinho lateral interativo funcional (Drawer Cart)",
        "Filtros de categoria instantâneos sem recarregar a página",
        "Controle de quantidade, remoção e cálculo de total em tempo real",
        "Simulação de frete grátis por faixa de valor",
        "Checkout prático com envio automático dos itens para o WhatsApp",
      ],
      techStack: ["JavaScript Reativo", "Gestão de Estado do Carrinho", "Local Storage", "UI Moderna", "Checkout WhatsApp"],
    },
  ],

  // Passos do Processo de Trabalho
  workProcess: [
    {
      step: "01",
      title: "Diagnóstico & Alinhamento",
      time: "Passo 1",
      description: "Conversamos pelo WhatsApp ou chamada de vídeo para entender seu negócio, público-alvo, objetivos e o estilo visual desejado.",
      icon: "message-circle",
    },
    {
      step: "02",
      title: "Planejamento & Proposta",
      time: "Passo 2",
      description: "Apresento uma proposta detalhada com escopo das páginas, prazo de entrega garantido e investimento sem surpresas ou taxas ocultas.",
      icon: "file-text",
    },
    {
      step: "03",
      title: "Criação & Desenvolvimento",
      time: "Passo 3",
      description: "Desenvolvo o layout exclusivo e todo o código. Você recebe um link de teste para acompanhar a evolução e solicitar ajustes pontuais.",
      icon: "code",
    },
    {
      step: "04",
      title: "Lançamento & Suporte",
      time: "Passo 4",
      description: "Conectamos seu domínio oficial (.com.br), ativamos o certificado SSL, indexamos no Google e você recebe suporte para qualquer dúvida.",
      icon: "rocket",
    },
  ],
};

// Exporta globalmente para uso no browser e em módulos caso necessário
if (typeof window !== "undefined") {
  window.SITE_CONFIG = SITE_CONFIG;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
}

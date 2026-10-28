# Vexa Web Studio — Portfólio Profissional para Desenvolvedor Web

Portfólio moderno, responsivo e de alta conversão desenvolvido para apresentação profissional de serviços de criação de sites, conquista dos primeiros clientes e solicitação facilitada de orçamentos via WhatsApp.

---

## 🚀 Principais Funcionalidades

1. **Seção Inicial (Hero Section):**
   - Proposta de valor clara e direta com selo animado de disponibilidade para novos projetos.
   - Chamadas para ação (CTAs) para solicitação de orçamento e início imediato de conversa no WhatsApp.
   - Destaques de confiança: Carregamento Ultrarrápido (< 1s), 100% Responsivo, Otimizado para SEO e WhatsApp Integrado.

2. **Galeria com 3 Projetos Demonstrativos Funcionais:**
   - **Nexus Prime Consultoria & Gestão:** Site institucional corporativo multi-seção B2B (credibilidade, áreas de atuação, cases de sucesso e formulário executivo).
   - **Dr. Rafael Silva - Odontologia Estética:** Landing page de alta conversão para negócio local de saúde (barra de agendamento mobile, especialidades, depoimentos e FAQ).
   - **Aura Botanicals - Skincare Vegano:** Loja virtual e catálogo de produtos interativo com carrinho dinâmico (drawer cart), filtros de categoria em tempo real e fechamento de pedido formatado diretamente no WhatsApp.
   - *Nota de conformidade:* Todos os projetos estão identificados de forma ética e transparente como demonstrações conceituais técnicas de portfólio.
   - **Modal Interativo Embutido:** O visitante pode testar e interagir com cada projeto diretamente no portfólio com alternador de tela (Desktop, Tablet e Celular) ou abri-los em nova aba.

3. **Seção de Serviços de Criação de Sites:**
   - Detalhamento claro de Sites Institucionais, Landing Pages de Conversão e Lojas Virtuais / Catálogos.
   - Prazos de entrega estimados para cada formato e lista de diferenciais inclusos.

4. **Apresentação do Desenvolvedor & Estúdio:**
   - Apresentação autêntica, humanizada e focada em resultados comerciais.
   - Pilares de trabalho: Transparência total, metodologia Mobile First, código limpo e suporte com autonomia para o cliente.

5. **Processo de Contratação Transparente (4 Passos):**
   - Elimina as dúvidas do cliente sobre como contratar: Diagnóstico & Alinhamento → Proposta & Planejamento → Criação & Validação → Publicação & Suporte.

6. **Simulador Interativo de Orçamento:**
   - O cliente escolhe o tipo de site, marca as funcionalidades desejadas, seleciona o prazo e, com 1 clique, o sistema formata e abre o WhatsApp com a mensagem completa pronta para envio ao número configurado.

7. **Botão Flutuante de WhatsApp:**
   - Fixo no canto inferior direito com pulso luminoso, tooltip explicativo e mensagem pré-definida.

8. **Rodapé Profissional:**
   - Logotipo Vexa, mapa de links rápidos, dados de contato, horário de atendimento e termos de direitos autorais.

---

## ⚙️ Configuração Fácil dos Dados de Contato

Todos os dados de contato, WhatsApp, e-mail e informações do estúdio estão centralizados em um único arquivo: **`config.js`**.

Para alterar o número de WhatsApp, o e-mail ou o nome do estúdio, basta editar `config.js`:

```javascript
const SITE_CONFIG = {
  brand: {
    name: "Vexa Web Studio",
    availability: "Disponível para novos projetos",
    city: "Brasília",
    state: "DF",
  },

  contact: {
    // Número para a API do WhatsApp (código do país + DDD + número)
    whatsappRaw: "556184030010",
    
    // Número formatado para exibição visual
    whatsappDisplay: "(61) 8403-0010",
    
    // E-mail profissional
    email: "contato@vexaweb.com.br",
    
    // Mensagem padrão ao clicar no botão geral de WhatsApp
    whatsappDefaultMessage: "Olá! Vim pelo site da Vexa e gostaria de solicitar um orçamento para criação de um site.",
  },
  // ...
};
```

Ao salvar o `config.js`, o site atualiza automaticamente todos os links, botões e textos da página!

---

## 📁 Estrutura de Arquivos

```
vertex/
├── index.html                   # Página principal do portfólio
├── config.js                    # Configurações centralizadas (WhatsApp, e-mail, textos)
├── README.md                    # Instruções completas do projeto
├── assets/
│   ├── css/
│   │   └── style.css            # Design system, responsividade, glassmorphism e animações
│   ├── js/
│   │   ├── main.js              # Injeção dinâmica de dados, menu mobile, FAQ e rolagem suave
│   │   ├── quote-simulator.js   # Lógica do simulador interativo de orçamento
│   │   └── demo-modal.js        # Gerenciamento do visualizador interativo dos projetos
│   └── img/
│       ├── vexa-logo.svg        # Logotipo vetorial estilizado da marca Vexa
│       ├── preview-nexus.svg    # Mockup vetorial do site institucional B2B
│       ├── preview-odonto.svg   # Mockup vetorial da landing page clínica
│       └── preview-ecommerce.svg# Mockup vetorial da loja virtual
└── demos/
    ├── institucional/           # Demonstração 1: Nexus Prime Consultoria B2B
    │   └── index.html
    ├── landing-page/            # Demonstração 2: Dr. Rafael Silva Odontologia
    │   └── index.html
    └── ecommerce/               # Demonstração 3: Aura Botanicals Loja Virtual
        └── index.html
```

---

## 🌐 Como Executar e Testar

Como o projeto utiliza tecnologias web puras e otimizadas (HTML5 semântico, CSS moderno e Vanilla JavaScript), **não é necessária nenhuma etapa de build ou compilação**:

1. **Abertura Direta no Navegador:**
   - Dê um duplo clique no arquivo `index.html` ou clique com o botão direito e escolha "Abrir com Google Chrome" (ou seu navegador de preferência).

2. **Com Servidor Local (Opcional):**
   - Com Node.js: `npx serve .`
   - Com Python: `python -m http.server 8080`
   - Com a extensão **Live Server** do VS Code.

3. **Hospedagem Gratuita em Produção:**
   - O projeto está 100% pronto para publicação direta na Vercel, Netlify, GitHub Pages ou qualquer hospedagem tradicional (Hostinger, cPanel, Cloudflare Pages).

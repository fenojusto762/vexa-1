/**
 * ====================================================================
 * JAVASCRIPT PRINCIPAL - VEXA WEB STUDIO
 * ====================================================================
 * Injeta os dados da configuração centralizada (config.js), gerencia
 * o menu responsivo, rolagem suave, FAQ e gatilhos de WhatsApp.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Aplica dados de configuração dinâmicos do SITE_CONFIG
  applyConfigData();

  // 2. Configura menu responsivo mobile
  initMobileMenu();

  // 3. Efeito de cabeçalho na rolagem (sticky blur)
  initHeaderScroll();

  // 4. Acordeão de Perguntas Frequentes (FAQ)
  initFaqAccordion();

  // 5. Configuração dos links diretos de WhatsApp
  initWhatsAppLinks();

  // 6. Formulário de contato direto para o WhatsApp
  initContactForm();

  // 7. Rolagem suave para âncoras internas
  initSmoothScroll();
});

/**
 * Atualiza todos os elementos marcados com [data-config]
 * usando os valores definidos no SITE_CONFIG.
 */
function applyConfigData() {
  if (typeof window.SITE_CONFIG === "undefined") {
    console.warn("SITE_CONFIG não encontrado. Usando valores padrão do HTML.");
    return;
  }

  const cfg = window.SITE_CONFIG;

  // Atualiza textos marcados
  document.querySelectorAll("[data-config]").forEach(el => {
    const keyPath = el.dataset.config;
    const value = getNestedValue(cfg, keyPath);
    if (value !== undefined) {
      el.textContent = value;
    }
  });

  // Atualiza links com data-config-href
  document.querySelectorAll("[data-config-href]").forEach(el => {
    const keyPath = el.dataset.configHref;
    const value = getNestedValue(cfg, keyPath);
    if (value !== undefined) {
      el.href = value;
    }
  });
}

/**
 * Obtém valor aninhado por string (ex: 'contact.whatsappDisplay')
 */
function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, part) => (acc && acc[part] !== undefined) ? acc[part] : undefined, obj);
}

/**
 * Menu móvel responsivo (Hambúrguer)
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    toggleBtn.setAttribute("aria-expanded", isOpen);
    toggleBtn.innerHTML = isOpen ? "✕" : "☰";
  });

  // Fecha o menu ao clicar em qualquer link
  navMenu.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      toggleBtn.innerHTML = "☰";
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });
}

/**
 * Adiciona classe ao cabeçalho quando o usuário rola a página
 */
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });
}

/**
 * Acordeão de FAQ (Perguntas Frequentes)
 */
function initFaqAccordion() {
  const faqCards = document.querySelectorAll(".faq-card");
  faqCards.forEach(card => {
    const header = card.querySelector(".faq-header");
    if (header) {
      header.addEventListener("click", () => {
        const isOpen = card.classList.contains("open");
        // Fecha outros cards se quiser estilo sanfona única
        faqCards.forEach(c => c.classList.remove("open"));
        if (!isOpen) {
          card.classList.add("open");
        }
      });
    }
  });
}

/**
 * Monta links diretos do WhatsApp com o número e mensagem padrão do config
 */
function initWhatsAppLinks() {
  if (typeof window.SITE_CONFIG === "undefined") return;
  const cfg = window.SITE_CONFIG;

  const phone = cfg.contact.whatsappRaw || "5561984030010";
  const defaultMsg = encodeURIComponent(cfg.contact.whatsappDefaultMessage || "Olá! Gostaria de solicitar um orçamento para meu site.");

  const whatsappUrl = `https://wa.me/${phone}?text=${defaultMsg}`;

  // Atualiza todos os botões marcados com a classe .dynamic-whatsapp-link
  document.querySelectorAll(".dynamic-whatsapp-link").forEach(btn => {
    btn.href = whatsappUrl;
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
  });
}

/**
 * Envio do formulário de contato integrado ao WhatsApp
 */
function initContactForm() {
  const form = document.getElementById("vexaContactForm");
  const feedback = document.getElementById("vexaFormFeedback");

  if (!form || !feedback) return;

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("vexa-name")?.value.trim();
    const email = document.getElementById("vexa-email")?.value.trim();
    const subject = document.getElementById("vexa-subject")?.value.trim();
    const message = document.getElementById("vexa-message")?.value.trim();

    const whatsappNumber = (window.SITE_CONFIG && window.SITE_CONFIG.contact && window.SITE_CONFIG.contact.whatsappRaw) 
      ? window.SITE_CONFIG.contact.whatsappRaw 
      : "5561984030010";

    if (!name || !email || !subject || !message) {
      feedback.textContent = "Preencha todos os campos antes de continuar.";
      feedback.classList.add("visible");
      return;
    }

    const text = [
      "Olá, Vexa! Gostaria de conversar sobre um projeto.",
      "",
      "👤 *Nome:* " + name,
      "✉️ *E-mail:* " + email,
      "📌 *Assunto:* " + subject,
      "💬 *Mensagem:* " + message
    ].join("\n");

    const url = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(text);
    window.open(url, "_blank", "noopener,noreferrer");

    feedback.textContent = "Mensagem formatada e enviada para o WhatsApp! Finalize o envio na conversa aberta.";
    feedback.classList.add("visible");
  });
}

/**
 * Rolagem suave com compensação da altura do cabeçalho fixo
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = document.querySelector(".site-header")?.offsetHeight || 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

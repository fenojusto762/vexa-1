/**
 * ====================================================================
 * SIMULADOR INTERATIVO DE ORÇAMENTO - VEXA WEB STUDIO
 * ====================================================================
 * Permite ao visitante selecionar o tipo de projeto, recursos desejados
 * e prazo estimado, gerando um resumo personalizado e encaminhando
 * diretamente para o WhatsApp do desenvolvedor.
 */

document.addEventListener("DOMContentLoaded", () => {
  initQuoteSimulator();
});

function initQuoteSimulator() {
  const container = document.getElementById("quoteSimulator");
  if (!container) return;

  // Estado da Simulação
  const state = {
    projectType: "institucional",
    projectTitle: "Site Institucional",
    timeframe: "normal",
    timeframeTitle: "Prazo Normal (7 a 15 dias)",
    features: [
      { id: "whatsapp", name: "Botão WhatsApp Integrado", included: true },
      { id: "seo", name: "Otimização SEO para Google", included: true },
    ],
  };

  // Referências aos cards de tipo de projeto
  const projectTypeCards = document.querySelectorAll(".quote-type-card");
  projectTypeCards.forEach(card => {
    card.addEventListener("click", () => {
      projectTypeCards.forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      
      state.projectType = card.dataset.type;
      state.projectTitle = card.dataset.title;
      updateSummary();
    });
  });

  // Referências aos cards de prazo
  const timeframeCards = document.querySelectorAll(".quote-timeframe-card");
  timeframeCards.forEach(card => {
    card.addEventListener("click", () => {
      timeframeCards.forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");

      state.timeframe = card.dataset.timeframe;
      state.timeframeTitle = card.dataset.title;
      updateSummary();
    });
  });

  // Checkboxes de Funcionalidades
  const featureCheckboxes = document.querySelectorAll(".quote-feature-checkbox");
  featureCheckboxes.forEach(cb => {
    cb.addEventListener("change", () => {
      const featureId = cb.dataset.feature;
      const featureName = cb.dataset.name;

      if (cb.checked) {
        if (!state.features.some(f => f.id === featureId)) {
          state.features.push({ id: featureId, name: featureName, included: true });
        }
      } else {
        state.features = state.features.filter(f => f.id !== featureId);
      }
      updateSummary();
    });
  });

  // Botão de Envio para WhatsApp
  const btnSendWhatsApp = document.getElementById("btnSendQuoteWhatsApp");
  if (btnSendWhatsApp) {
    btnSendWhatsApp.addEventListener("click", () => {
      const clientNameInput = document.getElementById("quoteClientName");
      const clientSegmentInput = document.getElementById("quoteClientSegment");

      const clientName = clientNameInput ? clientNameInput.value.trim() : "";
      const clientSegment = clientSegmentInput ? clientSegmentInput.value.trim() : "";

      const phone = window.SITE_CONFIG ? window.SITE_CONFIG.contact.whatsappRaw : "5561984030010";

      // Monta a mensagem personalizada
      let msg = `Olá! Gostaria de solicitar um orçamento para desenvolvimento de site:%0A%0A`;
      
      if (clientName) {
        msg += `👤 *Meu Nome:* ${encodeURIComponent(clientName)}%0A`;
      }
      if (clientSegment) {
        msg += `🏢 *Meu Negócio/Segmento:* ${encodeURIComponent(clientSegment)}%0A`;
      }

      msg += `📌 *Tipo de Site:* ${encodeURIComponent(state.projectTitle)}%0A`;
      msg += `⏱️ *Expectativa de Prazo:* ${encodeURIComponent(state.timeframeTitle)}%0A`;

      if (state.features.length > 0) {
        msg += `%0A✨ *Recursos Desejados:*%0A`;
        state.features.forEach(f => {
          msg += `• ${encodeURIComponent(f.name)}%0A`;
        });
      }

      msg += `%0APoderia me informar a estimativa de investimento e detalhes para iniciarmos?`;

      const finalUrl = `https://wa.me/${phone}?text=${msg}`;
      window.open(finalUrl, "_blank");
    });
  }

  function updateSummary() {
    const summaryType = document.getElementById("summaryProjectType");
    const summaryTimeframe = document.getElementById("summaryTimeframe");
    const summaryFeatures = document.getElementById("summaryFeaturesList");

    if (summaryType) summaryType.textContent = state.projectTitle;
    if (summaryTimeframe) summaryTimeframe.textContent = state.timeframeTitle;

    if (summaryFeatures) {
      if (state.features.length === 0) {
        summaryFeatures.innerHTML = '<span style="color: var(--text-muted);">Nenhum recurso extra selecionado.</span>';
      } else {
        summaryFeatures.innerHTML = state.features.map(f => `
          <span class="tech-tag" style="background: rgba(16, 185, 129, 0.15); color: #34d399; border-color: rgba(16, 185, 129, 0.3);">
            ✓ ${f.name}
          </span>
        `).join(" ");
      }
    }
  }

  // Executa uma vez no início
  updateSummary();
}

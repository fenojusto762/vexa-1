/**
 * ====================================================================
 * MODAL DE DEMONSTRAÇÃO INTERATIVA - VEXA WEB STUDIO
 * ====================================================================
 * Permite que o visitante visualize e interaja com os projetos conceituais
 * demonstrativos diretamente em uma janela modal com controle de viewport
 * (Desktop, Tablet e Mobile).
 */

document.addEventListener("DOMContentLoaded", () => {
  initDemoModal();
});

function initDemoModal() {
  const overlay = document.getElementById("demoModalOverlay");
  const modalContainer = document.getElementById("demoModalContainer");
  const iframeWrapper = document.getElementById("demoIframeWrapper");
  const iframe = document.getElementById("demoModalIframe");
  const modalTitle = document.getElementById("demoModalTitle");
  const modalSubtitle = document.getElementById("demoModalSubtitle");
  const btnClose = document.getElementById("demoModalClose");
  const btnExternal = document.getElementById("demoModalExternal");
  const viewportBtns = document.querySelectorAll(".viewport-btn");

  if (!overlay || !iframe) return;

  let currentDemoPath = "";

  // Botões de abertura de demonstração
  const openButtons = document.querySelectorAll(".btn-open-demo");
  openButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const demoPath = btn.dataset.demoPath;
      const title = btn.dataset.title || "Projeto Demonstrativo";
      const type = btn.dataset.type || "Demonstração Conceitual";

      openDemo(demoPath, title, type);
    });
  });

  function openDemo(path, title, type) {
    currentDemoPath = path;
    if (modalTitle) modalTitle.textContent = title;
    if (modalSubtitle) modalSubtitle.textContent = `Projeto Conceitual • ${type}`;
    
    // Define caminho do iframe
    iframe.src = path;

    // Reset para viewport desktop
    resetViewport();

    // Exibe o modal
    overlay.classList.add("active");
    document.body.style.overflow = "hidden"; // Evita rolagem do fundo
  }

  function closeDemo() {
    overlay.classList.remove("active");
    iframe.src = "about:blank"; // Limpa o iframe
    document.body.style.overflow = "";
  }

  // Fechar no clique do X ou no fundo escuro
  if (btnClose) {
    btnClose.addEventListener("click", closeDemo);
  }

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeDemo();
    }
  });

  // Fechar com a tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      closeDemo();
    }
  });

  // Botão Abrir em Nova Aba
  if (btnExternal) {
    btnExternal.addEventListener("click", () => {
      if (currentDemoPath) {
        window.open(currentDemoPath, "_blank");
      }
    });
  }

  // Controle de Viewport (Desktop / Tablet / Mobile)
  viewportBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.viewport;
      viewportBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      iframeWrapper.className = `demo-iframe-wrapper viewport-${mode}`;
    });
  });

  function resetViewport() {
    viewportBtns.forEach(b => {
      if (b.dataset.viewport === "desktop") {
        b.classList.add("active");
      } else {
        b.classList.remove("active");
      }
    });
    if (iframeWrapper) {
      iframeWrapper.className = "demo-iframe-wrapper viewport-desktop";
    }
  }

  // Expõe a função globalmente para chamadas diretas
  window.openProjectDemo = openDemo;
}

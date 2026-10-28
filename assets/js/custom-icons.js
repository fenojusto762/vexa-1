
(() => {
  const icons = {
    "💬": '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/>',
    "⚡": '<path d="m13 2-3 9h7l-6 11 2-9H6l7-11z"/>',
    "📱": '<rect x="5" y="2" width="14" height="20" rx="3"/><path d="M11 18h2"/>',
    "🔍": '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
    "🏢": '<rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 6h2m2 0h2M9 10h2m2 0h2M9 14h2m2 0h2M10 22v-4h4v4"/>',
    "🎯": '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    "🛍️": '<path d="M5 8h14l1 13H4L5 8z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/>',
    "📅": '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
    "💡": '<path d="M9 18h6m-5 4h4m-2-20a7 7 0 0 0-4 12.7c.8.6 1 1.3 1 2.3h6c0-1 .2-1.7 1-2.3A7 7 0 0 0 12 2z"/>',
    "🤝": '<path d="m3 12 4-4 4 2 3-2 7 4-5 6-4-2-3 2-6-6z"/><path d="m7 8 3-3 5 1 3 3"/>',
    "🖥️": '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/>',
    "📲": '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4M3 7v5m0-5 2 2M21 12V7m0 5-2-2"/>',
    "⏱️": '<circle cx="12" cy="13" r="9"/><path d="M12 13l4-3M9 2h6m-3 0v2"/>',
    "📍": '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/>',
    "⏰": '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M5 3 3 5m16-2 2 2"/>',
    "📧": '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m3 6 9 7 9-7"/>',
    "✓": '<path d="m5 12 4 4L19 6"/>',
    "→": '<path d="M5 12h14m-7-7 7 7-7 7"/>',
    "↗": '<path d="M7 17 17 7M7 7h10v10"/>',
    "🎯": '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>'
  };

  const colors = {
    "💬": "whatsapp",
    "⚡": "accent",
    "✓": "accent",
    "→": "accent",
    "↗": "accent"
  };

  const escapeRegExp = value =>
    value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const emojiPattern = new RegExp(
    Object.keys(icons)
      .sort((a, b) => b.length - a.length)
      .map(escapeRegExp)
      .join("|"),
    "gu"
  );

  function replaceTextNode(node) {
    const text = node.nodeValue;
    if (!text || !emojiPattern.test(text)) {
      emojiPattern.lastIndex = 0;
      return;
    }

    emojiPattern.lastIndex = 0;
    const fragment = document.createDocumentFragment();
    let lastIndex = 0;

    for (const match of text.matchAll(emojiPattern)) {
      const emoji = match[0];
      const index = match.index;

      if (index > lastIndex) {
        fragment.append(document.createTextNode(
          text.slice(lastIndex, index)
        ));
      }

      const span = document.createElement("span");
      span.className = `vexa-icon ${colors[emoji] || "accent"}`;
      span.setAttribute("aria-hidden", "true");
      span.innerHTML = `
        <svg viewBox="0 0 24 24"
             fill="none"
             stroke="currentColor"
             stroke-width="1.7"
             stroke-linecap="round"
             stroke-linejoin="round">
          ${icons[emoji]}
        </svg>
      `;

      fragment.append(span);
      lastIndex = index + emoji.length;
    }

    if (lastIndex < text.length) {
      fragment.append(document.createTextNode(text.slice(lastIndex)));
    }

    node.replaceWith(fragment);
  }

  function convertIcons() {
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT
    );

    const nodes = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!node.parentElement?.closest(
        "script, style, textarea, input, code, pre, svg"
      )) {
        nodes.push(node);
      }
    }

    nodes.forEach(replaceTextNode);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", convertIcons);
  } else {
    convertIcons();
  }
})();

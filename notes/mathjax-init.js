// KaTeX initialization script
async function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function loadCSS(href) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = resolve;
    link.onerror = reject;
    document.head.appendChild(link);
  });
}

async function initKaTeX() {
  const tasks = [
    loadCSS('https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css'),
    loadScript('https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js'),
    loadScript('https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js')
  ];
  await Promise.all(tasks);
  renderMathInElement(document.body, {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false },
      { left: '\\(', right: '\\)', display: false },
      { left: '\\[', right: '\\]', display: true }
    ]
  });
}

// run once DOM ready
document.addEventListener('DOMContentLoaded', initKaTeX);

// re-run every time mdBook loads a new page
window.addEventListener('mdbook-page-changed', () => {
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true }
      ]
    });
  }
});

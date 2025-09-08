window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],   // 单美元和 \(...\) 支持
    displayMath: [['$$', '$$'], ['\\[', '\\]']], // 双美元和 \[...\] 支持
    processEscapes: true,    // 支持转义 \$ 符号
    processEnvironments: true
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'], // 不在这些标签里渲染
  }
};

// 动态加载 MathJax
(function () {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.id = 'MathJax-script';
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
  document.head.appendChild(script);
})();

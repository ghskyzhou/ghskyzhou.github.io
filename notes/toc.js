document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector("mdbook-sidebar-scrollbox");
  if (!container) return;

  const content = document.querySelector("main");
  if (!content) return;

  const headings = content.querySelectorAll("h1, h2, h3");
  if (!headings.length) return;

  const title = document.createElement("div");
  title.className = "sidebar-toc-title";
  title.textContent = "On This Page";
  container.appendChild(title);

  const ul = document.createElement("ul");
  ul.className = "sidebar-toc-list";

  function slugify(text) {
    return text.toLowerCase().trim()
      .replace(/[^\w\u4e00-\u9fa5\s-]/g, "")
      .replace(/\s+/g, "-");
  }

  headings.forEach(h => {
    if (!h.id) h.id = slugify(h.textContent);
    const li = document.createElement("li");
    li.className = "sidebar-toc-item " + h.tagName.toLowerCase();
    const a = document.createElement("a");
    a.href = "#" + h.id;
    a.textContent = h.textContent;
    li.appendChild(a);
    ul.appendChild(li);
  });

  container.appendChild(ul);

  // 滚动高亮当前标题
  const links = ul.querySelectorAll("a");
  window.addEventListener("scroll", () => {
    let current = null;
    headings.forEach(h => {
      const rect = h.getBoundingClientRect();
      if (rect.top <= 100) current = h.id;
    });
    links.forEach(a => {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  });
});

(() => {
  const themeButton = document.getElementById('theme-toggle');
  const sun = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg>';
  const moon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 13.5A9 9 0 0 1 10.5 3.5a9 9 0 1 0 10 10Z"/></svg>';
  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    themeButton.innerHTML = theme === 'dark' ? sun : moon;
    themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
    try { localStorage.setItem('brandon-site-theme', theme); } catch { /* Optional preference. */ }
  }
  let theme = 'dark'; try { if (localStorage.getItem('brandon-site-theme') === 'light') theme = 'light'; } catch { /* Default dark. */ }
  setTheme(theme); themeButton.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
  const menu = document.getElementById('menu-toggle'); const links = document.getElementById('nav-links');
  menu.addEventListener('click', () => { const open = links.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation'); });
  links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { links.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation'); }));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { links.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation'); } });
  document.getElementById('year').textContent = new Date().getFullYear();
})();

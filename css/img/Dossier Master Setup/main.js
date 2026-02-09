// Onglets + recherche + badge
document.addEventListener('DOMContentLoaded', () => {
  const tabs = Array.from(document.querySelectorAll('.tab'));
  const panels = Array.from(document.querySelectorAll('.panel'));
  const searchForm = document.querySelector('.searchbar');

  function showPanel(key){
    tabs.forEach(t => t.classList.toggle('is-active', t.dataset.tab === key));
    panels.forEach(p => p.classList.toggle('is-active', p.getAttribute('data-panel') === key));
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const key = tab.dataset.tab;
      showPanel(key);
      document.getElementById('main')?.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });

  if (searchForm){
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = (document.getElementById('global-search')?.value || '').trim();
      if (!q) return;
      showPanel('accueil');
      alert('Recherche: "' + q + '" (démo)');
    });
  }

  showPanel('accueil');

  // Démo badge
  updateCartCount(3);
});

function updateCartCount(n){
  const badge = document.getElementById('ms-cart-badge');
  if (!badge) return;
  badge.textContent = n;
  badge.style.display = n > 0 ? 'inline-flex' : 'none';
}

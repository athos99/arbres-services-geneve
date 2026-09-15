/**
 * ASG Arbres Services Genève - Script Principal Multilingue (FR / EN / DE)
 * Interactivité légère : Menu mobile accessible, Filtres de galerie
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initGalleryFilter();
});

/**
 * Gestion du menu mobile accessible
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (!toggleBtn || !mainNav) return;

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !isExpanded);
    mainNav.classList.toggle('active');

    if (!isExpanded) {
      const firstLink = mainNav.querySelector('a');
      if (firstLink) firstLink.focus();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.focus();
    }
  });

  document.addEventListener('click', (e) => {
    if (
      mainNav.classList.contains('active') &&
      !mainNav.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      mainNav.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * Filtres interactifs pour la galerie de réalisations
 */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const statusAnnouncer = document.getElementById('gallery-status');

  if (!filterBtns.length || !galleryItems.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.removeAttribute('aria-current');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-current', 'true');

      const filter = btn.getAttribute('data-filter');
      let visibleCount = 0;

      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          visibleCount++;
        } else {
          item.style.display = 'none';
        }
      });

      if (statusAnnouncer) {
        const lang = document.documentElement.lang || 'fr';
        if (lang === 'en') {
          statusAnnouncer.textContent = `${visibleCount} projects displayed for this category.`;
        } else if (lang === 'de') {
          statusAnnouncer.textContent = `${visibleCount} Projekte für diesen Filter angezeigt.`;
        } else {
          statusAnnouncer.textContent = `${visibleCount} réalisations affichées pour ce filtre.`;
        }
      }
    });
  });
}


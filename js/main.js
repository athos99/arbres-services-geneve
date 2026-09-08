/**
 * ASG Arbres Services Genève - Script Principal Multilingue (FR / EN / DE)
 * Interactivité légère : Menu mobile accessible, Filtres de galerie, Formulaire mailto
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initGalleryFilter();
  initQuoteForm();
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

/**
 * Formulaire de devis avec génération mailto: multilingue (100% statique)
 */
function initQuoteForm() {
  const quoteForm = document.getElementById('quote-form');
  if (!quoteForm) return;

  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const lang = document.documentElement.lang || 'fr';
    const name = document.getElementById('form-name')?.value.trim();
    const phone = document.getElementById('form-phone')?.value.trim();
    const email = document.getElementById('form-email')?.value.trim();
    const clientType = document.getElementById('form-client-type')?.value || '';
    const service = document.getElementById('form-service')?.value || '';
    const location = document.getElementById('form-location')?.value.trim() || 'Genève / Vaud';
    const isUrgentChecked = document.getElementById('form-urgent')?.checked;
    const message = document.getElementById('form-message')?.value.trim();
    const formFeedback = document.getElementById('form-feedback');

    // Validation des champs
    if (!name || (!phone && !email) || !message) {
      if (formFeedback) {
        formFeedback.style.display = 'block';
        formFeedback.className = 'form-notice';
        formFeedback.style.borderColor = '#d52b1e';
        formFeedback.style.backgroundColor = '#fdf2f2';
        formFeedback.style.color = '#9e150b';
        
        if (lang === 'en') {
          formFeedback.innerHTML = '<strong>Attention:</strong> Please provide your name, at least one contact method (phone or email), and a brief description of your trees.';
        } else if (lang === 'de') {
          formFeedback.innerHTML = '<strong>Achtung:</strong> Bitte geben Sie Ihren Namen, mindestens eine Kontaktmöglichkeit (Telefon oder E-Mail) und eine kurze Beschreibung an.';
        } else {
          formFeedback.innerHTML = '<strong>Attention :</strong> Veuillez renseigner votre nom, au moins un moyen de contact (téléphone ou e-mail) et décrire brièvement votre besoin.';
        }
      }
      return;
    }

    const recipient = 'bendik.hauserman@bluewin.ch';
    let subject = '';
    let bodyText = '';

    if (lang === 'en') {
      const urgentStatus = isUrgentChecked ? 'YES - EMERGENCY STORM DAMAGE / RISK OF FALL' : 'Standard delay';
      subject = encodeURIComponent(`Quote Request - ${service} - ${name} (${location})`);
      bodyText = 
`Hello Bendik,

Here is a new quote request from the website arbres-services-geneve.ch:

--------------------------------------------------
CONTACT DETAILS:
- Name / Company: ${name}
- Profile: ${clientType}
- Phone: ${phone || 'Not provided'}
- Email: ${email || 'Not provided'}
- Location / Municipality: ${location}
- Storm Emergency / Danger: ${urgentStatus}
--------------------------------------------------

SERVICE REQUESTED:
- Type of work: ${service}

PROJECT DESCRIPTION & TREE DETAILS:
${message}

--------------------------------------------------
ASG Arbres Services Genève
Bendik Häuserman - Vernier (GE)
Phone: +41 79 921 77 23`;
    } else if (lang === 'de') {
      const urgentStatus = isUrgentChecked ? 'JA - NOTFALL NACH STURM / STURZGEFAHR' : 'Standardtermin';
      subject = encodeURIComponent(`Offertanfrage - ${service} - ${name} (${location})`);
      bodyText = 
`Guten Tag Bendik,

Hier ist eine neue Offertanfrage über die Website arbres-services-geneve.ch:

--------------------------------------------------
KONTAKTDATEN:
- Name / Unternehmen: ${name}
- Profil: ${clientType}
- Telefon: ${phone || 'Nicht angegeben'}
- E-Mail: ${email || 'Nicht angegeben'}
- Gemeinde / Standort: ${location}
- Unwetter-Notfall / Gefahr: ${urgentStatus}
--------------------------------------------------

GEWÜNSCHTE DIENSTLEISTUNG:
- Art der Arbeiten: ${service}

BESCHREIBUNG DER BÄUME & DETAILS:
${message}

--------------------------------------------------
ASG Arbres Services Genève
Bendik Häuserman - Vernier (GE)
Tel: +41 79 921 77 23`;
    } else {
      const urgentStatus = isUrgentChecked ? 'OUI - INTERVENTION D\'URGENCE' : 'Non (délai standard)';
      subject = encodeURIComponent(`Demande de devis - ${service} - ${name} (${location})`);
      bodyText = 
`Bonjour Bendik,

Voici une nouvelle demande de devis transmise depuis le site web arbres-services-geneve.ch :

--------------------------------------------------
INFORMATIONS DE CONTACT :
- Nom / Société : ${name}
- Profil : ${clientType}
- Téléphone : ${phone || 'Non renseigné'}
- E-mail : ${email || 'Non renseigné'}
- Commune / Localisation du chantier : ${location}
- Urgence intempéries / risque : ${urgentStatus}
--------------------------------------------------

PRESTATION SOUHAITÉE :
- Type de travaux : ${service}

DESCRIPTION DU BESOIN & DÉTAILS DU VÉGÉTAL :
${message}

--------------------------------------------------
ASG Arbres Services Genève
Bendik Häuserman - Vernier (GE)
Tél : +41 79 921 77 23`;
    }

    const body = encodeURIComponent(bodyText);
    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

    if (formFeedback) {
      formFeedback.style.display = 'block';
      formFeedback.className = 'form-notice';
      formFeedback.style.borderColor = '#245239';
      formFeedback.style.backgroundColor = '#eef6f1';
      formFeedback.style.color = '#132a1d';
      
      if (lang === 'en') {
        formFeedback.innerHTML = 
          `<strong>Your email is ready!</strong> Your email client will now open.<br>` +
          `If it does not open automatically, <a href="${mailtoUrl}" style="font-weight:bold; text-decoration:underline;">click here to send your email to Bendik Häuserman</a>.`;
      } else if (lang === 'de') {
        formFeedback.innerHTML = 
          `<strong>Ihre E-Mail ist bereit!</strong> Ihr E-Mail-Programm wird geöffnet.<br>` +
          `Falls es sich nicht öffnet, <a href="${mailtoUrl}" style="font-weight:bold; text-decoration:underline;">klicken Sie hier, um die E-Mail an Bendik Häuserman zu senden</a>.`;
      } else {
        formFeedback.innerHTML = 
          `<strong>Votre e-mail est prêt !</strong> Votre logiciel de messagerie va s'ouvrir.<br>` +
          `Si la fenêtre ne s'est pas ouverte automatiquement, <a href="${mailtoUrl}" style="font-weight:bold; text-decoration:underline;">cliquez ici pour envoyer directement l'e-mail à Bendik Häuserman</a>.`;
      }
    }

    window.location.href = mailtoUrl;
  });
}

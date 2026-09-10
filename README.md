# ASG Arbres Services Genève - Site Web Officiel

Site web vitrine professionnel, multilingue et 100% statique pour l'entreprise suisse **ASG Arbres Services Genève**, fondée par **Bendik Häuserman** et basée à **Vernier (GE)**.

## 🌿 Spécifications du projet
- **URL cible :** `https://arbres-services-geneve.ch`
- **Langues supportées :** Français (FR), Anglais (EN), Allemand (DE)
- **Hébergement :** 100% statique (compatible GitHub Pages, Infomaniak, Netlify, Cloudflare Pages, OVH, Apache, Nginx, etc.)
- **Zéro dépendance serveur :** Aucun serveur SMTP, PHP ou base de données requis
- **Formulaire de devis :** Générateur interactif `mailto:bendik.hauserman@bluewin.ch` avec préremplissage automatique
- **Accessibilité :** Conforme WCAG 2.1 AA/AAA (fort contraste, lecteurs d'écran, navigation clavier)
- **SEO & Référencement :** Balises OpenGraph, Twitter Cards, balises hreflang, données structurées Schema.org (`HomeAndConstructionBusiness`), `sitemap.xml` et `robots.txt`

---

## 📁 Structure des fichiers
```
arbres-services-geneve/
├── index.html              # Page d'accueil (Français)
├── services.html           # Prestations détaillées (Français)
├── equipe.html             # Bendik Häuserman & l'équipe (Français)
├── valeurs.html            # Notre approche & valeurs humaines (Français)
├── realisations.html       # Galerie avec filtres interactifs (Français)
├── contact.html            # Contact, urgences intempéries & devis (Français)
├── en/                     # Version complète en Anglais (6 pages)
├── de/                     # Version complète en Allemand (6 pages)
├── css/
│   └── style.css           # Feuille de style unique et responsive
├── js/
│   └── main.js             # Menu mobile, filtres galerie, devis mailto multilingue
├── images/                 # Photographies réelles du projet
├── sitemap.xml             # Plan du site pour les moteurs de recherche
├── robots.txt              # Directives d'indexation
└── asg-arbres-services-geneve.zip # Archive complète prête au déploiement
```

---

## ✏️ Guide pour un non-spécialiste : Comment modifier les textes ?
Le code HTML a été spécialement conçu et commenté pour être modifiable par une personne sans compétences informatiques :
1. Ouvrez le fichier de la page souhaitée (ex: `index.html` ) dans n'importe quel éditeur de texte (Bloc-notes, VS Code, etc.).
2. Repérez les sections clairement indiquées par des balises de commentaires comme `<!-- SÉLECTEUR DE LANGUE -->`, `<!-- SECTION HERO -->`, etc.
3. Modifiez simplement le texte entre les balises sans toucher aux chevrons `<` et `>`.
4. Enregistrez le fichier.

---

## 🚀 Déploiement
Il vous suffit d'extraire l'archive `asg-arbres-services-geneve.zip` et de déposer l'ensemble des fichiers à la racine de votre hébergement web (ex: dossier `public_html` ou `www`).
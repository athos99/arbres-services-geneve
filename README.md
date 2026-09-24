# Arbres Services Genève - Guide du site

Le site est pré-visuable : <a href="https://athos99.github.io/arbres-services-geneve/" target="_blank" rel="noopener noreferrer">https://athos99.github.io/arbres-services-geneve/</a>

Pour avoir le contenu du site sous format zip: https://github.com/athos99/arbres-services-geneve/archive/refs/heads/main.zip



Site web vitrine de l'entreprise **Arbres Services Genève**, fondée par **Bendik Häusermann** et basée à **Vernier (GE)**.

- **URL :** `https://arbres-services-geneve.ch`
- **Langues :** Français, Anglais, Allemand
- **Hébergement :** 100% statique (aucune base de données, aucun serveur spécifique)

---

## 📁 Organisation des fichiers

```
arbres-services-geneve/
├── index.html              # Page d'accueil (FR)
├── services.html           # Prestations détaillées (FR)
├── equipe.html             # Bendik & l'équipe (FR)
├── valeurs.html            # Approche & valeurs (FR)
├── en/                     # Version anglaise (4 pages)
├── de/                     # Version allemande (4 pages)
├── css/
│   └── style.css           # Design et mise en page
├── js/
│   └── main.js             # Menu mobile, filtres galerie, formulaire
├── images/                 # Toutes les photos du site
├── sitemap.xml             # Plan du site (SEO)
├── robots.txt              # Règles pour les moteurs de recherche
```

---

## ✏️ Modifier un texte

1. Ouvrez le fichier `.html` de la page concernée avec un éditeur de texte simple (Bloc-notes, TextEdit, VS Code, etc.).
2. Repérez le texte que vous voulez changer. Il se trouve toujours entre des balises, par exemple :
   - Titre principal : `<h1>Mon titre</h1>`
   - Paragraphe : `<p>Mon texte...</p>`
   - Bouton : `<a href="..." class="btn ...">Texte du bouton</a>`
3. Modifiez uniquement le texte **à l'intérieur** des balises. Ne touchez pas aux symboles `<` et `>`.
4. Enregistrez le fichier.

### Exemples concrets

**Changer le titre de la page d'accueil :**
```html
<h1>Élagage technique, abattage délicat & soins aux arbres à Genève</h1>
```

**Changer un paragraphe :**
```html
<p>Spécialistes de l'élagage technique sur corde et nacelle...</p>
```

**Changer le texte d'un bouton :**
```html
<a href="services.html" class="btn btn-outline-white">Découvrir nos services</a>
```

---

## 🖼️ Remplacer une photo

1. Préparez votre nouvelle photo (format JPG recommandé, taille raisonnable : 1200×800 px maximum).
2. Renommez-la avec le **même nom** que l'ancienne photo (ex: `grimpeurs.jpeg`).
3. Copiez-la dans le dossier `images/`. Windows vous demandera si vous voulez remplacer le fichier existant : acceptez.
4. Actualisez votre navigateur : la nouvelle photo apparaît automatiquement sur toutes les pages qui l'utilisent.

### Où sont utilisées les photos ?

| Fichier image | Pages qui l'utilisent |
|---|---|
| `images/bendik.jpeg` | Accueil, Équipe |
| `images/grimpeurs.jpeg` | Accueil, Services, Réalisations |
| `images/realisation1.jpeg` | Accueil, Services, Réalisations |
| `images/nacelle1.jpeg` | Services, Réalisations |
| `images/equipe1.jpeg` | Équipe, Réalisations |
| etc. | ... |

Si vous ne voulez pas remplacer une photo mais en **ajouter une nouvelle**, voir ci-dessous.

---

## 📸 Ajouter une photo

Le site n'a pas (encore) de page galerie séparée. Les photos sont intégrées directement dans les pages HTML (accueil, services, équipe).

### Étapes

1. **Déposez la photo** dans le dossier `images/` (ex: `mon-nouveau-chantier.jpeg`).
2. **Ouvrez un des fichiers `.html`** concernés (ex: `index.html`, `services.html`, `equipe.html`).
3. **Trouvez un bloc `<img>` existant** et copiez-le, par exemple :
   ```html
   <img src="images/grimpeurs.jpeg" alt="Deux arboristes-grimpeurs procédant à l'allègement du houppier" loading="lazy">
   ```
4. **Collez le bloc** à un endroit pertinent de la page.
5. **Modifiez les 2 éléments** :
   - `src="images/grimpeurs.jpeg"` → `src="images/mon-nouveau-chantier.jpeg"`
   - `alt="..."` → décrivez la photo en 1 phrase (ex: `alt="Abattage délicat d'un chêne près d'une maison"`)

### Règles pour les images
- **Pages FR** : `src="images/mon-image.jpeg"`
- **Pages EN** : `src="../images/mon-image.jpeg"`
- **Pages DE** : `src="../images/mon-image.jpeg"`

> **Important :** Pour que la photo apparaisse aussi sur les versions anglaise et allemande du site, ajoutez le même bloc dans les fichiers `en/` et `de/` en changeant les chemins (`../images/...`) et les textes (`alt`) dans ces langues.

---

## 🔄 Mettre à jour les versions anglaise et allemande

Le site a 3 versions linguistiques :
- **FR** : fichiers à la racine (`index.html`, `services.html`, etc.)
- **EN** : fichiers dans le dossier `en/`
- **DE** : fichiers dans le dossier `de/`

Si vous modifiez un texte ou une photo sur la version française, pensez à faire la même modification sur les versions `en/` et `de/` pour garder le site cohérent.

**Règles simples pour les chemins des images :**
- Pages FR : `src="images/mon-image.jpeg"`
- Pages EN : `src="../images/mon-image.jpeg"`
- Pages DE : `src="../images/mon-image.jpeg"`

---

## ⚠️ Règles importantes

- **Ne modifiez pas** les fichiers `css/style.css` et `js/main.js` sauf si vous savez exactement ce que vous faites.
- **Ne supprimez pas** de balises `<`, `>`, `</`. Modifiez uniquement le texte entre les balises.
- **Conservez toujours** l'attribut `alt=""` sur chaque image : c'est la description lue par les lecteurs d'écran pour les personnes malvoyantes.
- **Utilisez des noms de fichiers simples** pour les images : pas d'espaces, pas d'accents, pas de caractères spéciaux. Exemple : `mon-chantier.jpeg` au lieu de `Mon Chantier été 2024.jpeg`.
- **Formats acceptés** : `.jpeg` (ou `.jpg`), `.png`, `.webp`. Le JPG est recommandé pour les photos.

---

## 🚀 Publier les modifications

Une fois vos modifications terminées :

1. **Testez localement** : double-cliquez sur `index.html` pour ouvrir le site dans votre navigateur et vérifiez que tout est correct.
2. **Envoyez les fichiers modifiés** sur votre hébergement web (FTP, SFTP, ou gestionnaire de fichiers de votre hébergeur).
3. **Déployez l'ensemble** du dossier `arbres-services-geneve/` à la racine de votre site (généralement le dossier `www` ou `public_html`).

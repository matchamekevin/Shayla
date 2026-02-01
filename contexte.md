# Contexte du Projet : Site Romantique pour Estelle/Shayla

## Vue d'ensemble
Ce projet est un site web romantique personnalisé créé pour célébrer la relation avec Estelle/Shayla. Le site évolue d'un design complexe avec de nombreuses animations à une version minimaliste et élégante, mettant en valeur des éléments essentiels comme des photos personnelles et une animation de cœur.

## Historique du Développement
Le développement a commencé avec une vision ambitieuse incluant :
- Animations de particules flottantes
- Éléments interactifs (boutons, souris suiveuse)
- Effets visuels complexes (vagues, confetti, musique)
- Poèmes et textes romantiques
- Palette de couleurs variée

Au fil des itérations, le design a été simplifié pour se concentrer sur l'essentiel :
- Suppression des textes poétiques et des éléments complexes
- Réduction à une palette de couleurs principale (violet/lavande)
- Conservation d'une animation centrale de cœur battant
- Maintien d'un écran d'entrée avec révélation magique

## Technologies Utilisées
### Frontend
- **HTML5** : Structure sémantique avec sections pour l'écran d'entrée, l'overlay de révélation et le contenu principal
- **CSS3** : 
  - Variables CSS pour la gestion des couleurs (primaire : #6b5b95, secondaire : #4a5568)
  - Animations keyframes (heartbeat, submerge, reveal)
  - Design responsive avec grille pour les photos
  - Import de polices Google Fonts (Poppins, Dancing Script)
- **JavaScript (Vanilla)** :
  - Manipulation DOM pour les animations
  - Système de particules en arrière-plan
  - Gestion des événements (clic sur bouton)
  - Animation de révélation magique avec overlay et submersion

### Outils de Développement
- **Git** : Versionnement du code
- **VS Code** : Éditeur principal avec extensions pour le développement web
- **GitHub** : Hébergement du code source
- **Vercel** : Déploiement et hébergement du site en production

## Structure des Fichiers
```
/home/kev/Estelle/
├── index.html          # Structure principale du site
├── style.css           # Styles et animations CSS
├── script.js           # Logique JavaScript interactive
└── shayla/             # Dossier des photos personnelles
    ├── 3b28e5a8-559d-4434-bfcc-8735a610fb76.jpg
    ├── IMG-20240815-WA0060.jpg
    └── acb7d39b-ce10-419c-933c-e285a8efcbee.jpg
```

### Détails des Fichiers
#### index.html
- Structure HTML5 sémantique
- Section d'entrée avec bouton "Entrer"
- Overlay de révélation pour l'animation magique
- Contenu principal : titre "my shayla", cœur animé, grille de photos responsive
- Liens vers les ressources externes (Google Fonts)

#### style.css
- Variables CSS pour couleurs et dimensions
- Styles pour boutons, overlay, et animations
- Keyframes pour heartbeat, submerge, et autres effets
- Media queries pour responsivité
- Import de polices et reset CSS

#### script.js
- Fonction d'initialisation des particules
- Gestionnaire d'événement pour le bouton de révélation
- Animation de submersion avec éléments flottants (cœurs, BMW, iPhone)
- Boucles d'animation avec requestAnimationFrame

## Fonctionnalités Principales
### Écran d'Entrée
- Bouton "Entrer" centré
- Animation de révélation au clic

### Animation Magique
- Overlay qui se révèle progressivement
- Éléments qui "submergent" (cœurs, objets symboliques)
- Transition fluide vers le contenu principal

### Contenu Principal
- Titre romantique "my shayla"
- Cœur animé avec battement
- Grille responsive de 3 photos personnelles
- Particules flottantes en arrière-plan

### Design Responsive
- Adaptation aux écrans mobiles et desktop
- Grille flexible pour les photos
- Polices et tailles adaptées

## Déploiement
### GitHub
- Repo public : https://github.com/matchamekevin/Shayla
- Code source complet disponible
- Historique des commits

### Vercel
- Déploiement automatique depuis GitHub
- URL de production : https://estelle-topaz.vercel.app
- Hébergement gratuit avec CDN

## Palette de Couleurs
- **Primaire** : #6b5b95 (violet romantique)
- **Secondaire** : #4a5568 (gris bleuté)
- **Accents** : Tons pastel pour les éléments interactifs

## Polices
- **Titre** : Dancing Script (cursive romantique)
- **Corps** : Poppins (sans-serif moderne)

## Animations Clés
- **Heartbeat** : Pulsation du cœur central
- **Submerge** : Éléments qui tombent lors de la révélation
- **Reveal** : Overlay qui se dissipe
- **Particles** : Points flottants en arrière-plan

## Évolutions Futures Possibles
- Ajout de musique d'ambiance
- Galerie photos interactive
- Messages personnalisés
- Animations saisonnières
- Intégration de médias sociaux

## Statistiques du Projet
- **Fichiers** : 6 (3 principaux + 3 images)
- **Lignes de code** : ~1684 insertions initiales
- **Taille** : ~292 Ko (compression incluse)
- **Technologies** : HTML, CSS, JS (vanilla)
- **Déploiement** : Automatisé via Vercel

## Notes Techniques
- Site statique, pas de backend requis
- Compatibilité navigateurs modernes
- Performance optimisée (pas de frameworks lourds)
- Accessibilité basique (structure sémantique)

## Conclusion
Ce projet représente une création personnelle romantique, évoluant d'un concept complexe à une réalisation minimaliste et efficace. Le site capture l'essence romantique tout en restant technique et performant, déployé publiquement pour partage.

**Date de création** : Février 2026
**Auteur** : Kevin (matchamekevin)
**Statut** : Terminé et déployé</content>
<filePath">/home/kev/Estelle/contexte.md
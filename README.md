# ICE Team - Geometry Dash Dashboard

Un site web moderne et glacial pour votre équipe Geometry Dash, présentant votre ICE List, un leaderboard et des statistiques d'équipe.

## Caractéristiques

- ❄️ **Design Glacial**: Thème bleu froid avec effets glassmorphism
- 🎨 **Animations Flocons**: Flocons de neige qui tombent en arrière-plan
- 📊 **Leaderboard**: Classement des joueurs avec badges
- 📝 **ICE List**: Liste des niveaux complétés
- 📱 **Layout 3 Colonnes**: Navigation gauche, contenu centre, stats droite
- 🎯 **Responsive**: Design adapté à tous les appareils
- ⚡ **Vite + React**: Stack moderne et performant

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le site s'ouvrira sur http://localhost:5173

## Build

```bash
npm run build
```

## Structure du Projet

```
src/
├── components/
│   ├── Navigation.tsx      # Barre de navigation gauche
│   ├── RightSidebar.tsx    # Barre de stats droite
│   └── SnowfallBackground.tsx  # Animations flocons
├── pages/
│   ├── HomePage.tsx        # Page d'accueil
│   ├── IceListPage.tsx     # Liste des niveaux
│   └── LeaderboardPage.tsx # Classement
├── App.tsx                 # Routeur principal
├── main.tsx                # Point d'entrée
└── index.css               # Styles globaux + Tailwind
```

## Personnalisation

### Couleurs
Les couleurs sont définies dans `tailwind.config.js` - palette `ice` et `glacial`.

### Données
Remplacez les données d'exemple dans les pages par vos vraies données ou connectez une API.

### Thème
Modifiez les variables de couleur dans `tailwind.config.js` pour adapter le design.

## Stack Technologique

- **React 18** - Framework UI
- **TypeScript** - Typage fort
- **Vite** - Build tool haute performance
- **TailwindCSS** - Utility-first CSS
- **React Router** - Navigation

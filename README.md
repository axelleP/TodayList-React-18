# <h1 align="center">Today list</h1>

Site développé avec :      
- Next.js 14.2.2
- React 18
- Tailwind CSS 3.4.1

## Installation et lancement
- installer ou mettre à jour node sur la bonne version
- créer son projet Next.js : `npx create-next-app@latest`
- installer la bibliothèque next : `npm -g install next`
- lancer le site : `npm run dev` puis aller sur http://localhost:3000

## Next.js
Architecture de base :    
- /app : composant, route, layout, ...
   - app/page.tsx : page principale du site
   - /app/lib : fonctions utilitaires / de récupération de données
- /public : image, css, ...
- types de composants :
   - serveur (par défaut) : sécurisé, rapide
   - client : réactif, interactif. Ajouter `'use client'` en haut du fichier contenant le composant
- selon le type de composant `console.log()` se voit dans le terminal ou dans le navigateur

## Typescript
- interface : définit la structure d'un objet. Elle peut contenir des propriétés et leurs types associés

## React
- extension navigateur "React Developer Tools" pour voir les composants clients

## Tailwind CSS
- grid : organiser les blocs principaux de la page
- flex : disposer des éléments de manière flexible
- justify : centrer horizontalement les élements
- align : centrer verticalement les élements
- place : centrer horizontalement et verticalement les éléments
- responsivité avec les breakpoints : sm, md, lg, xl, 2xl
   - exemples :
      - `md:my-10` => applique le margin y sur les interfaces d'une largeur minimale de 768px
      - `max-md:my-10` => applique le margin y sur les interfaces dont la largeur maximale est en dessous de 768px

## Documentation :
- React : https://fr.react.dev/
   - concevoir : https://fr.react.dev/learn/thinking-in-react
   - composants inclus : https://nextjs.org/docs/app/api-reference/components
- Next.js : https://nextjs.org/
- Tailwind CSS : https://tailwindcss.com/
   - responsive design : https://tailwindcss.com/docs/responsive-design

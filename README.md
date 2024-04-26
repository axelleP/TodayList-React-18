# <h1 align="center">🗒️Today list🗒️</h1>

Site développé avec :      
- Next.js 14.2.2
- React 18
- Tailwind CSS 3.4.1

</br>

[Voir les images du site](#images-du-site)

</br>

## Installation et lancement
- installer ou mettre à jour node sur la bonne version (ici minimum 18.17)
- créer son projet Next.js : `npx create-next-app@latest`
- installer la bibliothèque next : `npm -g install next`
- lancer le site : `npm run dev` puis aller sur http://localhost:3000

## Next.js
Architecture de base :    
- /app : composant, route, layout, ...
   - app/page.tsx : page principale du site
   - /app/lib : fonctions utilitaires / de récupération de données
- /public : image, css, ...
     
Info :     
- types de composants :
   - serveur (par défaut) : sécurisé, rapide
   - client : réactif, interactif. Ajouter `'use client'` en haut du fichier contenant le composant
- selon le type de composant `console.log()` se voit dans le terminal ou dans le navigateur

## Typescript
- interface : définit la structure d'un objet. Elle peut contenir des propriétés et leurs types associés
- mot clé `type` : permet de typer des fonctions, des objets complexes, des types génériques.     
   exemples :       
      - `type SetFilterCompleted = (value: boolean) => void;`       
      - `type User = { id: number; name: string; };`

## React
- extension navigateur "React Developer Tools" pour voir les composants clients
- map => comportement en fonction du return :
   - rendu visuel pour un élément react. ex. : `<tbody>{ tasks.map((task) => <Row key={ task.id } task={ task }/>) }`
   - transformation de données dans les autres cas. ex. : `tasks.map((task) => task.id === selectedId ? { ...task, name: newName } : task );`
- on peut rendre une prop facultative avec `?`. ex. : `setFilterTimeOfDay?`
- hooks
   - useState : donnée pouvant changée, ne pouvant pas être calculée, ne provenant pas d'une prop passée par le parent. 
      - exemple : `const [filterName, setFilterName] = useState('');`
      - l'appel du modificateur (ex. setFilterName) doit se faire dans le composant possédant le useState et non dans ses composants enfants
      - lors de l'appel le modificateur peut recevoir en paramètre l'état actuel. ex. `setTempUpdatedTasks((prevTempTasks) => { ... }`
      - les objets et les tableaux doivent être modifiées en les remplaçant (nouvelle copie) et non en les modifiant directement
   - useEffect : exécution du code une fois que le composant est monté ou lorsque certaines dépendances (données) changent

## Tailwind CSS
Doc :      
- section grid : organiser les blocs principaux de la page
- section flex : disposer des éléments de manière flexible
- section justify : centrer horizontalement les élements
- section align : centrer verticalement les élements
- section place : centrer horizontalement et verticalement les éléments

Info :     
- responsivité avec les breakpoints : sm, md, lg, xl, 2xl
   - exemples :
      - `md:my-10` => applique le margin y sur les interfaces d'une largeur minimale de 768px
      - `max-md:my-10` => applique le margin y sur les interfaces dont la largeur maximale est en dessous de 768px

## Documentation
- React : https://fr.react.dev/
   - concevoir : https://fr.react.dev/learn/thinking-in-react
   - composants inclus : https://nextjs.org/docs/app/api-reference/components
- Next.js : https://nextjs.org/
- Tailwind CSS : https://tailwindcss.com/
   - responsive design : https://tailwindcss.com/docs/responsive-design

## Images du site
### Affichage par défaut
![image](https://github.com/axelleP/today-list/assets/3285758/ddbe64eb-ff5d-4eaf-8134-f79c6d1cac0e)       

### Affichage en mode édition
Clique sur le bouton "Modifier"  + filtre sur l'état "Non complétée".     

![image](https://github.com/axelleP/today-list/assets/3285758/0d0e28c2-e124-4f88-9735-ad5bda8f923f)
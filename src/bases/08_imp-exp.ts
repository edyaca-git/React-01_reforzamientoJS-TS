import { heroes, type Hero, OwnerEnum } from "../data/heores.data";



const getHeroById = (id:number): Hero => {
   const hero = heroes.find(hero => hero.id === id);
   if (!hero) throw new Error('Hero not found');
   return hero;
};  


console.log( getHeroById(1) );


export const getHeroesByOwnerEnum = ( Owner : OwnerEnum ): Hero => {
     const hero = heroes.filter( hero => hero.ownerEnum === Owner );
     if (!hero) throw new Error('No hero found for the given owner');
     return hero;
}
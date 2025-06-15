import heroes,{owners} from './Data/heroes.js';

console.log(owners);

const getHeroById = (id) => {

    return heroes.find(
        (hero) => 
            hero.id === id
    );
}

console.log(getHeroById(2)); 

const getHeroesByOwner = (owner)  =>{ 
    return heroes.filter((heroe) =>
        heroe.owner === owner
    ) 
}


console.log(getHeroesByOwner('DC'));

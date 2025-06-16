import heroes,{owners} from './../Data/heroes';

// console.log(owners);

export const getHeroById = (id) => {

    return heroes.find(
        (hero) => 
            hero.id === id
    );
}

// console.log(getHeroById(2)); 

export const getHeroesByOwner = (owner)  =>{ 
    return heroes.filter((heroe) =>
        heroe.owner === owner
    ) 
}


// console.log(getHeroesByOwner('DC'));

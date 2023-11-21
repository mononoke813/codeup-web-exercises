import {getPokemon, getPokemonAll} from "./pokemon-api.js"


// MAIN
(async () => {
    // getPokemon("pikachu").then((pokemon) => {
    //     console.log(pokemon);
    // });

    //create a const and add an await when async is used
    const list = await getPokemonAll();
    //this portion is not needed when async is used bc it's already wrapped in and we get the advantage of vertical code:
    // .then(list => {
    console.log(list);
    // });
})();
export const NavBar = ({ pokemonIndex, setPokemon, pokemons }) => (
    <>
        {
            pokemons.map((pokemon, index) => (
               <button key={ pokemon.name } onClick={ () => setPokemon(index) }>{ pokemon.name }</button>
            ))
        }
    </>
);
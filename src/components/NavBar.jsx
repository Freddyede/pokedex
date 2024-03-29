export const NavBar = ({pokemonIndex, setPokemon, pokemons}) => (
    <>
        { pokemonIndex > 0 && <button onClick={() => setPokemon(pokemonIndex - 1)}>précédent</button> }
        {pokemonIndex < pokemons.length - 1 &&
            <button onClick={() => setPokemon(pokemonIndex + 1)}>suivant</button>
        }
    </>
);
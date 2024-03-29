export const NavBar = ({ pokemonIndex, setPokemon, pokemons }) => (
    <>
        {
            pokemons.map((pokemon, index) => {
                return (
                    <button key={pokemon.name} onClick={() => {
                        setPokemon(index);
                        if(pokemon.name === 'pikachu') {
                            alert('pika pikachu !!!');
                        }
                    }}>{pokemon.name}</button>
                )
            })
        }
    </>
);
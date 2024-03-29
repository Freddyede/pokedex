export const NavBar = ({ pokemonIndex, setPokemon, pokemons }) => (
    <>
        {
            pokemons.map((pokemon, index) => {
                if(pokemon.name === 'pikachu') {
                    alert('pika pikachu !!!');
                }
                return (
                    <button key={pokemon.name} onClick={() => setPokemon(index)}>{pokemon.name}</button>
                )
            })
        }
    </>
);
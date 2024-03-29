import PropTypes, {shape} from "prop-types";

export const PokemonCard = ({ pokemon }) => {
    return(
        <figure>
            {
                pokemon.imgSrc ?
                    <img
                        src={pokemon.imgSrc}
                        alt={pokemon.name}
                    />
                :
                    <p>???</p>
            }
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
};

PokemonCard.propTypes = {
    pokemon: shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string
    })
}
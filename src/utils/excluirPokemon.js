export const excluirPokemon = (
  name,
  pokemonNaPokedex,
  setPokemonNaPokedex,
  onOpen,
  onClose
) => {
  onOpen();
  setTimeout(() => {
    const newPokemonList = pokemonNaPokedex.filter((pokemon) => pokemon.name !== name);
    setPokemonNaPokedex(newPokemonList);
    onClose();
  }, 1000);
};

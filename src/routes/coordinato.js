export const irParaHome = (navigate) => {
    navigate("/")
}

export const irParaPokedex = (navigate) => {
    navigate("/pokedex")
}

export const detalhesDoPokemon = (navigate, name) => {
    navigate(`/detalhes/${name}`)
}
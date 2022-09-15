const PokemonName = document.querySelector('.Poke_Name')

const buscaPokemon = async (pokemon) =>{ //async=Declaração de função assincrona
    const APIRes=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await APIRes.json() //Extraindo os arquivos em json
    return data
}

const renderPokemon = async (pokemon) =>{
    const data = await buscaPokemon(pokemon)

    PokemonName.innerHTML = data.name

}

renderPokemon('100')
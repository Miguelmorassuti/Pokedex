const PokemonName = document.querySelector('.Poke_Name')
const PokemonNumber = document.querySelector('.Poke_Number')
const PokemonImage = document.querySelector('.imgPokemon')

const Form = document.querySelector('.form')
const input = document.querySelector('.input_Search')
const ButtonPrev = document.querySelector('.Prev')
const ButtonNext = document.querySelector('.Next')

let NumberSearch = 1

const buscaPokemon = async (pokemon) =>{ //async=Declaração de função assincrona
    const APIRes=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if (APIRes.status ==200){
        const data = await APIRes.json() //Extraindo os arquivos em json
        return data
    }    
}

const renderPokemon = async (pokemon) =>{
    PokemonName.innerHTML = "Pesquisando..."
    PokemonNumber.innerHTML = ""

    const data = await buscaPokemon(pokemon)

    if (data){
        PokemonImage.style.display='block'
        PokemonName.innerHTML = data.name
        PokemonNumber.innerHTML = data.id
        PokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']; //CAMINHO P/ CHEGAR A IMG
        NumberSearch = data.id
    } else{
        PokemonName.innerHTML = "Sem dados :("
        PokemonNumber.innerHTML = ""
        // PokemonImage.style.display = "none";
        document.querySelector('.imgPokemon').src='midia/squirtle.gif'
       
    }
}

Form.addEventListener('submit', (event) => {
    event.preventDefault();

    renderPokemon(input.value.toLowerCase());
    input.value = ""
} )

ButtonPrev.addEventListener('click', () => {
    if (NumberSearch > 1){
        NumberSearch -=1
        renderPokemon(NumberSearch)
    }   
});

ButtonNext.addEventListener('click', () =>{
    NumberSearch+=1
    renderPokemon(NumberSearch)
})

renderPokemon(NumberSearch)
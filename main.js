const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.button btn-prev');
const buttonNext = document.querySelector('.button btn-next');



const fetchPokemon = async (pokemon) => {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
    
    if (APIresponse.status == 200){
        const data = await APIresponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = 'procurando...';

    const data = await fetchPokemon(pokemon);
   if (data){
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
   }

    else{
        pokemonName.innerHTML = 'nao encontrado:c';
        pokemonNumber.innerHTML = '';
    }
}


form.addEventListener('submit', (event) => {
 event.preventDefault();
 renderPokemon(input.value);
 input.value = '';
});

renderPokemon('1');


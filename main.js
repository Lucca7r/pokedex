const fetchpokemon = async (pokemon) => {
    const APIresponse = await fetch('https://pokeapi.co/api/v2/pokemon/${pokemon}');
    const data = await APIresponse.json();
    return data;
}

const renderPokemon = async (pokemon) => {
    const data = await fetchpokemon(pokemon);
    console.log(data);
}
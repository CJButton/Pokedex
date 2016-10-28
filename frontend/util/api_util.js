export const fetchAllPokemon = (success, error) => {
  $.ajax({
    type: 'GET',
    url: 'api/pokemon',
    success,
    error
  });
};

export const fetchPokemon = (success, error, id) => {
  $.ajax({
    type: 'GET',
    url: `api/pokemon/${id}`,
    success,
    error,
  });
};

export const createPokemon = (success, error, pokemon) => {
  $.ajax({
    type: 'POST',
    url: `api/pokemon`,
    data: {pokemon: pokemon},
    success,
    error,
  });
};

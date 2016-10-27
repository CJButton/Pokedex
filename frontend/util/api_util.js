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

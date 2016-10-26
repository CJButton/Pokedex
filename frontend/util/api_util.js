export const fetchAllPokemon = (success, error) => {
  $.ajax({
    type: 'GET',
    url: 'api/pokemon',
    success,
    error
  });
};

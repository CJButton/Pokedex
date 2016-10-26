

# json.pokemon @pokemon
json.id @pokemon.id
json.name @pokemon.name
json.attack @pokemon.attack
json.defense @pokemon.defense
json.image_url @pokemon.image_url
json.moves @pokemon.moves

json.poke_type @pokemon.poke_type
json.set! :items do
  json.array! @pokemon.items, :id, :name, :pokemon_id, :price,
    :happiness, :image_url
end

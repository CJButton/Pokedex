import React from 'react';

const ItemDetail = ({ item }) => (
  <ul>
    <li>{item.name}</li>
    <li>Happiness: {item.happiness}</li>
    <li>Price: {item.price}</li>
  </ul>
);

export default ItemDetail;

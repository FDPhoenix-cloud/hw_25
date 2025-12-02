
import React from 'react';
import { rickAndMortyProducts } from './data';
import ProductCard from './components/ProductCard';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1 className="app__title">Магазин товаров Rick and Morty</h1>
      <div className="gallery-container">
        {rickAndMortyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;

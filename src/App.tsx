import React, { useState } from 'react';
import { rickAndMortyProducts } from './data';
import ProductCard from './components/ProductCard';
import './App.css';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');


  const filteredProducts = rickAndMortyProducts.filter((product) => {
    const query = searchQuery.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(query);
    const descriptionMatch = product.description.toLowerCase().includes(query);
    
    return nameMatch || descriptionMatch;
  });

  const noResultsFound = searchQuery.length > 0 && filteredProducts.length === 0;

  return (
    <div className="app">
      <h1 className="app__title">Магазин товаров Rick and Morty</h1>
      
      
      <div style={{ marginBottom: '20px', maxWidth: '400px', margin: '0 auto 20px' }}>
        <input
          type="text"
          placeholder="Поиск товара по названию или описанию..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`form-control ${noResultsFound ? 'is-invalid' : ''}`}
        />
        
        
        {noResultsFound && (
          <div style={{ color: '#dc3545', marginTop: '8px', fontSize: '0.9rem' }}>
            ❌ Извините, по вашему запросу ничего не найдено
          </div>
        )}
      </div>

      
      <div className="gallery-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;

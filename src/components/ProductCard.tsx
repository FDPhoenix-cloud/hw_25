import React from 'react';
import { type ProductCardProps } from '../types';
import StandardButton from './StandardButton';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleAddToCart = () => {
    console.log(`Товар "${product.name}" добавлен в корзину`);
  };

  const handleViewDetails = () => {
    console.log(`Просмотр деталей товара: ${product.name}`);
  };

  const handleIncrease = () => {
    console.log(`Увеличено количество товара ${product.name}`);
  };

  const handleDecrease = () => {
    console.log(`Уменьшено количество товара ${product.name}`);
  };

  return (
    <div className="card" style={{ width: '280px' }}>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="card-img-top"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text" style={{ fontSize: '0.9rem', color: '#666' }}>
          {product.description}
        </p>
        <div className="card-footer" style={{ backgroundColor: 'transparent', borderTop: '1px solid #eee', paddingTop: '15px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ fontWeight: 'bold', color: '#00a86b', fontSize: '1.1rem' }}>
              {product.price} шмеклей
            </span>
          </div>
          
          
          <div style={{ marginBottom: '8px' }}>
            <StandardButton
              BGcolor="primary"
              icon="basket-fill"
              title="Добавить в корзину"
              btnType="textButton"
              onClick={handleAddToCart}
              className="w-100"
            />
          </div>

          
          <div style={{ marginBottom: '8px' }}>
            <StandardButton
              BGcolor="info"
              icon="eye-fill"
              title="Посмотреть подробнее"
              btnType="textButton"
              onClick={handleViewDetails}
              className="w-100"
            />
          </div>

          
          <div style={{ display: 'flex', gap: '8px' }}>
            <StandardButton
              BGcolor="success"
              icon="plus-lg"
              title="Увеличить"
              btnType="iconButton"
              onClick={handleIncrease}
              className="flex-grow-1"
            />
            <StandardButton
              BGcolor="danger"
              icon="dash-lg"
              title="Уменьшить"
              btnType="iconButton"
              onClick={handleDecrease}
              className="flex-grow-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

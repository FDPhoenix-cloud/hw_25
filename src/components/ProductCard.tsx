
import React from 'react';
import { type Product } from '../data';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const handleAddToCart = () => {
    console.log(`Товар "${product.name}" добавлен в корзину. Его цена: ${product.price} шмеклей.`);
  };

  return (
    <div className="card">
      <img src={product.imageUrl} alt={product.name} className="card__image" />
      <h3 className="card__title">{product.name}</h3>
      <p className="card__description">{product.description}</p>
      <div className="card__footer">
        <span className="card__price">{product.price} шмеклей</span>
        <button className="card__button" onClick={handleAddToCart}>
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

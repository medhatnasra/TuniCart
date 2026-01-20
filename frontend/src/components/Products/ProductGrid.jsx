import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((prod, index) => {
        return (
          <Link key={index} to={`/product/${products._id}`} className="block">
            <div className="bg-white p-4 rounded-lg">
              <div className="w-full h-96 mb-4">
                <img
                  src={prod.images[0].url}
                  alt={prod.name}
                  className="w-full h-full object-cover rounded-lg "
                />
              </div>
              <h3 className="text-sm mb-2">{prod.name}</h3>
              <p className="text-gray-400 font-medium text-sm tracking-tighter">
                $ {prod.price}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductGrid;

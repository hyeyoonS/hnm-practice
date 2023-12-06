import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `http://localhost:5000/products`;
    let response = await axios.get(url);
    let data = response.data;
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      전체상품페이지
      <ProductCard />
    </div>
  );
};

export default ProductAll;

import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const ProductAll = () => {
  const getProducts = async () => {
    let url = `http://localhost:5000/products`;
    let response = await axios.get(url);
    let data = response.data;
    console.log(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return <div>전체상품페이지</div>;
};

export default ProductAll;

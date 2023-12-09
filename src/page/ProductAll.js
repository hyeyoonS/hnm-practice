import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../component/ProductCard';
import styled from 'styled-components';

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
    <ProductCardContainer>
      {productList.map((item)=>(<ProductCard item={item}/>))}
    </ProductCardContainer>
  );
};

export default ProductAll;


const ProductCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  grid-template-rows: repeat(auto-fit, auto);
  justify-content: center;
  gap: 24px;
  margin: 24px auto 25px auto;
  align-items: center;
  width: 729.588px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 240px);
    grid-template-rows: repeat(auto-fit,);
    gap: 3px;
    padding: 0 24px;
  }

  @media (min-width: 1248px) {
    margin-top: 12px;
    padding: 0;
    grid-template-columns: repeat(3, 240px);
    grid-template-rows: repeat(auto-fit, );
  }
`
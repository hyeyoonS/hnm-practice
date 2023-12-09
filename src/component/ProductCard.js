import React from 'react';
import styled from 'styled-components';

const ProductCard = ({item}) => {
  return (
    <ProductInfo>
      <StyledImage src={item?.img} />
      <div>{item?.choice === true ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new === true? "신제품": ""}</div>
    </ProductInfo>
  );
};

export default ProductCard;

const StyledImage = styled.img`
  width: 240px;
  position: relative;
  height: 361px;
`

const ProductInfo = styled.div`
font-size:13px;
gap: 4px;
text-align:left;
width: 240px;
&:hover {
    transform: scale(1.1); 
    transition: transform 0.3s ease;
    z-index: 1;
  }
`

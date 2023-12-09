import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom/dist';

const ProductCard = ({item}) => {
  const navigate=useNavigate();
  const showDetail=()=>{
    navigate(`/product/${item.id}`)

  }
  return (
    <ProductInfo onClick={showDetail}>
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
height: 
&:hover {
    transform: scale(1.1); 
    transition: transform 0.3s ease;
    z-index: 1;
  }
`

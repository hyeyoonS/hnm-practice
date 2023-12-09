import React from 'react';
import styled from 'styled-components';

const ProductCard = () => {
  return (
    <ProductInfo>
      <StyledImage src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fd4%2F06%2Fd406586d8d04d4a51bce2f8aeaecd04d10ed467e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" />
      <div>Conscious choice</div>
      <div>벨티드 트윌 코트</div>
      <div>99000원</div>
      <div>신제품</div>
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
`

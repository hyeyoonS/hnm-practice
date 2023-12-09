import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom/dist';
import styled from 'styled-components';


const ProductDetail = () =>{
  let [product, setProduct] = useState(null);
  let {id} = useParams();
  const getProductDetail= async()=>{
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data)
  }
  useEffect(()=>{
    getProductDetail();
  },[])


  return <div>
    <div>
      <Img src={product?.img}/>
      <div>{product?.choice === true ? "Conscious choice" : ""}</div>
      <div>{product?.title}</div>
      <div>{product?.price}</div>
      <div>{product?.new === true? "신제품": ""}</div>
    </div>

  </div>;
};

export default ProductDetail;

const Img = styled.img`
`
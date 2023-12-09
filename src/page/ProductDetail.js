import React,{useEffect} from 'react';
import { useParams } from 'react-router-dom/dist';


const ProductDetail = () =>{
  let {id} = useParams();
  const getProductDetail= async()=>{
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  }
  useEffect(()=>{
    getProductDetail();
  },[])


  return <div>상품상세페이지</div>;
};

export default ProductDetail;

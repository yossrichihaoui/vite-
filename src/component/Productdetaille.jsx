import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Productdetaille() {
   // console.log(useParams());
   const {id}=useParams()
   const [product,setproduct]=useState({});
   useEffect(()=>{
    axios.get("https://fakestoreapi.com/products/"+id)
    .then((res)=>setproduct(res.data)).catch((err)=>console.log(err))
    
   },[])
  return (
    <div>
      <img src={product.image}  />
    </div>
  )
}

export default Productdetaille
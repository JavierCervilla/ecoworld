import React, { useState, useEffect } from 'react'
import { ProductCard } from './ProductCard';
import axios from 'axios';

export const ProductList = () => {
  const [data, setData] = useState({});
  const [loading, setLoading ] = useState(true);

  useEffect(()=>{
    const fetchData = async () => {
      const res = await axios(
        '/api/products/',
      );
      setData({products: res.data});
      setLoading(false);
    }
    fetchData();
  }, [])
  return (
    <main className="container-sm">
      {loading ? <div>loading...</div> :
      data.products.map(product => (
        <ProductCard key={product.id} data={product} />
      ))}
    </main>
  )
}

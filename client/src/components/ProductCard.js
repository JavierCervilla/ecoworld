import React from 'react'

export const ProductCard = ({data}) => {
  return (
    <a href={`#product-${data.id}`} className="border-bottom py-1 product-card-grid">
      <img src={data.pic} alt=""/>
      <div className="px">
        <h4 className="light">{data.name}</h4>
        <p className="whishper bold">{data.store}</p>
        <h3>{data.price.toString().replace('.',',')}€</h3>
        <p className="whishper">{data.description}</p>
        <button>Agregar al carrito</button>
      </div>
    </a>
  )
}

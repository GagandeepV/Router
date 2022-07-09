import React, { useEffect, useState } from 'react'

const Content = ({title,description,price,discountPercentage,rating,brand,category,thumbnail,images=[]}) => 
    <div>
      <div style={{ width: '96vw', height: '40vh', display: 'flex', margin: '2vw', justifyContent: 'space-around' }} >
        <img src={thumbnail} alt=" not available" />
        <div>
          <h2>{title}</h2>
          <p><b>Brand:</b> {brand}</p>
          <hr/>
          <span><b>MRP:</b>&#8377; <strike><i>{price}</i></strike> { (price-discountPercentage/100*price).toFixed(2)}</span>
          <br/>
          <p><b>Rating:</b> {rating}</p>
          <p><b>Category:</b> {category}</p>
          <p><b>Description:</b> {description}</p>
        </div>
      </div>
      <div style={{ width: '96vw', display: 'flex', flexWrap: 'wrap', margin: '2vw', justifyContent: 'space-evenly', gap: '1rem' }}>
        {images.map((image)=><img src={image} alt="not available" style={{ width: '40vw' }} />)}
      </div>
    </div>

const Product = ({match: { params: { id } } } ) => {
  useEffect(()=>{
    const fetcher = async () => {
  const response = await fetch(`https://dummyjson.com/products/${id}`)
  const data= await response.json()
  setItem(data)
    }
    fetcher()
  },[])// eslint-disable-line react-hooks/exhaustive-deps

  const [Item, setItem] = useState({})

  return <Content {...Item}/>
}

export default Product
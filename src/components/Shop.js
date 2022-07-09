import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Content = ({products}) =>  products.map(({id,title,thumbnail})=>{
    return (<div key={id} style={{ display: 'inline-flex', flexDirection: 'column', padding: '1em 3em' }}>
        <img src={thumbnail} alt="title" style={{width:'350px', height:'250px'}}/>
        <Link to={`/shop/product/${id}`} > <p>{title}</p> </Link>
    </div>)
})

const Shop = () => {
    useEffect(() => {
        const fetcher = async () => {
            const responce = await fetch('https://dummyjson.com/products')
            const {products} = await responce.json()
            setProducts(products)
        }
        fetcher()
    }, [])

    const [products, setProducts] = useState([])

    return <Content products={products} />

}

export default Shop
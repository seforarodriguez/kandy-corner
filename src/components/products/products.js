import { useEffect, useState } from "react";
import "./products.css"

export const ProductsList = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFiltered] = useState([])
    const [topPricedProducts, setTopPriced] = useState(false)


    useEffect(() => {
        fetch('http://localhost:8088/products')
            .then(response => response.json())
            .then((productsArray) => {
                setProducts(productsArray)
                setFiltered(productsArray)
            })
    },
        [])

        useEffect(()=> {
            if (topPricedProducts) {
                const topPricedArray = products.filter(product => {
                    return product.price > 2
                })
            setFiltered(topPricedArray)
            } else {
                setFiltered(products)
            }
        },[topPricedProducts])

    return <>

        <h1>List of Products</h1>
        <button onClick={()=> { setTopPriced(true)}}>Top Priced Products</button>
        <button onClick={()=> { setTopPriced(false)}}>Show me everyhing</button>
        <article className="productsList">
            {
                filteredProducts.map(product => {
                    return <>
                        <div className="eachProduct">
                            <h3>{product.name}</h3>
                            Costs:$USD{product.price}
                            <br></br>
                            Available:{product.productQuantity}
                        </div>
                    </>
                })
            }
        </article>
    </>

    //this is closing the ProductList function    
}
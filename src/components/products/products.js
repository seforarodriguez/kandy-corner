import { useEffect, useState } from "react";
import "./products.css"

export const ProductsList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:8088/products')
            .then(response => response.json())
            .then((productsArray) => {
                setProducts(productsArray)
            })
    },
        [])


    return <>
        <h1>List of Products</h1>
        <>
        <button onClick={
            ""
        }> Top Priced Products
        </button>
        </>
        <article className="productsList">
            {
                products.map(product => {
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
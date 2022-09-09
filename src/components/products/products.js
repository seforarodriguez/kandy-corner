import { useEffect, useState } from "react";
import "./products.css"

export const ProductsList = ({ theProductSearch }) => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [topPricedProducts, setTopPriced] = useState(false)

    //this is fetching the products from the database with product type database
    useEffect(() => {
        fetch('http://localhost:8018/products?_expand=productType')
            .then(response => response.json())
            .then((productsArray) => {
                setProducts(productsArray)
                setFilteredProducts(productsArray)
            })
    }, [])


    //this is filtering the products by what is typed in product search component
    useEffect(() => {
        const searchProduct = products.filter(product => {
            return product.name.toLowerCase().includes(theProductSearch.toLowerCase())
        })
        setFilteredProducts(searchProduct)
    }, [theProductSearch]
    )



    //this is watching for when the top priced products button is selected and it filters for those over 2 dollars
    useEffect(() => {
        if (topPricedProducts) {
            const topPricedProductsArray = products.filter(product => { return product.price >= 2 })
            setFilteredProducts(topPricedProductsArray)
        } else {
            setFilteredProducts(products)
        }
    }, [topPricedProducts])


    return <>
        <h1>List of Products</h1>
        <>
            <button onClick={() => setTopPriced(true)}> Top Priced Products </button>
            <button onClick={() => setTopPriced(false)}> All Products </button>
        </>
        <article className="productsList">
            {
                filteredProducts.map(product => {
                    return <>
                        <section className="eachProduct">
                            <label>{product.name}</label>
                            <ul>
                                <li> Costs:$USD{product.price} </li>
                                <li>Available:{product.productQuantity}</li>
                                <li> Product type: {product.productType.category}</li>
                            </ul>
                        </section>
                    </>
                })
            }
        </article>
    </>

    //this is closing the ProductList function    
}
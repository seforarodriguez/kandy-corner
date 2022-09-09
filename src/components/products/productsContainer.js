import { useState } from "react"
import { ProductsList } from "./products"
import { ProductSearch } from "./ProductSearch"

export const ProductContainer = () => {
    const [searchProducts, setSearchProducts] = useState("")

    return <>
        {/* Using this route to call from here the 2 functions from the different components */}
        <ProductSearch searchFunction={setSearchProducts} />
        <ProductsList theProductSearch={searchProducts} />
    </>

} //closing bracket product container
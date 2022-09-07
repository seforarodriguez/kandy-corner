import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const ProductForm = () => {
    const [newProduct, update] = useState({
        name: ""
    })
    const [types, updateType] = useState([])

    useEffect(() => {
        fetch('http://localhost:8018/productTypes')
            .then(response => response.json())
            .then((productsTypeArray) => {
                updateType(productsTypeArray)
            })
    }, [])

    const navigate = useNavigate()


    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)


    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Create the object to be saved to the API

        const productToSendToAPI = {
            userId: honeyUserObject.id,
            name: newProduct.name,
            productTypeId: parseInt(newProduct.productTypeId),
            price: parseFloat(newProduct.price, 2),
            productQuantity: newProduct.productQuantity
        }

        // TODO: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8018/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productToSendToAPI)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/products")
            })
    }








    return <>
        <form className="productForm">
            <h2 className="">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Product Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="What Candy?"
                        value={newProduct.name}
                        onChange={(event) => {
                            const copy = { ...newProduct }
                            copy.name = event.target.value
                            update(copy)
                        }
                        } />
                </div>
                <div className="form-group">
                    <label htmlFor="price">How much?:</label>
                    <input
                        required autoFocus
                        type="number"
                        className="form-control"
                        placeholder="moneyMoney?"
                        value={newProduct.price}
                        onChange={(event) => {
                            const copy = { ...newProduct }
                            copy.price = event.target.value
                            update(copy)
                        }
                        } />
                </div>
                <div className="form-group">
                    <label htmlFor="quantityOfProducts">How many candies do we have?</label>
                    <input
                        required autoFocus
                        type="number"
                        className="form-control"
                        placeholder="1, 2, 3, candy?"
                        value={newProduct.productQuantity}
                        onChange={(event) => {
                            const copy = { ...newProduct }
                            copy.productQuantity = event.target.value
                            update(copy)
                        }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="ProductName">Product type</label>
                    {
                        types.map((type) => {
                            return <> <div className="eachCheckBox">{ type.category }<input type="checkbox" value={type.id}
                                onChange={
                                    (event) => {
                                        const copy = { ...newProduct}
                                        copy.productTypeId = event.target.value
                                        update(copy)
                                    }
                                } /> </div>  </>
                        })
                    }

                </div>
            </fieldset>
            <button onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Submit Ticket
            </button>
        </form>
    </>



} //this is closing the productform
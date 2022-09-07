import { useState } from "react"
import { Navigate } from "react-router-dom"

export const ProductForm = () => {
    const [newProduct, update] = useState({
        name:"",
        productType:1
    })



    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)


    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Create the object to be saved to the API
        
       const productToSendToAPI = {
            userId: honeyUserObject.id,
            name: newProduct.name,
            productTypeId: newProduct.productTypeId,
            price: newProduct.price,
            productQuantity: newProduct.productQuantity
       }

        // TODO: Perform the fetch() to POST the object to the API
       return fetch(`http://localhost:8088/products?_expand=productType`, {       
        method: "POST",
        headers: {
            "Content-Type": "application/json"
       },
       body: JSON.stringify(productToSendToAPI)
    })
        .then(response => response.json())
        .then(()=> {
            Navigate("/products")
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
                                const copy ={...newProduct}
                                copy.description = event.target.value
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
                        value={newProduct.name}
                        onChange={(event) => {
                                const copy ={...newProduct}
                                copy.description = event.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                <label htmlFor="ProductName">Product type</label>
                
                <input type="checkbox"
                    
                    value={newProduct.emergency}
                    onChange={
                        (event) => {
                            const copy = { ...newProduct }
                            copy.productType= event.target.checked
                            update(copy)
                        }
                    } />

            </div>
            </fieldset>
            {/* <button onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Submit Ticket
            </button> */}
        </form>
</>



} //this is closing the productform
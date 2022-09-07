import {Outlet, Route, Routes} from "react-router-dom"
import { LocationList } from "../locations/locationsList"
import { ProductForm } from "../productForm/productform"
import { ProductsList } from "../products/products"

//!what does the <outlet/> do?
export const ApplicationViews = () => {
	return <>
	<Routes>
		<Route path="/" element={

				<>
					<div className="titleKandy">
						<h1>Kandy Korner</h1>
						<div className="titleMessage"> Welcome to your favorite Candy Shop from Around the Corner</div>
					</div>
					<Outlet />
				</>
		}>
			<Route path="products" element={ <ProductsList/> }/>
			<Route path="locations" element={ <LocationList />} />
			<Route path="products/create" element={ <ProductForm />} />
		</Route>
	</Routes>
	</>
}


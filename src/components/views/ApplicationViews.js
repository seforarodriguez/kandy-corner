import {Outlet, Route, Routes} from "react-router-dom"
import { LocationList } from "../locations/locationsList"

//!what does the <outlet/> do?
export const ApplicationViews = () => {
	return <>
	<Routes>
		<Route path="/" element={

			<>
				<h1 className="titleKandy">Kandy Korner</h1>
				<div> Welcome to your favorite Candy Shop from Around the Corner</div>
				
				<Outlet/>
			</>
		}>

			<Route path="locations" element={ <LocationList />} />
		</Route>
	</Routes>
	</>
}


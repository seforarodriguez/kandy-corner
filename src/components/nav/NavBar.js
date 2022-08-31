import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    
    const localKandyUser = localStorage.getItem('kandy_user')
    const kandyUserObject = JSON.parse(localKandyUser) 

//!WHAT AM I MISSING HERE?!
    return (<>
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            {
                kandyUserObject.isStaff 
                ? <>
                    <li className="navbar__item active">
                        <Link className="navbar__link" to="/products">All Products</Link>
                    </li>
                </>
                : ""  
            }
            
            

            <li className="navbar__item navbar__logout">
                <Link className="navbar__link" to="" onClick={() => {
                    localStorage.removeItem("kandy_user")
                    navigate("/", { replace: true })
                }}>Logout</Link>
            </li>
        </ul>
    </>
    )
}


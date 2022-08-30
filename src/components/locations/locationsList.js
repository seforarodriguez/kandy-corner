import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./locationlist.css"

export const LocationList = () => {
    const [locations, setLocations] = useState([])

    //?This is pulling the information from the database
useEffect(() => {
    fetch('http://localhost:8088/locations')
    .then(response => response.json())
    .then((locationsArray)=> {
        setLocations(locationsArray)
    })

    },
    []
)


//?This is returning the data we want to print in the location list
return <>
<h2> List of Locations</h2>
<article>
    {
    locations.map(location => { 
        return <>
        <section className="eachLocation">
            <h3>{location.name}</h3>
            <p> Located in: {location.address}</p>
            <p>Square ft.: {location.squareFootage} ft.</p>

        </section>
         </>
        })
    }
</article>
</>





}
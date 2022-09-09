export const ProductSearch = ({searchFunction}) => {

return <div>
    <input onChange={(changeEvent)=> {
       searchFunction(changeEvent.target.value)
    }} 
    type="text" placeholder="What candy are you looking for?" />
</div>



} //closing bracket of productSEARCH
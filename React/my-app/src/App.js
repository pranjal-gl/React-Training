import FilterProduct from "./WHOC/FilterProduct"
import clothing from "./WHOC/cData"
import electronic from "./WHOC/eData"
function App(){
    return(
        <div>
           <FilterProduct data={clothing} storeName='Cloths'></FilterProduct>
           <FilterProduct data={electronic} storeName='Electronics'></FilterProduct>
        </div>
    )
}
export default App
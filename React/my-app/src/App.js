import ContactManagerComp from './ContactManager/ContactManagerComp'
import contactDetails from './ContactManager/contactDetails'
import FilterProduct from './WHOC/FilterProduct'
import electronic from './WHOC/eData'
import clothing from './WHOC/cData'
function App(){
    return(
        <div>
            {/* <FilterProduct data = {electronic} storeName='Electronics'></FilterProduct>
            <FilterProduct data = {clothing} storeName='Clothing'></FilterProduct> */}
           <ContactManagerComp data={contactDetails}></ContactManagerComp>
        </div>
    )
}
export default App
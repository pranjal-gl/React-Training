import ContactManagerComp from './ContactManager/ContactManagerComp'
import contactDetails from './ContactManager/contactDetails'
import FilterProduct from './WHOC/FilterProduct'
import electronic from './WHOC/eData'
import clothing from './WHOC/cData'
import EventDemo from './Day6/EventDemo'
import ContactManager from './APICalls/ContactManager'

function App(){
    return(
        <div>
            {/* <FilterProduct data = {electronic} storeName='Electronics'></FilterProduct>
            <FilterProduct data = {clothing} storeName='Clothing'></FilterProduct> */}
           {/* <ContactManagerComp data={contactDetails}></ContactManagerComp> */}
           {/* <EventDemo data="John"></EventDemo> */}
           <ContactManager></ContactManager>
        </div>
    )
}
export default App
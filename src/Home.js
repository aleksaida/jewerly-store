import AllCategories from './Components/Filter/AllCategories';
import './App.css';
import Products from './Components/ProductsComponents/Products';

function Home () {
  
     
    return (
        <div>
        <AllCategories/>
        <hr></hr>  
         <div>
         <Products/>
         </div>
         </div>
  
    ) 
    
  }

export default Home;
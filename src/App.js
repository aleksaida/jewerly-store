import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Link
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Cart2 from "./Cart2";
import { useSelector } from "react-redux";
import { getTotalItems } from "./redux/cartSlice";


function App() {
  const totalItems = useSelector(getTotalItems);
  return (
<Router>

<nav>
<Link to="/about" className='link'>О магазине</Link>
<Link to="/" className='link'>Украшения</Link>
<Link to="/contact" className='link'>Доставка и оплата</Link>
<Link to="/cart2" className='link'>
    <img className="cartIcon" src="https://img.freepik.com/free-icon/shopping-basket_318-805366.jpg?size=338&ext=jpg&ga=GA1.2.1613439029.1648006454&semt=sph" alt="cart"/>
    <span>{totalItems}</span>
  </Link>
    
</nav>

<Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/cart2" element={<Cart2/>} />

</Routes>

</Router>

  );
  
  
}

export default App;

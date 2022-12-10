import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice, getTotalItems } from "../../redux/cartSlice";
import CartItem from "./CartItem";


const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const totalItems = useSelector(getTotalItems);
    const totalPr = 'Итого: ' + totalPrice  + ' P.';
    const totalIt = 'Всего: ' + totalItems  + ' шт.';

    return <div className="cartContainer">

       <h1 className='header'>Ваша корзина</h1>       
       {cartItems.map((cartItem, index) => <CartItem cartItem={cartItem} key={index}/>)}
       <h2>{totalItems > 0 ? totalIt: " "}</h2>
       <h2>{totalPrice > 0 ? totalPr : "Пока в ней пусто"} </h2>
       
    

    </div>
}

export default Cart;
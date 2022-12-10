import dataProducts from "../../data/dataProducts";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";



const CartItem = ({cartItem}) => {

    const products = dataProducts.find(item => item.id === cartItem.productId)
    const dispatch = useDispatch();
    
    return (  
    <div className="cartContainer">
    <div className="cartItem">
         <img className="cartImage" src={`./${products.img}.jfif`} alt="images"/>
         <p>{products.name}</p>
         <p>{cartItem.quantity} шт.</p>
         <p>Цена: {products.price * cartItem.quantity} Р.</p>
         <span onClick={() => dispatch(removeItemFromCart({cartItemId:cartItem.id}))}>
         <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="images"/> 
         </span>
    </div>
    </div>
   )
}

export default CartItem;
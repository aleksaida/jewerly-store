import { useState } from "react";
import { useDispatch } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart} from "../../redux/cartSlice";

const Product = ({product}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()


    return (
    <div className="cardContainer">
    <div className="prodCard">
        <img className="productImage" src={`./${product.img}.jfif`} alt="prod"/>
        <h2 className="nameProd">{product.name}</h2>
        <h2>{product.price} Р.</h2>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button className="cartBtn" onClick={() => {dispatch(addItemToCart({product, quantity}));
        }}>В корзину</button>
    </div>
    </div>)      

}

export default Product;
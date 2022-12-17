import dataProducts from "../../data/dataProducts";
import Product from "./Product";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/productsSlice";


const Products = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    
    return (<div className="cardContainer">
        {dataProducts
        .filter(product => {
            if (selectedCategory === 'ВЕСЬ АССОРТИМЕНТ') return true;
            return selectedCategory === product.category;
        }
        )
        .map((product) => <Product product={product}/>)}
    </div>)
}

export default Products;
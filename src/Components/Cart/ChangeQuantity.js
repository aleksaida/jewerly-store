const ChangeQuantity = ({quantity, setQuantity}) => {

const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity) 
}

const removeQuantity = () => {
    if (quantity <= 1) return;
    const newQuantity = quantity - 1;
    setQuantity(newQuantity) 
}

    return (
        <div>
            <button className="plus" onClick={addQuantity}>+</button>
            <span className="quant"> {quantity}</span>
            <button className="plus" onClick={removeQuantity}>-</button>
        </div>
    )
}

export default ChangeQuantity;
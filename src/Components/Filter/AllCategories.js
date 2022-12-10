import Filter from "./Filter";

const AllCategories = () => {
    return (
    <div>
    <div>
        <h1 className="header">Выбери свое украшение</h1>
    </div>
    <div className="category">        
        {['ВЕСЬ АССОРТИМЕНТ', 'СЕРЬГИ', 'КОЛЬЦА', 'БРАСЛЕТЫ', 'БРОШИ', 'КОЛЬЕ'].
        map((category, id) =>  <Filter category={category} key={id}/> 
        )}   
        
    </div>
    </div>   
    
    )
}

export default AllCategories;
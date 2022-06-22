import Item from "./item";

const ItemList= ({items}) => {
    return(
        <div className="cardsacomodadas"> 
            {
            items.map((item) => (
                <Item item={item} key={item.id} />
            ))
            }
            </div>
    )

}
    


export default ItemList;

import ItemCategory from "../ItemCategory/ItemCategory";

const ItemCategoryList = ({itemCat})=>{
    return (
        <>
            {
                itemCat.map((product) => {
                    return <ItemCategory  props = {product} key ={product.id}/>
                })
            }
        </>
    )
}

export default ItemCategoryList;
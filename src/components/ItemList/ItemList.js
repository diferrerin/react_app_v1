import ItemProduct from "../ItemProduct/ItemProduct";

const ItemList = ({dataProducts})=>{
    return (
        <>
            {
                dataProducts.map((product) => {
                    return <ItemProduct  props = {product} key ={product.id}/>
                })
            }
        </>
    )
}

export default ItemList;
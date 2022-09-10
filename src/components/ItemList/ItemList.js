import ItemProduct from "../ItemProduct/ItemProduct";
//armado: APP --> HOME --> ITEMLIST --> ITEMPRODUCT (CSS en ITEMPRODUCT)
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


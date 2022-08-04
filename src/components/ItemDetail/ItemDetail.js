
const ItemDetail = ({props}) => {
    const {name,price,stock,img,id,detail} = props;
    return(
        <>  
            <div className = "item-product" >
                <h4 className = "title-product"> {name} </h4>
                <img src={`/assets/${img} `} alt={`Imagen : ${img} `} />  
                <p> -ID: {id}   -Stock: {stock}   -AR$ {price}</p>
                <p> -Descripcion: {detail}  </p>
            </div> 
        </>
    )
}
export default ItemDetail;
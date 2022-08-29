import "./Modal.scss"

const Modal = ({name,close,children})=>{
  //ejemplo visto en clase componentes 1  . children es palabra reservada. 
    return (
        <>
        <div className="modal-custom"> 
            <h4> { name }   </h4>
            {children}
        </div>
        <button onClick={ () => close(false)  }>CERRAR</button>
        </>
    )
}

export default Modal
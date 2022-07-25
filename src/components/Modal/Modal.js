import "./Modal.scss"

const Modal = ({name,children})=>{
  //ejemplo visto en clase componentes 1  . children es palabra reservada. 
    return (
        <div className="modal-custom"> 
            <h4> {name }   </h4>
            {children}
        </div>
    )
}

export default Modal
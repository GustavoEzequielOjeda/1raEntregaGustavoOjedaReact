import Button from 'react-bootstrap/Button';

const ButtonComponent = ({boton, bsButtonType, onClickFunction}) =>{
    return(
        <div>
            <Button variant={bsButtonType} onClick={onClickFunction}>{boton}</Button>
        </div>
    )
}

export default ButtonComponent;
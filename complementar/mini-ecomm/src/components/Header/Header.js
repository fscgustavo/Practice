import React from 'react'
import { Container, Cart } from './styles';
import { Link } from 'react-router-dom';


const Header  = () => {
    return(
        <Container>
            <Link to="/">
                <span>Logo Ecom</span>
            </Link>
            <Cart to="/cart">
                <div>
                    <strong> Meu Carrinho </strong>
                    <span> 0 itens </span>
                </div>
            </Cart>
        </Container>
    );
}

export default Header;
import React from 'react';
import { ProductList } from "./styles" 


{/*onClick={() => this.handleAddProduct(product.id)}*/}
const Home = () => {
    return(
        <ProductList>
            <li>
                <button
                    type="button"    
                >
                    <div>
                        {/*<MdAddShoppingCart size={16} color="#FFF" />{' '}
                        {amount[product.id] || 0}*/}
                    </div>

                    <span>Adicionar ao carrinho</span>
                </button>
            </li>
        </ProductList>
    );
}

export default Home
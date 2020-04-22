import React, { useContext } from 'react';
import { Container, ProductTable, Total } from "./styles"
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { CartStoreContext } from './CartStore';

const Cart = observer(() => {

    const cartStore = useContext(CartStoreContext);
    console.log(toJS(cartStore.productsSelected))
    let contador = 0;
    return (
        <Container>
          <ProductTable>
            <thead>
              <tr>
                <th />
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Subtotal</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {/* {cart.map(product => ( */}
                <tr>
                  <td>
                    {/* <img src={product.image} alt={product.title} /> */}
                  </td>
                  <td>
                    <strong>Titulo</strong>
                    <span>Preço formatado</span>
                  </td>
                  <td>
                    <div>
                      <button type="button" 
                      onClick={() => {
                        cartStore.qtd += 1
                        console.log(cartStore.qtd)
                      }
                        // cartStore.productsSelected = {...cartStore.productsSelected, [contador]: 1}
                  
                      }>
                        {/* <MdRemoveCircleOutline size={20} color="#7159c1" /> */}
                        -
                      </button>
                      <input type="number" readOnly/>
                      <button type="button" onClick={() => console.log(contador+=1)}>
                        {/* <MdAddCircleOutline size={20} color="#7159c1" /> */}
                        +
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong>{/*product.subtotal*/}</strong>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => console.log('remover do carrinho')}
                    >
                      {/* <MdDelete size={20} color="#9159c1" /> */}
                    </button>
                  </td>
                </tr>
              {/* ))} */}
            </tbody>
          </ProductTable>
    
          <footer>
            <button type="button">Finalizar pedido</button>
    
            <Total>
              <span>Total</span>
              <strong>preço do total</strong>
            </Total>
          </footer>
        </Container>
      );
});

export default Cart
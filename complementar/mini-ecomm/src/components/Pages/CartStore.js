import { createContext } from 'react'
import { observable, action, decorate} from 'mobx';

class CartStore {
    productsSelected = {
        id: 0
    }

    qtd = 0;

    // insertProduct = (product) => {
    // }
}

decorate(CartStore,{
    qtd: observable,
    productsSelected: observable,
    insertProduct: action
});

export const CartStoreContext = createContext( new CartStore() );
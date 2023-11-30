import { createStore } from 'vuex'
import products from './modules/products'
import supliers from './modules/supliers'

export default createStore({
    modules: {
        products,
        supliers,
    },
})

export default {
    namespaced: true,
    state: {
        products: [
            {
                id: 1,
                title: 'Product 1',
                imgSrc: 'https://cdn.shopify.com/s/files/1/0070/7032/files/image5_4578a9e6-2eff-4a5a-8d8c-9292252ec848.jpg?v=1620247043',
                price: 19.99,
            },
            {
                id: 2,
                title: 'Product 2',
                imgSrc: 'https://gabb.com/wp-content/uploads/2023/11/gabb-phone-menu-item.png',
                price: 29.99,
            },
            {
                id: 3,
                title: 'Product 3',
                imgSrc: 'https://m.media-amazon.com/images/I/91oF9q-jE5L.jpg',
                price: 39.99,
            },
            {
                id: 4,
                title: 'Product 4',
                imgSrc: 'https://zebronics.com/cdn/shop/products/ZEB-Duke-101-pic1.jpg?v=1622629153&width=2048',
                price: 49.99,
            },
        ],
        inputVal: null,
    },
    getters: {
        // productsList: ({ products }) => products,
        filteredProductsList: (state) => {
            if (state.inputVal)
                return state.products.filter((product) =>
                    product.title.toLowerCase().includes(state.inputVal.toLowerCase())
                )
            return state.products
        },

        inputVal: ({ inputVal }) => inputVal,
    },
    mutations: {
        setInputVal(state, val) {
            state.inputVal = val
        },
        addProduct(state, productData) {
            state.products.push(productData)
        },
    },
    actions: {
        setInputVal({ commit }, val) {
            commit('setInputVal', val)
        },
        addProduct({ commit }, productData) {
            commit('addProduct', {
                id: Date.now(),
                ...productData,
            })
        },
    },
    modules: {},
}

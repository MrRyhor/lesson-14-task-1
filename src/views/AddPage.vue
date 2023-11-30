<template>
    <form @submit="onFormSubmit">
        <label
            >Title:
            <input v-model="productData.title" type="text" />
        </label>
        <label
            >Price:
            <input v-model="productData.price" type="number" step="any" />
        </label>
        <label
            >Add image src:
            <input v-model="productData.imgSrc" type="text" />
        </label>
        <button type="submit">Add Product</button>
    </form>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'AddPage',
    data() {
        return {
            productData: {},
        }
    },
    methods: {
        ...mapActions('products', ['addProduct']),
        onFormSubmit(e) {
            e.preventDefault()
            this.addProduct(this.productData)
            this.productData = {}
        },
    },
}
</script>
<style lang="scss" scoped>
button {
    cursor: pointer;
}
</style>

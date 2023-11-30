<template>
    <main-master-page>
        <div class="links">
            <router-link v-if="!getPathSelector" to="/products/selector">Search</router-link>
            <router-link v-if="!getPathEditor" to="/products/editor">Editor</router-link>
        </div>
        <hr />
        <router-view />
        <hr />
        <h2>Choose the product</h2>
        <div v-if="filteredProductsList.length">
            <div class="products-container">
                <card-data v-for="product in filteredProductsList" :key="product.id" :data="product" />
            </div>
        </div>
        <div v-else>NO RESULTS</div>
    </main-master-page>
</template>
<script>
import MainMasterPage from '../masterpages/MainMasterPage.vue'
import CardData from '../components/CardData.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'ProductsPage',

    components: {
        MainMasterPage,
        CardData,
    },

    computed: {
        ...mapGetters('products', ['filteredProductsList']),
        getPathSelector() {
            return this.$route.path === '/products/selector'
        },
        getPathEditor() {
            return this.$route.path === '/products/editor'
        },
    },
}
</script>
<style lang="scss" scoped>
.products-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 10px;
}
.links {
    display: flex;
    gap: 20px;
}
</style>

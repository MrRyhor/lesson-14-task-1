<template>
    <main-master-page>
        <h2>Choose supliers</h2>
        <div class="supliers-container">
            <card-data v-for="suplier in supliersList" :key="suplier.id" :data="suplier">
                <div class="logo-container">
                    <div v-for="(logo, i) in suplier.logo" :key="i">
                        <img :src="logo" />
                    </div>
                </div>
            </card-data>
        </div>
        <template #left-block>
            <h2>Most popular: <span>Supplier 1</span></h2>
        </template>
    </main-master-page>
</template>
<script>
import MainMasterPage from '../masterpages/MainMasterPage.vue'
import CardData from '../components/CardData.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'SupliersPage',

    components: {
        MainMasterPage,
        CardData,
    },

    computed: {
        ...mapGetters('supliers', ['supliersList']),
    },
}
</script>
<style lang="scss" scoped>
.supliers-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    column-gap: 10px;

    & .logo-container {
        display: flex;
        gap: 5px;
        img {
            width: 40px;
            height: 40px;
        }
    }
}
.footer {
    & h2 > span {
        color: green;
    }
}
</style>

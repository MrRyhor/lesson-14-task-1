<template>
    <div>
        <label
            >Search product by title:
            <input v-model="currentInputVal" type="text" />
        </label>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'FilterPage.vue',

    computed: {
        ...mapGetters('products', ['inputVal']),

        currentInputVal: {
            get() {
                return this.inputVal
            },
            set(val) {
                return this.setInputVal(val)
            },
        },
    },

    methods: {
        ...mapActions('products', ['setInputVal']),
    },
}
</script>
<style lang="sss" scoped></style>

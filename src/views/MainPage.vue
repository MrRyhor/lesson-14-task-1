<template>
    <main-master-page>
        <div>
            <h1>Hello!</h1>
            <h3>We look forward to shopping in our store</h3>
        </div>
        <template #right-block>
            <div class="owner-container">
                <h2>Owner: Baba Galya</h2>
                <img
                    src="http://batona.net/uploads/posts/2013-07/1375075418_013.jpeg"
                />
            </div>
        </template>
    </main-master-page>
</template>
<script>
import MainMasterPage from '../masterpages/MainMasterPage.vue'
export default {
    name: 'MainPage',
    components: {
        MainMasterPage,
    },
}
</script>
<style lang="scss" scoped>
    .owner-container{
        display: flex;
        align-items: center;
        gap: 10px;

        &>img{
            width: 150px;
            height: 150px;
        }
    }
</style>

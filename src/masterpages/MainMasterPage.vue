<template>
    <div>
        <nav>
            <router-link to="/">Main</router-link> | <router-link to="/products">Products</router-link> |
            <router-link to="/supliers">Supliers</router-link> | <router-link to="/contacts">Contacts</router-link> |
            <router-link to="/rules">Rules</router-link>
        </nav>

        <slot></slot>

        <footer class="footer">
            <slot name="left-block">
                <h2>Shop rating: 54449</h2>
            </slot>
            <slot name="right-block"><h2>Status: <span>Open</span></h2></slot>
        </footer>
    </div>
</template>
<script>
export default {
    name: 'MainMasterPage',
}
</script>
<style lang="scss" scoped>
.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & h2>span {
        color: green;
    }
}
</style>

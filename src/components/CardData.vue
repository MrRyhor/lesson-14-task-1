<template>
    <div class="data-container">
        <div class="image">
            <img :src="data.imgSrc" />
        </div>
        <div>
            <h3>{{ data.title }}</h3>
        </div>
        <slot>
            <div>{{ data.price }} $</div>
        </slot>
        <div>
            <button type="button">Buy</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardData',

    props: {
        data: {
            type: Object,
            default: () => ({}),
        },
    },
}
</script>
<style lang="scss" scoped>
.data-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 2px solid green;
    border-radius: 10px;
    padding: 10px;
    & .image {
        object-fit: contain;
        img {
            width: 200px;
            height: 200px;
        }
    }
}
</style>

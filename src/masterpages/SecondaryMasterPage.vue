<template>
    <div>
        <router-link to="/">Back to Main Page</router-link>
        <slot>
            <div>
                <h3>Our contacts:</h3>
                <h4>Address: in the middle of the nowhere</h4>
                <h4>SEO: Dr. Dre</h4>
                <h4></h4>
            </div>
        </slot>
        <div>
            <h2>Gallery:</h2>
            <div class="gallery-container">
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />
                <img
                    src="https://img.freepik.com/photos-premium/panorama-petit-arbre-qui-pousse-lever-du-soleil-generative-ai_786587-5763.jpg"
                />
                <img
                    src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                />
                <img src="https://cdn.pixabay.com/photo/2018/09/30/16/26/sun-3713835_1280.jpg" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SecondaryMasterPage',
}
</script>
<style lang="scss" scoped>
.gallery-container {
    display: flex;
    gap: 10px;

    & > img {
        width: 100px;
        height: 100px;
    }
}
</style>

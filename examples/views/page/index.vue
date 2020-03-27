<template>
    <div class="charts-page">
        <side-bar></side-bar>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import sideBar from '../sidebar';
    export default {
        name: "charts-page",
        components: {
            sideBar
        }
    }
</script>

<style lang="scss">
.charts-page{
    height: 100%;
}
</style>

<template>
    <div class="sidebar">
        <ul>
            <li v-for="nav in navList"  :key="nav.title">
                <router-link :to="{name: 'echartsType', params: {type:nav.name}}">{{nav.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "sidebar",
        props: {
            navList: {
                type: Array
            },
            routerName: {
                type: String,
                default: 'echartsType'
            }
        },
        data(){
            return {

            }
        },
        methods: {

        }
    }
</script>

<style lang="scss" scoped>
.sidebar{
    width: 100%;
}
</style>

<template>
  <div class="guide">
    <guideHeader/>
    <router-view></router-view>
    <guideFooter/>
  </div>
</template>

<script>
import guideHeader from "./components/header";
import guideFooter from "./components/footer";
export default {
    name: 'guide',
    components: {
      guideHeader,
      guideFooter
    },
    data() {
        return {
        };
    },
    methods: {
    },
    created() {
    },
    async mounted() {
    }
};
</script>

<style scoped lang="stylus">
</style>
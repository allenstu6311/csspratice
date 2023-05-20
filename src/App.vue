<template>
  <router-link v-for="item in route" :key="item.path" :to="item.path">{{
    item.name
  }} | </router-link>

  <router-view></router-view>
</template>

<script setup>
import "./assets/static/css/tailwind.css"
import { ref } from "vue";
import { routes } from "@/router/router";

const route = ref(routes);
</script>

<style >




</style>

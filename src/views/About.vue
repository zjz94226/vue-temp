<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/about2">Abou2t</router-link>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" class="cont-view"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" class="cont-view"></router-view>
  </div>
</template>

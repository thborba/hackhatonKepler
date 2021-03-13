<template>
  <v-app>

  <v-main>
    <MenuTop/>
    <v-container>
      <router-view/>
    </v-container>
  </v-main>
  </v-app>
</template>

<script>
import MenuTop from './components/MenuTop';
export default {
  name: 'App',
  components: {
    MenuTop
  },
  data: () => ({
    //
  }),
};
</script>

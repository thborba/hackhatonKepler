<template>
  <v-app>

  <v-main>
    <MenuTop/>
    <v-container>
      <router-view/>
    </v-container>
  </v-main>
  <MenuFloat/>
  </v-app>
</template>

<script>
import MenuFloat from './components/MenuFloat';
import MenuTop from './components/MenuTop';
export default {
  name: 'App',
  components: {
    MenuFloat,
    MenuTop
  },
  data: () => ({
    //
  }),
};
</script>

<template>
  <div class="app-top-bar">
    <v-app-bar
      color="green darken-2"
      dense
      dark
    > 
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Onde tem coleta?</v-toolbar-title>
      
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="blue text--lighten-2"
        >
           <router-link to="/">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
                <v-list-item-title>Início</v-list-item-title>
              </v-list-item>
          </router-link>

          <router-link to="/pontosColeta">
            <v-list-item>
              <v-list-item-icon>
                <v-icon></v-icon>
              </v-list-item-icon>
              <v-list-item-title> Pontos de coleta</v-list-item-title>
            </v-list-item>
          </router-link>


     

          <router-link to="/novo">
            <v-list-item>
              <v-list-item-icon>
                <v-icon></v-icon>
              </v-list-item-icon>
              <v-list-item-title> Adicionar ponto de coleta</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/como-fazer">
            <v-list-item>
              <v-list-item-icon>
                <v-icon></v-icon>
              </v-list-item-icon>
              <v-list-item-title> Como fazer a coleta</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "AppTopBar",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
.app-top-bar a {
  text-decoration: none !important;
}
</style>
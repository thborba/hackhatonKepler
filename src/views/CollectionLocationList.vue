<template>
  <v-container class="container">
    <h1 class="text-h5 text-center mb-3 mt-5">Pontos da coleta seletiva</h1>
    <v-container fluid>
      <!-- :change="filtrarCategorias()" -->
      <v-select
        v-model="select"
        :items="listaCategorias"
        label="Categorias"
        chips
        hint="Quais produtos são coletados?"
      ></v-select>
    </v-container>
    <!-- <v-row class="mb-10 mt-10">
      <v-btn
        v-for="categoria of listaCategorias"
        :key="categoria.id"
        class="ml-10 mt-5"
      >
        {{ categoria }}
      </v-btn>
    </v-row> -->
    <v-container class="container-cards mb-10">
      <v-card
        v-for="ponto of filtroPontosColeta"
        :key="ponto.id"
        class="card mb-10 mx-auto"
        max-width="300"
      >
        <v-img
          :src="ponto.imagem"
          :alt="ponto.nome"
          height="200px"
          width="300"
        ></v-img>

        <v-card-title> {{ ponto.nome }} </v-card-title>

        <v-card-subtitle>
          {{ ponto.endereco }}
          <br />
          <span> CEP: </span> {{ ponto.cep }}
        </v-card-subtitle>
      </v-card>
    </v-container>
  </v-container>
</template>


<script>
export default {
  name: "PontosColeta",

  data() {
    return {
      pontosColeta: [],
      filtroPontosColeta: [],
      categorias: [],

      select: [],
    };
  },
  methods: {
    filtrarCategorias() {
      let listaFiltrada = [],
        count = 0;
      for (let i = 0; i < this.pontosColeta.length; i++) {
        for (let j = 0; i < this.pontosColeta[i].categorias.length; i++) {
          if (this.pontosColeta[i].categorias[j] == this.select) {
            count++;
          }
        }
        if (count > 0) listaFiltrada.push(this.pontosColeta[i]);
      }
      this.filtroPontosColeta = listaFiltrada;
      return;
    },
  },
  computed: {
    listaCategorias() {
      const listaCategorias = [
        "Aço",
        "Pilhas",
        "Óleo de Cozinha",
        "Borracha",
        "Capsulas de Café",
        "Isopor",
        "Remédios",
        "Raio-X",
        "Entulhos",
      ];

      return listaCategorias;
    },
  },

  created() {
    fetch("https://it3kjy-default-rtdb.firebaseio.com/coletaSeletiva.json")
      .then((resposta) => resposta.json())
      .then((json) => {
        this.pontosColeta = json;
        this.filtroPontosColeta = json;
      });
  },
};
</script>

<style scoped>
.container-cards {
  display: flex;
  flex-direction: column;
}
</style>
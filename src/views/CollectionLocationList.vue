<template>
  <v-container class="container">
    <h1 class="text-h5 text-center mb-3 mt-5">Pontos da coleta seletiva</h1>
    <v-row class="mb-10 mt-10">
      <v-btn
        v-for="categoria of listaCategorias"
        :key="categoria.id"
        class="ml-10 mt-5"
      >
        {{ categoria }}
      </v-btn>
    </v-row>
    <v-container class="container-cards mb-10">
      <v-card
        v-for="ponto of pontosColeta"
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
    };
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
        console.log(this.pontosColeta);
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
<template>
  <v-container class="container">
    <h1 class="text-h5 text-center mb-3 mt-5">Pontos da coleta seletiva</h1>
    <!-- <v-container fluid>
       <v-select
        v-model="select"
        :items="listaCategorias"
        label="Categorias"
        chips
        :change="filtrarCategorias()"
        hint="Quais produtos são coletados?"
      ></v-select> 
    </v-container> -->

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
          <span> CEP: </span> {{ ponto.cep }} <br /><span> Categorias: </span>

          <span v-for="categoria of ponto.categorias" :key="categoria.id">
            {{ categoria }}
          </span>
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
  // methods: {
  //   filtrarCategorias() {
  //     console.log("ENTROU");
  //     let listaFiltrada = [];
  //     // count = 0;
  //     const pontosColetaTamanho = this.pontosColeta.length;
  //     const categoriasTamanho = this.pontosColeta[1].categorias.length;
  //     console.log(pontosColetaTamanho);
  //     console.log(categoriasTamanho);
  //     for (let i = 0; i < this.pontosColeta.length; i++) {
  //       console.log("PRIMEIRO FOR");
  //       for (let j = 0; j < this.pontosColeta[i].categorias.length; j++) {
  //         if (this.pontosColeta[i].categorias[j] == this.select) {
  //           count++;
  //         }
  //         console.log("SEGUNDO FOR");
  //       }
  //       if (count > 0) listaFiltrada.push(this.pontosColeta[i]);
  //     }
  //     console.log("SAIU");
  //     this.filtroPontosColeta = listaFiltrada;
  //   },
  // },
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
<template>
  <v-container class="container">
    <h1 class="text-h5 text-center mb-3 mt-5">Coletores de lixo seletivo</h1>
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
        v-for="coletor of listaColetores"
        :key="coletor.id"
        class="card mb-10 mx-auto"
        max-width="300"
      >
        <v-img
          :src="coletor.imagem"
          :alt="coletor.nome"
          height="200px"
          width="300"
        ></v-img>

        <v-card-title> {{ coletor.nome }} </v-card-title>

        <v-card-subtitle>
          {{ coletor.endereco }}
          <br />
          <span> Contato: </span> {{ coletor.telefone }} <br /><span>
            Categorias:
          </span>

          <span v-for="categoria of coletor.categorias" :key="categoria.id">
            {{ categoria }}
          </span>
        </v-card-subtitle>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "CollectorsList",

  data() {
    return {
      listaColetores: [
        {
          categorias: ["Plástico", "Papelão"],
          endereco: "Zone Sul de São Paulo - SP",
          id: 1,
          imagem: "https://randomuser.me/api/portraits/men/72.jpg",
          nome: "José da Silva",
          telefone: "(11) 99489-0392",
        },
        {
          categorias: ["Óleo de cozinha"],
          endereco: "Zona Norte do Rio de Janeiro - RJ",
          id: 2,
          imagem: "https://randomuser.me/api/portraits/men/22.jpg",
          nome: "João Pereira",
          telefone: "(25) 99784-4652",
        },
        {
          categorias: ["Eletrônicos"],
          endereco: "Zona Leste de São José dos Campos - SP",
          id: 3,
          imagem: "https://randomuser.me/api/portraits/men/2.jpg",
          nome: "Henrique Fernandes",
          telefone: "(12) 99532-0335",
        },
        {
          categorias: ["Papelão"],
          endereco: "Região Central de São Paulo - SP",
          id: 4,
          imagem: "https://randomuser.me/api/portraits/men/30.jpg",
          nome: "Francisco Peixoto",
          telefone: "(11) 98534-2341",
        },
        {
          categorias: ["Óleo de cozinha"],
          endereco: "Asa Norte - Brasília - DF",
          id: 5,
          imagem: "https://randomuser.me/api/portraits/men/48.jpg",
          nome: "Gustavo Fonseca",
          telefone: "(61) 99432-0342",
        },
      ],
    };
  },
};
</script>


<style scoped>
</style>
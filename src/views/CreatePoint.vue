<template>
  <v-layout justify-center>
    <v-form class="pa-4 pt-8" v-model="isFormValid">
      <v-container v-if="!submit">
        <v-text-field
          ref="name"
          v-model="name"
          :rules="[
        () => !!name || 'Esse campo é obrigatório',
        () => !!name && name.length <= 20 || 'O nome deve ter até 20 caracteres',
      ]"
          label="Nome"
          placeholder="Digite o Nome do ponto de coleta"
          counter="20"
          required
        ></v-text-field>

        <v-text-field
          ref="address"
          v-model="address"
          :rules="[
        () => !!address || 'Esse campo é obrigatório',
        () => !!address && address.length <= 50 || 'O endereço deve ter até 50 caracteres',
      ]"
          label="Endereço"
          placeholder="Digite o Endereço do ponto de coleta"
          counter="50"
          required
        ></v-text-field>

        <v-text-field
          ref="zip"
          v-model="zip"
          :rules="[
        () => !!zip || 'Esse campo é obrigatório',
        () => !!zip && zip.length != 10 || 'O CEP deve estar no formado 99999-999',
        ]"
          label="CEP"
          required
          placeholder="Digite o CEP do ponto de coleta"
        ></v-text-field>

        <v-file-input
          :rules="[
          () => !!zip || 'Esse campo é obrigatório',
          ]"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Escolha uma imagem"
          prepend-icon="mdi-camera"
          required
          label="Imagem"
        ></v-file-input>

        <v-container fluid>
          <v-select
            v-model="e7"
            :items="categorias"
            :rules="[
            () => !!zip || 'Esse campo é obrigatório',
            ]"
            label="Categorias"
            multiple
            chips
            hint="Quais produtos são coletados?"
            persistent-hint
          ></v-select>
        </v-container>

        <v-container>
          <v-layout justify-center class="mt-4">
            <v-checkbox
              v-model="checkbox"
              :error-messages="checkboxErrors"
              :rules="[
              () => !!zip || 'Esse campo é obrigatório',
              ]"
              label="Eu conferi os dados"
              required
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
            ></v-checkbox>
          </v-layout>

          <v-layout justify-center class="mt-4">
            <v-btn class="mr-4" @click="submit= !submit" :disabled="!isFormValid">Enviar</v-btn>
            <v-btn @click="clear">Limpar</v-btn>
          </v-layout>
        </v-container>
      </v-container>

      <v-container v-if="submit">
        <v-alert
          class="mt-16"
          :value="submit"
          color="green darken-2"
          dark
          border="top"
          icon="mdi-check-circle"
          transition="scale-transition"
        >Seu ponto de coleta será analisado e adicionado à lista em breve!</v-alert>

        <v-layout justify-center class="mt-16">
          <router-link to="/">
            <v-btn color="primary" elevation="2" large>Página Inicial</v-btn>
          </router-link>
        </v-layout>
      </v-container>
    </v-form>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    submit: false,
    isFormValid: false,
    name: "",
    e7: [],
    categorias: [
      "Aço",
      "Borracha",
      "Capsulas de Café",
      "Entulhos",
      "Isopor",
      "Óleo de Cozinha",
      "Pilhas",
      "Raio-X",
      "Remédios"
    ]
  }),

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    }
  }
};
</script>

<style scoped>
</style>
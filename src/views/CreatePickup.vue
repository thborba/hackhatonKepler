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
          placeholder="Digite o Nome do profissional"
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
          placeholder="Digite o Bairro de atuação"
          counter="50"
          required
        ></v-text-field>

        <v-text-field
          ref="phone"
          v-model="phone"
          :rules="[
        () => !!phone || 'Esse campo é obrigatório',
        ]"
          label="Telefone"
          required
          placeholder="Digite o Telefone do profissional de coleta"
        ></v-text-field>

        <v-file-input
          v-model="image"
          :rules="[
             () => !!phone || 'Esse campo é obrigatório',
          ]"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Escolha uma foto do profissional"
          prepend-icon="mdi-camera"
          required
          label="Imagem"
        ></v-file-input>

        <v-container fluid>
          <v-select
            :rules="[
             () => !!phone || 'Esse campo é obrigatório',
            ]"
            v-model="e7"
            :items="categorias"
            label="Categorias"
            multiple
            chips
            hint="Quais produtos são coletados?"
            persistent-hint
            required
          ></v-select>
        </v-container>

        <v-container>
          <v-layout justify-center class="mt-4">
            <v-checkbox
              v-model="checkbox"
              :rules="[
              () => !!phone || 'Esse campo é obrigatório',
              ]"
              :error-messages="checkboxErrors"
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
        >Seu profissional de coleta será analisado e cadastrado em breve!</v-alert>

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
      this.phone = "";
      this.select = null;
      this.checkbox = false;
    }
  }
};
</script>

<style scoped>
</style>
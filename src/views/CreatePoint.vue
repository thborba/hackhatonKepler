
<template>
      <v-layout justify-center>

  <form class="pa-4 pt-8">
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
      :rules="rules"
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
          label="Categorias"
          multiple
          chips
          hint="Quais produtos são coletados?"
          persistent-hint
        ></v-select>
      </v-container>

    <v-layout justify-center class="mt-8">
        <v-checkbox
          v-model="checkbox"
          :error-messages="checkboxErrors"
          label="Eu conferi os dados"
          required
          @change="$v.checkbox.$touch()"
          @blur="$v.checkbox.$touch()"
        ></v-checkbox>
    </v-layout>


      
      <v-layout justify-center class="mt-4">
        <v-btn
          class="mr-4"
          @click="submit"
        >
          Enviar
        </v-btn>
        <v-btn @click="clear">
          Limpar
        </v-btn>

      </v-layout>



  </form>
      </v-layout>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      address: { required } ,
      zip: {required },
      checkbox: { required },
    },

    data: () => ({
      name: '',
      e7: [],
      categorias: [
        'Aço', 'Borracha','Capsulas de Café', 'Entulhos', 
        'Isopor', 'Óleo de Cozinha', 'Pilhas', 'Raio-X', 
        'Remédios'
        
      ],
    }),

    // computed: {
    //   nameErrors () {
    //     const errors = []
    //     if (!this.$v.name.$dirty) return errors
    //     !this.$v.name.maxLength && errors.push('O nome do ponto de coleta deve ter no máximo 10 caracteres')
    //     !this.$v.name.required && errors.push('Adicione o nome do ponto de coleta')
    //     return errors
    //   },
    // },

    methods: {
      submit () {
        this.$v.$touch()
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = false
      },
    },
  }
</script>

<style scoped>

</style>
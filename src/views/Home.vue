<template>
  <v-container>
    <v-img
        class="inicio-imagem"
        src='../assets/onde-tem-coleta.png'
></v-img>
    <p class="p">Coleta seletiva em nada mais é do que a coleta dos resíduos depois da separação prévia pelos cidadãos de acordo com o tipo de resíduo. Os resíduos coletados podem ser recicláveis (metal, papel, papelão, plástico, caixa de leite e outros) ou rejeitos (não recicláveis). E a coleta seletiva pode ser feita do tipo porta a porta (serviço público ou privado) ou por ponto de entrega voluntária (PEVs). Aqui você poderá realizar uma busca pelo PEV mais próximo!</p>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  }
</script>

<style scoped>
.inicio-imagem {
    max-width:95vw;
    margin-right: auto;
    margin-left: auto;
    margin-top: 8px;
    margin-bottom: 8px;
}

.p {
    text-align: justify;
    text-size-adjust: 5;
    margin-right: auto;
    margin-left: auto;
}

.titulo {
  text-align: center;

}
</style>

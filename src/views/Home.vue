<template>
  <v-container>
    <h2>Onde tem coleta?</h2>
    <v-img class="inicio-imagem" src="https://cdn4.ecycle.com.br/cache/images/2020-06/50-650-coleta-seletiva-em-condominios-pb.jpg"></v-img>
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
    max-width:85vw;
    border-radius: 5px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 12px;
    margin-bottom: 12px;
}

.p {
    text-align: justify;
    margin-right: 5px;
    margin-left: 5px;
}
</style>

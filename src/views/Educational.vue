<template>
<div>
   <h2 class="text-center">Como fazer?</h2><br>
   <v-divider></v-divider><br>
<p class="text-justify">Todo mundo já se perguntou o porquê de as latas de lixo serem separadas por cor. 
  Resumindo: elas servem para identificar e segregar os tipos de resíduos do modo mais simples e fácil possível!
  São 10 diferentes tipos de resíduos sólidos, então são 10 diferentes cores! =)
</p>
<div>

<div class="text-center">
    <v-btn
        block
      color="red"
      dark
      @click="sheet = !sheet"
    >
      VERMELHO
    </v-btn>
    <v-bottom-sheet v-model="sheet">
      <v-sheet
        class="text-center"
        height="300px"
      > 
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet = !sheet"
        >
          Fechar
        </v-btn>
      <p><b>Esta é destinada ao recolhimento de plástico!</b><br/><i><b>Dicas:</b> lave-os com água de reúso para que não sobrem restos dos produtos, principalmente no caso de detergentes e xampus, que podem dificultar a triagem e o aproveitamento do material. No caso de embalagens com tampas, retire-as.</i></p>
      </v-sheet>
    </v-bottom-sheet>
  </div>

  <div class="text-center">
    <v-btn
        block
      color="green"
      dark
      @click="sheet2 = !sheet2"
    >
      VERDE
    </v-btn>
    <v-bottom-sheet v-model="sheet2">
      <v-sheet
        class="text-center"
        height="200px"
      > 
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet2 = !sheet2"
        >
          Fechar
        </v-btn>
      <p><b>Esta é destinada ao recolhimento de vidro!</b><br/><i><b>Dicas:</b> lave-os com água de reúso e retire as tampas.</i></p>
      </v-sheet>
    </v-bottom-sheet>
  </div>

  <div class="text-center">
    <v-btn
        block
      color="blue"
      dark
      @click="sheet3 = !sheet3"
    >
      AZUL
    </v-btn>
    <v-bottom-sheet v-model="sheet3">
      <v-sheet
        class="text-center"
        height="200px"
      > 
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet3 = !sheet3"
        >
          Fechar
        </v-btn>
            <p><b>Esta é destinada ao recolhimento de papel e papelão!</b><br/><i><b>Itens:</b> jornais, revistas, impressos em geral; caixas de papelão e embalagens longa-vida.</i></p>

      </v-sheet>
    </v-bottom-sheet>
  </div>

<div class="text-center">
    <v-btn
        block
      color="yellow"
      dark
      @click="sheet4 = !sheet4"
    >
      AMARELO
    </v-btn>
    <v-bottom-sheet v-model="sheet4">
      <v-sheet
        class="text-center"
        height="200px"
      > 
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet4 = !sheet4"
        >
          Fechar
        </v-btn>
      <p><b>Esta é destinada ao recolhimento de metal!</b><br/><i><b>Dicas:</b> latas devem ser amassadas ou prensadas para facilitar o armazenamento.</i></p>
      </v-sheet>
    </v-bottom-sheet>
  </div>

  <div class="text-center">
    <v-btn
        block
      color="black"
      dark
      @click="sheet5 = !sheet5"
    >
      PRETO
    </v-btn>
    <v-bottom-sheet v-model="sheet5">
      <v-sheet
        class="text-center"
        height="200px"
      > 
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet5 = !sheet5"
        >
          Fechar
        </v-btn>
      <p><b>Esta é destinada ao recolhimento de madeira!</b><br/><i><b>Dicas:</b> Use luvas protetoras para não se machucar.</i></p>
      </v-sheet>
    </v-bottom-sheet>
  </div>


<div class="text-center">
    <v-btn
        block
      color="brown"
      dark
      @click="sheet6 = !sheet6"
    >
      MARROM
    </v-btn>
    <v-bottom-sheet v-model="sheet6">
      <v-sheet
        class="text-center"
        height="200px"
      > 
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet6 = !sheet6"
        >
          Fechar
        </v-btn>
      <p><b>Esta é destinada ao recolhimento de matéria orgânica!</b><br/><i></i></p>
      </v-sheet>
    </v-bottom-sheet>
  </div>

  <div class="text-center">
    <v-btn
        block
      color="grey"
      dark
      @click="sheet7 = !sheet7"
    >
      CINZA
    </v-btn>
    <v-bottom-sheet v-model="sheet7">
      <v-sheet
        class="text-center"
        height="200px"
      > 
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet7 = !sheet7"
        >
          Fechar
        </v-btn>
      <p><b>Lixo não reciclável, contaminado ou cuja separação não é possível.</b><br/><i></i></p>
      </v-sheet>
    </v-bottom-sheet>
  </div>

  <div class="text-center">
    <v-btn
        block
      color="orange"
      dark
      @click="sheet8 = !sheet8"
    >
      LARANJA
    </v-btn>
    <v-bottom-sheet v-model="sheet8">
      <v-sheet
        class="text-center"
        height="200px"
      > 
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet8 = !sheet8"
        >
          Fechar
        </v-btn>
      <p><b>Esta é destinada ao recolhimento de resíduos perigosos, como pilhas e baterias!</b><br/><i>Dica: armazenar as pilhas e baterias sem misturá-las com outros tipo de materiais, apenas embalá-las em plástico resistente para evitar contato com umidade a fim de evitar vazamentos.</i></p>
      </v-sheet>
    </v-bottom-sheet>
  </div>

  <div class="text-center">
    <v-btn
        block
      color="black"
      dark
      @click="sheet9 = !sheet9"
    >
      BRANCO
    </v-btn>
    <v-bottom-sheet v-model="sheet9">
      <v-sheet
        class="text-center"
        height="200px"
      > 
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet9 = !sheet9"
        >
          Fechar
        </v-btn>
      <p><b>Esta é destinada ao recolhimento de resíduos hospitalares e serviços de saúde!</b><br/><i></i></p>
      </v-sheet>
    </v-bottom-sheet>
  </div> 


   <div class="text-center">
    <v-btn
        block
      color="purple"
      dark
      @click="sheet10 = !sheet10"
    >
      ROXO
    </v-btn>
    <v-bottom-sheet v-model="sheet10">
      <v-sheet
        class="text-center"
        height="200px"
      > 
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet10 = !sheet10"
        >
          Fechar
        </v-btn>
      <p><b>Esta é destinada ao recolhimento de resíduos radioativos!</b><br/><i></i></p>
      </v-sheet>
    </v-bottom-sheet>
  </div> 

<div class="text-center">
  <br>
  <br>
  <h3>Dá só uma sacada como tudo funciona:</h3><br><v-divider></v-divider><br>
<iframe width="auto" src="https://www.youtube.com/embed/jYFQGF4dMrs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

</div>
  </div>
</template>

<script>
export default {
    data: () => ({
      sheet: false,
      sheet2: false,
      sheet3: false,
      sheet4: false,
      sheet5: false,
      sheet6: false,
      sheet7: false,
      sheet8: false,
      sheet9: false,
      sheet10: false,
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' },
      ],
    }),
}
</script>
<template>
  <div>
      <h2>Oie</h2>

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
        height="200px"
      >
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet = !sheet"
        >
          FECHAR
        </v-btn>
        <div class="py-3">
          This is a bottom sheet using the controlled by v-model instead of activator
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>

<div class="text-center">
    <v-btn
    block
      color="blue"
      dark
      @click="sheet = !sheet"
    >
      AZUL
    </v-btn>
    <v-bottom-sheet v-model="sheet">
      <v-sheet
        class="text-center"
        height="200px"
      >
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet = !sheet"
        >
          close
        </v-btn>
        <div class="py-3">
          This is a bottom sheet using the controlled by v-model instead of activator
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>

<div class="text-center">
    <v-btn
    block
      color="green"
      dark
      @click="sheet = !sheet"
    >
      VERDE
    </v-btn>
    <v-bottom-sheet v-model="sheet">
      <v-sheet
        class="text-center"
        height="200px"
      >
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet = !sheet"
        >
          close
        </v-btn>
        <div class="py-3">
          This is a bottom sheet using the controlled by v-model instead of activator
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>

<div class="text-center">
    <v-btn
    block
      color="brown"
      dark
      @click="sheet = !sheet"
    >
      MARROM
    </v-btn>
    <v-bottom-sheet v-model="sheet">
      <v-sheet
        class="text-center"
        height="200px"
      >
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet = !sheet"
        >
          close
        </v-btn>
        <div class="py-3">
          This is a bottom sheet using the controlled by v-model instead of activator
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>

<div class="text-center">
    <v-btn
    block
      color="yellow"
      dark
      @click="sheet = !sheet"
    >
      AMARELO
    </v-btn>
    <v-bottom-sheet v-model="sheet">
      <v-sheet
        class="text-center"
        height="200px"
      >
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet = !sheet"
        >
          close
        </v-btn>
        <div class="py-3">
          This is a bottom sheet using the controlled by v-model instead of activator
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>

  <div class="text-center">
    <v-btn
    block
      color="orange"
      dark
      @click="sheet = !sheet"
    >
      LARANJA
    </v-btn>
    <v-bottom-sheet v-model="sheet">
      <v-sheet
        class="text-center"
        height="200px"
      >
        <v-btn
          class="mt-6"
          text
          color="red"
          @click="sheet = !sheet"
        >
          close
        </v-btn>
        <div class="py-3">
          This is a bottom sheet using the controlled by v-model instead of activator
        </div>
      </v-sheet>
    </v-bottom-sheet>
  </div>

  </div>
</template>

<script>
export default {
    data: () => ({
      sheet: false,
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
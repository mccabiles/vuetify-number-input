<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <InputNumber 
        :rules="rules"
        v-model="qty"
      />
    </v-content>
  </v-app>
</template>

<script>
import InputNumber from './components/InputNumber'

export default {
  name: 'App',
  components: {
    InputNumber,
  },

  data () {
    return {
      qty: 0,
      rules: [
        (val) => val >= 2 || 'Qty must be greater than 2', 
      ],
    }
  }
};
</script>

<template>
  <v-container grid-list-md fluid>
    <v-layout wrap justify-start>
      <v-flex xs12 md12>
        <doc class="mb-4"></doc>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
/* This component serves as the homepage for the url shortening application */
import Doc from './Doc.vue'
export default {
  components: {
    Doc
  },
  data () {
    return {
      errors: []
    }
  }
}
</script>

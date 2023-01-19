<script >
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      project: []
    }
  },
  components: {

  },
  created() {
    this.getProject();
  },
  methods: {
    getProject() {
      axios.get('http://127.0.0.1:8000/api/projects').then(resp => {
        this.project = resp.data.result;
      })
    }
  }
}
</script>



<template>

  <h1>sono pagina Vite</h1>
  <div class="container">
    <h2>frontoffice</h2>
  </div>

</template>



<style lang="scss">
@use "./styles/general.scss" as *;
</style>

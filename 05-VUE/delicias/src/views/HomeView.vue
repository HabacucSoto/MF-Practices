<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div class="container mt-5 text-center">

        <h1 class="text-center">¡Delicioso sabor para consentir!</h1>

        <div class="mt-4 row row-cols-1 row-cols-sm-2 row-cols-md-4 justify-content-center">

          <div v-for="pastel in pasteles" class="card m-4" style="width: 18rem;">
                <img :src="pasteles[index].url" class="card-img-top" alt="">
                <div class="card-body">
                    <p style="color: #E4105A;"><b>{{ pastel.nombre }}</b></p>
                    <p style="color: #E69501;"><b>${{ pastel.precio }} <small>MXN</small></b></p>
                    <button class="btn w-50" style="background-color: #512DA8; color:#fff;">Pedir</button>
                </div>
            </div>

        </div>

    </div>
    
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  data(){
    return {
      pasteles: [
        {nombre: 'Lecherito de celaya', precio: 340, url: '@/assets/lecherito-de-celaya-2.jpg'},
        {nombre: 'Pastel 3 Leches Durazno', precio: 310, url: '@/assets/pastel-3-leches-durazno-3.jpg'}
      ],
      url: '../assets/lecherito-de-celaya-2.jpg'
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Kaushan Script', cursive; 
  color: #E4105A;
}
</style>

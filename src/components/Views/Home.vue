<template>
  <header id="home" class="header">
    <div class="container">
      <div class="row">
        <div class="row-lg-6 col-xl-6">
          <div class="text-container">
            <img class="img-fluid" src="/assets/images/LCSLogo.webp" alt="LCS Logo" />
            <p class="p-large">
              Actifs dans le verse depuis 2954 dans un univers dominé par la
              violence et l’injustice, Les Choupettes représentent un phare
              d’espoir, une promesse que même dans les ténèbres les plus
              profondes, la lumière de la justice peut toujours triompher.
            </p>
          </div>
        </div>
        <div class="row-lg-5 col-xl-6">
          <div class="image-container">
            <img class="img-fluid" src="/assets/images/LCSB.webp" alt="Les Choupettes Officiel" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.container {
  display: flex;
}

.header .p-large {
  margin-bottom: 2rem;
  ;
}

.header .image-container {
  margin-bottom: 5rem;
}
</style>

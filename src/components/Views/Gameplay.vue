<template>
  <div id="Gameplay" class="basic-2">
    <div class="container">
      <div class="display-6">
        <div class="d-flex flex-row bd-highlight mb-auto lef">
          <div class="text-container">
            <div class="section-title">Notre gameplay</div>
            <h2>Toujours en équipe, toujours dans la bonne humeur</h2>
            <!-- Ajout du target="_blank" pour ouvrir le lien dans un nouvel onglet -->
            <a class="btn-outline-reg" href="https://fleetyards.net/fleets/lcs/ships/" target="_blank">Notre flotte</a>
          </div>
        </div>
        <div class="d-flex flex-row align-content-xl-between">
          <div class="text-center">
            <p>Le Salvage, grande partie de notre gameplay</p>
            <img class="img-fluid same-size" src="/assets/images/Salvage.png" alt="Vultures pendant du Salvage" />
          </div>
          <div class="test fa-backspace invisible"></div>
          <div class="d-flex flex-row">
            <div class="text-center">
              <p>Le combat au sol, ou FPS</p>
              <img class="img-fluid same-size" src="/assets/images/FPS.jpg" alt="Débarquement de joueurs armés" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gameplay",
};
</script>

<style scoped>
.same-size {
  width: 100%;
  height: auto;
  max-width: 500px;
  /* Vous pouvez ajuster cette valeur selon vos besoins */
}
.basic-2 .text-container {
  margin-bottom: 4rem;
  padding-bottom: 4rem;
}

.basic-2 h2 {
  margin-bottom: 1.75rem;
}

.basic-2 p {
  margin-bottom: 2rem;
}
</style>

<template>
  <section id="Gameplay" class="basic-2">
    <div class="container text-center">
      <header class="mb-4">
        <h1 class="title">Nos missions</h1>
        <h2 class="title2">Toujours en équipe, toujours dans la bonne humeur</h2>
        <!-- Ajout du target="_blank" pour ouvrir le lien dans un nouvel onglet -->
        <a class="btn btn-danger my-4" href="https://fleetyards.net/fleets/lcs/ships/" target="_blank">Notre flotte</a>
      </header>
      <article class="Gameplayimg">
        <div class="mb-4">
          <h2>Le Salvage, grande partie de notre gameplay</h2>
          <img class="img-fluid same-size" src="/assets/images/Salvage.png" alt="Vultures pendant du Salvage" />
        </div>
        <div class="mb-4">
          <h2>Le combat au sol, ou FPS</h2>
          <img class="img-fluid same-size" src="/assets/images/FPS.jpg" alt="Débarquement de joueurs armés" />
        </div>
        <div class="mb-4">
          <h2>Le combat dans les airs</h2>
          <img class="img-fluid same-size" src="/assets/images/Dogfight.jpg" alt="Combat de vaisseaux spaciaux" />
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "Gameplay",
};
</script>

<style scoped>
/* Styles pour les images pour qu'elles aient la même taille */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20rem;
}

.Gameplayimg {
  margin-bottom: 20rem;
}

.title,
.title2 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.same-size {
  width: 100%;
  height: auto;
}

.btn-danger {
  margin: 2rem 0;
  width: 20rem;
  text-align: center;
}
</style>

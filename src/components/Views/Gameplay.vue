<template>
  <section id="Gameplay" class="basic-2">
    <div class="container text-center">
      <header class="mb-4">
        <h1 class="title">Nos missions</h1>
        <h2 class="title2">Toujours en équipe, toujours dans la bonne humeur</h2>
        <!-- Ajout du target="_blank" pour ouvrir le lien dans un nouvel onglet -->
        <a class="btn btn-primary my-4" href="https://fleetyards.net/fleets/lcs/ships/" target="_blank">Notre flotte</a>
      </header>
      <article class="Gameplayimg">
        <div class="mb-4">
          <h2>Le Salvage et le Minage</h2>
          <p>Le <strong>Salvage et le Minage</strong>, deux gameplay assez important dans l'avenir de Star Citizen.
            L'implantation du basebuilding demandera nombre de ressources. Nous commencons à nous mettre à la page
            concernant ces gameplay la.</p>
          <img class="img-fluid same-size" src="/assets/images/Salvage.png" alt="Vultures pendant du Salvage" />
        </div>
        <div class="mb-4">
          <h2>Le combat au sol, ou FPS</h2>
          <p>Le FPS, que ce soit en bunker, assault sur épave ou même dans les nouvelles zones contéstées sur Pyro fait
            parti intégrante du gameplay général de la [LCS]. N'hésitez pas à sortir votre plus beau fusil et à venir
            jouer au tir aux pigeons avec nous !</p>
          <img class="img-fluid same-size" src="/assets/images/FPS.jpg" alt="Débarquement de joueurs armés" />
        </div>
        <div class="mb-4">
          <h2>Le combat dans les airs</h2>
          <img class="img-fluid same-size" src="/assets/images/Dogfight.jpg" alt="Combat de vaisseaux spaciaux" />
        </div>
        <div class="mb-4">
          <h2>Le Commerce</h2>
          <p>Venez avec nous découvrir Stanton et Pyro lors de session de commerce entre ces deux univers. Amusez vous,
            ramenez un max de caisses pour vous coucher sur un lit de billet !</p>
          <img class="img-fluid same-size" src="/assets/images/HullC.jpg" alt="Combat de vaisseaux spaciaux" />
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
  background-color: rgba(255, 255, 255, 0.1);
  /* Couleur de fond semi-transparente */
  border: none;
  /* Supprime les bordures */
  text-align: left;
  /* Aligne le texte à gauche */
  padding: 1rem;
  /* Ajoute un padding pour le contenu */
  backdrop-filter: blur(10px);
  /* Applique un flou à l'arrière-plan */
  -webkit-backdrop-filter: blur(10px);
  /* Support pour Safari */
  border-radius: 10px;
  /* Ajoute des coins arrondis */
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

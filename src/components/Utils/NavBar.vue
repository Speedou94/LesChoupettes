<template>
  <nav id="navbar" class="navbar navbar-expand-lg fixed-top" aria-label="Main navigation">
    <div class="container">
      <div class="collapse navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav ms-auto navbar-nav-scroll">
          <li class="nav-item">
            <a class="nav-link" href="#home">Accueil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">Qui sommes-nous ?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#gameplay">Notre gameplay</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#manifest">Manifeste</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Rejoignez-nous !</a>
          </li>
        </ul>
        <span class="nav-item">
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
/* Ajoutez des styles pour l'état ouvert du menu burger */
.offcanvas-collapse.open {
  display: block;
  visibility: visible;
  transform: translateX(0);
}

.navbar {
  background-color: rgba(255, 255, 255, 0.1);
  /* Couleur de fond semi-transparente */
  padding: 1rem;
  /* Ajoute un padding pour le contenu */
  backdrop-filter: blur(10px);
  /* Applique un flou à l'arrière-plan */
}
</style>
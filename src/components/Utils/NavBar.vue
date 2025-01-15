<template>
  <nav id="navbar" class="navbar navbar-expand-lg fixed-top" aria-label="Main navigation">
    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse justify-content-center" id="navbarNavAltMarkup">
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
  /* Affiche le menu */
  visibility: visible;
  /* Rend le menu visible */
  transform: translateX(0);
  /* Positionne le menu à sa place d'origine */
}

.navbar {

  background-color: rgba(255, 255, 255, 0.1);
  /* Couleur de fond semi-transparente */
  padding: 1rem;
  /* Ajoute un padding pour le contenu */
  backdrop-filter: blur(10px);
  /* Applique un flou à l'arrière-plan */
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  /* Utilise une icône de burger par défaut */
}
</style>
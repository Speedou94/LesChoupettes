<template>
  <nav id="navbar" class="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
    <div class="container">
      <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav ms-auto navbar-nav-scroll">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#home">Accueil</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#About">Qui sommes-nous ?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Gameplay">Notre gameplay</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Manifest">Manifeste</a>
          </li>
        </ul>
        <span class="nav-item">
          <a class="btn btn-primary" href="#contact">Rejoignez-nous !</a>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style scoped>
.navbar {
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
</style>
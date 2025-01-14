<template>
  <nav id="navbar" class="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
    <div class="container">
      <button class="navbar-toggler p-0 border-0" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
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
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
        <span class="nav-item">
          <a class="btn btn-danger" href="#contact">Rejoignez-nous !</a>
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
</style>

<style>
/* Ajoutez ce CSS globalement, par exemple dans votre fichier styles.css */
html {
  scroll-behavior: smooth;
}
</style>
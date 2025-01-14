<template>
  <nav id="navbar" class="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
    <div class="container">
      <button class="navbar-toggler p-0 border-0" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav ms-auto navbar-nav-scroll">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Accueil</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/home/about">Qui sommes-nous ?</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/home/gameplay">Notre gameplay</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/home/manifest">Manifeste</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/home/contact">Contact</router-link>
          </li>
        </ul>
        <span class="nav-item">
          <router-link class="btn btn-danger" to="/home/contact">Rejoignez-nous !</router-link>
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
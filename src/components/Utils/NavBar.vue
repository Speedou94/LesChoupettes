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
            <a class="nav-link" href="#skills">Qui sommes-nous ?</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Team">Notre gameplay</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#achievement">Manifeste</a>
          </li>
        </ul>
        <span class="nav-item">
          <a class="btn-solid-sm" href="#contact">Rejoignez-nous !</a>
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

<style scoped></style>
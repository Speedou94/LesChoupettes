<template>
  <footer class="footer">
    <div class="footer-content">
      <span>&copy; 2025 Les Choupettes Corporation</span>
      <span><a
          href="https://www.captaincontrat.com/contrats-commerciaux-cgv/cgv-cgu-cga/cgu-conditions-generales-utilisation">Conditions
          Générales d'Utilisation</a></span>
      <span><a href="https://tinkerbell-web-solution.fr">From Tinkerbell Web Solution with &#9825;</a></span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  padding: 1.5rem;
  border-top: 1px solid #d0dae2;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.1);
  /* Couleur de fond semi-transparente */
  border: none;
  /* Supprime les bordures */
  backdrop-filter: blur(10px);
  /* Applique un flou à l'arrière-plan */
  -webkit-backdrop-filter: blur(10px);
  /* Support pour Safari */
  border-radius: 10px;
  /* Ajoute des coins arrondis */
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  /* Espace entre les éléments */
}

.footer a {
  color: #ffffff;
  text-decoration: none;
}
</style>
<template>
  <div id="contact" class="form-1">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="text-container">
            <div class="section-title">Rejoignez les rangs !</div>
            <h2>Postulez chez Les Choupettes</h2>
            <p>
              <br />
              Vous cherchez à explorer les confins de l'univers pour défendre
              les opprimés et lutter contre l’injustice ? Rejoignez-nous chez
              Les Choupettes ! Nous sommes une équipe soudée d'aventuriers
              intrépides, une famille unie prête à parcourir l’univers pour
              venir en aide aux plus démunis et vivre des aventures incroyables.
              Que vous soyez un explorateur aguerri en quête de nouvelles
              découvertes, un chasseur de primes cherchant l'adrénaline de la
              traque, un commerçant plein d’ambition ou un ouvrier spécialisé,
              il y a une place pour vous parmi nous. <strong>En rejoignant Les
                Choupettes</strong>, vous aurez accès à une communauté dynamique et
              coopérative, où le partage des connaissances et l'entraide sont au
              cœur de nos valeurs. Que vous soyez un.e joueur.euse chevronné.e
              ou débutant.e , nous sommes là pour vous soutenir à chaque étape
              de votre voyage. Alors, qu'attendez-vous ?
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <img src="/assets/images/LCSB.webp" alt="Contact" class="img-fluid logo" />
          <a href="https://discord.gg/5Hu8aafm" target="_blank">
            <img src="/assets/images/join.webp" alt="Engagez-vous" class="img-fluid join-image" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    // Ajoutez ici les méthodes nécessaires pour gérer le formulaire
  },
}
</script>

<style scoped>
#contact {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  margin-bottom: 15rem;
}

.text-container {
  flex: 1;
  /* Prend tout l'espace disponible */
}

.img-fluid {
  max-width: 100%;
  height: auto;
  /* Assure que l'image est responsive */
}

.col-lg-6 {
  display: flex;
  flex-direction: column-reverse;
}
</style>

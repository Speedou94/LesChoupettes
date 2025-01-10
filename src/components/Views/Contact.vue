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
              il y a une place pour vous parmi nous. En rejoignant Les
              Choupettes, vous aurez accès à une communauté dynamique et
              coopérative, où le partage des connaissances et l'entraide sont au
              cœur de nos valeurs. Que vous soyez un.e joueur.euse chevronné.e
              ou débutant.e , nous sommes là pour vous soutenir à chaque étape
              de votre voyage. Alors, qu'attendez-vous ?
            </p>
          </div>
        </div>
        <div class="col-lg-6"></div>
        <div class="form-group">
          <button id="apply-button" type="submit" class="form-control-submit-button" @click="redirectToExternalLink">
            Postuler
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    redirectToExternalLink() {
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSfC7zu3Rfzg11N2ZsFUWVI4xn-L_9ejrBltvhlQkB_fWYmcmw/viewform",
        "_blank"
      );
    },
  },
};
</script>

<style scoped>
#contact {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}

.row {
  display: flex;
  flex-direction: column;
  align-content: space-around;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
}
</style>

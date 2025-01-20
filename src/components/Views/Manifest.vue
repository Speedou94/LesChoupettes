<template>
  <section id="manifest" class="header">
    <div class="container">
      <header class="text-center mb-5">
        <div class="Manifest"></div>
        <h2 class="H2">Pourquoi rejoindre Les Choupettes ?</h2>
      </header>
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-4 border-4">
            <div class="Infos text-center">
              <h2 class="card-text">Les informations importantes !</h2>
              <div class="btnlink">
                <a class="btn btn-primary" href="https://robertsspaceindustries.com/orgs/LCSSC" target="_blank">Lien
                  RSI</a>
                <a class="btn btn-primary" href="https://discord.gg/aUmVFhrXR2" target="_blank">Discord</a><br />
              </div>
              <p>
                <strong>Archétype :</strong> Organisation <br />
                <strong>Taille de l’organisation :</strong> moyenne <br />
                <strong>Ambiance :</strong> Familiale <br />
                <strong>Activités :</strong> Exploration / Ressources / Support <br />
                <strong>Alignement :</strong> Neutre <br />
                <strong>Adhésion :</strong> non exclusive <br />
                <strong>Role Play :</strong> Accepté - non obligatoire <br />
                <strong>ALIGNEMENT ET OBJECTIFS :</strong> "Chez les Choupettes,
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 border-4">
            <div class="Chartre text-center">
              <h2 class="card-text">La Chartre</h2>
              <p class="text-center">
                <strong>Cette charte est appelée à évoluer selon les avancées du jeu, tout en respectant l’esprit qui y
                  est déjà présent.</strong> <br />
                <strong>Conditions d’admission :</strong> <br /><br />
                <a class="btn btn-primary" href="https://forms.gle/1eyGnrm4Zh3gCsSb8" target="_blank">Formulaire de
                  candidature</a><br /><br />
                L’organisation accepte les joueurs de tous styles et de tous les niveaux d’engagement.
                Nous n’imposons pas d’âge minimum, du moment que les échanges sont suffisamment mâtures et
                respectueux.<br /><br />
                <strong>Responsabilité et respect :</strong>
                L’organisation s’engage à traiter avec respect et égalité ses membres et sympathisants. Il est attendu
                en retour le même respect entre membres, sympathisants, alliés et envers le staff.
                Les règles de bonne conduite et de politesse sont la base de toutes communications.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 border-4">
            <div class="Rangs text-center">
              <h2 class="card-text">Les Rangs</h2>
              <p class="text-center"> <strong>Pourquoi Les Choupettes ?</strong>
                Unis par une fraternité indéfectible, ils forment une famille, une meute prête à se sacrifier pour l’un
                des siens. Ils se battent non pour l’appât du gain, mais par conviction, pour un monde où les plus
                faibles ne seront plus piétinés par les puissants. Ils restent discrets mais attirent immanquablement
                vers eux, de nouveaux parias en quête d’un destin plus noble.
                Le House of the Choupettes sillonne les étoiles, tel un phare d’espoir dans l’immensité du cosmos,
                laissant dans son sillage un souffle de liberté et une promesse de lendemains meilleurs.
                Car au-delà de leurs combats et de leurs victoires, ce groupe d’hommes et de femmes incarnent l’idéal
                d’une humanité meilleure, où la compassion et la solidarité surpassent la soif de pouvoir, l’avarice et
                la cruauté.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Manifest",
};
</script>

<style scoped>
/* Styles pour le conteneur principal */
.Row {
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  text-align: left;
  padding: 1rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
}

/* Styles pour les cartes */
.card {
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  text-align: left;
  padding: 1rem;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
}

/* Styles pour les liens */
.btnlink .btn {
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  align-items: center;
}

/* Styles pour les images */
.card-img-bottom {
  width: 100%;
  height: auto;
}

.container {
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

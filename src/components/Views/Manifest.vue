<template>
  <section id="Manifest" class="header">
    <div class="container">
      <header class="text-center mb-5">
        <div class="Manifest"></div>
        <h2 class="H2">Pourquoi Les Choupettes ?</h2>
      </header>
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-4 border-4">
            <div class="Infos text-left">
              <h2 class="card-text">Les informations importantes !</h2>
              <div class="btnlink">
                <a class="btn btn-danger" href="https://robertsspaceindustries.com/orgs/LCSSC" target="_blank">Lien
                  RSI</a><br />
                <a class="btn btn-danger" href="https://discord.gg/5Hu8aafm" target="_blank">Discord</a><br />
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
            <img src="/assets/images/image1.png" class="card-img-bottom" alt="Image 1" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4 border-4">
            <div class="Chartre text-left">
              <h2 class="card-text text-center">La Chartre</h2>
              <p class="text-center">
                <strong>Cette charte est appelée à évoluer selon les avancées du jeu, tout en respectant l’esprit qui y
                  est déjà présent.</strong> <br />
                <strong>Conditions d’admission :</strong> <br />
                <a href="#apply-button"><strong>Remplir le formulaire de candidature</strong></a><br />
                L’organisation accepte les joueurs de tous styles et de tous les niveaux d’engagement.
                Nous n’imposons pas d’âge minimum, du moment que les échanges sont suffisamment mâtures et
                respectueux.<br /><br />
                <strong>Responsabilité et respect :</strong>
                L’organisation s’engage à traiter avec respect et égalité ses membres et sympathisants. Il est attendu
                en retour le même respect entre membres, sympathisants, alliés et envers le staff.
                Les règles de bonne conduite et de politesse sont la base de toutes communications.
                Sont évidemment interdits - à l’oral comme à l’écrit - les messages à caractère raciste, pornographique,
                les insultes et textes visant à inciter au conflit ou alimenter des dramas de tout ordre, ingame ou IRL,
                notamment religieux ou politiques, ainsi que toutes demandes d’aides d’actions illégales ou à l’encontre
                des règlements de RSI.<br /><br />

              </p>
            </div>
            <img src="/assets/images/image2.png" class="card-img-bottom" alt="Image 2" />
          </div>
        </div>
        <!-- Ajoutez d'autres cartes ici si nécessaire -->
        <div class="col-md-4">
          <div class="card mb-4 border-4">
            <div class="Rangs - text-left">
              <h2 class="card-text text-center">Les Rangs</h2>
              <p class="text-center"> <strong>Alignement et éthique ingame :</strong>
                Toute activité individuelle qui impliquerait de nuire à autrui (vole, piratage, agression, griefing…)
                est <strong>formellement proscrite</strong> au sein des Choupettes.
              </p>
            </div>
            <img src="/assets/images/image2.png" class="card-img-bottom" alt="Image 2" />
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
.header {
  padding-top: 4rem;
}

/* Styles pour les cartes */
.card {
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

/* Styles pour les liens */
.btnlink .btn {
  display: block;
  margin-bottom: 0.5rem;
}

/* Styles pour les images */
.card-img-bottom {
  width: 100%;
  height: auto;
}
</style>

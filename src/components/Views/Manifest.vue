<template>
  <header id="Manifest" class="header bg-body">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="logo-enterprise"></div>
          <h2 class="H2 col-xl-auto col-lg-auto mb-lg-5 text-container text-center">
            Pourquoi Les Choupettes ?
          </h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="card mb-4" style="width: 100%">
            <div class="card-body">
              <h2 class="card-text">Les informations importantes !</h2>
              <div class="btnlink">
                <a class="btn-outline-reg" href="https://robertsspaceindustries.com/orgs/LCSSC" target="_blank">
                  Lien RSI
                </a><br />
                <a class="btn-outline-reg" href="https://discord.gg/5Hu8aafm" target="_blank">
                  Discord
                </a><br />
              </div>
              <strong>Archétype :</strong> Organisation <br />
              <strong> Taille de l’organisation :</strong> moyenne <br />
              <strong>Ambiance: </strong> Familiale <br />
              <strong>Activités : </strong> Exploration / Ressources / Support <br />
              <strong>Alignement : </strong> Neutre <br />
              <strong>Adhésion : </strong> non exclusive <br />
              <strong>*Role Play : </strong> Accepté - non obligatoire <br />
              <strong>ALIGNEMENT ET OBJECTIFS : </strong> "Chez les Choupettes,
            </div>
            <img src="/assets/images/image1.png" class="card-img-bottom" alt="Image 1" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4" style="width: 100%">
            <div class="card-body">
              <h2 class="card-text text-center">La Chartre</h2>
              <p class="text-center">
                <strong>Cette charte est appelée à évoluer selon les avancées du jeu, tout en respectant l’esprit qui y
                  est déjà présent.</strong> <br />
                <strong>Conditions d’admission :</strong> <br />
                <a href="#apply-button"><strong>Remplir le formulaire de candidature</strong></a><br />
                L’organisation accepte les joueurs de tous styles et de tous les niveaux d’engagement.
                Nous n’imposons pas d’âge minimum, du moment que les échanges sont suffisamment mâtures et
                respectueux.<br /><br />

                <strong>Responsabilité et respect : </strong>
                L’organisation s’engage à traiter avec respect et égalité ses membres et sympathisants. Il est attendu
                en retour le même respect entre membres, sympathisants, alliés et envers le staff.
                Les règles de bonne conduite et de politesse sont la base de toutes communications
                Sont évidemment interdits - à l’oral comme à l’écrit - les messages à caractère raciste, pornographique,
                les insultes et textes visant à inciter au conflit ou alimenter des dramas de tout ordre, ingame ou IRL,
                notamment religieux ou politiques, ainsi que toutes demandes d’aides d’actions illégales ou à l’encontre
                des règlements de RSI.<br /><br />

                <strong>Alignement et éthique ingame : </strong>
                Toute activité individuelle qui impliquerait de nuire à autrui (vole, piratage, agression, griefing…)
                est <strong>formellement proscrite</strong> au sein des Choupettes.
              </p>
            </div>
            <img src="/assets/images/image2.png" class="card-img-bottom" alt="Image 2" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="card mb-4" style="width: 100%">
            <div class="card-body">
              <h2 class="card-text">Le Manifeste</h2>
              <p>
                <strong> Stagiaire : </strong> En postulant chez [LCS] vous serez dans une période
                d’essai qui nous permettra de faire connaissance et de savoir -
                pour vous comme pour nous - si vous êtes fait pour nous
                rejoindre.<br />
                <strong>Membre : </strong> vous êtes membre des Choupettes et nous
                rejoignez en tant qu’organisation principale. Vous êtes libre
                d’être affilié à d’autres organisations, dans la mesure où elles
                n’entrent pas en conflit avec nos positionnement éthiques et
                diplomatiques. <br />
                <strong>Sympathisant : </strong> Vous êtes membre d’une autre
                organisation ou juste affilié aux Choupettes et nous rejoignez
                régulièrement pour des sessions de jeu, sans vous impliquer dans
                le développement dans notre organisation
              </p>
            </div>
            <img src="/assets/images/image3.png" class="card-img-bottom" alt="Image 3" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Manifest'
}
</script>

<style scoped>
#manifest {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.card-body {
  text-align: center;
}

.card-img-bottom {
  width: 100%;
  height: auto;
}

.btnlink {
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

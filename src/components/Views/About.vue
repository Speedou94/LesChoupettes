<template>
  <div id="about" class="basic-1">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-xl-7">
          <div class="gallery-container">
            <!-- Galerie d'images -->
            <div class="gallery-grid">
              <!-- Boucle sur les images pour afficher les vignettes -->
              <div v-for="(photo, index) in photos" :key="index" class="gallery-item" @click="openModal(photo)">
                <img :src="photo.thumbnail" :alt="icon" class="gallery-image" />
              </div>
            </div>

            <!-- Modal d'image agrandie -->
            <div v-if="isModalOpen" class="modal" @click="closeModal">
              <div class="modal-content">
                <img :src="selectedPhoto.fullSize" :alt="Full" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xl-5">
          <div class="text-container">
            <h2>Qui sommes-nous ?</h2>
            <p>
              Au cœur des confins inexplorés de la galaxie, navigue un vaisseau spatial patiné par les voyages et les
              aventures, le <strong>House of the Choupettes</strong>.
              <br />
              A son bord, un groupe d’hommes et de femmes sans attache, au regard aiguisé par les épreuves et aux
              corps endurcis par les épreuves, unis par un serment d’allégeance à leur famille, à leur code d’honneur.
              <br />
              Sous le commandement éclairé de son leader <strong>Speedou</strong>, ces aventuriers, jadis brisés par les
              injustices de l’univers, anciens parias, rejetés, déshérités et abandonnés, ont trouvé la rédemption et un
              nouveau sens à leur existence. Ils ne sont plus de simples soldats ou des âmes égarées, mais des
              défenseurs
              des opprimés, des chevaliers errants de l’espace. Leur devise, gravée sur la coque de leurs vaisseaux,
              résonne
              comme un cri de ralliement : “Honneur et justice pour les déshérités.”
              <strong>Unis par une fraternité indéfectible, ils forment une famille, une meute prête à se sacrifier pour
                l’un des siens.</strong> Ils se battent non pour l’appât du gain, mais par conviction, pour un monde où
              les
              plus faibles ne seront plus piétinés par les puissants. Ils restent discrets mais attirent immanquablement
              vers
              eux, de nouveaux parias en quête d’un destin plus noble. Le House of the Choupettes sillonne les étoiles,
              tel un
              phare d’espoir dans l’immensité du cosmos, laissant dans son sillage un souffle de liberté et une promesse
              de
              lendemains meilleurs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      // Liste des photos pour la galerie
      photos: [
        {
          thumbnail: '/assets/images/Judi1.webp',  // Vignette
          fullSize: '/assets/images/Judi1.webp',   // Image en taille réelle
          alt: 'Judi dans son vaisseau sans casque'
        },
        {
          thumbnail: '/assets/images/Judi2.webp',  // Vignette
          fullSize: '/assets/images/Judi2.webp',   // Image en taille réelle
          alt: 'Judi dans son vaisseau'
        },
        {
          thumbnail: '/assets/images/ShipCrash.webp',  // Vignette
          fullSize: '/assets/images/ShipCrash.webp',   // Image en taille réelle
          alt: 'Un joueur devant un vaisseau écrasé'
        },
        {
          thumbnail: '/assets/images/Volrex1.webp',  // Vignette
          fullSize: '/assets/images/Volrex1.webp',   // Image en taille réelle
          alt: 'Deux joueurs assis dans un vaisseau'
        },
        {
          thumbnail: '/assets/images/StarlancerMax.webp',  // Vignette
          fullSize: '/assets/images/StarlancerMax.webp',   // Image en taille réelle
          alt: 'Un Starlancer Max dans le ciel'
        },
        {
          thumbnail: '/assets/images/DuoF7a.webp',  // Vignette
          fullSize: '/assets/images/DuoF7a.webp',   // Image en taille réelle
          alt: 'Deux F7A en stationnaire'
        },
        {
          thumbnail: '/assets/images/Payji_food.webp',  // Vignette
          fullSize: '/assets/images/Payji_food.webp',   // Image en taille réelle
          alt: 'Vendeur de nourriture Payji'
        },
        {
          thumbnail: '/assets/images/PyroStation.webp',  // Vignette
          fullSize: '/assets/images/PyroStation.webp',   // Image en taille réelle
          alt: 'Valkyrie devant une station Pyro'
        },
        {
          thumbnail: '/assets/images/DulcoMX.webp',  // Vignette
          fullSize: '/assets/images/DulcoMX.webp',   // Image en taille réelle
          alt: 'Joueur devant un Guardian MX'
        }
      ],
      isModalOpen: false,    // Contrôle l'état du modal
      selectedPhoto: {}      // Photo sélectionnée pour agrandissement
    };
  },
  methods: {
    // Ouvrir le modal avec la photo sélectionnée
    openModal(photo) {
      this.selectedPhoto = photo;
      this.isModalOpen = true;
    },
    // Fermer le modal
    closeModal() {
      this.isModalOpen = false;
      this.selectedPhoto = {};
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 20rem;
  background-color: rgba(255, 255, 255, 0.1);
  /* Couleur de fond semi-transparente */
  text-align: left;
  /* Aligne le texte à gauche */
  backdrop-filter: blur(10px);
  /* Applique un flou à l'arrière-plan */
  border-radius: 10px;
  /* Ajoute des coins arrondis */
}

.gallery {
  display: flex;
  flex-wrap: wrap;
}

/* Styles pour la galerie */
.gallery-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* Conserver 3 colonnes, mais chaque image sera plus grande */
  gap: 15px;
  /* Augmenter l'espacement entre les images */
  margin-bottom: 20px;
}

.gallery-item {
  cursor: pointer;
  transition: transform 0.3s ease;
  /* Animation de zoom */
}

.gallery-item:hover {
  transform: scale(1.1);
  /* Zoom au survol de l'image */
}

.gallery-image {
  width: 100%;
  /* Les vignettes s'adaptent à la taille de la colonne */
  height: 200px;
  /* Définit une hauteur constante pour les images */
  object-fit: cover;
  /* Assure que l'image couvre toute la zone sans déformer */
  border-radius: 8px;
}

/* Styles pour le modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Centrer l'image dans le modal */
.modal-content {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

.modal-content img {
  max-width: 80%;
  max-height: 80%;
  /* Limite la taille à 80% de la fenêtre */
  object-fit: contain;
  /* Maintient le ratio d'aspect de l'image */
  border-radius: 8px;
  margin: auto;
  /* Assure que l'image est centrée même si elle est plus petite que la fenêtre */
}

.basic-1 .image-container {
  margin-bottom: 4rem;
}


.basic-1 p {
  margin-bottom: 2rem;
}
</style>
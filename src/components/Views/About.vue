<template>
  <div id="skills" class="basic-1">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-xl-7">
          <div class="gallery-container">
            <!-- Galerie d'images -->
            <div class="gallery-grid">
              <!-- Boucle sur les images pour afficher les vignettes -->
              <div v-for="(photo, index) in photos" :key="index" class="gallery-item" @click="openModal(photo)">
                <img :src="photo.thumbnail" :alt="photo.alt" class="gallery-image" />
              </div>
            </div>

            <!-- Modal d'image agrandie -->
            <div v-if="isModalOpen" class="modal" @click="closeModal">
              <div class="modal-content">
                <img :src="selectedPhoto.fullSize" :alt="selectedPhoto.alt" />
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
            <a class="btn-solid-reg" href="#contact">Nous rejoindre</a>
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
          thumbnail: 'https://cdn.discordapp.com/attachments/1072724825564512437/1321986265461293097/Squadron_42_-_Star_Citizen_Screenshot_2024.12.27_-_00.41.00.37.png?ex=678258e7&is=67810767&hm=011266adb34a3636ac7b67e90dbaed24bd100296e7a362c41c34add86d408752&',  // Vignette
          fullSize: 'https://cdn.discordapp.com/attachments/1072724825564512437/1321986265461293097/Squadron_42_-_Star_Citizen_Screenshot_2024.12.27_-_00.41.00.37.png?ex=678258e7&is=67810767&hm=011266adb34a3636ac7b67e90dbaed24bd100296e7a362c41c34add86d408752&',   // Image en taille réelle
          alt: 'Deux joueurs assis dans un vaisseau'
        },
        {
          thumbnail: 'https://cdn.discordapp.com/attachments/1072724825564512437/1322896475541344317/ScreenShot-2024-12-29_12-26-53-693.jpg?ex=67825cd9&is=67810b59&hm=b5f8b0ba1a76107f66058e2ba7564ac469e4e023f4e6df1482f88b7dbf8f8b56&',  // Vignette
          fullSize: 'https://cdn.discordapp.com/attachments/1072724825564512437/1322896475541344317/ScreenShot-2024-12-29_12-26-53-693.jpg?ex=67825cd9&is=67810b59&hm=b5f8b0ba1a76107f66058e2ba7564ac469e4e023f4e6df1482f88b7dbf8f8b56&',   // Image en taille réelle
          alt: 'Judi dans son vaisseau'
        },
        {
          thumbnail: 'https://cdn.discordapp.com/attachments/1072724825564512437/1322896476044529725/ScreenShot-2024-12-29_12-54-03-570.jpg?ex=67825cda&is=67810b5a&hm=bd1d31c256df1e5eca1b471c3379b6fad3c22262e9ab25ad0808d56f07c7637a&',  // Vignette
          fullSize: 'https://cdn.discordapp.com/attachments/1072724825564512437/1322896476044529725/ScreenShot-2024-12-29_12-54-03-570.jpg?ex=67825cda&is=67810b5a&hm=bd1d31c256df1e5eca1b471c3379b6fad3c22262e9ab25ad0808d56f07c7637a&',   // Image en taille réelle
          alt: 'Judi dans son vaisseau sans casque '
        },
        {
          thumbnail: 'https://cdn.discordapp.com/attachments/1072724825564512437/1320739818162094140/Star_Citizen_2024.12.07-23.27.png?ex=67826d4e&is=67811bce&hm=33d781f1b584bcf5fdce8775745c1cecda52b6384dda493b4a7a5016f809e04b&',  // Vignette
          fullSize: 'https://cdn.discordapp.com/attachments/1072724825564512437/1320739818162094140/Star_Citizen_2024.12.07-23.27.png?ex=67826d4e&is=67811bce&hm=33d781f1b584bcf5fdce8775745c1cecda52b6384dda493b4a7a5016f809e04b&',   // Image en taille réelle
          alt: 'Carrack Red Alerte'
        },
        {
          thumbnail: 'https://cdn.discordapp.com/attachments/1072724825564512437/1320739821123145748/Star_Citizen_2024.12.22-21.11_15.png?ex=67826d4f&is=67811bcf&hm=4e91934bd7915d5ec65f76b9438d8eaaf0800f9bf53fa6f99535dae96c55cf20&',  // Vignette
          fullSize: 'https://cdn.discordapp.com/attachments/1072724825564512437/1320739821123145748/Star_Citizen_2024.12.22-21.11_15.png?ex=67826d4f&is=67811bcf&hm=4e91934bd7915d5ec65f76b9438d8eaaf0800f9bf53fa6f99535dae96c55cf20&',   // Image en taille réelle
          alt: 'Un vaisseau dans le jump point'
        },
        {
          thumbnail: 'https://cdn.discordapp.com/attachments/1072724825564512437/1320415846044008528/ScreenShot-2024-12-22_16-39-21-4A2.jpg?ex=6781e855&is=678096d5&hm=04025fc7f5bc60e4f0c669a600bf0fd2d674cc8bfd7385a12a1b85c8f2594817&',  // Vignette
          fullSize: 'https://cdn.discordapp.com/attachments/1072724825564512437/1320415846044008528/ScreenShot-2024-12-22_16-39-21-4A2.jpg?ex=6781e855&is=678096d5&hm=04025fc7f5bc60e4f0c669a600bf0fd2d674cc8bfd7385a12a1b85c8f2594817&',   // Image en taille réelle
          alt: 'Un joueur en combinaison lourde'
        }
        // Ajoute d'autres images ici si nécessaire
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
    }
  }
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
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
</style>
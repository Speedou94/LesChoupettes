<template>
  <div id="contact" class="form-1">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="text-container">
            <div class="section-title">Contactez-nous</div>
            <h2>Formulaire de contact</h2>
            <p>En tant qu'agence de création de site web professionnelle, nous sommes spécialisés dans la conception et
              le développement de sites web de qualité pour les entreprises. Nous travaillons en étroite collaboration
              avec nos clients pour comprendre leurs besoins et proposer des solutions sur mesure, allant de la
              conception graphique à la mise en ligne du site. Nous offrons des services de maintenance pour garantir
              que votre site reste à jour et fonctionne de manière optimale. N'hésitez pas à nous contacter pour obtenir
              un devis gratuit, adapté à vos besoins et à votre budget.</p>
          </div>
        </div>
        <div class="col-lg-6">

          <form>
            <div class="form-group">
              <input type="text" class="form-control-input" placeholder="Nom" required/>
            </div>
            <div class="form-group">
              <input type="text" class="form-control-input" placeholder="Prenom" required/>
            </div>
            <div class="form-group">
              <input type="email" class="form-control-input" placeholder="E-mail" required/>
            </div>
            <div class="form-group">
              <input type="text" class="form-control-input" placeholder="Votre message" required/>
            </div>
            <div class="form-group">
              <button type="submit" class="form-control-submit-button">Envoyer</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped>
#contact {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
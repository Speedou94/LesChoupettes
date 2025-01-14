<template>
  <div class="home-page">
    <video autoplay muted loop id="background-video">
      <source src="/assets/video/SCTrailer.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="content">
      <img src="/assets/images/LCSB.png" alt="LCS Logo" class="logo">
      <img src="/assets/images/LCSLogo.png" alt="LCS Logo" class="logo">
      <button class="btn btn-primary" @click="enterSite">Entrer sur le site</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    enterSite() {
      this.$router.push('/home');
    }
  }
};
</script>

<style scoped>
.home-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.content {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.content2 {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.logo {
  max-width: 300px;
  margin-bottom: 2rem;
}

.btn {
  padding: 1rem 2rem;
  font-size: 1.25rem;
}
</style>
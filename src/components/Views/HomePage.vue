<template>
  <div class="home-page">
    <video autoplay muted loop id="background-video">
      <source src="/path/to/your/video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="content">
      <img src="/path/to/your/logo.png" alt="Logo" class="logo">
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
  position: relative;
  height: 100vh;
  width: 100%;
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
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
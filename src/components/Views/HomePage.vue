<template>
  <div class="home-page">
    <div class="content">
      <img :src="logoUrl" alt="LCS Logo" class="logo">
      <img :src="logoUrl" alt="LCS Logo" class="logo">
      <button class="btn btn-primary rounded-pill" @click="enterSite">Entrer sur le site</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      logoUrl: `${process.env.BASE_URL}assets/images/LCSLogo.webp`
    };
  },
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

.logo {
  max-width: 300px;
  margin-bottom: 2rem;
}

.btn {
  padding: 1rem 2rem;
  font-size: 1.25rem;
}
</style>

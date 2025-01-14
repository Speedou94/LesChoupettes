<template>
  <div>
    <NavBar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/Utils/NavBar";
import Footer from "@/components/Utils/Footer";

export default {
  name: "MainLayout",
  components: {
    NavBar,
    Footer
  }
};
</script>

<style scoped></style>
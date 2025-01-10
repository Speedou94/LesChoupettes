<template>
  <NavBar />
  <Home />
  <About />
  <team />
  <projects />
  <contact />
  <Footer />
</template>

<script>
import NavBar from "@/components/Utils/NavBar";
import Footer from "@/components/Utils/Footer";
import Home from "@/components/Views/Home";
import About from "@/components/Views/About";
import Projects from "@/components/Views/Projects";
import Contact from "@/components/Views/Contact";
import Team from "@/components/Views/Team";


export default {
  name: "App.vue",
  components: {
    Team,
    Contact,
    Projects,
    About,
    Home,
    NavBar,
    Footer
  }
};

</script>

<style scoped>

</style>
<template>
  <NavBar />
  <Home />
  <About />
  <Gameplay />
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
import Gameplay from "@/components/Views/Gameplay";


export default {
  name: "App.vue",
  components: {
    Gameplay,
    Contact,
    Projects,
    About,
    Home,
    NavBar,
    Footer
  }
};

</script>

<style scoped></style>
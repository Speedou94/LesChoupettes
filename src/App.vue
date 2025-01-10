<template>
  <NavBar />
  <Home />
  <About />
  <Gameplay />
  <Manifest />
  <contact />
  <Footer />
</template>

<script>
import NavBar from "@/components/Utils/NavBar";
import Footer from "@/components/Utils/Footer";
import Home from "@/components/Views/Home";
import About from "@/components/Views/About";
import Manifest from "@/components/Views/Manifest";
import Contact from "@/components/Views/Contact";
import Gameplay from "@/components/Views/Gameplay";


export default {
  name: "App.vue",
  components: {
    Gameplay,
    Contact,
    Manifest,
    About,
    Home,
    NavBar,
    Footer
  }
};

</script>

<style scoped></style>
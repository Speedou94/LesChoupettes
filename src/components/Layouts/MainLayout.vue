<template>
  <div>
    <NavBar />
    <Home />
    <About />
    <Gameplay />
    <Manifest />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/Utils/NavBar";
import Footer from "@/components/Utils/Footer";
import Home from "@/components/Views/Home";
import About from "@/components/Views/About";
import Gameplay from "@/components/Views/Gameplay";
import Manifest from "@/components/Views/Manifest";
import Contact from "@/components/Views/Contact";

export default {
  name: "MainLayout",
  components: {
    NavBar,
    Home,
    About,
    Gameplay,
    Manifest,
    Contact,
    Footer,
  }
};
</script>

<style scoped></style>
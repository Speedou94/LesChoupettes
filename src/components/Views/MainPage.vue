<template>
    <div>
        <NavBar />
        <section id="home">
            <Home />
        </section>
        <section id="about">
            <About />
        </section>
        <section id="gameplay">
            <Gameplay />
        </section>
        <section id="manifest">
            <Manifest />
        </section>
        <section id="contact">
            <Contact />
        </section>
        <Footer />
    </div>
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
    name: "MainPage",
    components: {
        NavBar,
        Footer,
        Home,
        About,
        Manifest,
        Contact,
        Gameplay
    }
};
</script>

<style scoped>
section {
    padding: 2rem 0;
}
</style>
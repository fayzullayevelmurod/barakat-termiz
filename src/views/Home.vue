<template>
  <div>
    <HomeComponent />
    <Services />
    <Project />
    <About />
    <Team />
    <Fact />
  </div>
</template>

<script>
import HomeComponent from "@/components/HomeComponent";
import Services from "@/components/Services";
import Project from "@/components/Project";
import About from "@/components/About";
import Team from "@/components/Team";
import Fact from "@/components/Fact";

export default {
  name: 'Home',
  components: {
    HomeComponent,
    Services,
    Project,
    About,
    Team,
    Fact,
  }
}
</script>

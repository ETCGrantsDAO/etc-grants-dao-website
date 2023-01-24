
<template>
  <div>
    <div class="bg-background p-0 relative">
      <!--Nav Bar-->
      <NavBar />

      <!-- This is the large section at the top left -->
      <HeroSection />

      <section id="content">
        <div class="z-20 py-bodyY bodySection flex md:px-8 xl:px-28 relative">

          <!-- Left hand side navigation for desktop site -->
          <LeftSideBar />

          <!-- Right hand side, main view -->
          <div
            class="w-fullWidth text-left md:w-bodyRightSecMobile relative lg:w-bodyRightSecDesktop pl-8 pr-8 border-0 bodyRightSec md:border-l-2 md:pl-12 md:pr-0">

            <!-- Primary content for the website, split into multiple components -->
            <Overview />
            <HowToApply />
            <Process />
            <Resources />
ß
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher";
import HeroSection from '@/components/Hero'
import NavBar from "@/components/Navbar/NavBar"
import LeftSideBar from "@/components/Navbar/LeftSideBar"

import Overview from "@/components/Overview"
import HowToApply from "@/components/HowToApply"
import Process from "@/components/Process"
import Resources from "@/components/Resources"
import Footer from "@/components/Footer"

export default {
  name: "HomeView",
  components: {
    LocaleSwitcher,
    HeroSection,
    NavBar,
    LeftSideBar,

    Overview,
    HowToApply,
    Process,
    Resources,
    Footer
  },

};
</script>

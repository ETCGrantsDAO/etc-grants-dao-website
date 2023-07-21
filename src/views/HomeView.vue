
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
            <GenericSection v-for="(section, sectionKey) in sections" :key="sectionKey" :files="section.files" />

            <!-- Apply Now form at bottom of page -->
            <a :href="$t('etc-grants-dao.apply-now-link')"
              class="text-xl font-bold md:w-1/5 mt-6 md:mx-0 px-5 py-3 rounded text-headingsColor bg-gradient-to-r from-[#d92626] to-[#133706] font-notoSans w-heroButtonMobileWidth  heroButton flex hover:scale-110 transition duration-300 ease-in-out">
              <p>{{ $t("etc-grants-dao.apply-now-text") }}</p>
              <img src="@/images/applyButtonIcon.png"
                class="max-w-heroBtnIcon max-h-heroBtnIcon ml-heroBtnIcon mt-heroBtnIconA" />
            </a>

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
import Footer from "@/components/Footer"

import GenericSection from "@/components/GenericSection"
import sections from "@/sections.json"

export default {
  name: "HomeView",
  components: {
    LocaleSwitcher,
    HeroSection,
    NavBar,
    LeftSideBar,
    GenericSection,
    Footer
  },
  data() {
    return {
      sections: sections.data,
    }
  }
};
</script>

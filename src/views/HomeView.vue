
<template>
  <div>
    <div class="bg-background p-0 relative">
      <!--Nav Bar-->
      <NavBar />

      <!-- This is the large section at the top left -->
      <HeroSection />

      <section id="content">
        <div class="z-20 py-bodyY bodySection flex md:px-8 xl:px-28 relative" id="about">
          <!-- ^ id in wrong place-->

          <!-- Left hand side navigation for desktop site -->
          <!-- NavBar component defined here-->
          <LeftSideBar />

          <!-- Right hand side, main view -->
          <div
            class="w-fullWidth text-left md:w-bodyRightSecMobile relative lg:w-bodyRightSecDesktop pl-8 pr-8 border-0 bodyRightSec md:border-l-2 md:pl-12 md:pr-0">
            <!-- About ETC Grants DAO -->
            <!--About Component-->
            <About />
            <!-- About ETC Grants DAO / Funding -->
            <About_Funding />
            <!-- Grant categories -->
            <GrantCategories />
            <!-- Requirements -->
            <Requirements />
            <!-- Grants process -->
            <Process />
            <!-- ETC Grants Suggestions -->
            <Suggestion />

            <!-- Apply Now form at bottom of page -->
            <a href=""
              class="mx-auto md:mx-0 px-5 py-3 rounded text-headingsColor bg-gradient-to-r from-[#133706] to-[#53EB45] font-notoSans w-rightSecButton text-xl leading-twentyFour hidden lg:flex mt-8 hover:scale-110 transition duration-300 ease-in-out">
              <p>{{ $t("etc-grants-dao.apply-now") }}</p>
              <img src="../images/applyButtonIcon.png"
                class="max-w-heroBtnIcon max-h-heroBtnIcon ml-heroBtnIcon mt-heroBtnIcon2" />
            </a>
            <a href="https://airtable.com/shr3VMqyLd1HX5ws4"
              class="text-base md:text-heroTextMobile mt-8 md:mx-0 px-5 py-3 rounded text-headingsColor bg-gradient-to-r from-[#133706] to-[#53EB45] font-notoSans w-heroButtonMobileWidth md:w-heroButtonDesktopWidth heroButton flex lg:hidden">
              <p>{{ $t("etc-grants-dao.apply-now") }}</p>
              <img src="../images/applyButtonIcon.png"
                class="max-w-heroBtnIcon max-h-heroBtnIcon ml-heroBtnIcon mt-heroBtnIcon1" />
            </a>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher.vue";
import HeroSection from '@/components/Hero'
import NavBar from "@/components/Comman/Navbar/NavBar"
import LeftSideBar from "../components/Comman/Navbar/LeftSideBar"
import About from "@/components/About"
import About_Funding from "@/components/Funding"
import GrantCategories from "@/components/GrantsCategories"
import Requirements from "@/components/Requirements"
import Process from "@/components/Process"
import Suggestion from "@/components/Suggestions"
import Footer from "@/components/Comman/Footer"

export default {
  name: "HomeView",
  components: {
    LocaleSwitcher,
    HeroSection,
    NavBar,
    LeftSideBar,
    About,
    About_Funding,
    GrantCategories,
    Requirements,
    Process,
    Suggestion,
    Footer
  },
  // mounted () {
  //   this.$refs.blOverview('inview-enter',
  //     alert(this.$refs.blOverview)
  //   )
  // },
};
</script>

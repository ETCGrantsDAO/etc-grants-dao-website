<template>
  
  <nav
  class="navigation-bar z-40 sticky pl-8 pr-6 xl:px-28 py-navMobile md:py-8 text-headingsColor top-0 bg-background w-fullWidth border-b-2 lg:border-b-0 border-footerBorder"
  ref="navBar">
    <div class="flex items-center justify-between header-wrapper">

      <!-- EGD logo -->
      <a href="#" class="mobile-logo-width">
        <div class="w-logoMobileWidth cursor-pointer md:w-logoDesktopWidth h-logoDesktopheight flex float-left">
            <img src="@/images/etc.svg"/>
          </div>
      </a>

      <!-- Shortcuts in the header-->
      <div class="items-end float-right lg:space-x-4 xl:space-x-8 flex text-lg">

        <a href="#overview"
          class="hidden lg:block font-roboto font-semibold text-textColor text-lg my-auto navItems hover:text-headingsColor transition duration-700">
          {{ $t("overview.nav-heading") }}
        </a>
        <a href="#howToApply"
          class="hidden lg:block font-roboto font-semibold text-textColor text-lg my-auto navItems hover:text-headingsColor transition duration-700">
          {{ $t("howToApply.nav-heading") }}
        </a>
        <a :href="$t('etc-grants-dao.browse-link')"
          class="hidden lg:block font-roboto font-semibold text-textColor text-lg my-auto navItems hover:text-headingsColor transition duration-700">
          {{ $t("etc-grants-dao.browse-text") }}
        </a>
        <a href="#grantsProcess"
          class="hidden lg:block font-roboto font-semibold text-textColor text-lg my-auto navItems hover:text-headingsColor transition duration-700">
          {{ $t("grantsProcess.nav-heading") }}
        </a>
        <a href="#resources"
          class="hidden lg:block font-roboto font-semibold text-textColor text-lg my-auto navItems hover:text-headingsColor transition duration-700">
          {{ $t("resources.nav-heading") }}
        </a>
        <a :href="$t('etc-grants-dao.apply-now-link')"
          class="relative hidden lg:block font-notoSans font-semibold px-5 py-2 rounded text-headingsColor border-2 text-lg topApplyNow bg-gradient-to-r from-[#133706] to-[#53EB45]">
          {{ $t("etc-grants-dao.apply-now-text") }} 
        </a>

        <!-- English/Chinese toggle-->
        <div class="my-auto text-black">
          <LocaleSwitcher />
        </div>

        <!-- Mobile-only hamburger view -->
        <img src="@/images/hamBurger.svg" v-on:click="openNav()" class="my-auto lg:hidden ml-2" id="menuIcon"
          ref="navOpen" />
      </div>
    </div>
  </nav>

  <div
  class="z-50 flex flex-col hidden lg:hidden pl-8 pr-6 pb-bodyY pt-3 max-h-screen bg-background w-screen top-6 fixed overflow-y-scroll"
  ref="navigation">
    <div class="">
      <img src="@/images/Cross.svg" v-on:click="closeNav()" class="ml-auto" id="menuIcon" ref="navClose" />
    </div>

    <!-- Mobile navigation -->
    <a :href="$t('etc-grants-dao.apply-now-link')"
      class="py-1 mt-11 text-black text-center bg-gradient-to-r from-[#133706] to-[#53EB45] font-notoSans text-base font-bold rounded">
      <span class="text-headingsColor applyNowBtn relative">
        {{ $t("etc-grants-dao.apply-now-text") }}
      </span>
    </a>
    <a :href="$t('etc-grants-dao.browse-link')"
      class="py-1 mt-11 text-black text-center bg-gradient-to-r from-[#09371B] to-[#317E2] font-notoSans text-base font-bold rounded">
      <span class="text-headingsColor applyNowBtn relative">
        {{ $t("etc-grants-dao.browse-text") }}
      </span>
    </a>


    <div v-for="(section, sectionKey) in sections" :key="sectionKey" :class="{'pt-6' : sectionKey > 0}">
      <a
        v-on:click="closeNav()"
        class="pt-6 font-notoSans text-headingsColor text-2xl font-bold leading-rightHeadingsDt"
        :href="section.target"
      >
        {{ $t(`sections.${section.key}`) }}
      </a>
      
      <div v-if="section.subsections">
        <div v-for="(subsection, subsectionKey) in section.subsections" :key="subsectionKey">
          <a
            v-on:click="closeNav()"
            :href="subsection.target"
          >
            <p class="font-notoSans text-textColor text-base font-normal pb-4">
              {{ $t(`subsection.${subsection.key}`) }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import LocaleSwitcher from "@/components/LocaleSwitcher";
  import sections from "@/sections.json"

  export default {
    name: 'NavBar',
    components: {
      LocaleSwitcher
    },
    data(){
      return {
        sections: sections.data
      }
    },
    methods: {
      openNav() {
        this.$refs.navigation.classList.remove("hidden");
      },
      closeNav() {
        this.$refs.navigation.classList.add("hidden");
      }
    }
  }
</script>
<template>
  
  <nav
  class="z-40 sticky pl-8 pr-6 xl:px-28 py-navMobile md:py-8 text-headingsColor top-0 bg-background w-fullWidth border-b-2 lg:border-b-0 border-footerBorder"
  ref="navBar">
    <div class="flex items-center justify-between">
      <div class="w-logoMobileWidth cursor-pointer md:w-logoDesktopWidth h-logoDesktopheight flex float-left">
        <a href="#">
          <p class="text-sm w-full my-auto pl-3 text-headingsColor lg:text-2xl font-semibold font-notoSans">
            {{ $t("etc-grants-dao.title") }}
          </p>
        </a>
      </div>

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
        <a href="#grantsProcess"
          class="hidden lg:block font-roboto font-semibold text-textColor text-lg my-auto navItems hover:text-headingsColor transition duration-700">
          {{ $t("grantsProcess.nav-heading") }}
        </a>
        <a href="#resources"
          class="hidden lg:block font-roboto font-semibold text-textColor text-lg my-auto navItems hover:text-headingsColor transition duration-700">
          {{ $t("resources.nav-heading") }}
        </a>
        <a :href="$t('etc-grants-dao.apply-now-link')"
          class="relative hidden lg:block font-notoSans font-semibold px-5 py-2 rounded text-headingsColor border-2 text-lg topApplyNow">
          {{ $t("etc-grants-dao.apply-now-text") }} 
        </a>

        <!-- English/Chinese toggle-->
        <div class="my-auto text-black">
          <LocaleSwitcher />
        </div>

        <!-- This is not visible ? -->
        <img src="@/images/search.svg" class="my-auto lg:hidden ml-6" ref="navSearch" />

        <!-- Mobile-only hamburger view -->
        <img src="@/images/hamBurger.svg" v-on:click="openNav()" class="my-auto lg:hidden ml-6" id="menuIcon"
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
    <a href="https://airtable.com/shr3VMqyLd1HX5ws4"
      class="py-1 mt-11 text-black text-center bg-gradient-to-r from-[#133706] to-[#53EB45] font-notoSans text-base font-bold rounded">
      <span class="text-headingsColor applyNowBtn relative">
        {{ $t("etc-grants-dao.apply-now-text") }}
      </span>
    </a>

    <!-- Mobile navigation -->

    <!-- Overview mobile nav -->
    <a v-on:click="closeNav()" href="#overview"
      class="pt-6 font-notoSans text-headingsColor text-2xl font-bold leading-rightHeadingsDt">
      {{ $t("overview.nav-heading") }}
    </a>
    <a v-on:click="closeNav()" href="#overview.etc-grants-dao">
      <p class="font-notoSans text-textColor text-base font-normal pb-4">
        {{ $t("overview.etc-grants-dao.nav-heading") }}
      </p>
    </a>
    <a v-on:click="closeNav()" href="#overview.etc-grants-program">
      <p class="font-notoSans text-textColor text-base font-normal pb-4">
        {{ $t("overview.etc-grants-program.nav-heading") }}
      </p>
    </a>

    <!-- How To Apply mobile nav -->
    <a v-on:click="closeNav()" href="#howToApply"
      class="pt-6 font-notoSans text-headingsColor text-2xl font-bold leading-rightHeadingsDt">
      {{ $t("howToApply.nav-heading") }}
    </a>
    <a v-on:click="closeNav()" href="#howToApply.round1">
      <p class="font-notoSans text-textColor text-base font-normal pb-4">
        {{ $t("howToApply.round1.nav-heading") }}
      </p>
    </a>
    <a v-on:click="closeNav()" href="#howToApply.categories">
      <p class="font-notoSans text-textColor text-base font-normal pb-4">
        {{ $t("howToApply.categories.nav-heading") }}
      </p>
    </a>
    <a v-on:click="closeNav()" href="#howToApply.suggestions">
      <p class="font-notoSans text-textColor text-base font-normal pb-4">
        {{ $t("howToApply.suggestions.nav-heading") }}
      </p>
    </a>
    
    <!-- Grants process mobile nav -->
    <a v-on:click="closeNav()" href="#grantsProcess"
      class="pt-6 font-notoSans text-headingsColor text-2xl font-bold leading-rightHeadingsDt">
      {{ $t("grantsProcess.nav-heading") }}
    </a>
    <a v-on:click="closeNav()" href="#grantsProcess.phases.step1">
      <p class="font-notoSans text-textColor text-base font-normal pb-4">
        {{ $t("grantsProcess.phases.step1.nav-heading") }}
      </p>
    </a>
    <a v-on:click="closeNav()" href="#grantsProcess.phases.step2">
      <p class="font-notoSans text-textColor text-base font-normal pb-4">
        {{ $t("grantsProcess.phases.step2.nav-heading") }}
      </p>
    </a>
    <a v-on:click="closeNav()" href="#grantsProcess.phases.step3">
      <p class="font-notoSans text-textColor text-base font-normal pb-4">
        {{ $t("grantsProcess.phases.step3.nav-heading") }}
      </p>
    </a>
    <a v-on:click="closeNav()" href="#grantsProcess.phases.step4">
      <p class="font-notoSans text-textColor text-base font-normal pb-4">
        {{ $t("grantsProcess.phases.step4.nav-heading") }}
      </p>
    </a>
    <a v-on:click="closeNav()" href="#grantsProcess.phases.step5">
      <p class="font-notoSans text-textColor text-base font-normal pb-4">
        {{ $t("grantsProcess.phases.step5.nav-heading") }}
      </p>
    </a>
    <a v-on:click="closeNav()" href="#grantsProcess.phases.step6">
      <p class="font-notoSans text-textColor text-base font-normal pb-4">
        {{ $t("grantsProcess.phases.step6.nav-heading") }}
      </p>
    </a>
    <a v-on:click="closeNav()" href="#grantsProcess.phases.step7">
      <p class="font-notoSans text-textColor text-base font-normal pb-4">
        {{ $t("grantsProcess.phases.step7.nav-heading") }}
      </p>
    </a>

    <!--Resources mobile nav -->
    <a v-on:click="closeNav()" href="#resources"
      class="pt-6 font-notoSans text-headingsColor text-2xl font-bold leading-rightHeadingsDt">
      {{ $t("resources.nav-heading") }}
    </a>
    <a v-on:click="closeNav()" href="#resources.etc-community">
      <p class="font-notoSans text-textColor text-base font-normal pb-4">
        {{ $t("resources.etc-community.navheading") }}
      </p>
    </a>
    <a v-on:click="closeNav()" href="#resources.etc-grants-dao">
      <p class="font-notoSans text-textColor text-base font-normal pb-4">
        {{ $t("resources.etc-grants-dao.navheading") }}
      </p>
    </a>
    <a v-on:click="closeNav()" href="#resources.faqs">
      <p class="font-notoSans text-textColor text-base font-normal pb-4">
        {{ $t("resources.faqs.navheading") }}
      </p>
    </a>

  </div>

</template>

<script>
  import LocaleSwitcher from "@/components/LocaleSwitcher";

  export default {
    name: 'NavBar',
    components: {
      LocaleSwitcher
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
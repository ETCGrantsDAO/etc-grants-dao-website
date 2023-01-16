<template>
  
  <nav
  class="z-40 sticky pl-8 pr-6 xl:px-28 py-navMobile md:py-8 text-headingsColor top-0 bg-background w-fullWidth border-b-2 lg:border-b-0 border-footerBorder"
  ref="navBar">
  <div class="flex items-center justify-between">
    <div class="w-logoMobileWidth cursor-pointer md:w-logoDesktopWidth h-logoDesktopheight flex float-left">
      <p class="text-sm w-full my-auto pl-3 text-headingsColor lg:text-2xl font-semibold font-notoSans">
        {{ $t("etc-grants-dao.title") }}
      </p>
    </div>

    <!-- Shortcuts in the header-->
    <div class="items-end float-right lg:space-x-4 xl:space-x-8 flex text-lg">
      <a href="#overview"
        class="hidden lg:block font-roboto font-semibold text-textColor text-lg my-auto navItems hover:text-headingsColor transition duration-700">{{
          $t("overview.nav-heading")
        }}</a>
      <a href="#requirements"
        class="hidden lg:block font-roboto font-semibold text-textColor text-lg my-auto navItems hover:text-headingsColor transition duration-700">{{
          $t("requirements.nav-heading")
        }}</a>
      <a href="#grantsProcess"
        class="hidden lg:block font-roboto font-semibold text-textColor text-lg my-auto navItems hover:text-headingsColor transition duration-700">{{
          $t("grantsProcess.nav-heading")
        }}</a>
      <a href="#suggestions"
        class="hidden lg:block font-roboto font-semibold text-textColor text-lg my-auto navItems hover:text-headingsColor transition duration-700">{{
          $t("suggestions.nav-heading")
        }}</a>

      <a href="https://airtable.com/shr3VMqyLd1HX5ws4?prefill_Form%20Language=English"
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

<!-- As per Scott, this is the navigation used for the mobile version of the website -->

<!-- About mobile nav -->
<a v-on:click="closeNav()" href="#overview"
  class="pt-6 font-notoSans text-headingsColor text-2xl font-bold leading-rightHeadingsDt">
  {{ $t("overview.nav-heading") }}
</a>
<a v-on:click="closeNav()" href="#overview.etc-grants-dao">
<p class="font-notoSans text-textColor text-base font-normal pb-4">
  {{ $t("overview.etc-grants-dao.nav-heading") }}</p>
</a>
<a v-on:click="closeNav()" href="#overview.etc-grants-program">
<p class="font-notoSans text-textColor text-base font-normal pb-4">
  {{ $t("overview.etc-grants-program.nav-heading") }}
</p>
</a>

<a v-on:click="closeNav()" href="#overview.round1">
  <p class="font-notoSans text-textColor text-base font-normal pb-4">
    {{ $t("overview.round1.nav-heading") }}
  </p>
  </a>



<!-- Requirements mobile nav -->
<a v-on:click="closeNav()" href="#requirements"
  class="pt-6 font-notoSans text-headingsColor text-2xl font-bold leading-rightHeadingsDt">
  {{ $t("requirements.nav-heading") }}
</a>
<a v-on:click="closeNav()" href="#requirements.englishOrChinese">
<p class="font-notoSans text-textColor text-base font-normal pb-4">
  {{ $t("requirements.englishOrChinese.nav-heading") }}
</p>
</a>

<a v-on:click="closeNav()" href="#requirements.noRetroactiveFunding">
<p class="font-notoSans text-textColor text-base font-normal pb-4">
  {{ $t("requirements.noRetroactiveFunding.nav-heading") }}
</p>
</a>

<a v-on:click="closeNav()" href="#requirements.openSource">
<p class="font-notoSans text-textColor text-base font-normal pb-4">
  {{ $t("requirements.openSource.nav-heading") }}
</p>
</a>

<a v-on:click="closeNav()" href="#requirements.kycAml">
<p class="font-notoSans text-textColor text-base font-normal pb-4">
  {{ $t("requirements.kycAml.nav-heading") }}
</p>
</a>

<a v-on:click="closeNav()" href="#requirements.publiclyVisible">
<p class="font-notoSans text-textColor text-base font-normal pb-4">
  {{ $t("requirements.publiclyVisible.nav-heading") }}
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
<!-- Suggestions mobile nav -->
<a v-on:click="closeNav()" href="#suggestion"
  class="pt-6 font-notoSans text-headingsColor text-2xl font-bold leading-rightHeadingsDt">
  {{ $t("suggestions.nav-heading") }}
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
  },
}
}
</script>
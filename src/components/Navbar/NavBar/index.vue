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
        <a href="#about"
          class="hidden lg:block font-roboto font-semibold text-textColor text-lg my-auto navItems hover:text-headingsColor transition duration-700">{{
            $t("about.nav-heading")
          }}</a>
        <a href="#categories"
          class="hidden lg:block font-roboto font-semibold text-textColor text-lg my-auto navItems hover:text-headingsColor transition duration-700">{{
            $t("categories.nav-heading")
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

        <a href="https://airtable.com/shr3VMqyLd1HX5ws4"
          class="relative hidden lg:block font-notoSans font-semibold px-5 py-2 rounded text-headingsColor border-2 text-lg topApplyNow">
          {{ $t("etc-grants-dao.apply-now") }}</a>

        <!-- English/Chinese toggle-->
        <div class="my-auto text-black">
          <LocaleSwitcher />
        </div>

        <!-- Search control.  Does this work? -->
        <img src="@/images/search.svg" class="my-auto lg:hidden ml-6" ref="navSearch" />

        <!-- Mobile-only hamburger view -->
        <img src="@/images/hamBurger.svg" v-on:click="openNav()" class="my-auto lg:hidden ml-6" id="menuIcon"
          ref="navOpen" />
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>
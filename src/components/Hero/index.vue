<template>
    <section id="hero">
        <div
          class="bg-[url('../images/heroBgMobile.svg')] grid-cols-1 md:mt-14 heroSection grid md:grid-cols-2 bg-no-repeat bg-contain md:bg-cover min-h-heroHeight sm:bg-[url('../images/heroBg.svg')]">
          <div
            class="my-auto mx-auto md:mx-0 md:my-0 text-center md:text-left container md:pl-8 xl:pl-28 md:pr-0 pt-11 content-end">
            <p
              class="pl-heroHeadingMobile pr-heroHeadingMobile md:pl-0 md:pr-0 text-fourty leading-heroHeadingMobile text-headingsColor md:text-xxl md:leading-heroHeadingDesktop font-bold font-notoSans">
              {{ $t("etc-grants-dao.title") }}
            </p>
            <p
              class="text-heroTextMobile md:text-heroTextDesktop text-headingsColor leading-heroText pt-6 pb-6 font-dmSans pl-8 pr-8 md:pl-0 md:pr-0">
              {{ $t("etc-grants-dao.description") }}
            </p>
            <a href="https://airtable.com/shr3VMqyLd1HX5ws4"
              class="text-xl font-bold md:text-heroTextMobile mx-auto md:mx-0 px-5 py-3 rounded text-headingsColor bg-gradient-to-r from-[#133706] to-[#53EB45] font-notoSans w-heroButtonMobileWidth md:w-heroButtonDesktopWidth heroButton flex hover:scale-110 transition duration-300 ease-in-out">
              <p>{{ $t("etc-grants-dao.apply-now") }}</p>
              <img src="../../images/applyButtonIcon.png"
                class="max-w-heroBtnIcon max-h-heroBtnIcon ml-heroBtnIcon mt-heroBtnIconA" />
            </a>
          </div>
          <div class="hidden md:block"></div>
        </div>
      </section>
</template>

<script>
export default {
    name: 'HeroSection'
}
</script>
<template>
  <footer class="px-8 bg-gradient-to-t from-[#0A1C3F] to-[#020518] border-2 border-footerBorder xl:px-32 py-12">
    <div class="flex flex-col lg:flex-row flex-initial">
      <div class="w-full lg:w-1/3">
        <div class="mb-10 lg:mb-0 grants-dao-title">
          <h2 class="text-2xl font-notoSans text-headingsColor leading-8">
            {{ $t('footer.etc_grand_dao') }}
          </h2>
        </div>
        <div class="grants-dao">
          <div class="w-56">
            <a href="/">
              <img class="mt-6 max-w-full h-auto" src="@/images/edg-logo-white-with-text.png" alt="" /></a>
          </div>
          <div class="flex mt-3 lg:mt-8 etc-grants-dao-media-wrapper">
            <a href="https://twitter.com/etcgrantsdao" target="_blank"><img src="@/images/twitter.svg" alt="twitter"
                class="ml-1 mr-5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out" /></a>
            <a href="https://t.me/etcgrantsdaoofficial" target="_blank"><img src="@/images/messenger.svg" alt="telegram"
                class="cursor-pointer hover:scale-110 transition duration-300 ease-in-out" /></a>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-2/3">
        <div class="mt-10 lg:mt-0">
          <h2 class="text-2xl font-notoSans text-headingsColor leading-8">
            {{ $t("footer.sponsors") }}
          </h2>
        </div>
        <div class="row mt-10 lg:mt-9">
          <div class="grid grid-cols-1 lg:grid-cols-3">
            <div class="sponsor">
              <a href="https://etccooperative.org/" target="_blank">
                <img class="mobile-size-img" src="@/images/etc-cooperative-logo.png" alt="" />
              </a>
              <div class="flex mt-5 lg:mt-8">
                <a href="https://twitter.com/ETCCooperative" target="_blank"><img src="@/images/twitter.svg"
                    alt="twitter"
                    class="ml-1 mr-5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out" /></a><a
                  href="https://discord.com/invite/5wDyd6u6pU" target="_blank"><img src="@/images/discord.svg"
                    alt="discord" class="cursor-pointer hover:scale-110 transition duration-300 ease-in-out" /></a>
              </div>
            </div>
            <div>
              <div class="mt-10 lg:mt-3 sponsor">
                <a href="https://www.bitmain.com/" target="_blank">
                  <img class="mobile-size-img" src="@/images/bitmain.png" alt="" /></a>
                <div class="flex mt-5 lg:mt-8">
                  <a href="https://twitter.com/BITMAINtech" target="_blank"><img src="@/images/twitter.svg" alt="t"
                      class="ml-1 mr-5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out" /></a><a
                    href="https://t.me/bitmain" target="_blank"><img src="@/images/messenger.svg" alt="telegram-logo"
                      class="cursor-pointer hover:scale-110 transition duration-300 ease-in-out" /></a>
                </div>
              </div>
            </div>
            <div>
              <div class="mt-10 lg:mt-0 sponsor">
                <a href="https://www.antpool.com/home" target="_blank"><img src="@/images/antpool.png" alt="" /></a>
                <div class="flex mt-5 lg:mt-8">
                  <a href="https://twitter.com/AntPoolofficial" target="_blank"><img src="@/images/twitter.svg" alt="t"
                      class="ml-1 mr-5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out" /></a><a
                    href="https://t.me/AntPoolOffical" target="_blank"><img src="@/images/messenger.svg"
                      alt="telegram-logo"
                      class="cursor-pointer hover:scale-110 transition duration-300 ease-in-out" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<template>
  <footer class="px-8 bg-gradient-to-t from-[#0A1C3F] to-[#020518] border-2 border-footerBorder xl:px-32 py-12">
    <!-- <div class="grid lg:grid-cols-5 xl:grid-cols-5 sm:grid-cols-1">
          <div class="pb-8 lg:pb-0">
            <div class="flex">
              <p class="text-2xl font-notoSans font-black text-headingsColor leading-8">
                {{ $t("footer.heading-etc") }} &nbsp;
              </p>
              <p class="text-2xl font-notoSans font-medium text-headingsColor leading-7">
                {{ $t("footer.heading-ooperative") }}
              </p>
            </div>
            <div class="flex pt-7">
              <img src="@/images/twitter.svg" alt="t"
                class="mr-8 cursor-pointer hover:scale-110 transition duration-300 ease-in-out" />
              <img src="@/images/messenger.svg" alt="instagram"
                class="cursor-pointer hover:scale-110 transition duration-300 ease-in-out" />
            </div>
          </div>
          <div class="pb-8 lg:pb-0">
            <p class="text-2xl font-notoSans font-black text-headingsColor leading-8">
              {{ $t("footer.footerHeading1") }}
            </p>
            <p class="text-base font-roboto font-normal text-headingsColor pt-8 leading-7">
              {{ $t("footer.footerHeading1Text1") }}
            </p>
            <p class="text-base font-roboto font-normal text-headingsColor pt-4 leading-7">
              {{ $t("footer.footerHeading1Text2") }}
            </p>
            <p class="text-base font-roboto font-normal text-headingsColor pt-4 leading-7">
              {{ $t("footer.footerHeading1Text3") }}
            </p>
            <p class="text-base font-roboto font-normal text-headingsColor pt-4 leading-7">
              {{ $t("footer.footerHeading1Text4") }}
            </p>
          </div>
          <div class="pb-8 lg:pb-0">
            <p class="text-2xl font-notoSans font-black text-headingsColor leading-8">
              {{ $t("footer.footerHeading2") }}
            </p>
            <p class="text-base font-roboto font-normal text-headingsColor pt-8 leading-7">
              {{ $t("footer.footerHeading2Text1") }}
            </p>
            <p class="text-base font-roboto font-normal text-headingsColor pt-4 leading-7">
              {{ $t("footer.footerHeading2Text2") }}
            </p>
          </div>
          <div class="pb-8 lg:pb-0">
            <p class="text-2xl font-notoSans font-black text-headingsColor leading-8">
              {{ $t("footer.footerHeading3") }}
            </p>
            <p class="text-base font-roboto font-normal text-headingsColor pt-8 leading-7">
              {{ $t("footer.footerHeading3Text1") }}
            </p>
            <p class="text-base font-roboto font-normal text-headingsColor pt-4 leading-7">
              {{ $t("footer.footerHeading3Text2") }}
            </p>
            <p class="text-base font-roboto font-normal text-headingsColor pt-4 leading-7">
              {{ $t("footer.footerHeading3Text3") }}
            </p>
            <p class="text-base font-roboto font-normal text-headingsColor pt-4 leading-7">
              {{ $t("footer.footerHeading3Text4") }}
            </p>
            <p class="text-base font-roboto font-normal text-headingsColor pt-4 leading-7">
              {{ $t("footer.footerHeading3Text5") }}
            </p>
          </div>
          <div class="pb-8 lg:pb-0">
            <p class="text-2xl font-notoSans font-black text-headingsColor leading-8">
              {{ $t("footer.footerHeading4") }}
            </p>
            <div class="pt-9">
              <img src="@/images/bwRivlet.svg" alt="Buitl with Rivet" />
            </div>
            <div class="pt-9">
              <img src="@/images/netlify.svg" alt="Netlify" />
            </div>
          </div>
        </div> -->

    <div class="flex flex-col lg:flex-row">
      <div class="w-full lg:w-1/3">
        <div>
          <h2 class="text-2xl font-notoSans text-headingsColor leading-8">
            {{ $t("footer.heading-etc") }} &nbsp;
          </h2>
        </div>
        <div class="mt-5 lg:mt-9 etclogo">
          <a href="https://etccooperative.org/" target="_blank">
            <img src="@/images/etclogo.png" alt="">
          </a>
        </div>
        <div class="flex mt-5 lg:mt-8">
          <a href="https://twitter.com/ETCCooperative" target="_blank">
            <img src="@/images/twitter.svg" alt="twitter"
              class="ml-1 mr-5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out" />
          </a>
          <a href="https://discord.com/invite/5wDyd6u6pU" target="_blank">
            <img src="@/images/discrod.svg" alt="instagram"
              class="cursor-pointer hover:scale-110 transition duration-300 ease-in-out" />
          </a>
        </div>
      </div>
      <div class="w-full lg:w-2/3">
        <div class="mt-10 lg:mt-0">
          <h2 class="text-2xl font-notoSans text-headingsColor leading-8">
            {{ $t("footer.footerPartners") }} &nbsp;
          </h2>
        </div>
        <div class="row mt-5 lg:mt-9">
          <div class="grid grid-cols-1 lg:grid-cols-3">
            <div class="lg:mt-4">
              <a href="https://www.bitmain.com/" target="_blank">
                <img src="@/images/bitmain.png" alt="">
              </a>
              <div class="flex mt-5 lg:mt-8">
                <a href="https://twitter.com/BITMAINtech" target="_blank">
                  <img src="@/images/twitter.svg" alt="t"
                    class="ml-1 mr-5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out" />
                </a>
                <a href="https://t.me/bitmain" target="_blank">
                  <img src="@/images/messenger.svg" alt="telegram-logo"
                    class="cursor-pointer hover:scale-110 transition duration-300 ease-in-out" />
                </a>
              </div>
            </div>
            <div>
              <div class="mt-10 lg:mt-1">
                <a href="https://www.antpool.com/home" target="_blank">
                <img src="@/images/ant.png" alt="">
              </a>
                <div class="flex mt-5 lg:mt-8">
                  <a href="https://twitter.com/AntPoolofficial" target="_blank">
                    <img src="@/images/twitter.svg" alt="t"
                      class="ml-1 mr-5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out" />
                  </a>
                  <a href="https://t.me/AntPoolOffical" target="_blank">
                    <img src="@/images/messenger.svg" alt="telegram-logo"
                      class="cursor-pointer hover:scale-110 transition duration-300 ease-in-out" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div class="mt-10 lg:mt-0">
                <a href="https://etccooperative.org/" target="_blank">
                <img src="@/images/etheriumclassic.png" alt="">
              </a>
                <div class="flex mt-5 lg:mt-8">
                  <a href="https://twitter.com/eth_classic" target="_blank">
                    <img src="@/images/twitter.svg" alt="t"
                      class="ml-1 mr-5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out" />
                  </a>
                  <a href="https://discord.com/invite/bMGuZsA" target="_blank">
                    <img src="@/images/discrod.svg" alt="instagram"
                      class="cursor-pointer hover:scale-110 transition duration-300 ease-in-out" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import MainHeading from '@/components/Common/MainHeading';
import SubHeading from '@/components/Common/SubHeading';
import Paragraph from '@/components/Common/Paragraph';

export default {
  name: 'Footer',
  components: {
    MainHeading,
    SubHeading,
    Paragraph
  }
}
</script>
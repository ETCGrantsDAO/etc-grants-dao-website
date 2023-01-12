<template>
    <footer class="px-8 bg-gradient-to-t from-[#0A1C3F] to-[#020518] border-2 border-footerBorder xl:px-32 py-12">
        <div class="grid lg:grid-cols-5 xl:grid-cols-5 sm:grid-cols-1">
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
        </div>
      </footer>
</template>

<script>
import MainHeading from '@/components/Comman/MainHeading';
import SubHeading from '@/components/Comman/SubHeading';
import Paragraph from '@/components/Comman/Paragraph';

 export default {
    name: 'Footer',
    components: {
     MainHeading,
     SubHeading,
     Paragraph
    }
 }
</script>
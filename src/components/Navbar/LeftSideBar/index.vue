<template>
    <div
    class="z-20 w-bodyLeftSecMobile lg:w-bodyLeftSecDesktop hidden md:block bodyLeftSec relative"
  >
    <div
      class="sticky top-32 overflow-y-auto h-bodyLeft bodyLeftSticky pr-8 mr-4"
    >
      <!-- Contents title -->
      <div class="top-28 bg-background navItems w-fit">
        <a href="#" class="flex">
          <img src="@/images/contentIcon.svg" class="mr-3" />
          <p
            class="font-notoSans text-headingsColor text-lg leading-twentyEight mt-1"
          >
            {{ $t("contents-title") }}
          </p>
        </a>
      </div>

      <!-- About desktop navigation -->
      <div class="text-headingsColor pt-8 top-[136px] bg-background">
        <a
          class="font-notoSans text-headingsColor text-2xl font-bold leading-rightHeadingsDt"
          ref="blOverview"
          href="#about"
        >
          {{ $t("about.nav-heading") }}
        </a>
      </div>
      <div class="text-headingsColor pt-6 pl-1">
        <a
          class="font-notoSans text-textColor text-base font-normal"
          href="#about.ethereumClassicIn2023"
        >
          {{ $t("about.ethereumClassicIn2023.nav-heading") }}
        </a>
      </div>
      <div class="text-headingsColor pt-6 pl-1">
        <a
          class="font-notoSans text-textColor text-base font-normal"
          href="#about.funding"
        >
          {{ $t("about.funding.nav-heading") }}
        </a>
      </div>

      <!-- Grant categories desktop navigation -->
      <div class="text-headingsColor pt-8">
        <a
          class="font-notoSans text-headingsColor text-2xl font-bold leading-rightHeadingsDt"
          href="#categories"
        >
          {{ $t("categories.nav-heading") }}
        </a>
      </div>
      <div class="text-headingsColor pt-6 pl-1">
        <a
          class="font-notoSans text-textColor text-base font-normal"
          href="#categories.types"
        >
          {{ $t("categories.types.nav-heading") }}
        </a>
      </div>

      <!-- Requirements desktop navigation -->
      <div class="text-headingsColor pt-8">
        <a
          class="font-notoSans text-headingsColor text-2xl font-bold leading-rightHeadingsDt"
          href="#requirements"
        >
          {{ $t("requirements.nav-heading") }}
        </a>
      </div>
      <div class="text-headingsColor pt-6 pl-1">
        <a
          class="font-notoSans text-textColor text-base font-normal"
          href="#requirements.englishOrChinese"
        >
          {{ $t("requirements.englishOrChinese.nav-heading") }}
        </a>
      </div>
      <div class="text-headingsColor pt-6 pl-1">
        <a
          class="font-notoSans text-textColor text-base font-normal"
          href="#requirements.noRetroactiveFunding"
        >
          {{ $t("requirements.noRetroactiveFunding.nav-heading") }}
        </a>
      </div>
      <div class="text-headingsColor pt-6 pl-1">
        <a
          class="font-notoSans text-textColor text-base font-normal"
          href="#requirements.openSource"
        >
          {{ $t("requirements.openSource.nav-heading") }}
        </a>
      </div>
      <div class="text-headingsColor pt-6 pl-1">
        <a
          class="font-notoSans text-textColor text-base font-normal"
          href="#requirements.kycAml"
        >
          {{ $t("requirements.kycAml.nav-heading") }}
        </a>
      </div>
      <div class="text-headingsColor pt-6 pl-1">
        <a
          class="font-notoSans text-textColor text-base font-normal"
          href="#requirements.publiclyVisible"
        >
          {{ $t("requirements.publiclyVisible.nav-heading") }}
        </a>
      </div>

      <!-- Grants process desktop navigation -->
      <div class="text-headingsColor pt-8">
        <a
          class="font-notoSans text-headingsColor text-2xl font-bold leading-rightHeadingsDt"
          href="#grantsProcess"
        >
          {{ $t("grantsProcess.nav-heading") }}
        </a>
      </div>
      <div class="text-headingsColor pt-6 pl-1">
        <a
          class="font-notoSans text-textColor text-base font-normal"
          href="#grantsProcess.phases.step1"
        >
          {{ $t("grantsProcess.phases.step1.nav-heading") }}
        </a>
      </div>
      <div class="text-headingsColor pt-6 pl-1">
        <a
          class="font-notoSans text-textColor text-base font-normal"
          href="#grantsProcess.phases.step2"
        >
          {{ $t("grantsProcess.phases.step2.nav-heading") }}
        </a>
      </div>
      <div class="text-headingsColor pt-6 pl-1">
        <a
          class="font-notoSans text-textColor text-base font-normal"
          href="#grantsProcess.phases.step3"
        >
          {{ $t("grantsProcess.phases.step3.nav-heading") }}
        </a>
      </div>
      <div class="text-headingsColor pt-6 pl-1">
        <a
          class="font-notoSans text-textColor text-base font-normal"
          href="#grantsProcess.phases.step4"
        >
          {{ $t("grantsProcess.phases.step4.nav-heading") }}
        </a>
      </div>
      <div class="text-headingsColor pt-6 pl-1">
        <a
          class="font-notoSans text-textColor text-base font-normal"
          href="#grantsProcess.phases.step5"
        >
          {{ $t("grantsProcess.phases.step5.nav-heading") }}
        </a>
      </div>
      <div class="text-headingsColor pt-6 pl-1">
        <a
          class="font-notoSans text-textColor text-base font-normal"
          href="#grantsProcess.phases.step6"
        >
          {{ $t("grantsProcess.phases.step6.nav-heading") }}
        </a>
      </div>
      <div class="text-headingsColor pt-6 pl-1">
        <a
          class="font-notoSans text-textColor text-base font-normal"
          href="#grantsProcess.phases.step7"
        >
          {{ $t("grantsProcess.phases.step7.nav-heading") }}
        </a>
      </div>

      <!-- Suggestions desktop navigation -->
      <div class="text-headingsColor pt-8">
        <a
          class="font-notoSans text-headingsColor text-2xl font-bold leading-rightHeadingsDt"
          href="#suggestions"
        >
          {{ $t("suggestions.nav-heading") }}
        </a>
      </div>


    </div>
  </div>
</template>
<script>
import LocaleSwitcher from "@/components/LocaleSwitcher";
export default {
    name: "LeftSideBar",
    components: {
        LocaleSwitcher
    }
}
</script>
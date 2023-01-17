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

      <!-- Overview desktop navigation -->
      <div class="text-headingsColor pt-8">
        <a
          class="font-notoSans text-headingsColor text-2xl font-bold leading-rightHeadingsDt"
          href="#overview"
        >
          {{ $t("overview.nav-heading") }}
        </a>
      </div>
      <div class="text-headingsColor pt-6 pl-1">
        <a
          class="font-notoSans text-textColor text-base font-normal"
          href="#overview.etc-grants-dao"
        >
          {{ $t("overview.etc-grants-dao.nav-heading") }}
        </a>
      </div>
      <div class="text-headingsColor pt-6 pl-1">
        <a
          class="font-notoSans text-textColor text-base font-normal"
          href="#overview.etc-grants-program"
        >
          {{ $t("overview.etc-grants-program.nav-heading") }}
        </a>
      </div>

      <!-- How To Apply desktop navigation -->
      <div class="text-headingsColor pt-8">
        <a
          class="font-notoSans text-headingsColor text-2xl font-bold leading-rightHeadingsDt"
          href="#howtoapply"
        >
          {{ $t("howToApply.nav-heading") }}
        </a>
      </div>
      <div class="text-headingsColor pt-6 pl-1">
        <a
          class="font-notoSans text-textColor text-base font-normal"
          href="#howtoapply.round1"
        >
          {{ $t("howToApply.round1.nav-heading") }}
        </a>
      </div>
      <div class="text-headingsColor pt-6 pl-1">
        <a
          class="font-notoSans text-textColor text-base font-normal"
          href="#howtoapply.categories"
        >
          {{ $t("howToApply.categories.nav-heading") }}
        </a>
      </div>
      <div class="text-headingsColor pt-6 pl-1">
        <a
          class="font-notoSans text-textColor text-base font-normal"
          href="#howtoapply.suggestions"
        >
          {{ $t("howToApply.suggestions.nav-heading") }}
        </a>
      </div>

      <!-- Grants Process desktop navigation -->
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

      <!-- Resources desktop navigation -->
      <div class="text-headingsColor pt-8">
        <a
          class="font-notoSans text-headingsColor text-2xl font-bold leading-rightHeadingsDt"
          href="#resources"
        >
          {{ $t("resources.nav-heading") }}
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
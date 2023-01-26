<template>
  <div class="z-20 w-bodyLeftSecMobile lg:w-bodyLeftSecDesktop hidden md:block bodyLeftSec relative">
    <div class="sticky top-32 overflow-y-auto h-bodyLeft bodyLeftSticky pr-8 mr-4">
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

      <div v-for="(section, sectionKey) in sections" :key="sectionKey">
        <div class="text-headingsColor pt-8">
          <a
            class="font-notoSans text-headingsColor text-2xl font-bold leading-rightHeadingsDt"
            :href="section.target"
          >
            {{ $t(`sections.${section.key}`) }}
          </a>
        </div>
        <div v-if="section.subsections">
          <div v-for="(subsection, subsectionKey) in section.subsections" :key="subsectionKey">
            <div class="text-headingsColor pt-6 pl-1">
              <a
                class="font-notoSans text-textColor text-base font-normal"
                :href="subsection.target"
              >
                {{ $t(`subsection.${subsection.key}`) }}
              </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import LocaleSwitcher from "@/components/LocaleSwitcher";
import sections from "@/sections.json"

export default {
    name: "LeftSideBar",
    components: {
        LocaleSwitcher
    },
    data(){
      return {
        sections: sections.data
      }
    },
}
</script>
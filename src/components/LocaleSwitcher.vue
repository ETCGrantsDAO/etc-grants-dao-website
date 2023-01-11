<template>
  <select
    id="sel"
    class="uppercase rounded font-roboto bg-background font-semibold text-textColor font16 border-0 selectMenu py-2 px-1 hidden"
    v-model="$i18n.locale"
  >
    <option
      class="uppercase rounded bg-background border-0"
      key="`locale-${0}`"
      value="cn"
    >
      占位符符
    </option>
    <option
      class="uppercase rounded bg-background border-0"
      key="`locale-${1}`"
      value="en"
    >
      English
    </option>
  </select>

  <div class="relative">
    <img
      id="languageEn"
      v-on:click="show()"
      class="min-w-locale w-6 h-6 lg:w-8 lg:h-8 my-auto cursor-pointer"
      src="../images/britishFlag.svg"
      alt=""
    /><img
      id="languageCn"
      v-on:click="show()"
      class="min-w-locale w-6 h-6 lg:w-8 lg:h-8 my-auto cursor-pointer hidden"
      src="../images/chineaseFlag.svg"
      alt=""
    />
    <div
      ref="languages"
      class="absolute w-40 top-12 lg:right-0 right-[-80px] bg-white rounded-lg bg-gradient-to-t from-[#0A1C3F] to-[#020518] border-2 border-footerBorder hidden"
    >
      <button
        v-on:click="hide()"
        class="btn btn-primary text-headingsColor flex pt-6 pl-6 pr-6 pb-3 lg hover:font-bold ransition duration-400"
        href="#"
        id="english"
      >
        <img
          class="w-6 h-6 lg:w-8 lg:h-8 my-auto mr-3"
          src="../images/britishFlag.svg"
          alt=""
        />
        <p class="my-auto">English</p>
      </button>
      <button
        v-on:click="hide()"
        class="btn btn-primary text-headingsColor flex pt-3 pl-6 pr-6 pb-6 hover:font-bold ransition duration-400"
        href="#"
        id="chinese"
      >
        <img
          class="w-6 h-6 md:w-8 md:h-8 my-auto mr-3"
          src="../images/chineaseFlag.svg"
          alt=""
        />
        <p class="my-auto">中文</p>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocaleSwitcher",
  data() {
    return { locales: ["cn", "en"] };
  },
  methods: {
    show() {
      if (this.$refs.languages.classList.contains("hidden")) {
        this.$refs.languages.classList.remove("hidden");
      } else {
        this.$refs.languages.classList.add("hidden");
      }
    },
    hide() {
      this.$refs.languages.classList.add("hidden");
      document.querySelector("#languageEn").classList.add("hidden");
      document.querySelector("#languageCn").classList.remove("hidden");
    },
  },
  mounted() {
    var select = document.querySelector("#sel"),
      english = document.querySelector("#english"),
      chinese = document.querySelector("#chinese");

    chinese.addEventListener("click", function () {
      select.value = "cn";
      select.dispatchEvent(new Event("change"));
      document.querySelector("#languageEn").classList.add("hidden");
      document.querySelector("#languageCn").classList.remove("hidden");
    });

    english.addEventListener("click", function () {
      select.value = "en";
      select.dispatchEvent(new Event("change"));
      document.querySelector("#languageCn").classList.add("hidden");
      document.querySelector("#languageEn").classList.remove("hidden");
    });
  },
};
</script>

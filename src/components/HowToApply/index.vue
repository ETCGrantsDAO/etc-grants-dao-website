<template>
  <section>
    <div class="pt-8"></div>
    <div id="md-content" v-html="md(content)"></div>
  </section>
</template>
<script>
export default {
  name: "Suggestions",
  watch: {
    "$i18n.locale": function (newLang) {
      this.getContent(newLang);
    },
  },
  data() {
    return {
      bullets: new Array(17),
      content: "",
    };
  },
  methods: {
    getContent(lang) {
      switch (lang) {
        case "en":
          import("@/md/how-to-apply.en.md").then((contentEN) => {
            this.content = contentEN.default;
          });
          break;
        case "cn":
          import("@/md/how-to-apply.cn.md").then((contentCH) => {
            this.content = contentCH.default;
          });
          break;
      }
    },
  },
  created() {
    const lang = this.$i18n.locale;
    this.getContent(lang);
  },
};
</script>

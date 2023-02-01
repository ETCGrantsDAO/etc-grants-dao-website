<template>
  <section>
    <div class="pt-6"></div>
    <div class="md-watermark">
      <div id="md-content" v-html="md(content)"></div>
    </div>
  </section>
</template>
<script>
export default {
  name: "GenericSection",
  watch: {
    "$i18n.locale": function (newLang) {
      this.getContent(newLang);
    },
  },
  data() {
    return {
      content: "",
    };
  },
  props:{
    files: null
  }, 
  methods: {
    getContent(lang) {
      console.log()

      switch (lang) {
        case "en":
          import(`@/md/${this.files.en}`).then((contentEN) => {
            this.content = contentEN.default;
          });
          break;
        case "cn":
          import(`@/md/${this.files.cn}`).then((contentCH) => {
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
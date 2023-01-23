import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import i18n from "./i18n";
import markdown from "markdown-it";
import markdownAttrs from "markdown-it-attrs";

const mixins = {
  methods: {
    md: function (input) {
      return markdown().use(markdownAttrs).render(input);
    },
  },
};

createApp(App).mixin(mixins).use(i18n).use(router).mount("#app");

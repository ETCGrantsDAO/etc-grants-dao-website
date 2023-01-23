<template>
	<!-- Overview-->
	<section id="overview" class="parent-scroll-element">
		<div style="color: white" v-html="md(content)"></div>
	</section>
</template>
<script>
import MainHeading from "@/components/Common/MainHeading";
import SubHeading from "@/components/Common/SubHeading";
import Paragraph from "@/components/Common/Paragraph";

export default {
	name: "Overview",
	components: {
		MainHeading,
		SubHeading,
		Paragraph,
	},
	watch: {
		"$i18n.locale": function (newLang) {
			this.getContent(newLang);
		},
	},
	data() {
		return {
			etcGrantsDaoList: new Array(4),
			content: "",
		};
	},
	methods: {
		getContent(lang) {
			switch (lang) {
				case "en":
					import("@/md/overview.en.md").then((contentEN) => {
						this.content = contentEN.default;
					});
					break;
				case "cn":
					import("@/md/overview.cn.md").then((contentCH) => {
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

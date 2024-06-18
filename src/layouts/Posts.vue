<template>
	<slot name="header"></slot>

	<slot name="main"></slot>

	<!-- footer starts here -->
	<Footer />
	<!-- footer ends here -->
</template>

<script>
import Footer from "@/components/Footer/index.vue";

export default {
	name: "Layout",
	components: {
		Footer,
	},
};
</script>

<template>
	<Head>
		<title>{{ title }}</title>
		<meta name="description" :content="description" />

		<!-- Social -->
		<meta property="og:title" :content="title" />
		<meta property="og:description" :content="description" />
		<meta
			property="og:image"
			:content="`${baseUrl}/img/posts/featuredImg/${img}`"
		/>

		<!-- Twitter -->
		<meta name="twitter:title" :content="title" />
		<meta name="twitter:description" :content="description" />
		<meta
			name="twitter:image"
			:content="`${baseUrl}/img/posts/featuredImg/${img}`"
		/>
		<meta name="twitter:card" content="summary_large_image" />
	</Head>
	<Layout>
		<template #header>
			<section class="blogNavSection">
				<Navbar></Navbar>
				<div class="w-full mt-10 max-w-7xl mx-auto px-8">
					<div class="blogHeroContent">
						<img :src="`/img/posts/featuredImg/${img}`" alt="Main Image" class="w-full mt-10" />
					</div>
				</div>
			</section>
		</template>

		<template #main>
			<section class="newBlogSection">
				<div class="w-full mt-10 max-w-7xl mx-auto px-8 text-white pt-10 pb-20">
					<div class="flex flex-wrap items-center mb-4">
						<a
							v-for="(tag, tKey) in tags"
							:key="tKey"
							href=""
							class="rounded-3xl bg-[#22c55e] px-2 py-1 mb-3"
							>{{ tag }}</a
						>
					</div>
					<div class="blogHeading">
						<h1 class="text-4xl leading-[3rem] mb-10">
							{{ title }}
						</h1>
					</div>
					<div class="flex justify-between items-center">
						<div class="flex items-center">
							<h6 class="text-base font-bold leading-6" v-if="author">{{ author }}</h6>
						</div>
						<div v-if="date">
							<p>{{ date }}</p>
						</div>
					</div>
					<div class="flex items-start pt-10">
						<div class="sticky top-5 pr-5">
							<ul class="list-none p-0">
								<li class="mb-5" role="button" @click="share('facebook')">
									<img class="w-8 h-8" src="@/assets/images/blog-facebook.svg" alt="" />
								</li>
								<li class="mb-5" role="button" @click="share('twitter')">
									<img class="w-8 h-8" src="@/assets/images/blog-twitter.svg" alt="" />
								</li>
								<li class="mb-5" role="button" @click="share('linkedin')">
									<img class="w-8 h-8" src="@/assets/images/blog-linkedin.svg" alt="" />
								</li>
								<li class="mb-5" role="button" @click="copyClipboard()">
									<img class="w-8 h-8" src="@/assets/images/blog-copy.svg" alt="" />
									<p
										v-if="showCopyClipboardText"
										class="text-secondary font-weight-light"
										style="font-size: 10px"
									>
										Copied!
									</p>
								</li>
								<li class="mb-5" role="button">
									<a
										:href="`mailto:?subject=${this.title}&amp;body=${this.fullPath}`"
									>
										<img class="" src="@/assets/images/blog-email.svg" alt="" />
									</a>
								</li>
							</ul>
						</div>
						<div class="flex-1 max-w-4xl mx-auto min-w-0 blogDetailsContent">
							<p class="text-lg leading-7" v-html="body"></p>
							<h4 class="text-2xl font-bold mb-4">Share it on:</h4>
							<div class="flex gap-3 justify-center mt-3">
								<div role="button" @click="share('facebook')">
									<img src="@/assets/images/blog-facebook.svg" alt="" />
								</div>
								<div role="button" @click="share('twitter')">
									<img src="@/assets/images/blog-twitter.svg" alt="" />
								</div>
								<div role="button" @click="share('linkedin')">
									<img src="@/assets/images/blog-linkedin.svg" alt="" />
								</div>
								<div role="button" @click="share('reddit')">
									<img src="@/assets/images/blog-reddit.svg" width="32" height="32" alt="" />
								</div>
							</div>
							<div class="mt-10 py-10">
								<h4 class="text-2xl font-bold mb-4 leading-10">Thank you for reading this article!</h4>
								<div class="flex flex-wrap justify-between items-center learnMoreLinks">
									<a target="_blank" href="https://powsummit.com/">
										Learn more about the POW Summit.</a
									>
									<router-link to="/ethereum-classic">
										Learn more about Ethereum Classic.</router-link
									>
									<router-link to="/what-is-etc-cooperative">
										Learn more about ETC Cooperative.</router-link
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</template>
	</Layout>
</template>
<script>
import { Head, useHead } from "@vueuse/head";
import Layout from "@/layouts/Posts.vue";
import Navbar from "@/components/Navbar/NavBar/index.vue";

export default {
	components: {
		Head,
		Layout,
		Navbar,
	},
	data() {
		return {
			body: null,
			title: null,
			description: null,
			img: null,
			author: null,
			date: null,
			tags: [],
			baseUrl: null,
			fullPath: null,
			mayAlsoLikeArticles: [],
			showCopyClipboardText: false,
		};
	},
	watch: {
		"$i18n.locale": function (newLang) {
			localStorage.setItem("last-locale", newLang);
			this.getContent(newLang);
			// this.getMayAlsoLikeArticles(newLang);
		},
		showCopyClipboardText: function (val) {
			setTimeout(() => {
				if (val === true) {
					this.showCopyClipboardText = false;
				}
			}, 3000);
		},
	},
	methods: {
		getContent(locale) {
			let sourceFile = `${this.$route.params.alias}/index.md`;

			import(`@/contents/posts/${locale}/${sourceFile}`)
				.then((module) => {
					const { html, meta } = this.md(module.default);
					this.body = html;
					this.title = meta.title || null;
					this.description =
						meta.description || "See latest post from ETC Cooperative";
					this.img = meta.featuredImage || null;
					this.author = meta.author || null;
					this.tags = meta.tags || [];
					this.baseUrl = window.location.origin;
					this.fullPath = new URL(this.$route.href, this.baseUrl).href;
					this.date = this.tryParseDateFromAlias(this.$route.params.alias);
				})
				.catch(() => {
					// load default locale (en)
					import(`@/contents/posts/en/${sourceFile}`).then((module) => {
						const { html, meta } = this.md(module.default);
						this.body = html;
						this.title = meta.title || null;
						this.description =
							meta.description || "See latest post from ETC Cooperative";
						this.img = meta.featuredImage || null;
						this.author = meta.author || null;
						this.tags = meta.tags || [];
						this.baseUrl = window.location.origin;
						this.fullPath = new URL(this.$route.href, this.baseUrl).href;
						this.date = this.tryParseDateFromAlias(this.$route.params.alias);
					});
				});
		},
		tryParseDateFromAlias(alias) {
			let dateText = "";

			if (alias) {
				const monthNames = [
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
					"August",
					"September",
					"October",
					"November",
					"December",
				];
				const splited = alias.split("-");

				if (splited.length > 3) {
					const year = splited[0] || null;
					const month = splited[1] || null;
					const day = splited[2] || null;

					const date = new Date(`${year}-${month}-${day}`);

					if (Object.prototype.toString.call(date) === "[object Date]") {
						// it is a date
						if (isNaN(date)) {
							// d.getTime() or d.valueOf() will also work
							// date object is not valid
							dateText = "";
						} else {
							dateText = `${monthNames[date.getUTCMonth()]} ${String(
								date.getUTCDate()
							).padStart(2, "0")}, ${date.getUTCFullYear()}`;
						}
					} else {
						dateText = "";
					}
				}
			}

			return dateText;
		},
		share(platform) {
			let path = "";
			switch (platform) {
				case "twitter":
					path = `https://twitter.com/intent/tweet?url=${this.clearTitle(
						this.title
					)} ${this.fullPath}`;
					break;
				case "facebook":
					path = `https://www.facebook.com/sharer.php?u=${this.fullPath}`;
					break;
				case "linkedin":
					path = `https://www.linkedin.com/sharing/share-offsite/?url=${this.fullPath}`;
					break;
				case "reddit":
					path = `https://www.reddit.com/submit?url=` + encodeURIComponent(`${this.fullPath}&title=${this.clearTitle(this.title)}`);
					break;
			}

			if (path) {
				window.open(path, "ETC Cooperative", "width=650,height=650");
			}
		},
		clearTitle(title) {
			return title
				.replaceAll(
					"#", //this character makes url as anchor and broke everything
					" "
				)
				.replaceAll(
					"?", //this character makes url as parameter and broke everything
					" "
				)
				.replaceAll(
					"&", //this character makes url as paramater too and broke everything
					" "
				);
		},
		async copyClipboard() {
			try {
				await navigator.clipboard.writeText(this.fullPath);
				this.showCopyClipboardText = true;
			} catch (err) {}
		},
	},
	mounted() {
		let locale = "en";

		// check locale for old posts.
		if (this.$route.path.endsWith("-en")) {
			locale = "en";
		} else if (this.$route.path.endsWith("-cn")) {
			locale = "cn";
		} else {
			locale = this.$i18n.locale;
		}

		this.getContent(locale);
		// this.getMayAlsoLikeArticles(locale);
	},
	beforeRouteLeave(to, from, next) {
		// revert all metadata when you leaving page
		useHead({
			title: "Ethereum Classic Cooperative",
			meta: [
				{
					name: "description",
					content: "Accelerating the growth of Ethereum Classic.",
				},
				{ property: "og:title", content: "ETC Classic Coop" },
				{
					property: "og:description",
					content: "Accelerating the growth of Ethereum Classic.",
				},
				{
					property: "og:image",
					content: "https://etccooperative.org/etc-coop-social.png",
				},
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:title", content: "Ethereum Classic Cooperative" },
				{
					name: "twitter:description",
					content: "Accelerating the growth of Ethereum Classic.",
				},
				{
					name: "twitter:image",
					content: "https://etccooperative.org/etc-coop-social.png",
				},
				{
					name: "keywords",
					content: "Ethereum Classic Cooperative, ETC Classic Coop",
				},
			],
		});
		next();
	},
};
</script>

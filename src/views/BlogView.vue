<template>
	<Posts>
		<template #header>
			<section class="newsListNavSection">
				<Navbar></Navbar>
				<div class="mainContainer newsListContainer">
					<div class="newsListHeroContent">
						<h1 class="text-white font-bold text-4xl">{{ $t("newsList.header") }}</h1>
					</div>
				</div>
			</section>
		</template>

		<template #main>
			<section class="newsListSection text-white">
				<div class="mainContainer">
					<div class="swiper mySwiper">
						<div class="swiper-wrapper">
							<div class="swiper-slide">
								<div class="py-7" v-if="currentPosts.length > 0">
									<div class="flex flex-wrap">
										<div class="grid grid-cols-12 gap-4">
											<div class="col-span-8">
												<div class="col-12" v-if="currentPosts[0]">
													<router-link
														:to="`/posts/${currentPosts[0].alias}`"
														class="removeUnderline"
													>
														<div class="newsCard newsCardLg">
															<div class="newsCardHeroImg">
																<img
																	:src="`/img/posts/featuredImg/${currentPosts[0].image}`"
																	alt=""
																/>
															</div>
															<div class="newsImgOverContent">
																<h5>
																	ETC Coop Blog
																	<span class="dot">.</span>
																	<span v-if="currentPosts[0].date">{{
																		currentPosts[0].date
																	}}</span>
																</h5>
																<h4>
																	{{ currentPosts[0].title }}
																</h4>
																<p>
																	{{ currentPosts[0].description }}
																</p>
															</div>
														</div>
													</router-link>
												</div>
												<div class="flex gap-4 text-white">
													<div class="col-lg-6 col-md-12">
														<router-link
															:to="`/posts/${currentPosts[3].alias}`"
															class="removeUnderline"
														>
															<div class="newsCard">
																<div class="newsCardImg">
																	<img
																		:src="`/img/posts/featuredImg/${currentPosts[3].image}`"
																		alt=""
																	/>
																</div>
																<div class="newsCardContent">
																	<h5>
																		ETC Coop Blog
																		<span class="dot">.</span>
																		<span v-if="currentPosts[3].date">{{
																			currentPosts[3].date
																		}}</span>
																	</h5>
																	<h4>
																		{{ currentPosts[3].title }}
																	</h4>
																	<p>
																		{{ currentPosts[3].description }}
																	</p>
																</div>
															</div>
														</router-link>
													</div>
													<div class="col-lg-6 col-md-12">
														<router-link
															:to="`/posts/${currentPosts[4].alias}`"
															class="removeUnderline"
														>
															<div class="newsCard">
																<div class="newsCardImg">
																	<img
																		:src="`/img/posts/featuredImg/${currentPosts[4].image}`"
																		alt=""
																	/>
																</div>
																<div class="newsCardContent">
																	<h5>
																		ETC Coop Blog
																		<span class="dot">.</span>
																		<span v-if="currentPosts[4].date">{{
																			currentPosts[4].date
																		}}</span>
																	</h5>
																	<h4>
																		{{ currentPosts[4].title }}
																	</h4>
																	<p>
																		{{ currentPosts[4].description }}
																	</p>
																</div>
															</div>
														</router-link>
													</div>
												</div>
											</div>


											<div class="col-span-4">
												<div class="flex flex-col gap-4">
													<div class="col-12">
														<router-link
															:to="`/posts/${currentPosts[1].alias}`"
															class="removeUnderline"
														>
															<div class="newsCard">
																<div class="newsCardImg">
																	<img
																		:src="`/img/posts/featuredImg/${currentPosts[1].image}`"
																		alt=""
																	/>
																</div>
																<div class="newsCardContent">
																	<h5>
																		ETC Coop Blog
																		<span class="dot">.</span>
																		<span v-if="currentPosts[1].date">{{
																			currentPosts[1].date
																		}}</span>
																	</h5>
																	<h4>
																		{{ currentPosts[1].title }}
																	</h4>
																</div>
															</div>
														</router-link>
													</div>
													<div class="col-12">
														<router-link
															:to="`/posts/${currentPosts[2].alias}`"
															class="removeUnderline"
														>
															<div class="newsCard">
																<div class="newsCardImg">
																	<img
																		:src="`/img/posts/featuredImg/${currentPosts[2].image}`"
																		alt=""
																	/>
																</div>
																<div class="newsCardContent">
																	<h5>
																		ETC Coop Blog
																		<span class="dot">.</span>
																		<span v-if="currentPosts[2].date">{{
																			currentPosts[2].date
																		}}</span>
																	</h5>
																	<h4>
																		{{ currentPosts[2].title }}
																	</h4>
																</div>
															</div>
														</router-link>
													</div>
													<div class="col-12">
														<router-link
															:to="`/posts/${currentPosts[5].alias}`"
															class="removeUnderline"
														>
															<div class="newsCard">
																<div class="newsCardImg">
																	<img
																		:src="`/img/posts/featuredImg/${currentPosts[5].image}`"
																		alt=""
																	/>
																</div>
																<div class="newsCardContent">
																	<h5>
																		ETC Coop Blog
																		<span class="dot">.</span>
																		<span v-if="currentPosts[5].date">{{
																			currentPosts[5].date
																		}}</span>
																	</h5>
																	<h4>
																		{{ currentPosts[5].title }}
																	</h4>
																	<p>
																		{{ currentPosts[5].description }}
																	</p>
																</div>
															</div>
														</router-link>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="grid grid-cols-12 gap-4">
										<div
											class="col-span-4 col-lg-4 col-md-4 col-sm-12"
											v-if="currentPosts.length > 6"
											v-for="(remaincurrentPosts, rpKey) in currentPosts.slice(
												6
											)"
											:key="rpKey"
										>
											<router-link
												:to="`/posts/${remaincurrentPosts.alias}`"
												class="removeUnderline"
											>
												<div class="newsCard">
													<div class="newsCardImg">
														<img
															:src="`/img/posts/featuredImg/${remaincurrentPosts.image}`"
															alt=""
														/>
													</div>
													<div class="newsCardContent">
														<h5>
															ETC Coop Blog
															<span class="dot">.</span>
															<span v-if="remaincurrentPosts.date">{{
																remaincurrentPosts.date
															}}</span>
														</h5>
														<h4>
															{{ remaincurrentPosts.title }}
														</h4>
														<p>
															{{ remaincurrentPosts.description }}
														</p>
													</div>
												</div>
											</router-link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</template>
	</Posts>
</template>

<script>
import Posts from "@/layouts/Posts.vue";
import Navbar from "@/components/Navbar/NavBar";

export default {
	components: {
		Posts,
		Navbar,
	},
	data() {
		return {
			allPosts: [],
			currentPosts: [],
			currentPage: 0,
		};
	},
	watch: {
		"$i18n.locale": function (newLang) {
			localStorage.setItem("last-locale", newLang);

			import(`@/contents/posts.${newLang}.json`).then((module) => {
				this.allPosts = module.default;
				this.currentPosts = this.allPosts.slice(0, 12);
			});
		},
	},
	computed: {
		pageCounts() {
			if (this.allPosts.length > 0) return this.allPosts.length;
		},
	},
	mounted() {
		const locale = this.$i18n.locale;

		import(`@/contents/posts.${locale}.json`).then((module) => {
			this.allPosts = module.default;
			this.currentPosts = this.allPosts.slice(0, 12);
		});
	},
	methods: {
		changePage(page) {
			this.currentPage = page;
			this.currentPosts = this.allPosts.slice(12 * page, 12 * page + 12);
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		},
		truncate(source, size) {
			return source.length > size ? source.slice(0, size - 1) + "…" : source;
		},
	},
};
</script>

<template>
  <div>
    <div class="bg-background p-0 relative">
      <div class="mt-5 ml-5 md:mt-10 md:ml-10">
        <a href="/" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <img class="mr-2" width="25" height="25" src="@/images/back.png" alt="back" />
          <span>{{ $t('wechat.back-button') }}</span>
        </a>
      </div>

      <section id="content">
        <div class="p-6 md:pt-12 text-center">
          <p class="pb-10 md:pb-6 pt-2 md:pt-0 font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree">
            {{  $t('wechat.paragraph') }}
          </p>
          <img class="mx-auto" alt="WeChat" src="/wechat-group.png"/>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/Navbar/NavBar"

export default {
  name: "WeChatView",
  components: {
    NavBar,
  }
}
</script>
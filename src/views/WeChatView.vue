<template>
  <div>
    <div class="bg-background p-0 relative">
      <Back/>

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
import Back from "@/components/Back"

export default {
  name: "WeChatView",
  components: {
    Back,
  }
}
</script>
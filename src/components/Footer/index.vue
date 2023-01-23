<template>
  <footer class="px-8 bg-gradient-to-t from-[#0A1C3F] to-[#020518] border-2 border-footerBorder xl:px-32 py-12">

    <div class="flex flex-col lg:flex-row">
      <div class="w-full lg:w-1/3">
        
        <div class="mt-5 lg:mt-9 etclogo">
          <a href="https://etccooperative.org/" target="_blank">
            <img src="@/images/etclogo.png" alt="">
          </a>
        </div>
        <div class="flex mt-5 lg:mt-8">
          <a href="https://twitter.com/ETCCooperative" target="_blank">
            <img src="@/images/twitter.svg" alt="twitter"
              class="ml-1 mr-5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out" />
          </a>
          <a href="https://discord.com/invite/5wDyd6u6pU" target="_blank">
            <img src="@/images/discrod.svg" alt="instagram"
              class="cursor-pointer hover:scale-110 transition duration-300 ease-in-out" />
          </a>
        </div>
      </div>
      <div class="w-full lg:w-2/3">
        <div class="row mt-5 lg:mt-9">
          <div class="grid grid-cols-1 lg:grid-cols-3">
            <div class="lg:mt-4">
              <a href="https://www.bitmain.com/" target="_blank">
                <img src="@/images/bitmain.png" alt="">
              </a>
              <div class="flex mt-5 lg:mt-8">
                <a href="https://twitter.com/BITMAINtech" target="_blank">
                  <img src="@/images/twitter.svg" alt="t"
                    class="ml-1 mr-5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out" />
                </a>
                <a href="https://t.me/bitmain" target="_blank">
                  <img src="@/images/messenger.svg" alt="telegram-logo"
                    class="cursor-pointer hover:scale-110 transition duration-300 ease-in-out" />
                </a>
              </div>
            </div>
            <div>
              <div class="mt-10 lg:mt-1">
                <a href="https://www.antpool.com/home" target="_blank">
                <img src="@/images/ant.png" alt="">
              </a>
                <div class="flex mt-5 lg:mt-8">
                  <a href="https://twitter.com/AntPoolofficial" target="_blank">
                    <img src="@/images/twitter.svg" alt="t"
                      class="ml-1 mr-5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out" />
                  </a>
                  <a href="https://t.me/AntPoolOffical" target="_blank">
                    <img src="@/images/messenger.svg" alt="telegram-logo"
                      class="cursor-pointer hover:scale-110 transition duration-300 ease-in-out" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div class="mt-10 lg:mt-0">
                <a href="https://etccooperative.org/" target="_blank">
                <img src="@/images/etheriumclassic.png" alt="">
              </a>
                <div class="flex mt-5 lg:mt-8">
                  <a href="https://twitter.com/eth_classic" target="_blank">
                    <img src="@/images/twitter.svg" alt="t"
                      class="ml-1 mr-5 cursor-pointer hover:scale-110 transition duration-300 ease-in-out" />
                  </a>
                  <a href="https://discord.com/invite/bMGuZsA" target="_blank">
                    <img src="@/images/discrod.svg" alt="instagram"
                      class="cursor-pointer hover:scale-110 transition duration-300 ease-in-out" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import MainHeading from '@/components/Common/MainHeading';
import SubHeading from '@/components/Common/SubHeading';
import Paragraph from '@/components/Common/Paragraph';

export default {
  name: 'Footer',
  components: {
    MainHeading,
    SubHeading,
    Paragraph
  }
}
</script>

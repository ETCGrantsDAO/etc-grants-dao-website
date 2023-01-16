<template>
    <div class="pt-12">
        <p
          class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">

          {{ $t("about.ethereumClassicIn2023.body.p1.text1") }}
          <a href=""></a>
          {{ $t("about.ethereumClassicIn2023.body.p1.text2") }}
        </p>
    </div>
</template>


<script>

import MainHeading from '@/components/Common/MainHeading';
import SubHeading from '@/components/Common/SubHeading';
import Paragraph from '@/components/Common/Paragraph';

export default {
    name: "Paragraph1",
    props: ['text'],
    components: {
        MainHeading,
        SubHeading,
        Paragraph
    }
}

</script>
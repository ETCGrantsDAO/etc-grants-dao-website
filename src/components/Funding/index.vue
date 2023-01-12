<template>
    <section id="about-funding">
        <SubHeading title="about.funding.heading" />
        <div class="text-headingsColor pt-12">
            <p
                class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText pb-8">
                {{ $t("about.funding.body.p1") }}
            </p>
            <br />
            <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
                {{ $t("about.funding.body.p2") }}
            </p>
        </div>
    </section>

</template>
<script>
import MainHeading from '../Comman/Heading/mainHeading.vue';
import SubHeading from '../Comman/Heading/subHeading.vue';
import Paragraph from '../Comman/Paragraph';

export default {
    name: "About_Funding",
    components: {
        MainHeading,
        SubHeading,
        Paragraph,
        
    }
}
</script>
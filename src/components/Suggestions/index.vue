<template>
    <section id="suggestions">
        <div class="border-b-2 pb-16"></div>
        <div class="pt-16"></div>
        <MainHeading title="suggestions.heading" />
        <Paragraph text="suggestions.body.p1" />
        <div class="text-headingsColor pt-12">
            <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
                - {{ $t("suggestions.body.bullets.b1") }} <br />
                - {{ $t("suggestions.body.bullets.b2") }} <br />
                - {{ $t("suggestions.body.bullets.b3") }} <br />
                - {{ $t("suggestions.body.bullets.b4") }} <br />
                - {{ $t("suggestions.body.bullets.b5") }} <br />
                - {{ $t("suggestions.body.bullets.b6") }} <br />
                - {{ $t("suggestions.body.bullets.b7") }} <br />
                - {{ $t("suggestions.body.bullets.b8") }} <br />
                - {{ $t("suggestions.body.bullets.b9") }} <br />
                - {{ $t("suggestions.body.bullets.b10") }} <br />
                - {{ $t("suggestions.body.bullets.b11") }} <br />
                - {{ $t("suggestions.body.bullets.b12") }} <br />
                - {{ $t("suggestions.body.bullets.b13") }} <br />
                - {{ $t("suggestions.body.bullets.b14") }} <br />
                - {{ $t("suggestions.body.bullets.b15") }} <br />
                - {{ $t("suggestions.body.bullets.b16") }} <br />
                - {{ $t("suggestions.body.bullets.b17") }} <br />
            </p>
        </div>
    </section>
</template>

<script>
import MainHeading from '../Comman/Heading/mainHeading.vue';
import SubHeading from '../Comman/Heading/subHeading.vue';
import Paragraph from '../Comman/Paragraph';

export default {
    name: "Suggestions",
    components: {
        MainHeading,
        SubHeading,
        Paragraph
    }
}
</script>
<template>
    <section id="howtoapply" class="parent-scroll-element">
        <div class="pt-16"></div>
        <MainHeading title="howToApply.heading" />

        <!-- How to Apply / Round 1 -->
        <section id="howToApply.round1" class="scroll-element">
            <div class="text-headingsColor pt-12">
                <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
                    <SubHeading title="howToApply.round1.heading" />
                    <Paragraph text="howToApply.round1.body.p1" />
                    <Paragraph text="howToApply.round1.body.p2" />
                </p>
            </div>
        </section>

        <!-- How to Apply / Categories -->
        <section id="howToApply.categories" class="scroll-element">
            <div class="pt-6"></div>
            <img src="@/images/grant-categories.png"/>
        </section>

        <!-- How to Apply / Suggestions -->
        <section id="howToApply.suggestions" class="scroll-element">
            <SubHeading title="howToApply.suggestions.heading" />
            <div class="pt-12">
                <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText font-green">{{ $t("howToApply.suggestions.body.p1") }}</p>
            </div>
            <div class="text-headingsColor pt-6">
                <ul class="font-roboto pl-4 text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText font-green customList" >
                <li> {{ $t("howToApply.suggestions.body.bullets.b1") }} </li>
                    <li> {{ $t("howToApply.suggestions.body.bullets.b2") }} </li>
                    <li> {{ $t("howToApply.suggestions.body.bullets.b3") }} </li>
                    <li> {{ $t("howToApply.suggestions.body.bullets.b4") }} </li>
                    <li> {{ $t("howToApply.suggestions.body.bullets.b5") }} </li>
                    <li> {{ $t("howToApply.suggestions.body.bullets.b6") }} </li>
                    <li> {{ $t("howToApply.suggestions.body.bullets.b7") }} </li>
                    <li> {{ $t("howToApply.suggestions.body.bullets.b8") }} </li>
                    <li> {{ $t("howToApply.suggestions.body.bullets.b9") }} </li>
                    <li> {{ $t("howToApply.suggestions.body.bullets.b10") }} </li>
                    <li> {{ $t("howToApply.suggestions.body.bullets.b11") }} </li>
                    <li> {{ $t("howToApply.suggestions.body.bullets.b12") }} </li>
                    <li> {{ $t("howToApply.suggestions.body.bullets.b13") }} </li>
                    <li> {{ $t("howToApply.suggestions.body.bullets.b14") }} </li>
                    <li> {{ $t("howToApply.suggestions.body.bullets.b15") }} </li>
                    <li> {{ $t("howToApply.suggestions.body.bullets.b16") }} </li>
                    <li> {{ $t("howToApply.suggestions.body.bullets.b17") }} </li>
                </ul>
            </div>
        </section>

        <!-- How to Apply / Ready to Go -->
        <section id="howToApply.readytogo" class="scroll-element">
            <div class="text-headingsColor pt-12">
                <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
                    <SubHeading title="howToApply.readyToGo.heading" />
                    <Paragraph text="howToApply.readyToGo.body.p1" />
                </p>
            </div>
        </section>

    </section>

</template>

<script>
import MainHeading from '@/components/Common/MainHeading';
import SubHeading from '@/components/Common/SubHeading';
import Paragraph from '@/components/Common/Paragraph';
import TH from '@/components/Common/TH'
import TD from '@/components/Common/TD'

export default {
    name: "Suggestions",
    components: {
        MainHeading,
        SubHeading,
        Paragraph,
        TH,
        TD
    }
}
</script>

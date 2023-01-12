<template>
    <section id="process">
        <div class="border-b-2 pb-16"></div>
        <div class="pt-16"></div>
        <MainHeading title="grantsProcess.heading" />
        <div class="text-headingsColor pt-12">
            <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
                - {{ $t("grantsProcess.bullets.b1") }} <br />
                - {{ $t("grantsProcess.bullets.b2") }} <br />
                - {{ $t("grantsProcess.bullets.b3") }} <br />
                - {{ $t("grantsProcess.bullets.b4") }} <br />
                - {{ $t("grantsProcess.bullets.b5") }} <br />
                - {{ $t("grantsProcess.bullets.b6") }} <br />
                - {{ $t("grantsProcess.bullets.b7") }} <br />
            </p>
        </div>
        <SubHeading title="grantsProcess.timeline.heading" />
        <div class="text-headingsColor pt-12">
            <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
                - {{ $t("grantsProcess.timeline.bullets.b1") }} <br />
                - {{ $t("grantsProcess.timeline.bullets.b2") }} <br />
                - {{ $t("grantsProcess.timeline.bullets.b3") }} <br />
                - {{ $t("grantsProcess.timeline.bullets.b4") }} <br />
            </p>
        </div>
        <Paragraph text="grantsProcess.phases.body.p1" />
        <!--Step 1-->
        <SubHeading title="grantsProcess.phases.step1.heading" />

        <Paragraph text="grantsProcess.phases.step1.phasesSummary.body.p1" />
        <div class="text-headingsColor pt-12">
            <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
                - {{ $t("grantsProcess.phases.step1.phasesSummary.bullets.b1") }} <br />
                - {{ $t("grantsProcess.phases.step1.phasesSummary.bullets.b2") }} <br />
            </p>
        </div>
        <Paragraph text="grantsProcess.phases.step1.phasesWrapup.body.p1" />

        <!--Step 2-->
        <SubHeading title="grantsProcess.phases.step2.heading" />
        <Paragraph text="grantsProcess.phases.step2.body.p1" />
        <Paragraph text="grantsProcess.phases.step2.body.p2" />
        <Paragraph text="grantsProcess.phases.step2.body.p3" />

        <!--Step 3-->
        <a id="grantsProcess.phases.step3" />
        <SubHeading title="grantsProcess.phases.step3.heading" />
        <Paragraph text="grantsProcess.phases.step3.body.p1" />
        <Paragraph text="grantsProcess.phases.step3.body.p2" />
        <Paragraph text="grantsProcess.phases.step3.body.p3" />
        <Paragraph text="grantsProcess.phases.step3.body.p4" />
        <Paragraph text="grantsProcess.phases.step3.body.p5" />
        <Paragraph text="grantsProcess.phases.step3.mayBeDeclined.body.p1" />

        <div class="text-headingsColor pt-6">
            <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
                - {{ $t("grantsProcess.phases.step3.mayBeDeclined.body.bullets.b1") }} <br />
                - {{ $t("grantsProcess.phases.step3.mayBeDeclined.body.bullets.b2") }} <br />
                - {{ $t("grantsProcess.phases.step3.mayBeDeclined.body.bullets.b3") }} <br />
                - {{ $t("grantsProcess.phases.step3.mayBeDeclined.body.bullets.b4") }} <br />
            </p>
        </div>
        <Paragraph text="grantsProcess.phases.step3.betterChance.body.p1" />
        <div class="text-headingsColor pt-6">
            <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
                - {{ $t("grantsProcess.phases.step3.betterChance.body.bullets.b1") }} <br />
                - {{ $t("grantsProcess.phases.step3.betterChance.body.bullets.b2") }} <br />
                - {{ $t("grantsProcess.phases.step3.betterChance.body.bullets.b3") }} <br />
                - {{ $t("grantsProcess.phases.step3.betterChance.body.bullets.b4") }} <br />
                - {{ $t("grantsProcess.phases.step3.betterChance.body.bullets.b5") }} <br />
            </p>
        </div>
        <Paragraph text="grantsProcess.phases.step3.wrapup.body.p1" />
        <Paragraph text="grantsProcess.phases.step3.wrapup.body.p2" />


        <!--Step 4 -->
        <SubHeading title="grantsProcess.phases.step4.heading" />
        <Paragraph text="grantsProcess.phases.step4.body.p1" />

        <!--Step 5-->
        <SubHeading title="grantsProcess.phases.step5.heading" />
        <Paragraph text="grantsProcess.phases.step5.body.p1" />
        <Paragraph text="grantsProcess.phases.step5.body.p2" />

        <!--Step 6-->
        <SubHeading title="grantsProcess.phases.step6.heading" />
        <Paragraph text="grantsProcess.phases.step6.body.p1" />
        <Paragraph text="grantsProcess.phases.step6.body.p2" />

        <!--Step 7-->
        <SubHeading title="grantsProcess.phases.step7.heading" />
        <Paragraph text="grantsProcess.phases.step7.body.p1" />
        <Paragraph text="grantsProcess.phases.step7.body.p2" />
        <Paragraph text="grantsProcess.phases.step7.body.p3" />
    </section>
</template>
<script>
import MainHeading from '@/components/Comman/MainHeading';
import SubHeading from '@/components/Comman/SubHeading';
import Paragraph from '@/components/Comman/Paragraph';

export default {
    name: "Process",
    components: {
        MainHeading,
        SubHeading,
        Paragraph
    }
}
</script>
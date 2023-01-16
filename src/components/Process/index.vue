<template>
    <section id="grantsProcess" class="parent-scroll-element">
        <MainHeading title="grantsProcess.heading" />

        <!-- Step 1-->
        <div id="grantsProcess.phases.step1" class="scroll-element">
            <Paragraph text="grantsProcess.phases.body.p1" />
            <SubHeading title="grantsProcess.phases.step1.heading" />

            <Paragraph text="grantsProcess.phases.step1.phasesSummary.body.p1" />
            <div class="text-headingsColor pt-12">
                <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
                    - {{ $t("grantsProcess.phases.step1.phasesSummary.bullets.b1") }} <br />
                    - {{ $t("grantsProcess.phases.step1.phasesSummary.bullets.b2") }} <br />
                </p>
            </div>
        </div>

        <!--Step 2-->
        <div id="grantsProcess.phases.step2" class="scroll-element">
            <SubHeading title="grantsProcess.phases.step2.heading" />
            <Paragraph text="grantsProcess.phases.step2.body.p1" />
            <Paragraph text="grantsProcess.phases.step2.body.p2" />
            <Paragraph text="grantsProcess.phases.step2.body.p3" />
        </div>

        <!--Step 3-->
        <div id="grantsProcess.phases.step3" class="scroll-element">
            <SubHeading title="grantsProcess.phases.step3.heading" />
            <Paragraph text="grantsProcess.phases.step3.body.p1" />
            <Paragraph text="grantsProcess.phases.step3.body.p2" />
            <Paragraph text="grantsProcess.phases.step3.body.p3" />
            <Paragraph text="grantsProcess.phases.step3.body.p4" />
            <Paragraph text="grantsProcess.phases.step3.mayBeDeclined.body.p1" />
            <div class="text-headingsColor pt-6">
                <ul class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
                  <li> -{{ $t("grantsProcess.phases.step3.mayBeDeclined.body.bullets.b1") }} </li>
                    <li>- {{ $t("grantsProcess.phases.step3.mayBeDeclined.body.bullets.b2") }} </li>
                    <li>- {{ $t("grantsProcess.phases.step3.mayBeDeclined.body.bullets.b3") }} </li>
                    <li>- {{ $t("grantsProcess.phases.step3.mayBeDeclined.body.bullets.b4") }} </li>
                </ul>
            </div>
            <Paragraph text="grantsProcess.phases.step3.betterChance.body.p1" />
            <div class="text-headingsColor pt-6">
                <ul class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
                    <li>- {{ $t("grantsProcess.phases.step3.betterChance.body.bullets.b1") }} </li>
                    <li>- {{ $t("grantsProcess.phases.step3.betterChance.body.bullets.b2") }} </li>
                    <li>- {{ $t("grantsProcess.phases.step3.betterChance.body.bullets.b3") }} </li>
                    <li>- {{ $t("grantsProcess.phases.step3.betterChance.body.bullets.b4") }} </li>
                    <li>- {{ $t("grantsProcess.phases.step3.betterChance.body.bullets.b5") }} </li>
                </ul>
            </div>
            <Paragraph text="grantsProcess.phases.step3.wrapup.body.p1" />
            <Paragraph text="grantsProcess.phases.step3.wrapup.body.p2" />
        </div>

        <!--Step 4 -->
        <div id="grantsProcess.phases.step4" class="scroll-element">
            <SubHeading title="grantsProcess.phases.step4.heading" />
            <Paragraph text="grantsProcess.phases.step4.body.p1" />
        </div>

        <!--Step 5-->
        <div id="grantsProcess.phases.step5" class="scroll-element">
            <SubHeading title="grantsProcess.phases.step5.heading" />
            <Paragraph text="grantsProcess.phases.step5.body.p1" />
            <Paragraph text="grantsProcess.phases.step5.body.p2" />
        </div>

        <!--Step 6-->
        <div id="grantsProcess.phases.step6" class="scroll-element">
            <SubHeading title="grantsProcess.phases.step6.heading" />
            <Paragraph text="grantsProcess.phases.step6.body.p1" />
            <Paragraph text="grantsProcess.phases.step6.body.p2" />
        </div>

        <!--Step 7-->
        <div id="grantsProcess.phases.step7" class="scroll-element">
            <SubHeading title="grantsProcess.phases.step7.heading" />
            <Paragraph text="grantsProcess.phases.step7.body.p1" />
            <Paragraph text="grantsProcess.phases.step7.body.p2" />
            <Paragraph text="grantsProcess.phases.step7.body.p3" />
        </div>

    </section>
</template>
<script>


import MainHeading from '@/components/Common/MainHeading';
import SubHeading from '@/components/Common/SubHeading';
import Paragraph from '@/components/Common/Paragraph';

export default {
    name: "Process",
    components: {
        MainHeading,
        SubHeading,
        Paragraph,
    }
}
</script>
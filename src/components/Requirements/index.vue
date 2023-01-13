<template>
    <section id="requirements">
        <div class="border-b-2 pb-16"></div>
        <div class="pt-16"></div>
        <MainHeading title="requirements.heading" />
        <div id="requirements.englishOrChinese">
            <SubHeading title="requirements.englishOrChinese.heading" />
            <Paragraph text="requirements.englishOrChinese.body.p1" />
            <Paragraph text="requirements.englishOrChinese.body.p2" />
            <Paragraph text="requirements.englishOrChinese.body.p3" />
        </div>
        <div id="requirements.noRetroactiveFunding">
            <SubHeading title="requirements.noRetroactiveFunding.heading" />
            <Paragraph text="requirements.noRetroactiveFunding.body.p1" />
        </div>
        <div id="requirements.openSource">
            <SubHeading title="requirements.openSource.heading" />
            <Paragraph text="requirements.openSource.body.p1" />
            <div class="text-headingsColor pt-12">
                <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
                    - {{ $t("requirements.openSource.body.bullets.b1") }} <br />
                    - {{ $t("requirements.openSource.body.bullets.b2") }} <br />
                    - {{ $t("requirements.openSource.body.bullets.b3") }} <br />
                </p>
            </div>
            <Paragraph text="requirements.openSource.body.p2" />
            <Paragraph text="requirements.openSource.body.p3" />
            <Paragraph text="requirements.openSource.body.p4" />
        </div>
        <div id="requirements.kycAml">
            <SubHeading title="requirements.kycAml.heading" />
            <Paragraph text="requirements.kycAml.body.p1" />
        </div>
        <div id="requirements.publiclyVisible">
            <SubHeading title="requirements.publiclyVisible.heading" />
            <Paragraph text="requirements.publiclyVisible.body.p1" />
            <Paragraph text="requirements.publiclyVisible.body.p2" />
        </div>
    </section>

</template>
<script>
import MainHeading from '@/components/Comman/MainHeading';
import SubHeading from '@/components/Comman/SubHeading';
import Paragraph from '@/components/Comman/Paragraph';

export default {
    name: "Requirements",
    components: {
        MainHeading,
        SubHeading,
        Paragraph,

    }
}
</script>
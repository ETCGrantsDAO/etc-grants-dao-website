<template>

    <!-- Overview-->
    <section id="overview" class="parent-scroll-element">
        <div class="pt-16"></div>
        <MainHeading  title="overview.heading" />

        <!-- Overview / ETC Grants DAO -->
        <section id="overview.etc-grants-dao" class="scroll-element">
            <div class="pt-4"></div>
            <SubHeading title="overview.etc-grants-dao.heading" />
            <Paragraph text="overview.etc-grants-dao.body.p1" />
            <div class="pt-12">
                <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText font-parrotGreen font-bold">{{ $t("overview.etc-grants-dao.body.p2t") }}</p>
                <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">{{ $t("overview.etc-grants-dao.body.p2") }}</p>
            </div>
            <div class="pt-12">
                <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText font-parrotGreen font-bold">{{ $t("overview.etc-grants-dao.body.p3t") }}</p>
                <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">{{ $t("overview.etc-grants-dao.body.p3") }}</p>
            </div>
            <div class="pt-12">
                <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText font-parrotGreen font-bold">{{ $t("overview.etc-grants-dao.body.p4t") }}</p>
                <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">{{ $t("overview.etc-grants-dao.body.p4") }}</p>
            </div>
            <div class="pt-12">
                <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText font-parrotGreen font-bold">{{ $t("overview.etc-grants-dao.body.p5t") }}</p>
                <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">{{ $t("overview.etc-grants-dao.body.p5") }}</p>
            </div>
        </section>

       <!-- Overview / ETC Grants Program -->
       <section id="overview.etc-grants-program" class="scroll-element">
            <div class="pt-4"></div>
            <SubHeading title="overview.etc-grants-program.heading" />
            <Paragraph text="overview.etc-grants-program.body.p1" />
            <Paragraph text="overview.etc-grants-program.body.p2" />
        </section>

    </section>

</template>
<script>
import MainHeading from '@/components/Common/MainHeading';
import SubHeading from '@/components/Common/SubHeading';
import Paragraph from '@/components/Common/Paragraph';

export default {
    name: "Overview",
    components: {
        MainHeading,
        SubHeading,
        Paragraph
    }
}
</script>
<template>

    <!-- About ETC Grants DAO -->
    <section id="about">
        <MainHeading title="about.heading" />

        <!-- About ETC Grants DAO / Ethereum Classic in 2023 -->
        <section id="about.ethereumClassicIn2023">
            <SubHeading title="about.ethereumClassicIn2023.heading" />
            <Paragraph text="about.ethereumClassicIn2023.body.p1" />
            <Paragraph text="about.ethereumClassicIn2023.body.p2" />           
            <AboutTable/>
            <Paragraph text="about.ethereumClassicIn2023.body.p3" />
            <Paragraph text="about.ethereumClassicIn2023.body.p4" />
        </section>

        <!-- About ETC Grants DAO / Funding -->        
        <section id="about.funding">
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
    
    </section>

</template>
<script>
import MainHeading from '@/components/Common/MainHeading';
import SubHeading from '@/components/Common/SubHeading';
import Paragraph from '@/components/Common/Paragraph';
import AboutTable from './table.vue';

export default {
    name: "About",
    components: {
        MainHeading,
        SubHeading,
        Paragraph,
        AboutTable
    }
}
</script>
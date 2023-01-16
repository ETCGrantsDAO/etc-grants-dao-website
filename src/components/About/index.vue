<template>

    <!-- Overview-->
    <section id="overview" class="parent-scroll-element">
        <MainHeading  title="overview.heading" />

        <!-- Overview / ETC Grants DAO -->
        <section id="overview.etc-grants-dao" class="scroll-element">
            <SubHeading title="overview.etc-grants-dao.heading" />
            <Paragraph text="overview.etc-grants-dao.body.p1" />
            <Paragraph text="overview.etc-grants-dao.body.p2" />
            <Paragraph text="overview.etc-grants-dao.body.p3" />
            <Paragraph text="overview.etc-grants-dao.body.p4" />
            <Paragraph text="overview.etc-grants-dao.body.p5" />
        </section>

       <!-- Overview / ETC Grants Program -->
       <section id="overview.etc-grants-program" class="scroll-element">
            <SubHeading title="overview.etc-grants-program.heading" />
            <Paragraph text="overview.etc-grants-program.body.p1" />
            <Paragraph text="overview.etc-grants-program.body.p2" />
        </section>

       <!-- Overview / Round 1 -->
       <section id="overview.round1" class="scroll-element">
            <SubHeading title="overview.round1.heading" />
            <Paragraph text="overview.round1.body.p1" />
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
<template>
    <section id="about">
        <!-- About ETC Grants DAO -->
        <!-- Main Heading -->
        <MainHeading title="about.heading" />

        <!-- About ETC Grants DAO / Ethereum Classic in 2023 -->
        <!-- SubHeading -->
        <SubHeading title="about.ethereumClassicIn2023.heading" />

        <!-- Paragraph defined here-->

        <Paragraph text="about.ethereumClassicIn2023.body.p1" />
        <Paragraph text="about.ethereumClassicIn2023.body.p2" />

        <!--Table of ETC Grants-->
        <Table />

        <Paragraph text="about.ethereumClassicIn2023.body.p3" />
        <Paragraph text="about.ethereumClassicIn2023.body.p4" />
    </section>

</template>
<script>
import MainHeading from '@/components/Comman/MainHeading';
import SubHeading from '@/components/Comman/SubHeading';
import Paragraph from '@/components/Comman/Paragraph';
import Table from '@/components/Table';

export default {
    name: "About",
    components: {
        MainHeading,
        SubHeading,
        Paragraph,
        Table
    }
}
</script>
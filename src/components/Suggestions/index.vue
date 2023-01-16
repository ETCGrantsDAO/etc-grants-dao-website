<template>
    <section id="suggestions">
        <div class="pt-16"></div>
        <MainHeading title="suggestions.heading" />
        <Paragraph text="suggestions.body.p1" />
        <div class="text-headingsColor pt-12">
            <ul class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
               <li> - {{ $t("suggestions.body.bullets.b1") }} </li>
                <li>- {{ $t("suggestions.body.bullets.b2") }} </li>
                <li>- {{ $t("suggestions.body.bullets.b3") }} </li>
                <li>- {{ $t("suggestions.body.bullets.b4") }} </li>
                <li>- {{ $t("suggestions.body.bullets.b5") }} </li>
                <li>- {{ $t("suggestions.body.bullets.b6") }} </li>
                <li>- {{ $t("suggestions.body.bullets.b7") }} </li>
                <li>- {{ $t("suggestions.body.bullets.b8") }} </li>
                <li>- {{ $t("suggestions.body.bullets.b9") }} </li>
                <li>- {{ $t("suggestions.body.bullets.b10") }} </li>
                <li>- {{ $t("suggestions.body.bullets.b11") }} </li>
                <li>- {{ $t("suggestions.body.bullets.b12") }} </li>
                <li>- {{ $t("suggestions.body.bullets.b13") }} </li>
                <li>- {{ $t("suggestions.body.bullets.b14") }} </li>
                <li>- {{ $t("suggestions.body.bullets.b15") }} </li>
                <li>- {{ $t("suggestions.body.bullets.b16") }} </li>
                <li>- {{ $t("suggestions.body.bullets.b17") }} </li>
            </ul>
        </div>
    </section>

    <div class="text-headingsColor pt-12">
        <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
            <SubHeading title="categories.heading" />
            <Paragraph text="categories.body.p1" />
        </p>
    </div>
    <GrantCategoriesTable/>

    <div class="text-headingsColor pt-12">
        <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
            <SubHeading title="suggestions.timeline.heading" />
            <Paragraph text="suggestions.timeline.body.p1" />
            <Paragraph text="suggestions.timeline.body.p2" />
        </p>
    </div>

    <div class="text-headingsColor pt-12">
        <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
            <SubHeading title="suggestions.readyToGo.heading" />
            <Paragraph text="suggestions.readyToGo.body.p1" />
        </p>
    </div>

</template>

<script>
import MainHeading from '@/components/Common/MainHeading';
import SubHeading from '@/components/Common/SubHeading';
import Paragraph from '@/components/Common/Paragraph';
import GrantCategoriesTable from './table.vue';

export default {
    name: "Suggestions",
    components: {
        MainHeading,
        SubHeading,
        Paragraph,
        GrantCategoriesTable
    }
}
</script>

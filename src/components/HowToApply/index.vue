<template>
    <section id="howtoapply" class="parent-scroll-element">
        <div class="pt-16"></div>
        <MainHeading title="howToApply.heading" />
        <Paragraph text="howToApply.body.p1" />
        <div class="text-headingsColor pt-12">
            <ul class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
               <li> - {{ $t("howToApply.body.bullets.b1") }} </li>
                <li>- {{ $t("howToApply.body.bullets.b2") }} </li>
                <li>- {{ $t("howToApply.body.bullets.b3") }} </li>
                <li>- {{ $t("howToApply.body.bullets.b4") }} </li>
                <li>- {{ $t("howToApply.body.bullets.b5") }} </li>
                <li>- {{ $t("howToApply.body.bullets.b6") }} </li>
                <li>- {{ $t("howToApply.body.bullets.b7") }} </li>
                <li>- {{ $t("howToApply.body.bullets.b8") }} </li>
                <li>- {{ $t("howToApply.body.bullets.b9") }} </li>
                <li>- {{ $t("howToApply.body.bullets.b10") }} </li>
                <li>- {{ $t("howToApply.body.bullets.b11") }} </li>
                <li>- {{ $t("howToApply.body.bullets.b12") }} </li>
                <li>- {{ $t("howToApply.body.bullets.b13") }} </li>
                <li>- {{ $t("howToApply.body.bullets.b14") }} </li>
                <li>- {{ $t("howToApply.body.bullets.b15") }} </li>
                <li>- {{ $t("howToApply.body.bullets.b16") }} </li>
                <li>- {{ $t("howToApply.body.bullets.b17") }} </li>
            </ul>
        </div>
    </section>

    <div class="text-headingsColor pt-12">
        <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
            <SubHeading title="howToApply.categories.heading" />
            <Paragraph text="howToApply.categories.body.p1" />
        </p>
    </div>

    <table
    class="rounded-[5px] overflow-hidden border-t-4 border-b-[12px] border-l-4 border-r-4 text-base mx-auto sm:w-tableDesktopWidth ml-tableMobile mr-tableMobile xs:ml-0 xs:mr-0 pr-9 bg-tableBackground font-dmSans md:text-lg rounded mt-12 md:border-r-fourty md:border-l-fourty">
        <thead>
            <tr>
                <TH text="howToApply.categories.table.tableHeading1" />
                <TH text="howToApply.categories.table.tableHeading2" />
                <TH text="howToApply.categories.table.tableHeading3" />
            </tr>
        </thead>
        <tbody>
            <tr>
                <TD text="howToApply.categories.table.tableCol1-1" />
                <TD text="howToApply.categories.table.tableCol2-1" />
                <TD text="howToApply.categories.table.tableCol3-1" />
            </tr>
            <tr>
                <TD text="howToApply.categories.table.tableCol1-2" />
                <TD text="howToApply.categories.table.tableCol2-2" />
                <TD text="howToApply.categories.table.tableCol3-2" />
            </tr>
            <tr>
                <TD text="howToApply.categories.table.tableCol1-3" />
                <TD text="howToApply.categories.table.tableCol2-3" />
                <TD text="howToApply.categories.table.tableCol3-3" />
            </tr>
            <tr>
                <TD text="howToApply.categories.table.tableCol1-4" />
                <TD text="howToApply.categories.table.tableCol2-4" />
                <TD text="howToApply.categories.table.tableCol3-4" />
            </tr>
        </tbody>
    </table>

    <div class="text-headingsColor pt-12">
        <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
            <SubHeading title="howToApply.timeline.heading" />
            <Paragraph text="howToApply.timeline.body.p1" />
            <Paragraph text="howToApply.timeline.body.p2" />
        </p>
    </div>

    <div class="text-headingsColor pt-12">
        <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
            <SubHeading title="howToApply.readyToGo.heading" />
            <Paragraph text="howToApply.readyToGo.body.p1" />
        </p>
    </div>

</template>

<script>
import MainHeading from '@/components/Common/MainHeading';
import SubHeading from '@/components/Common/SubHeading';
import Paragraph from '@/components/Common/Paragraph';

export default {
    name: "Suggestions",
    components: {
        MainHeading,
        SubHeading,
        Paragraph,
    }
}
</script>

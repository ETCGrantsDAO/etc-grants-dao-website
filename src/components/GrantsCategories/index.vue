<template>
    <section id="categories">

        <div class="border-b-2 pb-16"></div>
        <div class="pt-10">
            <MainHeading title="categories.heading" />
        </div>
        <Paragraph text="categories.body.p1" />
        <GrantCategoriesTable/>
    </section>

</template>


<script>
import MainHeading from '@/components/Common/MainHeading';
import SubHeading from '@/components/Common/SubHeading';
import Paragraph from '@/components/Common/Paragraph';
import GrantCategoriesTable from './table.vue';

export default {
    name: "GrantCategories",
    components: {
        MainHeading,
        SubHeading,
        Paragraph,
        GrantCategoriesTable
    }
}
</script>
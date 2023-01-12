<template>
    <section id="categories">

        <div class="border-b-2 pb-16"></div>
        <div class="pt-10">
            <MainHeading title="categories.heading" />
        </div>
        <Paragraph text="categories.body.p1" />
        <SubHeading title="categories.general.heading" />
        <Paragraph text="categories.general.body.p1" />
        <SubHeading title="categories.targeted.heading" />
        <Paragraph text="categories.targeted.body.p2" />
        <!--Types-->
        <SubHeading title="categories.types.heading" />
    </section>

</template>
<script>
import MainHeading from '../Comman/Heading/mainHeading.vue';
import SubHeading from '../Comman/Heading/subHeading.vue';
import Paragraph from '../Comman/Paragraph';

export default {
    name: "GrantCategories",
    components: {
        MainHeading,
        SubHeading,
        Paragraph,

    }
}
</script>
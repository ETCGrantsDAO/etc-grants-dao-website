<template>
    <section id="resources" class="parent-scroll-element mt-6">
        <div class="pt-16"></div>
        <MainHeading title="resources.heading" />

        <!-- Resources / ETC Community-->
        <div id="resources.etc-community" class="scroll-element">
            <SubHeading title="resources.etc-community.body.development.text" />
        </div>
        <section>
            <LinkRender :links="devResourcesLinks" />

            <!-- Resources / ETC Grants DAO -->
            <div id="resources.etc-grants-dao" class="scroll-element">
                <SubHeading title="resources.etc-grants-dao.heading" />
            </div>

            <LinkRender :links="socialLinks" :additionalText="etcGrantsAdditionalText" />

            <section>
                <div class="pt-6"></div>
                <img src="@/images/wechat-group.png" />
            </section>

            <!-- Resources / FAQ -->
            <div id="resources.faqs" class="scroll-element">
                <SubHeading title="resources.faqs.heading" />
            </div>

            <LinkRender :links="faqLinks" />
        </section>

    </section>
</template>

<script>
import MainHeading from '@/components/Common/MainHeading';
import SubHeading from '@/components/Common/SubHeading';
import Paragraph from '@/components/Common/Paragraph';
import LinkRender from '@/components/Common/LinkRender';

export default {
    name: "Resources",
    data() {
        return {
            etcGrantsAdditionalText: 'resources.etc-grants-dao.body.wechat.text',
            socialLinks: [
                {
                    url: this.$t('resources.etc-grants-dao.body.twitter.link'),
                    text: this.$t('resources.etc-grants-dao.body.twitter.text')
                },
                {
                    url: this.$t('resources.etc-grants-dao.body.telegram.link'),
                    text: this.$t('resources.etc-grants-dao.body.telegram.text')
                },
                {
                    url: this.$t('resources.etc-grants-dao.body.github.link'),
                    text: this.$t("resources.etc-grants-dao.body.github.text")
                }
            ],
            faqLinks: [
                {
                    url: this.$t('resources.faqs.body.why-classic.link'),
                    text: this.$t('resources.faqs.body.why-classic.text')
                },
                {
                    url: this.$t('resources.faqs.body.developer-faqs.link'),
                    text: this.$t('resources.faqs.body.developer-faqs.text')
                },
            ],
            devResourcesLinks: [
                {
                    url: this.$t('resources.etc-community.body.development.link'),
                    text: this.$t('resources.etc-community.body.development.text')
                },
                {
                    url: this.$t('resources.etc-community.body.community.link'),
                    text: this.$t('resources.etc-community.body.community.text')
                },
            ],
        }
    },
    components: {
        MainHeading,
        SubHeading,
        Paragraph,
        LinkRender,
    },
}
</script>

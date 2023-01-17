<template>
    <section id="resources" class="parent-scroll-element">
        <div class="pt-16"></div>
        <MainHeading title="resources.heading" />

        <!-- How to Apply / Round 1 -->
        <section>
            <div class="text-headingsColor pt-12">
                <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
                    {{  $t("resources.body.etc-community.heading") }}
                    <br/>
                    -
                    <u>
                        <a href="https://ethereumclassic.org/development">
                            {{ $t("resources.body.etc-community.development.text") }}
                        </a>
                    </u>
                    <br/>
                    -
                    <u>
                        <a href="https://ethereumclassic.org/community">
                            {{ $t("resources.body.etc-community.community.text") }}
                        </a>
                    </u>
                </p>
            </div>
            <div class="text-headingsColor pt-12">
                <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
                    {{  $t("resources.body.etc-grants-dao.heading") }}
                    <br/>
                    -
                    <u>
                        <a href="https://twitter.com/etcgrantsdao">
                            {{ $t("resources.body.etc-grants-dao.twitter.text") }}
                        </a>
                    </u>
                    <br/>
                    -
                    <u>
                        <a href="https://t.me/+HFT390x76c4zYWRh">
                            {{ $t("resources.body.etc-grants-dao.telegram.text") }}
                        </a>
                    </u>
                    <br/>
                    -
                    <u>
                        <a href="https://etcgrantsdao.notion.site/Wechat-group-b747ef7d2321459485aecbcbf382c6ab">
                            {{ $t("resources.body.etc-grants-dao.wechat.text") }}
                        </a>
                    </u>
                    <br/>
                    -
                    <u>
                        <a href="https://github.com/etcgrantsdao/etc-grants-dao-website">
                            {{ $t("resources.body.etc-grants-dao.github.text") }}
                        </a>
                    </u>
                </p>
            </div>
            <div class="text-headingsColor pt-12">
                <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
                    {{  $t("resources.body.faqs.heading") }}
                    <br/>
                    -
                    <u>
                        <a href="https://ethereumclassic.org/why-classic">
                            {{ $t("resources.body.faqs.why-classic.text") }}
                        </a>
                    </u>
                    <br/>
                    -
                    <u>
                        <a href="https://ethereumclassic.org/faqs/developers">
                            {{ $t("resources.body.faqs.developer-faqs.text") }}
                        </a>
                    </u>
                </p>
            </div>
        </section>

    </section>
</template>

<script>
import MainHeading from '@/components/Common/MainHeading';
import SubHeading from '@/components/Common/SubHeading';
import Paragraph from '@/components/Common/Paragraph';

export default {
    name: "Resources",
    components: {
        MainHeading,
        SubHeading,
        Paragraph,
    }
}
</script>

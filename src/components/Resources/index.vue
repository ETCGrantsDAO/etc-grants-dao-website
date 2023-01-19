<template>
    <section id="resources" class="parent-scroll-element mt-6">
        <div class="pt-16"></div>
        <MainHeading title="resources.heading" />

        <!-- Resources / ETC Community-->
        <div id="resources.etc-community" class="scroll-element">
            <SubHeading title="resources.etc-community.body.development.text" />
        </div>
        <section>
            <div class="text-headingsColor pt-4">
                <div class="text-headingsColor pt-6">
                    <ul class="font-roboto pl-4 text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText font-green customList" >
                        <li>
                            <u>
                                <a href="https://ethereumclassic.org/development">
                                    {{ $t("resources.etc-community.body.development.text") }}
                                    </a>
                            </u>
                        </li>
                        <li>
                            <u>
                                <a href="https://ethereumclassic.org/community">
                                {{ $t("resources.etc-community.body.community.text") }}
                                </a>
                            </u>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Resources / ETC Grants DAO -->
            <div id="resources.etc-grants-dao" class="scroll-element">
                <SubHeading title="resources.etc-grants-dao.heading" />
            </div>

            <div class="text-headingsColor pt-6">
                <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText text-parrotGreen">
                    <div class="text-headingsColor pt-6">
                        <ul class="font-roboto pl-4 text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText font-green customList" >
                            <li>
                                <u>
                                    <a href="https://twitter.com/etcgrantsdao">
                                        {{ $t("resources.etc-grants-dao.body.twitter.text") }}
                                    </a>
                                </u>
                            </li>
                            <li>
                                <u>
                                    <a href="https://t.me/+HFT390x76c4zYWRh">
                                        {{ $t("resources.etc-grants-dao.body.telegram.text") }}
                                    </a>
                                 </u>
                            </li>
                            <li>
                                <u>
                                    <a href="https://github.com/etcgrantsdao/etc-grants-dao-website">
                                        {{ $t("resources.etc-grants-dao.body.github.text") }}
                                    </a>
                                 </u>
                            </li>
                            <li>
                                {{ $t("resources.etc-grants-dao.body.wechat.text") }}
                            </li>
                        </ul>
                    </div>
                </p>
            </div>

            <section>
                <div class="pt-6"></div>
                <img src="@/images/wechat-group.png"/>
            </section>

            <!-- Resources / FAQ -->
            <div id="resources.faqs" class="scroll-element">
                <SubHeading title="resources.faqs.heading" />
            </div>
            
            <div class="text-headingsColor pt-6">
                <p class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText text-parrotGreen">
                    <div class="text-headingsColor pt-6">
                        <ul class="font-roboto pl-4 text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText font-green customList" >
                            <li>
                                <u>
                                    <a href="https://ethereumclassic.org/why-classic">
                                        {{ $t("resources.faqs.body.why-classic.text") }}
                                    </a>
                                </u>
                            </li>
                            <li>
                                <u>
                                    <a href="https://ethereumclassic.org/faqs/developers">
                                        {{ $t("resources.faqs.body.developer-faqs.text") }}
                                    </a>
                                </u>
                            </li>
                        </ul>
                    </div>
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

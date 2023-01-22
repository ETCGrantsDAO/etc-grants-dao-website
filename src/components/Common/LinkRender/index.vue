<template>
    <div class="text-headingsColor">
        <p
            class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText text-parrotGreen">
        <div class="text-headingsColor pt-6">
            <ul
                class="font-roboto pl-4 text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText font-green customList">
                <li v-for="link in links">
                    <u>
                        <a :href="link.url">
                            {{ link.text }}
                        </a>
                    </u>
                </li>
                <li v-if="additionalText.length > 0">
                    {{ $t(additionalText) }}
                </li>
            </ul>
        </div>
        </p>
    </div>
</template>
<script>
export default {
    name: 'LinkRender',
    props: {
        links: {
            type: Array,
            default: []
        },
        additionalText: {
            type: String,
            default: ''
        }
    }
}
</script>
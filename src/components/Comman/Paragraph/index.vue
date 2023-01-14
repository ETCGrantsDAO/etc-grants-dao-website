<template>
    <div class="pt-12">
        <p
          class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
          {{
            $t(text, {
                link1: 'https://etccooperative.org/posts/2022-11-16-outline-of-xmei-lins-and-bob-summerwills-speeches-at-bitmain-wdsm-global-2022-en">',
                link2: 'LINK2'
            })
            }}
        </p>
    </div>
</template>

<script>
export default {
    name: "Paragraph",
    props: ['text']
}
</script>
<template>
    <div class="pt-6">
        <p
          v-if="!isTextContainingLink"
          class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
          {{ $t(text) }}
        </p>
        <p v-else class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText" v-html="$t(newText)">
        </p>
    </div>
</template>

<script>
export default {
    name: "Paragraph",
    data() {
        return {
            isTextContainingLink: false,
            newText: ''
        }
    },
    props: ['text'],
    beforeMount() {
        const translation = this.$t(this.text);
        if(translation.includes(`"`)) {
            this.isTextContainingLink = true;

            const result = translation.split(` `).map((val) => {
                if (val.includes(`"`)) {
                    const regExp = /\"(.*?)\"/
                    const key = (regExp.exec(val))[1];
                    const linkText = this.$t(`${key}-text`);
                    const linkUrl = this.$t(`${key}-url`);

                    const html = `<a href=${linkUrl} class="cursor-pointer underline text-parrotGreen"><span>${linkText}</span></a>
                    `;

                    return html;
                }

                return val;
            });

            this.newText = result.join(' ');
        }
    }
}
</script>
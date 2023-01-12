<template>
    <div class="pt-12">
        <p
          class="font-roboto text-textColor text-base md:text-heroTextMobile md:leading-thirtyThree righttSecText">
          {{ $t(text) }}
        </p>
    </div>
</template>

<script>
export default {
    name: "Paragraph",
    props: ['text']
}
</script>
<template>
    <div class="">
        <h1 class="font-notoSans text-headingsColor text-thirtyTwo md:text-fourty leading-rightHeadingsDt font-bold">
            {{ $t(title) }}
        </h1>
    </div>
</template>

<script>
export default {
    name: "MainHeading",
    props: ['title']
}
</script>
<template>
    <td class="pl-1 pt-5 pr-7 pb-4 text-left">    {{ $t(text) }}</td>
</template>
<script>
export default {
    name: "TD",
    props: ['text']
}
</script>
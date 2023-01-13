<template>
    <td class="pl-1 pt-2 text-left">    {{ $t(text) }}</td>
</template>
<script>
export default {
    name: "TD",
    props: ['text']
}
</script>
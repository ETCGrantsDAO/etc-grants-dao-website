<template>
    <th
    class="overflow-hidden text-left border-b-[2.5px] border-solid border-tableHBorder pl-1 pr-7 pt-2 font-notoSans leading-8">
    
    {{ $t(text) }}
  </th>
</template>
<script>
export default {
    name: "TH",
    props: ['text', 'style']
}
</script>
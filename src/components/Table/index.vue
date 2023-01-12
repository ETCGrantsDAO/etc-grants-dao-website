<template>
    <table
    class="rounded-[5px] overflow-hidden border-t-4 border-b-[12px] border-l-4 border-r-4 text-base mx-auto sm:w-tableDesktopWidth ml-tableMobile mr-tableMobile xs:ml-0 xs:mr-0 pr-9 bg-tableBackground font-dmSans md:text-lg rounded mt-12 md:border-r-fourty md:border-l-fourty">
    <thead>
      <tr>
        <th
          class="overflow-hidden text-left border-b-[2.5px] border-solid border-tableHBorder pl-1 pt-2 font-notoSans leading-8">
          {{ $t("about.table.tableHeading1") }}
        </th>
        <th
          class="overflow-hidden text-left border-b-[2.5px] border-solid border-tableHBorder pl-1 pt-2 font-notoSans leading-8">
          {{ $t("about.table.tableHeading2") }}
        </th>
        <th
          class="overflow-hidden text-left border-b-[2.5px] border-solid border-tableHBorder pl-1 pt-2 font-notoSans leading-8">
          {{ $t("about.table.tableHeading3") }}
        </th>
        <th
          class="overflow-hidden text-left border-b-[2.5px] border-solid border-tableHBorder pl-1 pt-2 font-notoSans leading-8">
          {{ $t("about.table.tableHeading4") }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol1-1") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol2-1") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol3-1") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol4-1") }}</td>
      </tr>
      <tr>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol1-2") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol2-2") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol3-2") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol4-2") }}</td>
      </tr>
      <tr>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol1-3") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol2-3") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol3-3") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol4-3") }}</td>
      </tr>
      <tr class="bg-parrotGreen font-bold">
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol1-4") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol2-4") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol3-4") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol4-4") }}</td>
      </tr>
      <tr>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol1-5") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol2-5") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol3-5") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol4-5") }}</td>
      </tr>
      <tr>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol1-6") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol2-6") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol3-6") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol4-6") }}</td>
      </tr>
      <tr>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol1-7") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol2-7") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol3-7") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol4-7") }}</td>
      </tr>
      <tr>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol1-8") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol2-8") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol3-8") }}</td>
        <td class="pl-1 pt-2 text-left">{{ $t("about.table.tableCol4-8") }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
    name: "Table"
}
</script>
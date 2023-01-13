

<template>
  <table
    class="rounded-[5px] overflow-hidden border-t-4 border-b-[12px] border-l-4 border-r-4 text-base mx-auto sm:w-tableDesktopWidth ml-tableMobile mr-tableMobile xs:ml-0 xs:mr-0 pr-9 bg-tableBackground font-dmSans md:text-lg rounded mt-12 md:border-r-fourty md:border-l-fourty">
    <thead>
      <tr>
        <TH text="categories.table.tableHeading1" />
        <TH text="categories.table.tableHeading2" />
        <TH text="categories.table.tableHeading3" />
      </tr>
    </thead>
    <tbody>
      <tr>
        <TD text="categories.table.tableCol1-1" />
        <TD text="categories.table.tableCol2-1" />
        <TD text="categories.table.tableCol3-1" />
      </tr>
      <tr>
        <TD text="categories.table.tableCol1-2" />
        <TD text="categories.table.tableCol2-2" />
        <TD text="categories.table.tableCol3-2" />
      </tr>
      <tr>
        <TD text="categories.table.tableCol1-3" />
        <TD text="categories.table.tableCol2-3" />
        <TD text="categories.table.tableCol3-3" />
      </tr>
      <tr>
        <TD text="categories.table.tableCol1-4" />
        <TD text="categories.table.tableCol2-4" />
        <TD text="categories.table.tableCol3-4" />
      </tr>
    </tbody>
  </table>
</template>

<script>
import TH from '@/components/Comman/TH'
import TD from '@/components/Comman/TD'
export default {
  name: "Table",
  components: {
    TH,
    TD
  },
}
</script>
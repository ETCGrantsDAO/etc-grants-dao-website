

<template>
  <table
    class="rounded-[5px] overflow-hidden border-t-4 border-b-[12px] border-l-4 border-r-4 text-base mx-auto sm:w-tableDesktopWidth ml-tableMobile mr-tableMobile xs:ml-0 xs:mr-0 pr-9 bg-tableBackground font-dmSans md:text-lg rounded mt-12 md:border-r-fourty md:border-l-fourty">
    <thead>
      <tr>
        <TH text="about.table.tableHeading1" />
        <TH text="about.table.tableHeading2" />
        <TH text="about.table.tableHeading3" />
        <TH text="about.table.tableHeading4" />
      </tr>
    </thead>
    <tbody>
      <tr>
        <TD text="about.table.tableCol1-1" />
        <TD text="about.table.tableCol2-1" />
        <TD text="about.table.tableCol3-1" />
        <TD text="about.table.tableCol4-1" />
      </tr>
      <tr>
        <TD text="about.table.tableCol1-2" />
        <TD text="about.table.tableCol2-2" />
        <TD text="about.table.tableCol3-2" />
        <TD text="about.table.tableCol4-4" />
      </tr>
      <tr>
        <TD text="about.table.tableCol1-3" />
        <TD text="about.table.tableCol2-3" />
        <TD text="about.table.tableCol3-3" />
        <TD text="about.table.tableCol4-3" />
      </tr>
      <tr class="bg-parrotGreen font-bold">
        <TD text="about.table.tableCol1-4" />
        <TD text="about.table.tableCol2-4" />
        <TD text="about.table.tableCol3-4" />
        <TD text="about.table.tableCol4-4" />
      </tr>
      <tr>
        <TD text="about.table.tableCol1-5" />
        <TD text="about.table.tableCol2-5" />
        <TD text="about.table.tableCol3-5" />
        <TD text="about.table.tableCol4-5" />
      </tr>
      <tr>
        <TD text="about.table.tableCol1-6" />
        <TD text="about.table.tableCol2-6" />
        <TD text="about.table.tableCol3-6" />
        <TD text="about.table.tableCol4-6" />
      </tr>
      <tr>
        <TD text="about.table.tableCol1-7" />
        <TD text="about.table.tableCol2-7" />
        <TD text="about.table.tableCol3-7" />
        <TD text="about.table.tableCol4-7" />
      </tr>
      <tr>
        <TD text="about.table.tableCol1-8" />
        <TD text="about.table.tableCol2-8" />
        <TD text="about.table.tableCol3-8" />
        <TD text="about.table.tableCol4-8" />
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
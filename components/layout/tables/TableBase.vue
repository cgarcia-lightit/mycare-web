<template>
  <table class="table-auto w-3/4 border rounded-lg">
    <thead>
      <tr class="bg-gray-50 h-12 text-gray-500  mx-2 text-xs leading-4 font-medium uppercase tracking-wider">
        <slot name="headers"/>
      </tr>
    </thead>
    <tbody>
      <slot name="body"/>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TableBase'
}
</script>

<style scoped>

tbody tr {
  color: #111827;
  height: 50px;
}

tbody tr:nth-child(even) {
  background-color: #F9FAFB;
}

tbody tr td {
  padding-left: 2rem;
  padding-right: 2rem;
}

table {
  margin-left: 120px;
  border-spacing: 0;
  border-collapse: separate;
}
table tbody tr:last-child td:last-child {
  border-bottom-right-radius:0.5rem;
}

table tbody tr:last-child td:first-child {
  border-bottom-left-radius:0.5rem;
}

table thead tr:first-child th:first-child,
  table thead tr:first-child td:first-child {
  border-top-left-radius:0.5rem
}

table tr:first-child th:last-child,
  table thead tr:first-child td:last-child {
  border-top-right-radius:0.5rem
}

</style>

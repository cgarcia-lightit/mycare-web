<template>
  <div>
    <pill-base type="default">
      Done
    </pill-base>
    <input-base id="saraza2" type="text" label="default"></input-base>
    <input-file id="Archivo"/>
    <text-area id="saraza" label="saraza"/>
    <text-base type="label">
      Sarazaaas daskjdiasjdi asjdijasdijasidjasijas
    </text-base>
    <table-base>
      <template v-slot:headers>
        <td v-for="(header, key) in ['ColumnA', 'ColumnB']" v-bind:key="key" >
          {{ header }}
        </td>
      </template>
      <template v-slot:body>
        <tr>
          <td>
            saraza
          </td>
          <td>
            saraza
          </td>
        </tr>
        <tr>
          <td>
            saraza
          </td>
          <td>
            saraza
          </td>
        </tr>
        <tr>
          <td>
            saraza
          </td>
          <td>
            saraza
          </td>
        </tr>
        <tr>
          <td>
            saraza
          </td>
          <td>
            saraza
          </td>
        </tr>
      </template>
    </table-base>
  </div>
</template>

<script>
import PillBase from '~/components/layout/pills/PillBase'
import InputBase from '~/components/layout/form/InputBase'
import TextArea from '~/components/layout/form/TextAreaBase'
import TextBase from '~/components/layout/typography/TextBase'
import InputFile from '~/components/layout/form/InputFile'
import TableBase from '~/components/layout/tables/TableBase'
export default {
  name: 'IndexPage',
  components: { TableBase, InputFile, TextBase, TextArea, InputBase, PillBase },
  mounted () {
    this.$toast.info('Ha ocurrido un error en el sistema necesitamos hacer varias cosas mas', {
      duration: 0
    })
  }
}
</script>

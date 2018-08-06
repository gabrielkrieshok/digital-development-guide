import Vue from 'vue'
import ICT4DTable from './ICT4DTable.vue'
import TableComponent from 'vue-table-component'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)

Vue.use(TableComponent)

TableComponent.settings({
  tableClass: '',
  theadClass: '',
  tbodyClass: '',
  filterPlaceholder: 'Filter table…',
  filterNoResults: 'There are no matching rows'
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(ICT4DTable)
})

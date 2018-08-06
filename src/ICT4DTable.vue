<template>

<div id="app">

<h1>ICT4D Guide Table</h1>
<h2><a href="https://docs.google.com/forms/d/e/1FAIpQLSc-AJe5Ft3pfyRTWA37U3ZphcV7CqHeNxMmWbmDJ_HF2b4IZQ/viewform" target="_blank">Add a link to the ICT4D Guide</a></h2>

<table-component
    :data="entries"
    sort-by="gsx$name.$t"
    sort-order="asc">
    <table-column show="gsx$name.$t" label="Name">
      <template slot-scope="row">
        <a :href="row.gsx$website.$t">{{ row.gsx$name.$t }}</a>
      </template>
    </table-column>
    <table-column show="gsx$description.$t" label="Description"></table-column>
    <table-column show="gsx$categories.$t" label="Categories"></table-column>
 </table-component>



</div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      entries: [],
      sheetUrl: 'https://spreadsheets.google.com/feeds/list/1isnujIFjtKXOQMUSTcV9eMrViyyTjtaJFIJmSCMES0s/1/public/values?alt=json'
    }
  },
  watch: {
    currentPage: 'fetchData'
  },
  created: function () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', self.sheetUrl)
      xhr.onload = function () {
        self.entries = JSON.parse(xhr.responseText)
        self.entries = self.entries.feed.entry
      }
      xhr.send()
    }
  }
}
</script>

<style>

body {
  margin: 200px;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1em;
}

*,
*:after,
*:before {
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.table-component {
  display: flex;
  flex-direction: column;
}

.table-component__filter {
  align-self: flex-end;
}

.table-component__filter__field {
  padding: 0 1.25em 0 .75em;
  height: 2.5em;
  border: solid 2px #e0e0e0;
  border-radius: 2em;
  font-size: inherit;
}

.table-component__filter__clear {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2em;
  color: #007593;
  font-weight: bold;
  cursor: pointer;
}

.table-component__filter__field:focus {
  outline: 0;
  border-color: #007593;
}

.table-component__table-wrapper {
  overflow-x: auto;
  margin: 1em 0;
  width: 100%;
  border: solid 1px #ddd;
  border-bottom: none;
}

.table-component__table {
  min-width: 100%;
  border-collapse: collapse;
  border-bottom: solid 1px #ddd;
  table-layout: fixed;
}

.table-component__table__caption {
  position: absolute;
  top: auto;
  left: -10000px;
  overflow: hidden;
  width: 1px;
  height: 1px;
}

.table-component__table th,
.table-component__table td {
  padding: .75em 1.25em;
  vertical-align: top;
  text-align: left;
}

.table-component__table th {
  background-color: #e0e0e0;
  color: #999;
  text-transform: uppercase;
  white-space: nowrap;
  font-size: .85em;
}

.table-component__table tbody tr:nth-child(even) {
  background-color: #f0f0f0;
}

.table-component__table a {
  color: #007593;
}

.table-component__message {
  color: #999;
  font-style: italic;
}

.table-component__th--sort,
.table-component__th--sort-asc,
.table-component__th--sort-desc {
  text-decoration: underline;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.table-component__th--sort-asc:after,
.table-component__th--sort-desc:after {
  position: absolute;
  left: .25em;
  display: inline-block;
  color: #bbb;
}

.table-component__th--sort-asc:after {
  content: '↑';
}

.table-component__th--sort-desc:after {
  content: '↓';
}



</style>

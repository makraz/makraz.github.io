import Vue from 'vue'

const options = { year: 'numeric', month: 'long', day: 'numeric' }

Vue.filter('formatDate', (dateStr) =>
  new Date(dateStr).toLocaleDateString('en', options)
)

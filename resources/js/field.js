Nova.booting((Vue, router) => {
  Vue.component('barnoussi-default-field', require('./components/DefaultField'))
  Vue.component('barnoussi-panel-item', require('./components/PanelItem'))

  Vue.component('index-nova-json', require('./components/IndexField'));
  Vue.component('detail-nova-json', require('./components/DetailField'));
  Vue.component('form-nova-json', require('./components/FormField'));
});

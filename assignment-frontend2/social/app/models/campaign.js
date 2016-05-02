import DS from 'ember-data'

export default Model.extend({
  name: DS.attribute('string')
  projects: DS.hasMany('projects')
});

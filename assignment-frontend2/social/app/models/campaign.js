import DS from 'ember-data'
import Model from 'ember-data/model';

export default Model.extend({
  name: DS.attribute('string'),
  projects: DS.hasMany('project')
});

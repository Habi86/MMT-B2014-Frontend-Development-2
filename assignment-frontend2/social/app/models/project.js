//import Model from 'ember-data/model';
import DS from 'ember-data'
import Model from 'ember-data/model'

export default Model.extend({
  name: DS.attr('string'),
  current: DS.belongsTo('campaign') // One-to-One
});

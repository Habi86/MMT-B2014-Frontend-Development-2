//import Model from 'ember-data/model';
import DS from 'ember-data'

export default Model.extend({
  name: DS.attribute('string')
  currentCampaign: DS.belongsTo('campaign'),// One-to-One
  campaigns: DS.hasMany('campaign')// One-to-Many or Many-to-Many
});

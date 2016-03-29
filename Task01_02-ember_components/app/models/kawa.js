import DS from 'ember-data';

export default DS.Model.extend({
  year: DS.attr(),
  name: DS.attr(),
  ps: DS.attr(),
  comment: DS.attr(),
  image: DS.attr(),
});

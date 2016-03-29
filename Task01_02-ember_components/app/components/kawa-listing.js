import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  actions: {
    toggleBody() {
      this.toggleProperty('isShowingBody');
    }
  }
});

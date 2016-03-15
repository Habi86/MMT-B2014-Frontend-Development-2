import Ember from 'ember';

var kawa = [{
  id: 1,
  year: '2004',
  name: 'Ninja ZX-10R',
  ps: '175 PS',
  comment: 'vü zu teuaaa',
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
}, {
  id: 2,
  year: '2005',
  name: 'Ninja ZX-6R',
  ps: '130 PS',
  comment: 'waaaant <3',
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
}, {
  id: 3,
  year: '2006',
  name: 'ER-6f',
  ps: '192 PS',
  comment: 'Vibrator auf 2 Rädern *-*',
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
}];

export default Ember.Route.extend({
  model() {
    return kawa;
  }
});

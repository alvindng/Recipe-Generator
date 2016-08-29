import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateForm: false,
  actions: {
    showUpdateForm() {
      this.set('showUpdateForm', true);
    },
    update(recipe) {
      var params = {
        name: this.get('name')? this.get('name') : "",
        cuisine: this.get('cuisine')? this.get('cuisine') : "",
        dish: this.get('dish')? this.get('dish') : "",
        time: this.get('time')? this.get('time') : "",
        serves: this.get('serves')? this.get('serves') : "",
        image: this.get('image')? this.get('image') : "",
        ingredients: this.get('ingredients')? this.get('ingredients') : "",
        instructions: this.get('ingredients')? this.get('ingredients') : "",
      };
      this.set('showUpdateForm', false);
      this.sendAction('update', recipe, params);
    }
  }
});

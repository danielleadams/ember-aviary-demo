import Ember from 'ember';

export default Ember.Component.extend({
  url: 'https://d3ho3otgz9xnie.cloudfront.net/image_files/tokyo/2/2f2cb970-d88b-4fa2-bc61-34216cdc9f03.JPG?1427241267',
  image: null,

  didInsertElement: function() {
    this.set('image', this.$('img'));
  },

  logSave: function() {
    Ember.Logger.log('Image saved.');
  },

  actions: {
    onSave: function(imageId, src) {
      this.set('url', src);
      this.logSave();
    }
  }
});

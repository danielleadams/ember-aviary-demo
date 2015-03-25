import ENV from 'aviary-demo/config/environment';

export default {
  name: 'aviary-api-key',
  before: 'aviary-service',
  initialize: function(container, application) {
    window.AVIARY_API_KEY = ENV.AVIARY_API_KEY;
  }
};

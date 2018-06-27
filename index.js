// index.js
const Component = require("can-component");

Component.extend({
  tag: "my-app",
  view: `<h1>{{message}}</h1>`,
  ViewModel: {
    message: {
      default: "Hello World"
    }
  }
});

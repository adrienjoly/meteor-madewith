Package.describe({
  summary: "Shows your pride of being a French Meteor developer, and counts the visitors of your web app to france.meteor.com."
});

Package.on_use(function(api) {
  api.use("livedata", "client");
  api.add_files("meteor-france.jpg", "client", {raw: true});
  api.add_files("index.js", "client");
});

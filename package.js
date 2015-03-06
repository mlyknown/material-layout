Package.describe({
  name: 'noxu:material-layout',
  version: '0.0.1',
  summary: "Material Design layout SASS Framework",
  git: 'https://github.com/noxu-fr/material-layout',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use("fourseven:scss@2.0.0", ["server"]);
  api.imply("fourseven:scss", ["server"]);

  api.addFiles([
    'stylesheets/variables.scss',
    'stylesheets/mixins.scss',
    'stylesheets/structure.scss',
    'stylesheets/layout.scss'
  ], 'server');

  api.addFiles('material-layout.scss', 'server');
});
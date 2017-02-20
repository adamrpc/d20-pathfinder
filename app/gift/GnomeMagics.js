'use strict';

angular.module('d20-pathfinder' ).factory('FeatGnomeMagics', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'gnome_magics' );
  feat.name = 'Gnome magics';
  feat.description = 'Increase the difficulty to escape illusion spells that the creature casts.';
  feat.conditions = [];
  feat.hidden = true;
  feat.bonuses = ['+DC[illusion]+1'];
  return feat;
});

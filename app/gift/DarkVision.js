'use strict';

angular.module('d20-pathfinder' ).factory('FeatDarkVision', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'dark_vision' );
  feat.name = 'Dark vision';
  feat.description = 'Can see in the dark up to 18m.';
  feat.conditions = [];
  feat.hidden = true;
  feat.bonuses = ['+base_vision+18'];
  return feat;
});

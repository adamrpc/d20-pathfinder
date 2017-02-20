'use strict';

angular.module('d20-pathfinder' ).factory('FeatLowLightVision', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'low_light_vision' );
  feat.name = 'Low-light vision';
  feat.description = 'The creature can see twice as far as humans in conditions of dim light.';
  feat.conditions = [];
  feat.hidden = true;
  feat.bonuses = ['light_source*2'];
  return feat;
});

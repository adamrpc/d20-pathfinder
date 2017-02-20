'use strict';

angular.module('d20-pathfinder' ).factory('FeatMultitalented', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'multitalented' );
  feat.name = 'Multitalented';
  feat.description = 'Choose two favored classes at first level.';
  feat.conditions = [];
  feat.hidden = true;
  feat.bonuses = ['+favored_class+1'];
  return feat;
});

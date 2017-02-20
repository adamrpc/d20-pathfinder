'use strict';

angular.module('d20-pathfinder' ).factory('FeatStability', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'stability' );
  feat.name = 'Stability';
  feat.description = 'Resisting against bull rush or trip attempt while standing on the ground.';
  feat.conditions = [];
  feat.hidden = true;
  feat.bonuses = ['+CMD+4'];
  return feat;
});

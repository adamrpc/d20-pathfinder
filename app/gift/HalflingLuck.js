'use strict';

angular.module('d20-pathfinder' ).factory('FeatHalflingLuck', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'halfling_luck' );
  feat.name = 'Halfling luck';
  feat.description = 'Lucky for everything.';
  feat.conditions = [];
  feat.hidden = true;
  feat.bonuses = ['+save[any]+1'];
  return feat;
});

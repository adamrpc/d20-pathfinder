'use strict';

angular.module('d20-pathfinder' ).factory('FeatIntimidating', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'intimidating' );
  feat.name = 'Intimidating';
  feat.description = 'Intimidating due to his fearsome nature.';
  feat.conditions = [];
  feat.hidden = true;
  feat.bonuses = ['+intimidate+2'];
  return feat;
});

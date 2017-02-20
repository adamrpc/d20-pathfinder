'use strict';

angular.module('d20-pathfinder' ).factory('FeatBlood', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'blood' );
  feat.name = 'Blood';
  feat.description = 'The race of the creature.';
  feat.conditions = [];
  feat.hidden = true;
  feat.bonuses = ['race[#]+1'];
  return feat;
});

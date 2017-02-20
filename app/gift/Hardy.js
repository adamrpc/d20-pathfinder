'use strict';

angular.module('d20-pathfinder' ).factory('FeatHardy', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'hardy' );
  feat.name = 'Hardy';
  feat.description = 'Resistant against poison, spells, and spell-like abilities.';
  feat.conditions = [];
  feat.hidden = true;
  feat.bonuses = ['+save[poison]+2', '+save[spell]+2', '+save[spell_like]+2'];
  return feat;
});

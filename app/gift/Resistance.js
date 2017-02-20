'use strict';

angular.module('d20-pathfinder' ).factory('FeatResistance', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'resistance' );
  feat.name = 'Resistance';
  feat.description = 'Resistant against # spells and effects.';
  feat.conditions = [];
  feat.hidden = true;
  feat.bonuses = ['+save[spell(#)]+2', '+save[effect(#)]+2'];
  return feat;
});

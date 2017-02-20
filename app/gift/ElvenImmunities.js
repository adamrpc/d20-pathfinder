'use strict';

angular.module('d20-pathfinder' ).factory('FeatElvenImmunities', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'elven_immunities' );
  feat.name = 'Elven immunities';
  feat.description = 'Immune to magic sleep effects and get a racial bonus against enchantment spells and effects.';
  feat.conditions = [];
  feat.hidden = true;
  feat.bonuses = ['+save[sleep]+2', '+save[spell]+2', '+save[enchant]+2'];
  return feat;
});

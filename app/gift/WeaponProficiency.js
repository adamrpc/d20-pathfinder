'use strict';

angular.module('d20-pathfinder' ).factory('FeatWeaponProficiency', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'weapon_proficiency' );
  feat.name = 'Weapon proficiency';
  feat.description = 'The creature is are trained in the use of #.';
  feat.conditions = [];
  feat.hidden = false;
  feat.bonuses = ['!-atk_weapon[#]-4'];
  return feat;
});

'use strict';

angular.module('d20-pathfinder' ).factory('FeatFreeBardSpell', function( AbstractFeat ) {
  var feat = new AbstractFeat( 'free_bard_spell' );
  feat.name = 'Free bard spell';
  feat.description = 'Can cast # once a day if the creature charisma is greater than 11.';
  feat.conditions = ['stat(cha)>=11'];
  feat.hidden = true;
  feat.bonuses = ['limit(1j)|NLS[#]=level;spellModifier[#]=stat[cha];spell(#)'];
  return feat;
});

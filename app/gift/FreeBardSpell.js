'use strict';

angular.module('d20-pathfinder' ).factory('GiftFreeBardSpell', function( Engine, AbstractGift ) {
  var gift = new AbstractGift( 'free_bard_spell' );
  gift.name = 'Free bard spell';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['limit(1j)|NLS[#]=level;spellModifier[#]=stat[cha];spell(#)'];
  return gift;
});

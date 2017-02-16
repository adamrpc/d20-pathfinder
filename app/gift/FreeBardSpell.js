'use strict';

angular.module('d20-pathfinder' ).factory('GiftFreeBardSpell', function( AbstractGift ) {
  var gift = new AbstractGift( 'free_bard_spell' );
  gift.name = 'Free bard spell';
  gift.description = 'Can cast # once a day if the creature charisma is greater than 11.';
  gift.conditions = ['stat(cha)>=11'];
  gift.hidden = true;
  gift.bonuses = ['limit(1j)|NLS[#]=level;spellModifier[#]=stat[cha];spell(#)'];
  return gift;
});

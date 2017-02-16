'use strict';

angular.module('d20-pathfinder' ).factory('GiftElvenImmunities', function( AbstractGift ) {
  var gift = new AbstractGift( 'elven_immunities' );
  gift.name = 'Elven immunities';
  gift.description = 'Immune to magic sleep effects and get a racial bonus against enchantment spells and effects.';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['+save[sleep]+2', '+save[spell]+2', '+save[enchant]+2'];
  return gift;
});

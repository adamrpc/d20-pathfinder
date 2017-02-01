'use strict';

angular.module('d20-pathfinder' ).factory('GiftElficImmunity', function( Engine, AbstractGift ) {
  var gift = new AbstractGift( 'elfic_immunity' );
  gift.name = 'Elfic immunity';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['+save[sleep]++', '+save[spell]+2', '+save[enchant]+2'];
  return gift;
});

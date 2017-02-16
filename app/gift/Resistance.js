'use strict';

angular.module('d20-pathfinder' ).factory('GiftResistance', function( AbstractGift ) {
  var gift = new AbstractGift( 'resistance' );
  gift.name = 'Resistance';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['+save[spell(#)]+2', '+save[effect(#)]+2'];
  return gift;
});

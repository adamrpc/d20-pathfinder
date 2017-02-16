'use strict';

angular.module('d20-pathfinder' ).factory('GiftGreed', function( AbstractGift ) {
  var gift = new AbstractGift( 'greed' );
  gift.name = 'Greed';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['+estimation[metal]+2', '+estimation[gem]+2'];
  return gift;
});

'use strict';

angular.module('d20-pathfinder' ).factory('GiftSteady', function( AbstractGift ) {
  var gift = new AbstractGift( 'steady' );
  gift.name = 'Steady';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['+DMO+4'];
  return gift;
});

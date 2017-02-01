'use strict';

angular.module('d20-pathfinder' ).factory('GiftSlowlyButSurely', function( AbstractGift ) {
  var gift = new AbstractGift( 'slowly_but_surely' );
  gift.name = 'Slowly but surely';
  gift.description = '';
  gift.hidden = true;
  gift.conditions = [];
  gift.bonuses = ['-base_speed-1', '!-inventory_speed', '!-armor_speed'];
  return gift;
});

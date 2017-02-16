'use strict';

angular.module('d20-pathfinder' ).factory('GiftGoodBalance', function( AbstractGift ) {
  var gift = new AbstractGift( 'good_balance' );
  gift.name = 'Good balance';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['+acrobatics+2', '+climbing+2'];
  return gift;
});

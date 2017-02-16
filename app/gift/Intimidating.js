'use strict';

angular.module('d20-pathfinder' ).factory('GiftIntimidating', function( AbstractGift ) {
  var gift = new AbstractGift( 'intimidating' );
  gift.name = 'Intimidating';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['+intimidation+2'];
  return gift;
});

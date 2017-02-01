'use strict';

angular.module('d20-pathfinder' ).factory('GiftHardy', function( Engine, AbstractGift ) {
  var gift = new AbstractGift( 'hardy' );
  gift.name = 'Hardy';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['+save[poison]+2', '+save[spell]+2', '+save[magic]+2'];
  return gift;
});

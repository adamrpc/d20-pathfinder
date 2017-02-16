'use strict';

angular.module('d20-pathfinder' ).factory('GiftNightVision', function( AbstractGift ) {
  var gift = new AbstractGift( 'night_vision' );
  gift.name = 'Night vision';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['+base_vision+18'];
  return gift;
});

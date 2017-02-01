'use strict';

angular.module('d20-pathfinder' ).factory('GiftDarkVision', function( Engine, AbstractGift ) {
  var gift = new AbstractGift( 'dark_vision' );
  gift.name = 'Dark vision';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['light_source*2'];
  return gift;
});

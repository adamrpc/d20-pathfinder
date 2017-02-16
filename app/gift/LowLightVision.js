'use strict';

angular.module('d20-pathfinder' ).factory('GiftLowLightVision', function( AbstractGift ) {
  var gift = new AbstractGift( 'low_light_vision' );
  gift.name = 'Low-light vision';
  gift.description = 'The creature can see twice as far as humans in conditions of dim light.';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['light_source*2'];
  return gift;
});

'use strict';

angular.module('d20-pathfinder' ).factory('SlowlyButSurely', function( AbstractGift ) {
  var gift = new AbstractGift( 'slowly-but-surely' );
  gift.name = 'Slowly but surely';
  gift.description = '';
  gift.conditions = ['gift(speed!)'];
  gift.bonuses = ['+speed', '!items-speed'];
  return gift;
});

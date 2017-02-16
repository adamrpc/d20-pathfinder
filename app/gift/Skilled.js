'use strict';

angular.module('d20-pathfinder' ).factory('GiftSkilled', function( AbstractGift ) {
  var gift = new AbstractGift( 'skilled' );
  gift.name = 'Skilled';
  gift.description = 'The creature gains an additional skill rank at 1st level and one additional rank whenever it gains a level.';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['+skill_point+1'];
  return gift;
});

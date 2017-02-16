'use strict';

angular.module('d20-pathfinder' ).factory('GiftFearless', function( AbstractGift ) {
  var gift = new AbstractGift( 'fearless' );
  gift.name = 'Fearless';
  gift.description = 'Receive a racial bonus against fear';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['+save[fear]+2'];
  return gift;
});

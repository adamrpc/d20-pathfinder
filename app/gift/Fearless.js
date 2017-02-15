'use strict';

angular.module('d20-pathfinder' ).factory('GiftFearless', function( Engine, AbstractGift ) {
  var gift = new AbstractGift( 'fearless' );
  gift.name = 'Fearless';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['+save[fear]+2'];
  return gift;
});

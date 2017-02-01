'use strict';

angular.module('d20-pathfinder' ).factory('GiftSharpenedSens', function( Engine, AbstractGift ) {
  var gift = new AbstractGift( 'sharpened_sens' );
  gift.name = 'Sharpened sens';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['+perception[any]+2'];
  return gift;
});

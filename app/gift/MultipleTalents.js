'use strict';

angular.module('d20-pathfinder' ).factory('GiftMultipleTalents', function( Engine, AbstractGift ) {
  var gift = new AbstractGift( 'multiple_talents' );
  gift.name = 'Multiple talents';
  gift.description = '';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['+predilection_class+1'];
  return gift;
});

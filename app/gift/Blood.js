'use strict';

angular.module('d20-pathfinder' ).factory('GiftBlood', function( AbstractGift ) {
  var gift = new AbstractGift( 'blood' );
  gift.name = 'Blood';
  gift.description = 'The race of the creature.';
  gift.conditions = [];
  gift.hidden = true;
  gift.bonuses = ['race[#]+1'];
  return gift;
});
